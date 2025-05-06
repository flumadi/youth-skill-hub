# Youth Skill Hub - README
## Overview
Youth Skill Hub is a website designed to provide young people with access to skill development resources, courses, and opportunities. This document explains how to access the website and the technical process behind its creation and deployment.

## Accessing the Website
You can access Youth Skill Hub by visiting:
🔗 https://youthskillhub.netlify.app

The website is mobile-responsive and works on all modern browsers including:
-Google Chrome
-Mozilla Firefox
-Microsoft Edge
-Safari

## Development Process
Tools Used:

-Visual Studio Code (VSCode): Primary code editor<br>
-Git: Version control system<br>
-Netlify: Deployment platform<br>
-Project Setup in VSCode<br>
-Initial Setup:<br>
-Created project folder and initialized Git repository<br>
-Set up basic file structure:<br>

/src
  /assets (for images, fonts)
  /css (for stylesheets)
  /js (for JavaScript files)
index.html

## Development:
-Used HTML5, CSS3, and JavaScript for core functionality<br>
-Implemented responsive design with CSS Flexbox/Grid<br>
-Added interactive elements with JavaScript<br>
-Used VSCode extensions like:<br>
*Live Server (for local testing)<br>
*Prettier (code formatting)<br>
*ESLint (code quality)<br>
*IntelliSense (code completion)<br>
Version Control:<br>

📚 Regular commits to Git with descriptive messages

## Created separate branches for features before merging to main

✅Deployment with Netlify
Deployment Steps
Pre-deployment:

--Optimized assets (compressed images, minified CSS/JS)<br>
--Tested locally using VSCode's Live Server extension<br>
--Verified responsive behavior on multiple devices<br>

✅Netlify Setup:
-- Created Netlify account (free tier)<br>
-- Connected GitHub/GitLab repository or used manual drag-and-drop<br>
-- Configured basic settings:<br>
-- Build command: (if using static site, left blank)<br>

Publish directory: / (or /dist if using build tool)

## Deployment:

- Netlify automatically detected the static files<br>
- Assigned a random netlify.app subdomain<br>
- Configured custom domain (if applicable)<br>
- Enabled automatic deploys on Git push<br>

✅Post-deployment:
- Set up form handling (if contact forms exist)<br>
- Configured basic SEO settings<br>
- Enabled HTTPS automatically through Netlify<br>

## Maintenance
The site is set up for continuous deployment:<br>
Any changes pushed to the main branch automatically trigger a rebuild<br>
Netlify provides analytics and form handling<br>
Easy rollback to previous versions if needed<br>

## Support
-- For any issues with the website, please contact [mathiasfridah2@gmail.com] or open an issue in the project repository.

