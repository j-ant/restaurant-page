const createMenuItem = (itemName) => {
  const menuItemDiv = document.createElement('div');
  const name = document.createElement('h3');
  name.textContent = itemName;

  const description = document.createElement('p');
  description.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  const price = document.createElement('p');
  price.textContent = '$5.00';
  const image = document.createElement('div');
  image.style.height = '180px';
  image.style.width = '180px';
  image.style.backgroundColor = 'gray';
  image.classList.add('mock-image');

  menuItemDiv.append(name, price, image, description);
  return menuItemDiv;
};

const menuComponent = () => {
  const menuContainer = document.createElement('div');
  const menuItems = [1, 2, 3, 4, 5, 6, 7, 8];

  menuItems.forEach((item) => {
    menuContainer.appendChild(createMenuItem(`Menu Item ${item}`));
  });
  return menuContainer;
};

export default menuComponent;
