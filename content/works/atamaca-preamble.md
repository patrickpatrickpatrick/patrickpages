---
title: Atamaca Garden Web Portal
layout: layouts/work.njk
date: 2021-09-01
tags: [ "works" ]
preview_img: {
	src: "/img/atamaca.png",
	alt: "screenshot of Atamaca Garden",
}
project_link: {
	url: "/works/atamaca-garden"
}
github_url: https://github.com/patrickpatrickpatrick/atamaca-garden
summary: {
  time_frame: "3 weeks",
  tech_stack: "Node, HTML, CSS, Javascript",
  libraries: "React, create-react-app",
  roles: "Developer, Designer"
}
---

This was developed for the Ars Electronica Festival in 2021. It was part of [Atamaca Garden](https://ars.electronica.art/newdigitaldeal/en/networked/), which was a joint ventre between [ALMA Observatory](https://www.almaobservatory.org/en/home/) and [Fundación Mustakis](https://www.fundacionmustakis.org/). The concept behind the application was to create a 'digital landscape' that could be explored by the user. The 'landscape' consisted of different types of information (links to videos, music, books and articles) curated by architect [Diego Andrés Lara Koenig](https://www.linkedin.com/in/diego-andres-lara-koenig-0b085b1a0/?originalSubdomain=cl) and astronomer [Sergio Martín](https://www.raxlab.science/author/sergio-martin/). The types of information were related by medium and curator and the application would make the connections between the links apparant and viewable.

I was commissioned by Fundación Mustakis to build the application and worked with [Samuel Domínguez](https://www.samuel-dominguez.com/) to determine a design. We were inspired by [Uncertain Future](https://olafureliasson.net/uncertain), an explorable online repository of [Olafur Eliasson](https://olafureliasson.net/)'s works. In the short time we had to develop the application, I created a '2D-version' which had similar functionality. As the application was built for a public arts foundation, it had to be accessible as well as functional. It's entirely usable with a keyboard and has sensible focus states.

In addition to the explorable 'digital landscape', there was originally intended to be a Livefeed section. This section would allow the user to tune into 3 different live-streamed videos. The original design and functionality resembled a TV. Initially there would be white noise until the user picked a channel. In the end, two of the three videos were hosted by Ars Electronica on their own website so the Livefeed section only hosted an original video art piece created by Samuel Domínguez. There's also an About section where you can read more about the project, the organisations involved and the curators of the links. 

The application was deployed to an AWS S3 bucket and so had to be in a format that was easily packagable. That's why I implemented it as a SPA (Single Page Application) using React and create-react-app (now deprecated).


