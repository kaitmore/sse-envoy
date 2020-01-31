#!/bin/bash

keycloak/bin/kcreg.sh config credentials \
    --server http://localhost:8080/auth \
    --realm master \
    --user user \
    --password password
keycloak/bin/kcreg.sh create \
    -s clientId="myclient" \
    -s 'redirectUris=["http://localhost:*"]'
keycloak/bin/kcreg.sh get "myclient"
