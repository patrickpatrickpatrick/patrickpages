---
title: Self-Assessment Tool for GDaD Profession Capability Framework
layout: layouts/work.njk
date: 2024-02-01
tags: [ "works" ]
preview_img: {
	src: "/img/gdad-tool.png",
	alt: "screenshot of Self-Assessment Tool for Government Digital and Data Profession Capability Framework",
}
project_link: {
	url: /gdad-demo
}
github_url: https://github.com/patrickpatrickpatrick/gdad-tool
summary: {
  time_frame: "< 2 months",
  tech_stack: "React, Vite, Javascript, Styled Components",
  roles: "Developer, Designer, Project Co-lead"
}
---

This tool was developed for staff performance review for a company I was working at. I wasn't assigned to work on it, I volunteered to work on it in addition to my day-to-day responsibilities. The project appealed to me because I wanted to work on a short-term project using my React knowledge that would be useful to my colleagues.

The process was that a user would choose their discipline and then the application would present a form with the correct skills for that specific discipline. The user would then give each skill a score and a justification for that score. After they submitted the form, the user's line manager would then need to validate the submission.

I gathered feedback about the previous version of the tool. This included comments from not only those that wrote self-assessments but also the staff members that were involved in organising the process and collating the results of the tool. Then working together with another colleague, we used the feedback to determine what specific features I could add to the tool. We determined how much effort each feature would take, what value it would add to the user experience and what the value it would add to the organisers experience. Then we prioritised what features I should work on in the short time that I had.

The features were as follows:
- ensure that saving submissions for later editing worked 
- add an option to allow the user to edit their line manager email address
- the ability to view previous years submissions (if they existed)
- making it more visible to the user where in the process they were

The application was hosted on Google App Scripts. I published the script as a Web App which meant I could present an HTML page containing the application code, so I used a plugin to compile the application into a single HTML file which I then uploaded to the project. 

I used Google Sheets spreadsheets for saving and loading data. There was a spreadsheet to save each individual submission in as well as another spreadsheet which contained the relevant skills that a staff member would assess themselves by for each discipline. The use of Google Sheets did present an issue during the process, in the case of submissions being too long for an individual cell (maximum character count of 50000). I had to think on my feet and re-work the application to split the character count into a spillover cell if it was too long. This

While I had access to the code of the original tool, it was written in a such a way that it would have been difficult to add the extra functionality that was desired by users. Therefore I decided to start from scratch and took the opportunity to use Vite for the first time. I used the [govuk-react](https://github.com/govuk-react/govuk-react) package (based on [govuk-frontend](https://github.com/alphagov/govuk-frontend)), so that I wouldn't have to write my own UI library in the short time I had to implement new features. In addition, I had to use govuk-frontend for the Accordion component which had not yet been implemented in govuk-react. The use govuk-frontend and the Design System meant I could ensure the application had a consistent style with components that were thoroughly accessibility tested.



