sleep 5s
mongo clean.js
mongorestore /dump
mongo change.js