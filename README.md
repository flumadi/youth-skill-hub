Youth Skill Hub - README
Overview
Youth Skill Hub is a website designed to provide young people with access to skill development resources, courses, and opportunities. This document explains how to access the website and the technical process behind its creation and deployment.

Accessing the Website
You can access Youth Skill Hub by visiting:
🔗 https://youthskillhub.netlify.app

The website is mobile-responsive and works on all modern browsers including:

Google Chrome

Mozilla Firefox

Microsoft Edge

Safari

Development Process
Tools Used
Visual Studio Code (VSCode): Primary code editor

Git: Version control system

Netlify: Deployment platform

Project Setup in VSCode
Initial Setup:

Created project folder and initialized Git repository

Set up basic file structure:

/src
  /assets (for images, fonts)
  /css (for stylesheets)
  /js (for JavaScript files)
index.html
Development:

Used HTML5, CSS3, and JavaScript for core functionality

Implemented responsive design with CSS Flexbox/Grid

Added interactive elements with JavaScript

Used VSCode extensions like:

Live Server (for local testing)

Prettier (code formatting)

ESLint (code quality)

IntelliSense (code completion)

Version Control:

Regular commits to Git with descriptive messages

Created separate branches for features before merging to main

Deployment with Netlify
Deployment Steps
Pre-deployment:

Optimized assets (compressed images, minified CSS/JS)

Tested locally using VSCode's Live Server extension

Verified responsive behavior on multiple devices

Netlify Setup:

Created Netlify account (free tier)

Connected GitHub/GitLab repository or used manual drag-and-drop

Configured basic settings:

Build command: (if using static site, left blank)

Publish directory: / (or /dist if using build tool)

Deployment:

Netlify automatically detected the static files

Assigned a random netlify.app subdomain

Configured custom domain (if applicable)

Enabled automatic deploys on Git push

Post-deployment:

Set up form handling (if contact forms exist)

Configured basic SEO settings

Enabled HTTPS automatically through Netlify

Maintenance
The site is set up for continuous deployment:

Any changes pushed to the main branch automatically trigger a rebuild

Netlify provides analytics and form handling

Easy rollback to previous versions if needed

Support
For any issues with the website, please contact [mathiasfridah2@gmail.com] or open an issue in the project repository.
