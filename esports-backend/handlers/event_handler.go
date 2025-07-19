// esports-backend/handlers/event_handler.go (Updated)

package handlers

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/rajatgarg765/esports-backend/mocks" // Import your mocks
)

// GetEvents returns all events with pagination metadata from loaded JSON
func GetEvents(c *gin.Context) {
	totalEvents := len(mocks.MockEvents)
	pageSize := 10 // Example page size
	page := 1      // Example page number

	// Adapt data to the desired response format
	var responseEvents []struct {
		ID        int    `json:"id"`
		Name      string `json:"name"`
		Overview  string `json:"overview"`
		Status    string `json:"status"`
		Date      string `json:"date"`
		Region    string `json:"region"` // Assuming 'Region' can be derived or added to JSON
	}

	for _, event := range mocks.MockEvents {
		responseEvents = append(responseEvents, struct {
			ID        int    `json:"id"`
			Name      string `json:"name"`
			Overview  string `json:"overview"`
			Status    string `json:"status"`
			Date      string `json:"date"`
			Region    string `json:"region"`
		}{
			ID:       event.ID,
			Name:     event.Name,
			Overview: event.Overview,
			Status:   event.Status,
			Date:     event.Date,
			Region:   "Global", // Placeholder, add to JSON if specific
		})
	}

	c.JSON(http.StatusOK, gin.H{
		"events":   responseEvents,
		"total":    totalEvents,
		"page":     page,
		"pageSize": pageSize,
	})
}

// GetRecentEvents returns the 3 most recent events from loaded JSON
func GetRecentEvents(c *gin.Context) {
	recentEvents := mocks.MockEvents
	if len(recentEvents) > 3 {
		recentEvents = recentEvents[:3]
	}
	// Similar adaptation for response format if needed for recent events
	var responseEvents []struct {
		ID        int    `json:"id"`
		Name      string `json:"name"`
		Overview  string `json:"overview"`
		Status    string `json:"status"`
		Date      string `json:"date"`
		Region    string `json:"region"`
	}

	for _, event := range recentEvents {
		responseEvents = append(responseEvents, struct {
			ID        int    `json:"id"`
			Name      string `json:"name"`
			Overview  string `json:"overview"`
			Status    string `json:"status"`
			Date      string `json:"date"`
			Region    string `json:"region"`
		}{
			ID:       event.ID,
			Name:     event.Name,
			Overview: event.Overview,
			Status:   event.Status,
			Date:     event.Date,
			Region:   "Global", // Placeholder
		})
	}

	c.JSON(http.StatusOK, gin.H{
		"events": responseEvents,
	})
}

// GetEventByID returns a specific event by ID with detailed information from loaded JSON
func GetEventByID(c *gin.Context) {
	idParam := c.Param("id")
	eventID, err := strconv.Atoi(idParam) // Convert string ID from URL to int
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid event ID"})
		return
	}

	for _, event := range mocks.MockEvents {
		if event.ID == eventID {
			// Return the full event details from the loaded JSON
			c.JSON(http.StatusOK, event)
			return
		}
	}

	c.JSON(http.StatusNotFound, gin.H{"error": "Event not found"})
}