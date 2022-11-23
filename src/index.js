import './index.css';

const API_KEY = 'QMhictd9pPqlR9FLpNfG';

const form = document.getElementById('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {};
  data.user = form.elements[0].value;
  data.score = form.elements[1].value;
  form.reset();

  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${API_KEY}/scores/`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
});

const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', async () => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${API_KEY}/scores/`);
  const jsonResponse = await response.json();
  const allData = jsonResponse.result;
  ul.replaceChildren();
  for (let i = 0; i < allData.length; i += 1) {
    const { user } = allData[i];
    const { score } = allData[i];
    const li = document.createElement('li');
    const text = document.createTextNode(`${user}: ${score}`);
    li.appendChild(text);
    ul.appendChild(li);
  }
});
