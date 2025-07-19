package models

import "gorm.io/gorm"

type Team struct {
	gorm.Model
	Name        string   `json:"name" gorm:"unique"`
	Description string   `json:"description"`
	Region      string   `json:"region"`
	Country     string   `json:"country"`
	LogoURL     string   `json:"logoUrl"`
	Ranking     int      `json:"ranking"`
	Players     []Player `gorm:"foreignKey:CurrentTeamID"`
}
