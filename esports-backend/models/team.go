package models

import "gorm.io/gorm"

// Team represents an esports team
type Team struct {
	gorm.Model
	Name     string    `json:"name"`
	Region   string    `json:"region"`
	Country  string    `json:"country"`
	LogoURL  string    `json:"logoUrl"`
	Players  []Player  `gorm:"foreignKey:CurrentTeamID"` // A team has many players
	// Add more fields like: Wins, Losses, TotalPrizeMoney, Active
}