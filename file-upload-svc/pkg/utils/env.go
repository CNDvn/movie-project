package utils

import (
	"os"
	"strconv"

	"github.com/joho/godotenv"
)

type TEnv struct {
	Port     int64
	KafkaUrl string
}

var Env TEnv

func LoadEnv() error {
	if err := godotenv.Load(".env"); err != nil {
		return err
	}

	port, err := strconv.ParseInt(os.Getenv("PORT"), 10, 32)
	if err != nil {
		return err
	}

	Env = TEnv{
		Port:     port,
		KafkaUrl: os.Getenv("KAFKA_URL"),
	}
	return nil
}
