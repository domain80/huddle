# Frontend Mentor - Huddle landing page with alternating feature blocks solution

This is a solution to the
[Huddle landing page with alternating feature blocks challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-alternating-feature-blocks-5ca5f5981e82137ec91a5100).
Frontend Mentor challenges help you improve your coding skills by building
realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

---

1. Using this project I learnt how to use styled components  
   instead of regular css... still needs some practice for faster workflow.
2. I realised when working with such layouts, its best to use grid for  
   sections that easily change their layout per different screen-sizes.
3. Its also worth noting that the use of grids can allow for easy  
   responsiveness without having to use any media queries  
   See example below

```html
<div className="container">
  <div className="item"></div>
  <div className="item"></div>
  <div className="item"></div>
  <div className="item"></div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

### Useful resources

- [react-icons](https://react-icons.github.io/react-icons) - This helped me for
  easily add svgs icons to my page. I really liked this pattern and will use it
  going forward.

## Author

[David Mainoo](https://github.com/david-main)
