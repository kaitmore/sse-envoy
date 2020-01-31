#!/bin/bash

keycloak/bin/kcreg.sh config credentials \
    --server http://development.com:8080/auth \
    --realm master \
    --user user \
    --password password
keycloak/bin/kcreg.sh create \
    -s clientId="myclient" \
    -s 'redirectUris=["http://development.com:*"]'
keycloak/bin/kcreg.sh get "myclient"
