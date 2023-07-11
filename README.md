# DISCORD-ALWAYS-TYPING-TROLL
Always Typing on Discord Prank

## ⚠️Warning ⚠️
I do want to make it clear that this **does break discord's terms of service**.
So if you're going to be a bit of a prankster know that you **do have a risk of terminating your Discord account**.

**Please use at your own risks.**

## How this program works
This program use a classic set interval with a fetch request inside.
To make it works it needs some data : your account token and the channel id where you want to be appearing as being typing a message.

## How and where to retrieve required data ?
For your **account token**, you'll need to go into the developer console inside discord (press **F12** or **CTRL + MAJ + I**) then go into **Network** tab.
You should see two recurring request : _ack_ and _science_. Choose one of them, go into **Headers** tab then find the **Authorization** header. The value next to it is your account token.

**(disclaimer: never share it with someone, if somebody have it, he'll have full access to your account.)**

For the **channel ID**, you'll need to enable the developer mode into discord. You can enable it into the **Settings > Advanced** tab. Once it's done, just right click into the desired channel and click
**Copy Channel ID**. (It also works for DMs).

## Start
```bash
npm start
```
or
```bash
node app.js
```

```
prompt: Your account token:  xxx
prompt: Channel ID:  xxx
prompt: Interval in seconds:  10
```
