package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/rajatgarg765/esports-backend/models"
	"gorm.io/gorm"
)

// TeamResponse represents the response structure for teams
type TeamResponse struct {
	ID          uint          `json:"id"`
	Name        string        `json:"name"`
	Description string        `json:"description"`
	LogoURL     string        `json:"logoUrl"`
	Region      string        `json:"region"`
	Ranking     int           `json:"ranking"`
	Players     []PlayerBrief `json:"players,omitempty"`
}

// PlayerBrief represents a simplified player structure for team responses
type PlayerBrief struct {
	ID       uint   `json:"id"`
	Nickname string `json:"nickname"`
	RealName string `json:"realName"`
	PhotoURL string `json:"photoUrl"`
	Role     string `json:"role"`
}

// mockTeams contains static team data for development
var mockTeams = []TeamResponse{
	{
		ID:          1,
		Name:        "Team Alpha",
		Description: "Top-ranked team in the Americas",
		LogoURL:     "https://lh3.googleusercontent.com/aida-public/AB6AXuCFqUro1ZL9l0hLan2KhtTnrl80EkRg_LXi3kyXOJGWMWsiu2LYwtx18dtZ2wqKhpNk9kOyWRHgpsMYVerABHDKAQiSESrAdOcPsUt0yQ9-APmdZvgGT1Dpn62_OpFltMM59i2Gv847fqfopCDo22v0Ooi9QAi8he0xT7Xz1DTLEg7RnOA9kt4rxLh8O6PhGQAOonqsbKznU60YB7lKKt5Huy2r7U1aLE40kw7aLVq6xqkJDa4GOQp2AEYtmuHMITU0gKefXtiwUr8",
		Region:      "Americas",
		Ranking:     1,
	},
	{
		ID:          2,
		Name:        "Team Beta",
		Description: "Champions of the European League",
		LogoURL:     "https://lh3.googleusercontent.com/aida-public/AB6AXuAiEveGlYKlfb8nOsPpivhc3Ucup3PQhuK_3x50tFt4HtzbG-Vr-tZBy21iAuHBDY8WtVmMu5H-SlpymCLE8YwOk9wbxUA_euSi9mJLpWYAWN1PTk1fG2xTSvMnp-sEljn5WpD7RuEV8BEr2cryBKhilGmw263e0pPXA5Z3oNEgNuBRFzo4lSet2SF4VW1JrOlhFCPh8GxImqcESFo2_aIv1zUx47pDJwVrRn79yRGDXoE69dNawy92--iYVeG1Sludj4Hk6ODjans",
		Region:      "Europe",
		Ranking:     2,
	},
	{
		ID:          3,
		Name:        "Team Gamma",
		Description: "Dominant force in the Asian region",
		LogoURL:     "https://lh3.googleusercontent.com/aida-public/AB6AXuADwzKVfjIT1_NKMJ81M5N2dpkmpkSqkCWdDYpT8I5PMI3xOhSGZUsQZyn5sfhlCy97_nILq4UTYKQcYpplNA2Yf9vfYePEkbJtSpP-xC1BdwDlVdnQxfCmDLygcDYYEuLfu4XFHaReR9xsrKTwLVlNMyT2bAMfA7Oau9c4KiJOKRk_hWVDrW6Isn8jM0dSIS1Qcl6wZ6Hz9UN3U7EZROQrMmdq0LZdAjNX7vR5nhKJVd8Jv04kihFpbXW8SoK-kUxgGp9FCyQNC3k",
		Region:      "Asia",
		Ranking:     3,
	},
	{
		ID:          4,
		Name:        "Team Delta",
		Description: "Rising stars from the Oceanic region",
		LogoURL:     "https://lh3.googleusercontent.com/aida-public/AB6AXuB6votT0UjrcFSvbeR9ap2cTgGK5a0DXlLwDa0iC3PTRYZi1IRBhsEZrHtbuYhGVMLnWUuyWpNoKtHOU7tv4kaOVg5WC9KBmMIgDPswIIuRe_SHo9r_28pRBQYW9vo_RR_Crsk6tjjbbSdppWZhYzsvJMKw-7_zTXclDJDkKUgv84477HIPvzzvK86LoGTy611z9Gg0-oUL2Cpuv2M8ER38zTE0VluVbHF8yEV6it7YOQyNI7AUmQvH40N7sIh8GFpesXxbslmDbOU",
		Region:      "Oceania",
		Ranking:     4,
	},
	{
		ID:          5,
		Name:        "Team Epsilon",
		Description: "Fan-favorite team with a global following",
		LogoURL:     "https://lh3.googleusercontent.com/aida-public/AB6AXuDgMIL0lZwrc3vy6OLWcTSSALYNms0F6kOs5wz4k2dD833-vWrlRZYFBVcplYO89bzJJkwnkllY9q8IwghNRnKnwjDSsnvX-I9SKnZTgl--YxdJbCxbGrY4XsPSykOpl9mzs2CHTHImyE4ozfxedoRpvUlj9Ng5mZUMpqVnn3qFqbLgAj7kfb4eVHSVEyz2Lhgl6YGGascB79XZoI6Wh9D3m0mQrSkKOM8jNSW_ip5u31w21k6u8jZsz2hsCQyAwhWMfkvNZap3soY",
		Region:      "Global",
		Ranking:     5,
	},
	{
		ID:          6,
		Name:        "Team Zeta",
		Description: "Underdog team with a strong performance",
		LogoURL:     "https://lh3.googleusercontent.com/aida-public/AB6AXuAbCY_VXn3p6mJGkZUuEyyOSUSBXcaqvQZ3XsvBKkvTXRP4aYAqNzoXdQtcf8gjG6XZTZ5uXnvUFx8Zf2m_my98Q2vea2rj4D79H4lanGWfqPTZTU6djd-S4E4zTbG9AQ22Y4PvEYBwykJncqkevM6ZZijVkDDkJXnYanbthYVVhRns1u9_JHD0Rf-2RAl6kG8OYWOt6hCZoIlJYye-8SJVlw8VxbEWi6p6WunzMQ4g10HUe1vqzfFsn2kXaaPuYSOc-v1iF6TJp8c",
		Region:      "Global",
		Ranking:     6,
	},
}

// GetPopularTeams fetches popular teams with their basic info
func GetPopularTeams(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"teams": mockTeams})
}

// GetTeams fetches all teams with their players
func GetTeams(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)
	var teams []models.Team

	if err := db.Preload("Players").Find(&teams).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch teams"})
		return
	}

	var response []TeamResponse
	for _, team := range teams {
		var players []PlayerBrief
		for _, player := range team.Players {
			players = append(players, PlayerBrief{
				ID:       player.ID,
				Nickname: player.Nickname,
				RealName: player.RealName,
				PhotoURL: player.PhotoURL,
				Role:     "Player",
			})
		}

		response = append(response, TeamResponse{
			ID:          team.ID,
			Name:        team.Name,
			Description: team.Description,
			LogoURL:     team.LogoURL,
			Region:      team.Region,
			Players:     players,
		})
	}

	c.JSON(http.StatusOK, gin.H{"teams": response})
}

// GetTeamByID fetches a single team by ID with detailed information
func GetTeamByID(c *gin.Context) {
	db := c.MustGet("db").(*gorm.DB)
	id := c.Param("id")
	var team models.Team

	if err := db.Preload("Players").First(&team, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Team not found"})
		return
	}

	var players []PlayerBrief
	for _, player := range team.Players {
		players = append(players, PlayerBrief{
			ID:       player.ID,
			Nickname: player.Nickname,
			RealName: player.RealName,
			PhotoURL: player.PhotoURL,
			Role:     "Player",
		})
	}

	response := TeamResponse{
		ID:          team.ID,
		Name:        team.Name,
		Description: team.Description,
		LogoURL:     team.LogoURL,
		Region:      team.Region,
		Players:     players,
	}

	c.JSON(http.StatusOK, response)
}
