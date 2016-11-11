# pFinder

### Install

##### Install node latest version:
```
https://nodejs.org/en/download/
```

##### Clone the repository
```
git clone git@bitbucket.org:ramyelashri/p2h.git
```

##### cd into app directory and install npm and bower dependencies:
```
cd p2h
npm install && bower install
```

## Usage
```
gulp serve
```

## Awesome Technology Stack
- angular-material
- Bower
- Gulp
- SCSS
- HammerJS
- ~~angular-carousel~~

## Features
- Assets management with gulp
- Used flexbox grid system through angular directives
- Used $mdMedia on body tag to make it easier to target elements on different viewport sizes
- Everything is a component, so it's easier in maintainability, scalability, and editing is risk-free
- Components are namespaced with BEM
- Images are responsive, retina is supported
- Used CDNs whenever possible to increase simultaneous http requests
- Followed John Paga's style guide in structuring files by component not by technology
- I didn't -intentionally- use any router, instead I just used simple ng-include

## SCSS files
- _typography.scss is inspired by material-design with a more friendly naming convention
- _spaces.scss to keep spacing between elements consistent we use easy-to-remember variables names
- _functions.scss for all helper functions
- _global.scss for app-wide styles, either global elements (prefixed with .global__element-name), for resets, or third-parties overrides

## Browser support:
I only supported browser with version n-1, where n is the current browser version

## Task Management
Everything is maintained through gulp well-organized tasks,
 bower dependencies are automatically injected, browser-sync for 
 "synchronized cross-browser testing", styles are injected with no need for page refresh
   
## Project Structure:
I've used a combination of best practices from John Papa's application structure (a well 
known guy in the Angular community) and also Necolas Gallagher's (a CSS guru and author
 of Normalize.css) component based structure