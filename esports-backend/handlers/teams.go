// esports-backend/handlers/teams.go (Updated)

package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/rajatgarg765/esports-backend/mocks" // Import your mocks
)

// ListAllTeams returns all teams with pagination metadata from loaded JSON
func ListAllTeams(c *gin.Context) {
	totalTeams := len(mocks.MockTeams)
	pageSize := 10 // Example page size
	page := 1      // Example page number

	// Adapt data to the desired response format
	var responseTeams []struct {
		ID          string `json:"id"`
		Name        string `json:"name"`
		Region      string `json:"region"`
		Ranking     int    `json:"ranking"`
		LogoURL     string `json:"logo_url"`    // Assuming teams.json has a logoUrl field
		Description string `json:"description"` // Assuming teams.json has a description field
	}

	for _, team := range mocks.MockTeams {
		responseTeams = append(responseTeams, struct {
			ID          string `json:"id"`
			Name        string `json:"name"`
			Region      string `json:"region"`
			Ranking     int    `json:"ranking"`
			LogoURL     string `json:"logo_url"`
			Description string `json:"description"`
		}{
			ID:          team.ID,
			Name:        team.Name,
			Region:      team.Region,
			Ranking:     team.Ranking,
			LogoURL:     "http://example.com/teamlogo.jpg", // Placeholder if not in teams.json
			Description: "A competitive esports team.",      // Placeholder if not in teams.json
		})
	}

	c.JSON(http.StatusOK, gin.H{
		"teams":    responseTeams,
		"total":    totalTeams,
		"page":     page,
		"pageSize": pageSize,
	})
}

// ListPopularTeams returns the top 6 teams by ranking from loaded JSON
func ListPopularTeams(c *gin.Context) {
	popularTeams := mocks.MockTeams
	if len(popularTeams) > 6 {
		popularTeams = popularTeams[:6]
	}
	// Similar adaptation for response format if needed for popular teams
	var responseTeams []struct {
		ID          string `json:"id"`
		Name        string `json:"name"`
		Region      string `json:"region"`
		Ranking     int    `json:"ranking"`
		LogoURL     string `json:"logo_url"`
		Description string `json:"description"`
	}

	for _, team := range popularTeams {
		responseTeams = append(responseTeams, struct {
			ID          string `json:"id"`
			Name        string `json:"name"`
			Region      string `json:"region"`
			Ranking     int    `json:"ranking"`
			LogoURL     string `json:"logo_url"`
			Description string `json:"description"`
		}{
			ID:          team.ID,
			Name:        team.Name,
			Region:      team.Region,
			Ranking:     team.Ranking,
			LogoURL:     team.LogoURL, // Placeholder
			Description: team.Description,      // Placeholder
		})
	}

	c.JSON(http.StatusOK, gin.H{
		"teams": responseTeams,
	})
}

// FindTeamByID returns a specific team by ID from loaded JSON
func FindTeamByID(c *gin.Context) {
	id := c.Param("id")

	for _, team := range mocks.MockTeams {
		if team.ID == id {
			c.JSON(http.StatusOK, team) // Return the full team details including roster
			return
		}
	}

	c.JSON(http.StatusNotFound, gin.H{"error": "Team not found"})
}