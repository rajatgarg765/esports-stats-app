package models

import "gorm.io/gorm"

type Event struct {
    gorm.Model
    Name        string    `json:"name" gorm:"uniqueIndex:idx_event_name_start_date"`
    Game        string    `json:"game"`
    StartDate   string    `json:"startDate" gorm:"uniqueIndex:idx_event_name_start_date"`
    EndDate     string    `json:"endDate"`
    PrizePool   string    `json:"prizePool"`
    Location    string    `json:"location"`
    WinnerTeamID  uint    `json:"winnerTeamId"`
    WinnerTeam  Team      `gorm:"foreignKey:WinnerTeamID"`
    Description string    `json:"description"`
    ImageURL    string    `json:"imageUrl"` // Add this line
}