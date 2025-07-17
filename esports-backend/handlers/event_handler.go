package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"

	"github.com/your-username/esports-backend/models"
)

// GetEvents fetches all events
func GetEvents(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)
	var events []models.Event
	// Preload WinnerTeam to fetch associated team data
	if err := db.Preload("WinnerTeam").Find(&events).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch events"})
		return
	}
	c.JSON(http.StatusOK, events)
}

// GetEventByID fetches a single event by ID
func GetEventByID(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)
	id := c.Param("id")
	var event models.Event
	// Preload WinnerTeam for a single event
	if err := db.Preload("WinnerTeam").First(&event, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Event not found"})
		return
	}
	c.JSON(http.StatusOK, event)
}

// Add more CRUD operations later for events (Create, Update, Delete)