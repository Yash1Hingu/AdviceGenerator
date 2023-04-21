# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Desktop View](/screenshot/Desktop.png)
![Mobile View](/screenshot/Mobile.png.png)

### Links

- Live Site URL: [Calculate Your Age](https://yash1hingu.github.io/AdviceGenerator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [Advice API](https://api.adviceslip.com/)
### What I learned

In this I lern How to Call API and Make GET request to api's
and show the data to user.
To see how you can add code snippets, see below:

```js
async function logJSONdata(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(async(data) => {
        // Do something with the data
        const advice = await data.slip.advice;
        const id = await data.slip.id;
        updateData(advice,id);
    })
    .catch(error => {
        // Handle any errors
        console.error(error);
    });
}
```
here i use fetch methode to make get request and getting data back,and more [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### Useful resources

- [API](https://api.adviceslip.com/) - This APU helped me to get some random Genearted Advice.
- [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) - This is an amazing article which helped me finally understand fetch() method.

## Author

- Website - [Yash Hingu](https://yash1hingu.github.io/Personalwebsite/)
- Frontend Mentor - [@Yash1Hingu](https://www.frontendmentor.io/profile/Yash1Hingu)

## Acknowledgments

I Improve This App in Diffent Language,If Anyone Excieted to work in this app Then make Fork. 