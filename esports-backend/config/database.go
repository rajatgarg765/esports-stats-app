package config

import (
	"fmt"
	"log"
	"os"
	"time"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	"github.com/your-username/esports-backend/models" // Adjust this path
)

var DB *gorm.DB

func ConnectDB() *gorm.DB {
	var err error
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=Asia/Kolkata",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME"),
		os.Getenv("DB_PORT"),
	)

	// Try connecting multiple times with a delay
	for i := 0; i < 5; i++ {
		DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
		if err == nil {
			log.Println("Database connection successful!")
			return DB
		}
		log.Printf("Failed to connect to database (attempt %d/5): %v", i+1, err)
		time.Sleep(2 * time.Second) // Wait before retrying
	}

	log.Println("Could not connect to the database after multiple attempts.")
	return nil
}

// Migrate performs database schema migrations
func Migrate(db *gorm.DB) {
	err := db.AutoMigrate(&models.Event{}, &models.Team{}, &models.Player{}) // Add other models as you create them
	if err != nil {
		log.Fatalf("Failed to auto migrate database: %v", err)
	}
	log.Println("Database migration completed.")
}