import './index.css';

const API_KEY = 'QMhictd9pPqlR9FLpNfG';

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {};
  data.user = form.elements[0].value;
  data.score = form.elements[1].value;
  form.reset();


  fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${API_KEY}/scores/`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
});

const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', () => {
  fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${API_KEY}/scores/`)
    .then((response) => response.json())
    .then((json) => {
      const allData = json.result;
      ul.replaceChildren();
      for(let i = 0; i < allData.length; i += 1){
        let user = allData[i].user;
        let score = allData[i].score;
        const li = document.createElement('li');
        let text = document.createTextNode(`${user}: ${score}`);
        li.appendChild(text);
        ul.appendChild(li);
      }
    })
});
