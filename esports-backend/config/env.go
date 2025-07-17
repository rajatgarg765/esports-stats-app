package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

// GetEnv loads and returns the value of an environment variable.
// It tries to load from .env first, then falls back to system environment variables.
func GetEnv(key string) string {
	err := godotenv.Load(".env") // Load the .env file
	if err != nil {
		log.Printf("Error loading .env file: %v (This is fine if env vars are set externally)", err)
	}
	return os.Getenv(key)
}