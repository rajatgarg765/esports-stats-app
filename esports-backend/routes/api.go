// esports-backend/routes/api.go

package routes

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"

	"github.com/rajatgarg765/esports-backend/handlers"
)

// SetupAPIRoutes configures all API endpoints
func SetupAPIRoutes(router *gin.Engine, db *gorm.DB) {
	router.Use(func(c *gin.Context) {
		c.Set("db", db)
		c.Next()
	})

	api := router.Group("/api/v1")
	{
		// Event Routes
		api.GET("/events/recent", handlers.GetRecentEvents)
		api.GET("/events", handlers.GetEvents)
		api.GET("/events/:id", handlers.GetEventByID)

		// Team Routes
		api.GET("/teams/popular", handlers.ListPopularTeams)
		api.GET("/teams", handlers.ListAllTeams)
		api.GET("/teams/:id", handlers.FindTeamByID)

		// Player Routes
		api.GET("/players", handlers.GetPlayers)
		api.GET("/players/:id", handlers.GetPlayerByID)

		// Match Routes
		api.GET("/matches", handlers.GetMatches)
		api.GET("/matches/:id", handlers.GetMatchByID)

		// NEW: News API
		api.GET("/news", handlers.GetNewsArticles)

		// NEW: Homepage Hero Section Data API
		api.GET("/homepage/hero", handlers.GetHomepageHeroData)

		// NEW: Homepage Quick Stats API
		api.GET("/stats/homepage", handlers.GetHomepageQuickStats)

		// NEW: User Profile Image API
		api.GET("/user/profile", handlers.GetUserProfileImage)
	}
}