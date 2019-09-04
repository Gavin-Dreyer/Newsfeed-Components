/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const menuImg = document.querySelector('img')

function menuFunction(array) {
  const menuContainer = document.createElement('div'); //create container
  const menuList = document.createElement('ul'); // create list

  menuContainer.classList.add('menu'); // add class to menu container

  menuContainer.append(menuList); // append list to container

  array.forEach(item => { //iterate over array

    const menuItems1 = document.createElement('li'); //create list items

    menuItems1.textContent = item //assign each list item a value of the array

    menuList.append(menuItems1); // append each list item to the menulist
  })

  const menuButton = document.querySelector('.menu-button') //select the menu button class
  

  menuButton.addEventListener('click', e => { // add an event listener to the menu button
    menuContainer.classList.toggle('menu--open') // toggle the container with a click
  });

  return menuContainer

}

const menuBody = document.querySelector('body')
menuBody.append(menuFunction(menuItems));
