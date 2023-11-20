package main

import (
	"fmt"
	"video-process-svc/pkg/utils"
)

func init() {
	if err := utils.LoadEnv(); err != nil {
		panic(err)
	}
}

func main() {
	fmt.Println("Go")
}
