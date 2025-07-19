// esports-backend/mocks/data.go (Updated)

package mocks

// Event represents the structure of an event from events.json
type Event struct {
	ID          int    `json:"id"`
	Name        string `json:"name"`
	Overview    string `json:"overview"`
	ImageURL    string `json:"imageUrl"`
	Date        string `json:"date"` // Using "date" as provided in JSON
	EndDate     string `json:"endDate"`
	Status      string `json:"status"`
	Participants []struct {
		TeamID    string `json:"team_id"`
		TeamName  string `json:"team_name"`
		Position  int    `json:"position"`
		PrizeWon  int    `json:"prize_won"`
	} `json:"participants,omitempty"`
	Matches []struct {
		ID         string `json:"id"`
		Team1ID    string `json:"team1_id"`
		Team2ID    string `json:"team2_id"`
		Team1Name  string `json:"team1_name"`
		Team2Name  string `json:"team2_name"`
		Score      string `json:"score"`
		Status     string `json:"status"`
		StartTime  string `json:"start_time"`
	} `json:"matches,omitempty"`
}

// Team represents the structure of a team from teams.json
type Team struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Region      string `json:"region"`
	Ranking     int    `json:"ranking"`
	Roster      []struct {
		ID       string `json:"id"`   // Player ID in roster
		Name     string `json:"name"` // Player Name in roster
		Role     string `json:"role"`
		ImageURL string `json:"imageUrl"` // Player image URL in roster
		Stats    struct {
			Kills   int `json:"kills"`
			Deaths  int `json:"deaths"`
			Assists int `json:"assists"`
			Score   int `json:"score"`
		} `json:"stats"`
	} `json:"roster,omitempty"`
}

// Player represents the structure of a player from players.json
type Player struct {
	ID       string `json:"id"`
	Name     string `json:"name"`
	TeamID   string `json:"team_id"`
	Role     string `json:"role"`
	ImageURL string `json:"imageUrl"`
	Stats    struct {
		Kills   int `json:"kills"`
		Deaths  int `json:"deaths"`
		Assists int `json:"assists"`
		Score   int `json:"score"`
	} `json:"stats"`
}

// Match represents the structure of a match from matches.json
type Match struct {
	ID        string `json:"id"`
	EventID   int    `json:"event_id"` // Assuming event_id is int as in your JSON
	Team1ID   string `json:"team1_id"`
	Team2ID   string `json:"team2_id"`
	Team1Name string `json:"team1_name"`
	Team2Name string `json:"team2_name"`
	Score     string `json:"score"`
	Status    string `json:"status"`
	StartTime string `json:"start_time"`
}

// Global variables to hold the loaded data
var (
	MockEvents  []Event
	MockTeams   []Team
	MockPlayers []Player
	MockMatches []Match
)