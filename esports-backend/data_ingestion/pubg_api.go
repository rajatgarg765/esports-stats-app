package data_ingestion

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/your-username/esports-backend/config"
	"github.com/your-username/esports-backend/models"
)

// PUBG API base URL
const pubgAPIBaseURL = "https://api.pubg.com"

// IngestPUBGEvents fetches data from PUBG API and stores it
func IngestPUBGEvents() error {
	apiKey := config.GetEnv("PUBG_API_KEY")
	if apiKey == "" {
		return fmt.Errorf("PUBG_API_KEY not set in environment variables")
	}

	// Example: Fetch seasons (you'd need to go deeper into matches, events)
	// This is a simplified example. Real ingestion will be more complex.
	req, err := http.NewRequest("GET", fmt.Sprintf("%s/shards/pc-eu/seasons", pubgAPIBaseURL), nil) // Replace pc-eu with relevant shard
	if err != nil {
		return fmt.Errorf("failed to create request: %w", err)
	}

	req.Header.Add("Authorization", "Bearer "+apiKey)
	req.Header.Add("Accept", "application/vnd.api+json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return fmt.Errorf("failed to make request to PUBG API: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		bodyBytes, _ := ioutil.ReadAll(resp.Body)
		return fmt.Errorf("PUBG API returned non-200 status: %d - %s", resp.StatusCode, string(bodyBytes))
	}

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return fmt.Errorf("failed to read response body: %w", err)
	}

	// This part needs to parse the actual PUBG API response and map it to your models.
	// This is highly simplified. You'll need to study the PUBG API documentation.
	var result map[string]interface{}
	if err := json.Unmarshal(body, &result); err != nil {
		return fmt.Errorf("failed to unmarshal PUBG API response: %w", err)
	}

	log.Printf("Successfully fetched data from PUBG API. First few bytes: %s", string(body[:500])) // Log first 500 bytes for now

	// TODO: Parse 'result' into your models.Event, models.Team, models.Player and save to DB
	// For now, let's just simulate saving
	db := config.DB // Assuming DB is globally accessible or passed in
	if db == nil {
		return fmt.Errorf("database connection not established for ingestion")
	}

	// Example: Create a dummy event for now
	dummyEvent := models.Event{
		Name:      "Dummy PUBG Global Championship",
		Game:      "PUBG Mobile",
		StartDate: "2024-11-01",
		EndDate:   "2024-11-15",
		PrizePool: "$2,000,000",
		Location:  "Online",
		Description: "A simulated event for testing purposes.",
	}
	if err := db.Create(&dummyEvent).Error; err != nil {
		log.Printf("Failed to create dummy event: %v", err)
		return fmt.Errorf("failed to save dummy event: %w", err)
	}
	log.Println("Dummy event saved to DB.")

	return nil
}