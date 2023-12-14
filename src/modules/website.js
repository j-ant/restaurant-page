import homeComponent from './home.js';
import menuComponent from './menu.js';

const headerComponent = () => {
  const header = document.createElement('header');
  const restaurantName = document.createElement('h1');
  restaurantName.textContent = 'Resto';

  header.appendChild(restaurantName);
  header.appendChild(navbarComponent());

  return header;
};

const navbarComponent = () => {
  const navBar = document.createElement('nav');

  const homeButton = document.createElement('button');
  homeButton.textContent = 'Home';
  homeButton.addEventListener('click', () => {
    mainComponent(homeComponent());
  });

  const menuButton = document.createElement('button');
  menuButton.textContent = 'Menu';
  menuButton.addEventListener('click', () => {
    mainComponent(menuComponent());
  });

  const contactButton = document.createElement('button');
  contactButton.textContent = 'Contact Us';

  navBar.append(homeButton, menuButton, contactButton);

  return navBar;
};

const mainComponent = (component) => {
  const main = document.querySelector('main');
  main.innerHTML = '';
  main.appendChild(component);
};

const footerComponent = () => {};

const init = () => {
  const content = document.querySelector('#content');
  const main = document.createElement('main');
  const footer = document.createElement('footer');

  content.append(headerComponent(), main, footer);
};

export default init;
