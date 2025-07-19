package models

import "gorm.io/gorm"

type Player struct {
    gorm.Model
    Nickname      string `json:"nickname" gorm:"uniqueIndex:idx_player_nickname_game"`
    RealName      string `json:"realName"`
    Game          string `json:"game" gorm:"uniqueIndex:idx_player_nickname_game"`
    Country       string `json:"country"`
    PhotoURL      string `json:"photoUrl"` // ADDED: Field for player photo
    CurrentTeamID uint   `json:"currentTeamId"`
    CurrentTeam   Team   `gorm:"foreignKey:CurrentTeamID"`
    // Add any other specific stats needed for player.jpg design (e.g., KDA, ADR, HS%, Assists)
}