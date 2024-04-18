---
title: What If They Don't Have Eyes?
layout: layouts/work.njk
date: 2021-05-31
tags: [ "works" ]
preview_img: {
	src: "/img/whatifeyes1.png",
	alt: "screenshot of What If They Don't Have Eyes",
}
project_link: {
	url: "https://humorous-spurious-angle.glitch.me/"
}
github_url: https://github.com/patrickpatrickpatrick/whatiftheydonthaveeyes
summary: {
	time_frame: "< 1 week",
	tech_stack: "Node, HTML, CSS, Javascript",
	libraries: "Discord, Socket.io",
	roles: "Developer, Designer",
}
---

Developed for a [collaborative artwork](https://www.marypedicini.com/what-if-they-don-t-have-eyes) by [Steven He](https://steven.website/) and [Mary Pedicini](https://www.marypedicini.com/what-if-they-don-t-have-eyes) as part of the [SW11NDOWS](https://www.anitagarwal.com/sw11ndows) show. The art piece was [a public sculpture which contained a QR code](https://www.anitagarwal.com/sw11ndows?pgid=l0ro6tcm-1205ec44-66fe-4b00-a3dd-d7e39b76ce61) that linked to the application. The concept for the website was a publicly viewable real-time online role-play between a human (Steven) and an alien (Mary).

Due to the limited timeframe, I leveraged as much existing technology as I could. Instead of building a chat application and backend to host messages, I used [Discord](https://discord.com/). We set up a channel for the conversation to take place in and I created a [Discord bot](https://discord.com/developers/docs/quick-start/overview-of-apps) to scrape the channel messages. This meant that Discord served as the backend for hosting the messages and the interface for sending messages. As the images would take time to render, I implemented a spinner to prevent empty messages.

To make the website react in events in real time, I used [Socket.io](https://socket.io/). This library let me update the page whenever new messages were sent and allowed me to poll the bot to fetch more messages if the user wanted to view the chat history. In addition it also let me detect and present how many users were currently viewing the page.

The website was designed to be a single page with inline styles and Javascript so that it would be easy to deploy on [Heroku](https://www.heroku.com/). The current deployment is on [Glitch](https://glitch.com/). 

I collaborated on the design of the application with the artists. The desire was that page look retro, so I took inspiration from [Windows 95 dialogue boxes](http://toastytech.com/guis/win952.html) and 1990s aesthetic. It's a fully responsive design and the application is a Single Page Application developed without a framework.

The conversation has ended but you can still scroll up and see the messages (still using the Discord channel and bot scraper) and read about the artwork in the 'About' section. 

