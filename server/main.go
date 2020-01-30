package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/alexandrevicenzi/go-sse"
)

func main() {
	port := ":" + os.Getenv("PORT")
	eventType := os.Getenv("EVENT_TYPE")
	dataEndpoint := os.Getenv("DATA_ENDPOINT")

	opt := &sse.Options{
		Headers: map[string]string{
			"Access-Control-Allow-Origin":      "https://localhost:8080",
			"Access-Control-Allow-Credentials": "true",
			"Access-Control-Allow-Methods":     "GET, OPTIONS",
			"Access-Control-Allow-Headers":     "Keep-Alive,X-Requested-With,Cache-Control,Content-Type,Last-Event-ID",
		},
	}
	// Create the server.
	s := sse.NewServer(opt)
	defer s.Shutdown()

	// Register with /events endpoint
	http.Handle("/events", s)

	// Dispatch messages
	id := 1
	go func() {
		for {
			joke := getDadJoke(dataEndpoint)
			s.SendMessage("/events", sse.NewMessage(strconv.Itoa(id), joke, eventType))
			id++
			time.Sleep(10 * time.Second)
		}
	}()

	http.ListenAndServe(port, nil)
}

func getDadJoke(url string) string {
	client := &http.Client{}
	req, err := http.NewRequest("GET", url, nil)

	req.Header.Add("Accept", "text/plain")
	resp, err := client.Do(req)
	if err != nil {
		fmt.Println(err)
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err)
	}
	joke := string(body)
	if err != nil {
		fmt.Println(err)
	}
	return joke
}
