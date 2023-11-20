package main

import (
	"file-upload-svc/pkg/utils"
	"fmt"
)

func init() {
	if err := utils.LoadEnv(); err != nil {
		panic(err)
	}
}

func main() {
	fmt.Println("Go")
}
