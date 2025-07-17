package models

import "gorm.io/gorm"

// Player represents an esports player
type Player struct {
	gorm.Model
	Nickname      string `json:"nickname"`
	RealName      string `json:"realName"`
	Game          string `json:"game"` // e.g., "PUBG Mobile"
	Country       string `json:"country"`
	PhotoURL      string `json:"photoUrl"`
	CurrentTeamID uint   `json:"currentTeamId"` // Foreign key to Team
	CurrentTeam   Team   `gorm:"foreignKey:CurrentTeamID"` // GORM association
	// Add more fields like: Role, KDA (historical if possible), TotalEarnings
}