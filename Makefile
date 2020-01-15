.PHONY: build.server
build.server: 
	@echo "--> building server for target linux"
	@cd server; go mod vendor; GO111MODULE=on CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build --mod=vendor -a -installsuffix cgo -ldflags="-w -s";

docker:	build.server
	@echo "--> building server docker image"
	@docker build -t kaitmore/sse-server:latest . -f server/Dockerfile
	@echo "--> building client docker image"
	@docker build -t kaitmore/sse-client:latest . -f client/Dockerfile
