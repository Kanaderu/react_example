#!/bin/bash
curl -i \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-X GET \
"http://api.openweathermap.org/data/2.5/forecast?id=4509884&APPID=4687e81acdb537f9488ce1bacea4cab3"

echo ""
