package main

import (
	"net/http"
	"time"

	"github.com/alexandrevicenzi/go-sse"
)

func main() {
	opt := &sse.Options{
		Headers: map[string]string{
			"Access-Control-Allow-Origin":      "*",
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
	go func() {
		for {
			s.SendMessage("/events", sse.NewMessage("time", time.Now().String(), "message"))
			time.Sleep(5 * time.Second)
		}
	}()

	http.ListenAndServeTLS(":7081", "./certs/localhost.crt", "./certs/localhost.key", nil)
}
