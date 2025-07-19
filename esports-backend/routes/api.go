package routes

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"

	"github.com/rajatgarg765/esports-backend/handlers"
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

		// Team Routes
		api.GET("/teams", handlers.GetTeams)
		api.GET("/teams/:id", handlers.GetTeamByID)
		// api.POST("/teams", handlers.CreateTeam)    // Uncomment when you implement CreateTeam
		// api.PUT("/teams/:id", handlers.UpdateTeam)  // Uncomment when you implement UpdateTeam
		// api.DELETE("/teams/:id", handlers.DeleteTeam) // Uncomment when you implement DeleteTeam

		// Player Routes
		api.GET("/players", handlers.GetPlayers)
		api.GET("/players/:id", handlers.GetPlayerByID)
		// api.POST("/players", handlers.CreatePlayer)    // Uncomment when you implement CreatePlayer
		// api.PUT("/players/:id", handlers.UpdatePlayer)  // Uncomment when you implement UpdatePlayer
		// api.DELETE("/players/:id", handlers.DeletePlayer) // Uncomment when you implement DeletePlayer

		// Data Ingestion Routes (for manual trigger or testing, production will be scheduled)
		// api.POST("/ingest/pubg-events", handlers.IngestPUBGEvents)
	}
}