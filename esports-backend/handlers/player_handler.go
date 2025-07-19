package handlers

import (
	"net/http" // Import for HTTP status codes
	"github.com/gin-gonic/gin" // Import the Gin framework
	"gorm.io/gorm" // Import GORM for database interaction
	"github.com/rajatgarg765/esports-backend/models" // Import your player model
)

// GetPlayers fetches all players
func GetPlayers(c *gin.Context) {
	// Retrieve the database connection from the Gin context
	db := c.MustGet("db").(*gorm.DB)
	var players []models.Player // Declare a slice to hold player data

	// Find all players in the database
	if err := db.Find(&players).Error; err != nil {
		// If an error occurs during database query, return a 500 Internal Server Error
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch players"})
		return
	}
	// Return the players as JSON with a 200 OK status
	c.JSON(http.StatusOK, players)
}

// GetPlayerByID fetches a single player by ID
func GetPlayerByID(c *gin.Context) {
	// Retrieve the database connection from the Gin context
	db := c.MustGet("db").(*gorm.DB)
	id := c.Param("id") // Get the 'id' parameter from the URL
	var player models.Player // Declare a variable to hold single player data

	// Find the first player with the given ID
	if err := db.First(&player, id).Error; err != nil {
		// If player is not found, return a 404 Not Found status
		c.JSON(http.StatusNotFound, gin.H{"error": "Player not found"})
		return
	}
	// Return the player as JSON with a 200 OK status
	c.JSON(http.StatusOK, player)
}

// You can add more CRUD (Create, Update, Delete) operations here later:

/*
// CreatePlayer creates a new player
func CreatePlayer(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)
	var player models.Player
	if err := c.ShouldBindJSON(&player); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := db.Create(&player).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create player"})
		return
	}
	c.JSON(http.StatusCreated, player)
}

// UpdatePlayer updates an existing player
func UpdatePlayer(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)
	id := c.Param("id")
	var player models.Player
	if err := db.First(&player, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Player not found"})
		return
	}
	if err := c.ShouldBindJSON(&player); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := db.Save(&player).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update player"})
		return
	}
	c.JSON(http.StatusOK, player)
}

// DeletePlayer deletes a player by ID
func DeletePlayer(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)
	id := c.Param("id")
	var player models.Player
	if err := db.First(&player, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Player not found"})
		return
	}
	if err := db.Delete(&player).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete player"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Player deleted successfully"})
}
*/