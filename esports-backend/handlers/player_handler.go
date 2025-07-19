// esports-backend/handlers/player_handler.go (Updated)

package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/rajatgarg765/esports-backend/mocks" // Import your mocks
)

// GetPlayers fetches all players from loaded JSON
func GetPlayers(c *gin.Context) {
	totalPlayers := len(mocks.MockPlayers)
	pageSize := 10 // Example page size
	page := 1      // Example page number

	c.JSON(http.StatusOK, gin.H{
		"players":  mocks.MockPlayers,
		"total":    totalPlayers,
		"page":     page,
		"pageSize": pageSize,
	})
}

// GetPlayerByID fetches a single player by ID from loaded JSON
func GetPlayerByID(c *gin.Context) {
	id := c.Param("id") // Get the 'id' parameter from the URL

	for _, player := range mocks.MockPlayers {
		if player.ID == id {
			c.JSON(http.StatusOK, player)
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"error": "Player not found"})
}