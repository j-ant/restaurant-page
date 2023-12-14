const homeComponent = () => {
  const homeContainer = document.createElement('div');
  homeContainer.id = 'home-container';

  const welcomeMsg = document.createElement('h2');
  welcomeMsg.textContent = 'Welcome to the Resto';

  const paragraph = document.createElement('p');
  paragraph.textContent = 'This is the best restaurant in the world!';

  homeContainer.append(welcomeMsg, paragraph);
  return homeContainer;
};

export default homeComponent;
