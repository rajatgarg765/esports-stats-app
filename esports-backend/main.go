// esports-backend/main.go (Updated)

package main

import (
	"log"
	"os"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"

	"github.com/rajatgarg765/esports-backend/config"
	"github.com/rajatgarg765/esports-backend/routes"
	"github.com/rajatgarg765/esports-backend/data_ingestion" // Added import (keep this if still needed for DB ingestion)
	"github.com/rajatgarg765/esports-backend/utils"         // NEW: Import utils package
)

func main() {
	// Load environment variables from .env file
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found, assuming environment variables are set.")
	}

	// --- NEW: Load mock data from JSON files ---
	utils.LoadMockData()
	// --- END NEW SECTION ---

	// Initialize Database Connection (can be kept or removed if purely mock data based)
	db := config.ConnectDB()
	if db == nil {
		log.Println("Skipping database connection as it failed or is not needed for mock data testing.")
	} else {
		// Migrate database schema
		config.Migrate(db)

		// TEMPORARY: Trigger data ingestion on startup for testing
		// REMOVE THIS LINE OR REPLACE WITH A PROPER SCHEDULED JOB IN PRODUCTION!
		if err := data_ingestion.IngestPUBGEvents(db); err != nil {
			log.Printf("Initial data ingestion failed: %v", err)
		} else {
			log.Println("Initial data ingestion completed successfully.")
		}
		// --- END TEMPORARY SECTION ---
	}


	router := gin.Default()

	// Configure CORS middleware
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{os.Getenv("FRONTEND_URL")},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	// Set up API routes
	routes.SetupAPIRoutes(router, db) // Pass the DB connection if you keep DB interactions

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080" // Default port
	}

	log.Printf("Server is running on :%s", port)
	if err := router.Run(":" + port); err != nil {
		log.Fatalf("Failed to run server: %v", err)
	}
}