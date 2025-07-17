package main

import (
	"log"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"

	"github.com/your-username/esports-backend/config"
	"github.com/your-username/esports-backend/routes"
)

func main() {
	// Load environment variables from .env file
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found, assuming environment variables are set.")
	}

	// Initialize Database Connection
	db := config.ConnectDB()
	if db == nil {
		log.Fatal("Failed to connect to the database. Exiting.")
	}

	// Migrate database schema (create tables if they don't exist)
	config.Migrate(db)

	router := gin.Default()

	// Configure CORS middleware
	router.Use(cors.New(cors.Config{
		// Allow requests from your React frontend's development server
		AllowOrigins:     []string{os.Getenv("FRONTEND_URL")}, // e.g., http://localhost:5173
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	// Set up API routes
	routes.SetupAPIRoutes(router, db) // Pass the DB connection to routes setup

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080" // Default port
	}

	log.Printf("Server is running on :%s", port)
	if err := router.Run(":" + port); err != nil {
		log.Fatalf("Failed to run server: %v", err)
	}
}