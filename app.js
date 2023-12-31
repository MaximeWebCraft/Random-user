import get from './utils/getElement.js';
import fetchUser from './utils/fetchUser.js';
import displayUser from './utils/displayUser.js';

const showUser = async () => {
  // récupére l'utilisateur depuis l'api
  const person = await fetchUser();

  // affiche l'utilisateur
  displayUser(person);
};

window.addEventListener('DOMContentLoaded', showUser);
const btn = get('.btn');
btn.addEventListener('click', showUser);
