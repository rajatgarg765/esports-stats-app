// esports-backend/handlers/misc_handler.go

package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/rajatgarg765/esports-backend/mocks"
)

// GetNewsArticles returns a list of news articles
func GetNewsArticles(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"news": mocks.MockNewsArticles})
}

// GetHomepageHeroData returns data for the homepage hero section
func GetHomepageHeroData(c *gin.Context) {
	c.JSON(http.StatusOK, mocks.MockHomepageHeroData)
}

// GetHomepageQuickStats returns aggregate statistics for the homepage
func GetHomepageQuickStats(c *gin.Context) {
	c.JSON(http.StatusOK, mocks.MockHomepageQuickStats)
}

// GetUserProfileImage returns the profile image URL for a user
func GetUserProfileImage(c *gin.Context) {
	c.JSON(http.StatusOK, mocks.MockUserProfileImage)
}