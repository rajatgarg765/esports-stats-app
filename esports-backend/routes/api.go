package routes

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"

	"github.com/your-username/esports-backend/handlers"
)

// SetupAPIRoutes configures all API endpoints
func SetupAPIRoutes(router *gin.Engine, db *gorm.DB) {
	// Middleware to inject DB into context
	router.Use(func(c *gin.Context) {
		c.Set("db", db)
		c.Next()
	})

	api := router.Group("/api/v1")
	{
		// Event Routes
		api.GET("/events", handlers.GetEvents)
		api.GET("/events/:id", handlers.GetEventByID)

		// Team Routes (implement handlers/team_handler.go later)
		// api.GET("/teams", handlers.GetTeams)
		// api.GET("/teams/:id", handlers.GetTeamByID)

		// Player Routes (implement handlers/player_handler.go later)
		// api.GET("/players", handlers.GetPlayers)
		// api.GET("/players/:id", handlers.GetPlayerByID)

		// Data Ingestion Routes (for manual trigger or testing, production will be scheduled)
		// api.POST("/ingest/pubg-events", handlers.IngestPUBGEvents)
	}
}