package models

import "gorm.io/gorm"

// Event represents an esports event
type Event struct {
	gorm.Model
	Name        string    `json:"name"`
	Game        string    `json:"game"` // e.g., "PUBG Mobile"
	StartDate   string    `json:"startDate"` // Using string for simplicity, consider time.Time
	EndDate     string    `json:"endDate"`
	PrizePool   string    `json:"prizePool"`
	Location    string    `json:"location"`
	WinnerTeamID  uint    `json:"winnerTeamId"` // Foreign key to Team
	WinnerTeam  Team      `gorm:"foreignKey:WinnerTeamID"` // GORM association
	Description string    `json:"description"`
	// Add more fields as needed: e.g., EventStatus (Upcoming, Completed), OfficialLink
}

// You might also need a join table if an event has many teams and teams participate in many events
// For MVP, we'll keep it simple and assume WinnerTeam is the main link.