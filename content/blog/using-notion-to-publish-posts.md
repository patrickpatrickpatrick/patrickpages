---
title: Using Notion to Publish Posts
description: Notion Test
date: 2026-02-06T18:26:00.000Z
draft: true

---

One of my new year’s resolutions was to make my interests easier to pick-up. I mentioned in my 2025 round-up that I was devising an easier method to edit and publish to this blog. As of this post, this blog is now entirely edited and published using Notion.


## What is Notion?


Notion is productivity software. Unlike the Atlassian suite (of which it pretty replicates all the important functionality of) it’s aimed for personal use as well as professional. It balances power and usability in a way that other applications in the vein haven’t managed to. An alternative to Notion ([which to be honest I/you should probably be using instead](https://www.notion.com/product/ai)) is Obsidian but you have to [pay for cloud sync](https://obsidian.md/pricing) (which I need).


## Why Notion?


One of the founding principles of Patworld is that I want to pay as little money as possible. Notion has a free desktop application, a free mobile app, free cloud-sync between devices, a free API and free Webhook integration.


## How Patworld now works


![](2fb6d3af-9b15-80d2-ae80-c56d2f429e34.png)


I have created a Cloudflare Worker (also free) that has endpoint which Notion sends a request to whenever a page is edited. After receiving a request, the worker triggers the build process for Patworld.


Patworld uses 11ty. It’s free and very easily extendable. In the build process, I’ve added an extension which pulls the pages from Notion using Notion’s provided node API client. Each page is then converted to markdown using NotionToMd. 

