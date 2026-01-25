const form = document.querySelector('#formTweet');
const ul = document.querySelector('#tweets');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // この書き方だとメンテナンス性低い
  // const userName = document.querySelectorAll("input")[0].value;
  // const userText = document.querySelectorAll("input")[1].value;
  const userName = form.elements.userName.value;
  const userText = form.elements.userText.value;
  addTweet(userName, userText);

  form.elements.userName.value = '';
  form.elements.userText.value = '';
});

const addTweet = (userName,text) => {
  const li = document.createElement('li');
  const bTag = document.createElement('b');
  bTag.append(userName);
  li.append(bTag);
  const addText = `: ${text}`;
  li.append(addText);
  ul.appendChild(li);
}
