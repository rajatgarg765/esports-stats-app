package handlers

import (
	"net/http" // Import for HTTP status codes
	"github.com/gin-gonic/gin" // Import the Gin framework
	"gorm.io/gorm" // Import GORM for database interaction
	"github.com/rajatgarg765/esports-backend/models" // Import your team model and any related models like Player
)

// GetTeams fetches all teams, optionally preloading their current players
func GetTeams(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)
	var teams []models.Team

	// Preload the Players associated with each team.
	// This ensures that when you fetch a team, its current players are also loaded.
	if err := db.Preload("Players").Find(&teams).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch teams"})
		return
	}
	c.JSON(http.StatusOK, teams)
}

// GetTeamByID fetches a single team by ID, optionally preloading its current players
func GetTeamByID(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)
	id := c.Param("id") // Get the 'id' parameter from the URL
	var team models.Team

	// Preload the Players associated with this specific team.
	if err := db.Preload("Players").First(&team, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Team not found"})
		return
	}
	c.JSON(http.StatusOK, team)
}

// You can add more CRUD (Create, Update, Delete) operations here later:

/*
// CreateTeam creates a new team
func CreateTeam(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)
	var team models.Team
	if err := c.ShouldBindJSON(&team); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := db.Create(&team).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create team"})
		return
	}
	c.JSON(http.StatusCreated, team)
}

// UpdateTeam updates an existing team
func UpdateTeam(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)
	id := c.Param("id")
	var team models.Team
	if err := db.First(&team, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Team not found"})
		return
	}
	if err := c.ShouldBindJSON(&team); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := db.Save(&team).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update team"})
		return
	}
	c.JSON(http.StatusOK, team)
}

// DeleteTeam deletes a team by ID
func DeleteTeam(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)
	id := c.Param("id")
	var team models.Team
	if err := db.First(&team, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Team not found"})
		return
	}
	if err := db.Delete(&team).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete team"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Team deleted successfully"})
}
*/