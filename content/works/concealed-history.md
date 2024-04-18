---
title: Concealed Histories Interactive Museum Exhibit
layout: layouts/work.njk
date: 2019-09-01
tags: [ "works" ]
preview_img: {
	src: "/img/concealed-history2.png",
	alt: "photo of Concealed Histories interactive in the V&A Gilbert Collections gallery",
}
project_link: {
	url: "https://www.vam.ac.uk/blog/digital/museum-interactives",
	text: "Blog post about the interactive"
}
summary: {
  time_frame: "3 months",
  tech_stack: "Node, HTML, CSS, Javascript, Web Components, Go",
  libraries: "Hugo, Universal Viewer",
  roles: "Developer"
}
---

Developed as part of [Concealed Histories](https://www.vam.ac.uk/exhibitions/concealed-histories-uncovering-the-story-of-nazi-looting), a show by the [V&A](https://www.vam.ac.uk/) about the relationship between the [Fischer List](https://www.vam.ac.uk/articles/explore-entartete-kunst-the-nazis-inventory-of-degenerate-art#?xywh=-2454%2C-303%2C8987%2C6044) and the [Gilbert Collection](https://www.vam.ac.uk/collections/gilbert-collection). "Concealed Histories: The Nazis' Inventory Of 'Degenerate' Art" was an interactive temporarily installed in V&A's [South Kensington museum](https://www.vam.ac.uk/south-kensington). 

As the target device for the interactive was a low-spec computer running an outdated version of Firefox, I couldn't rely on a frontend framework. Therefore I used the static site generator [Hugo](https://gohugo.io/) to build the interactive. The interactive made use of several open-source libraries that implement the [IIIF](https://iiif.io/) standard for viewing deep-zoomable images. [Universal Viewer](https://universalviewer.io/) was used to add the ability to browse the Fischer List and [vam-viewer](https://github.com/digirati-co-uk/vam-viewer) was used to implement an annotated guided tour of the Fischer list. These were incorporated into the static site by using [WebComponents](https://developer.mozilla.org/en-US/docs/Web/API/Web_components). 

The interactive was on display from opening to the end of the Concealed Histories show. It was implemented in a way that would make future interactives easy to implement and with a view to eventually create an 'interactive authoring tool'. The pandemic and resulting closure of the museum changed these future plans however and priority was given to reimplementing the Collections site instead.

The repo is not currently publically viewable  so I have not been able to deploy the project. Please read the blog I wrote for V&A for more information. 