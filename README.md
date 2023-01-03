# malaCash (Bank App)

This project is a bank application which showcases common feature of an e-Bank   
wherein the user can login, withdraw and deposit money. It can also transfer money  
to a different currency account which will be converted based on user's currency.  

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [How to Use the Project](#how-to-use-the-project)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![malacash vercel app_(Macbook Pro 16_)](https://user-images.githubusercontent.com/108392678/197386993-de25d694-cc04-4fb6-81e6-1b481dc95331.png)

### How to Use the Project

These are the accounts that can be use to log in:  
  
1) user: jdc  
   pin: 1111  
     
2) user: mp  
   pin: 2222  
     
3) user: mja   
   pin: 3333  
     
4) user: jms  
   pin: 4444  
     
5) user: ap  
   pin: 5555  
     
6) user: jpr  
   pin: 6666  
     
7) user: mjp   
   pin: 7777 
   
   To close the account: current user must be signed in. Note that once the account was close, that user will be deleted.  

### Links

- DEMO: [Link](https://marvedventures.github.io/Number-Guessing-Game-v2/)

## My process

### Built with

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### What I learned

- DOM Manipulation
- Internationalization API
- Event Handling in JavaScript
- Adding styles using JavaScript
- Design as a Responsive web
- Map and Reduce method in JavaScript
- 

Here is a code snippet:

```script.js
btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();
  //find method -> usernames
  currentAccount = accounts.find(
    accts => accts.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === +inputLoginPin.value) {
    printWelcome(`${currentAccount.owner.split(' ')[0]}`);
```


### Useful resources

- [MDN Docs (Events)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) - This helped me for handling events in JavaScript.
- [MDN Docs (Events)](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) - This helped me for adding styles using JavaScript.
- [MDN Docs(Intl.DateTimeFormat)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) - This helped me for formatting dates in JS using Internationalization API 


## Author

- Website - [Marvin Morales Pacis](https://marvin-morales-pacis.vercel.app/)
- LinkedIn - [@marvedventures](https://www.linkedin.com/in/marvedventures/)
- Twitter - [@marvedventures](https://www.twitter.com/marvedventures)
