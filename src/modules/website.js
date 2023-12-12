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

  const menuButton = document.createElement('button');
  menuButton.textContent = 'Menu';

  const contactButton = document.createElement('button');
  contactButton.textContent = 'Contact Us';

  navBar.append(homeButton, menuButton, contactButton);

  return navBar;
};

const mainComponent = () => {};

const footerComponent = () => {};

const init = () => {
  const content = document.getElementById('content');

  content.appendChild(headerComponent());
};

export default init;
