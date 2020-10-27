# Khushbot

This is the source for my discord bot :)

## Usage

You'll want to edit the following constants in index.js:

- const myID = "YourDiscordID"
- const botID = "YourBotsDiscordID"

Also, set DISCORD_TOKEN in your .env to your discord bot token

Run

```
node index.js
```
and you should be good to go!

## Customizing

- const othersMaps is a map of the messages that should be sent when a message sent by someone apart from you matches the corresponding regex

- const myMaps is a map of the messages that should be sent when a message sent by you matches the corresponding regex