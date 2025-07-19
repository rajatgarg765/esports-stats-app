// esports-backend/handlers/match_handler.go (New file if it doesn't exist, otherwise update)

package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/rajatgarg765/esports-backend/mocks" // Import your mocks
)

// GetMatches fetches all matches from loaded JSON
func GetMatches(c *gin.Context) {
	totalMatches := len(mocks.MockMatches)
	pageSize := 10 // Example page size
	page := 1      // Example page number

	c.JSON(http.StatusOK, gin.H{
		"matches":  mocks.MockMatches,
		"total":    totalMatches,
		"page":     page,
		"pageSize": pageSize,
	})
}

// GetMatchByID fetches a single match by ID from loaded JSON
func GetMatchByID(c *gin.Context) {
	id := c.Param("id") // Get the 'id' parameter from the URL

	for _, match := range mocks.MockMatches {
		if match.ID == id {
			c.JSON(http.StatusOK, match)
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"error": "Match not found"})
}