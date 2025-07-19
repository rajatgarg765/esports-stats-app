package data_ingestion

import (
	"log"

	"github.com/rajatgarg765/esports-backend/models"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

// IngestPUBGEvents simulates fetching and saving a few Indian PUBG Mobile events.
// In a real application, this would involve complex API calls, parsing, and error handling.
func IngestPUBGEvents(db *gorm.DB) error {
	log.Println("Starting simulated Indian PUBG Mobile events ingestion...")

	// --- Create Dummy Teams ---
	teams := []models.Team{
		{Name: "Soul", Region: "South Asia", Country: "India", LogoURL: "https://placehold.co/50x50/ADD8E6/000000?text=SOUL"},
		{Name: "GodLike Esports", Region: "South Asia", Country: "India", LogoURL: "https://placehold.co/50x50/90EE90/000000?text=GL"},
		{Name: "TSM-Entity", Region: "South Asia", Country: "India", LogoURL: "https://placehold.co/50x50/FFB6C1/000000?text=TSM"},
		{Name: "Fnatic India", Region: "South Asia", Country: "India", LogoURL: "https://placehold.co/50x50/DDA0DD/000000?text=FNC"},
		{Name: "Orange Rock", Region: "South Asia", Country: "India", LogoURL: "https://placehold.co/50x50/F0E68C/000000?text=OR"},
	}

	for i := range teams {
		if err := db.Clauses(clause.OnConflict{
			Columns:   []clause.Column{{Name: "name"}},
			DoUpdates: clause.Assignments(map[string]interface{}{"region": teams[i].Region, "country": teams[i].Country, "logo_url": teams[i].LogoURL}),
		}).Create(&teams[i]).Error; err != nil {
			log.Printf("Failed to upsert team %s: %v", teams[i].Name, err)
		} else {
			log.Printf("Upserted team: %s (ID: %d)", teams[i].Name, teams[i].ID)
		}
	}

	// --- Create Dummy Players (linked to teams) ---
	players := []models.Player{
		{Nickname: "Mortal", RealName: "Naman Mathur", Game: "PUBG Mobile", Country: "India", PhotoURL: "https://placehold.co/50x50/FFD700/000000?text=M"},
		{Nickname: "Jonathan", RealName: "Jonathan Amaral", Game: "PUBG Mobile", Country: "India", PhotoURL: "https://placehold.co/50x50/C0C0C0/000000?text=J"},
		{Nickname: "Neyoo", RealName: "Vivek A", Game: "PUBG Mobile", Country: "India", PhotoURL: "https://placehold.co/50x50/ADD8E6/000000?text=N"},
		{Nickname: "ScoutOP", RealName: "Tanmay Singh", Game: "PUBG Mobile", Country: "India", PhotoURL: "https://placehold.co/50x50/90EE90/000000?text=S"},
		{Nickname: "Daljit", RealName: "Daljit Singh", Game: "PUBG Mobile", Country: "India", PhotoURL: "https://placehold.co/50x50/FFB6C1/000000?text=D"},
	}

	// Assign players to teams (simple assignment for demonstration)
	// In a real scenario, this would be based on historical rosters
	if len(teams) >= 5 {
		players[0].CurrentTeamID = teams[0].ID // Mortal -> Soul
		players[1].CurrentTeamID = teams[1].ID // Jonathan -> GodLike
		players[2].CurrentTeamID = teams[1].ID // Neyoo -> GodLike
		players[3].CurrentTeamID = teams[3].ID // ScoutOP -> Fnatic India
		players[4].CurrentTeamID = teams[4].ID // Daljit -> Orange Rock
	}


	for i := range players {
		if err := db.Clauses(clause.OnConflict{
			Columns:   []clause.Column{{Name: "nickname"}, {Name: "game"}},
			DoUpdates: clause.Assignments(map[string]interface{}{
				"real_name": players[i].RealName,
				"country": players[i].Country,
				"photo_url": players[i].PhotoURL,
				"current_team_id": players[i].CurrentTeamID,
			}),
		}).Create(&players[i]).Error; err != nil {
			log.Printf("Failed to upsert player %s: %v", players[i].Nickname, err)
		} else {
			log.Printf("Upserted player: %s (ID: %d)", players[i].Nickname, players[i].ID)
		}
	}


	// --- Create Dummy Indian PUBG Mobile Events ---
	events := []models.Event{
		{
			Name:        "PMCO India Spring Split 2020",
			Game:        "PUBG Mobile",
			StartDate:   "2020-02-01",
			EndDate:     "2020-03-22",
			PrizePool:   "$100,000",
			Location:    "Online (India)",
			Description: "First major PUBG Mobile tournament in India for 2020.",
			WinnerTeam:  teams[0], // Soul
		},
		{
			Name:        "PMIS 2020 (PUBG Mobile India Series)",
			Game:        "PUBG Mobile",
			StartDate:   "2020-06-17",
			EndDate:     "2020-07-05",
			PrizePool:   "$65,000",
			Location:    "Online (India)",
			Description: "Official Indian series with top teams competing.",
			WinnerTeam:  teams[1], // GodLike Esports
		},
		{
			Name:        "PMPL South Asia Season 1",
			Game:        "PUBG Mobile",
			StartDate:   "2020-03-19",
			EndDate:     "2020-05-17",
			PrizePool:   "$200,000",
			Location:    "Online (South Asia)",
			Description: "Regional league for South Asian teams, including India.",
			WinnerTeam:  teams[2], // TSM-Entity
		},
		{
			Name:        "PUBG Mobile Pro League SA S2",
			Game:        "PUBG Mobile",
			StartDate:   "2020-10-19",
			EndDate:     "2020-11-15",
			PrizePool:   "$120,000",
			Location:    "Online (South Asia)",
			Description: "Second season of the PMPL for South Asia.",
			WinnerTeam:  teams[4], // Orange Rock
		},
		{
			Name:        "Battlegrounds Mobile India Series 2021",
			Game:        "BGMI", // Post-ban, specific to India
			StartDate:   "2021-07-19",
			EndDate:     "2021-10-17",
			PrizePool:   "$135,000",
			Location:    "Online (India)",
			Description: "The first official tournament for BGMI after its launch.",
			WinnerTeam:  teams[1], // GodLike Esports (example, actual winner might differ)
		},
	}

	for i := range events {
		// Ensure WinnerTeam is fetched from DB to get its ID
		var winnerTeam models.Team
		if err := db.Where("name = ?", events[i].WinnerTeam.Name).First(&winnerTeam).Error; err != nil {
			log.Printf("Winner team %s not found for event %s, skipping winner assignment: %v", events[i].WinnerTeam.Name, events[i].Name, err)
		} else {
			events[i].WinnerTeamID = winnerTeam.ID
		}

		if err := db.Clauses(clause.OnConflict{
			Columns:   []clause.Column{{Name: "name"}, {Name: "start_date"}},
			DoUpdates: clause.Assignments(map[string]interface{}{
				"end_date": events[i].EndDate,
				"prize_pool": events[i].PrizePool,
				"location": events[i].Location,
				"winner_team_id": events[i].WinnerTeamID,
				"description": events[i].Description,
			}),
		}).Create(&events[i]).Error; err != nil {
			log.Printf("Failed to upsert event %s: %v", events[i].Name, err)
		} else {
			log.Printf("Upserted event: %s (ID: %d)", events[i].Name, events[i].ID)
		}
	}

	log.Println("Simulated Indian PUBG Mobile events ingestion completed.")
	return nil
}