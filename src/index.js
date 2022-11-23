import './index.css';
import getResponse from './modules/utils.js';

getResponse();

const form = document.getElementById('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {};
  data.user = form.elements[0].value;
  data.score = form.elements[1].value;
  form.reset();

  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${process.env.XURXI_KEY}/scores/`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
});

document.querySelector('button').addEventListener('click', getResponse);
