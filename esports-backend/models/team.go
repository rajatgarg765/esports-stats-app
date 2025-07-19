package models

import "gorm.io/gorm"

type Team struct {
    gorm.Model
    Name     string    `json:"name" gorm:"unique"`
    Region   string    `json:"region"`
    Country  string    `json:"country"`
    LogoURL  string    `json:"logoUrl"` // ADDED: Field for team logo
    Players  []Player  `gorm:"foreignKey:CurrentTeamID"`
}