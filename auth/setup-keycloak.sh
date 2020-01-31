#!/bin/sh

~/keycloak/bin/kcreg.sh config credentials \
    --server http://development.com:7777/auth \
    --realm master \
    --user user \
    --password password
~/keycloak/bin/kcreg.sh create \
    -s clientId="myclient" \
    -s implicitFlowEnabled=true \
    -s publicClient=true \
    -s 'redirectUris=["http://development.com:*"]'
~/keycloak/bin/kcreg.sh get "myclient"
