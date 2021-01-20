#!/usr/bin/env bash

for f in pacts/*.json; do
  consumer="Client"
  provider="ProductService"
  consumer_version="1.0.0"
  curl -X PUT \-H "Content-Type: application/json" \
    -d @$f \
    http://pact-broker:9292/pacts/provider/$provider/consumer/$consumer/version/$consumer_version
done
