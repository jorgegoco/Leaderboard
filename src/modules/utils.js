const API_KEY2 = 'QMhictd9pPqlR9FLpNfG';

const dynamicList = obj => {
  const ul = document.querySelector('ul');
  ul.replaceChildren();
  for (let i = 0; i < obj.length; i += 1) {
    const { user } = obj[i];
    const { score } = obj[i];
    const li = document.createElement('li');
    const text = document.createTextNode(`${user}: ${score}`);
    li.appendChild(text);
    ul.appendChild(li);
  }
}

const getResponse = async () => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${API_KEY2}/scores/`);
  const jsonResponse = await response.json();
  const allData = jsonResponse.result;
  dynamicList(allData);
}

export {getResponse as default};