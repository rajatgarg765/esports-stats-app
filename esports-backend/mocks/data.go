package mocks

// Event represents the structure of an event from events.json
type Event struct {
	ID          int    `json:"id"`
	Name        string `json:"name"`
	Overview    string `json:"overview"`
	ImageURL    string `json:"imageUrl"`
	Date        string `json:"date"`
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
		MostKills  string `json:"most_kills,omitempty"`
		Duration   string `json:"duration,omitempty"`
	} `json:"matches,omitempty"`
	FinalResults []struct {
		Rank        int    `json:"rank"`
		Team        string `json:"team"`
		MatchesPlayed int    `json:"matches_played"`
		Wins        int    `json:"wins"`
		TotalPoints int    `json:"total_points"`
	} `json:"final_results,omitempty"`
	MatchStatistics []struct {
		Match    string `json:"match"`
		Winner   string `json:"winner"`
		MostKills string `json:"most_kills"`
		Duration string `json:"duration"`
	} `json:"match_statistics,omitempty"`
	KeyMoments []struct {
		Title string `json:"title"`
		Round string `json:"round"`
		Image string `json:"image"`
	} `json:"key_moments,omitempty"`
}

// Team represents the structure of a team from teams.json
type Team struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Region      string `json:"region"`
	Ranking     int    `json:"ranking"`
	LogoURL     string `json:"logo_url"`
	Description string `json:"description,omitempty"`
	Founded     string `json:"founded,omitempty"`
	Roster      []struct {
		ID       string `json:"id"`
		Name     string `json:"name"`
		Role     string `json:"role"`
		ImageURL string `json:"imageUrl"`
		Stats    struct {
			Kills   int     `json:"kills"`
			Deaths  int     `json:"deaths"`
			Assists int     `json:"assists"`
			Score   int     `json:"score"`
			Kd      float64 `json:"kd,omitempty"`
			Adr     float64 `json:"adr,omitempty"`
			Hs      float64 `json:"hs,omitempty"`
		} `json:"stats"`
	} `json:"roster,omitempty"`
	PastPerformances []struct {
		Event     string `json:"event"`
		Placement string `json:"placement"`
		Prize     string `json:"prize"`
	} `json:"pastPerformances,omitempty"`
}

// Player represents the structure of a player from players.json
type Player struct {
	ID       string `json:"id"`
	Name     string `json:"name"`
	TeamID   string `json:"team_id"`
	Role     string `json:"role,omitempty"`
	ImageURL string `json:"imageUrl"`
	JoinedYear string `json:"joinedYear,omitempty"`
	Stats    struct {
		Kills   int     `json:"kills"`
		Deaths  int     `json:"deaths"`
		Assists int     `json:"assists"`
		Score   int     `json:"score"`
		AvgDamage   int     `json:"avgDamage,omitempty"`
		DamageGrowth int    `json:"damageGrowth,omitempty"`
		Wins        int     `json:"wins,omitempty"`
		Top10       int     `json:"top10,omitempty"`
		Damage      int     `json:"damage,omitempty"`
		MatchesPlayed int   `json:"matchesPlayed,omitempty"`
		WinRate     int     `json:"winRate,omitempty"`
	} `json:"stats"`
	Achievements []struct {
		Title string `json:"title"`
		Year  string `json:"year"`
		Icon  string `json:"icon"`
	} `json:"achievements,omitempty"`
}

// Match represents the structure of a match from matches.json
type Match struct {
	ID        string `json:"id"`
	EventID   int    `json:"event_id"`
	Team1ID   string `json:"team1_id"`
	Team2ID   string `json:"team2_id"`
	Team1Name string `json:"team1_name"`
	Team2Name string `json:"team2_name"`
	Score     string `json:"score"`
	Status    string `json:"status"`
	StartTime string `json:"start_time"`
	MostKills  string `json:"most_kills,omitempty"`
	Duration   string `json:"duration,omitempty"`
}



// NewsArticle represents the structure of a news article
type NewsArticle struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Img         string `json:"img"`
}

// HomepageHeroData represents the structure for the homepage hero section
type HomepageHeroData struct {
	ImageURL    string `json:"imageUrl"`
	Title       string `json:"title"`
	Description string `json:"description"`
}

// HomepageQuickStats represents the structure for homepage quick stats
type HomepageQuickStats struct {
	TotalEvents     string `json:"totalEvents"`
	TotalPrizeMoney string `json:"totalPrizeMoney"`
	MostPopularGame string `json:"mostPopularGame"`
}

// UserProfileImage represents the structure for a user's profile image
type UserProfileImage struct {
	ProfileImageURL string `json:"profileImageUrl"`
}

// Global variables to hold the loaded data
var (
	MockEvents  []Event
	MockTeams   []Team
	MockPlayers []Player
	MockMatches []Match
	MockNewsArticles       []NewsArticle
	MockHomepageHeroData   HomepageHeroData
	MockHomepageQuickStats HomepageQuickStats
	MockUserProfileImage   UserProfileImage
)