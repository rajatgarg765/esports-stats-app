package models

import "gorm.io/gorm"

// Player represents an esports player
type Player struct {
	gorm.Model
	Nickname      string `json:"nickname" gorm:"uniqueIndex:idx_player_nickname_game"` // Composite unique index
	RealName      string `json:"realName"`
	Game          string `json:"game" gorm:"uniqueIndex:idx_player_nickname_game"` // Part of composite unique index
	Country       string `json:"country"`
	PhotoURL      string `json:"photoUrl"`
	CurrentTeamID uint   `json:"currentTeamId"`
	CurrentTeam   Team   `gorm:"foreignKey:CurrentTeamID"`
}