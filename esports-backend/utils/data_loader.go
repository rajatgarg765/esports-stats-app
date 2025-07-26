// esports-backend/utils/data_loader.go

package utils

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"path/filepath"

	"github.com/rajatgarg765/esports-backend/mocks" // Import your mocks package
)

const mockDataDir = "mock_data" // Directory where your JSON files are located

// LoadMockData loads all JSON mock data into the mocks package variables
func LoadMockData() {
	// Load Events
	if err := loadJSON(filepath.Join(mockDataDir, "events.json"), &mocks.MockEvents); err != nil {
		log.Fatalf("Failed to load events.json: %v", err)
	}
	log.Println("Loaded events data.")

	// Load Teams
	if err := loadJSON(filepath.Join(mockDataDir, "teams.json"), &mocks.MockTeams); err != nil {
		log.Fatalf("Failed to load teams.json: %v", err)
	}
	log.Println("Loaded teams data.")

	// Load Players
	if err := loadJSON(filepath.Join(mockDataDir, "players.json"), &mocks.MockPlayers); err != nil {
		log.Fatalf("Failed to load players.json: %v", err)
	}
	log.Println("Loaded players data.")

	// Load Matches
	if err := loadJSON(filepath.Join(mockDataDir, "matches.json"), &mocks.MockMatches); err != nil {
		log.Fatalf("Failed to load matches.json: %v", err)
	}
	log.Println("Loaded matches data.")

	// NEW: Load News Articles
	if err := loadJSON(filepath.Join(mockDataDir, "news.json"), &mocks.MockNewsArticles); err != nil {
		log.Fatalf("Failed to load news.json: %v", err)
	}
	log.Println("Loaded news data.")

	// NEW: Load Homepage Hero Data
	if err := loadJSON(filepath.Join(mockDataDir, "homepage_hero.json"), &mocks.MockHomepageHeroData); err != nil {
		log.Fatalf("Failed to load homepage_hero.json: %v", err)
	}
	log.Println("Loaded homepage hero data.")

	// NEW: Load Homepage Quick Stats
	if err := loadJSON(filepath.Join(mockDataDir, "homepage_quick_stats.json"), &mocks.MockHomepageQuickStats); err != nil {
		log.Fatalf("Failed to load homepage_quick_stats.json: %v", err)
	}
	log.Println("Loaded homepage quick stats data.")

	// NEW: Load User Profile Image
	if err := loadJSON(filepath.Join(mockDataDir, "user_profile.json"), &mocks.MockUserProfileImage); err != nil {
		log.Fatalf("Failed to load user_profile.json: %v", err)
	}
	log.Println("Loaded user profile image data.")
}

// loadJSON is a generic helper function to read and unmarshal a JSON file
func loadJSON(filePath string, target interface{}) error {
	data, err := ioutil.ReadFile(filePath)
	if err != nil {
		return err
	}
	return json.Unmarshal(data, target)
}