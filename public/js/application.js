const arrAnswers = [];
// const { cards } = require('../../db/models');

document.querySelector('#mainid').addEventListener('click', async (event) => {
  event.preventDefault();
  console.log(event.target);
  const number = event.srcElement.id;
  // arrAnswers.push(number);
  
  // const responce = await fetch('/input/:id'{
  //   method: 'get',
  //     headers: { 'Content-Type': 'Application/json' },
  //     body: JSON.stringify({ number }),
  // });
  // console.log('!!!!!!!',responce);
  // const responce = await fetch('/rolls', {
  //   method: 'post',
  //   headers: { 'Content-Type': 'Application/json' },
  //   body: JSON.stringify({ number }),
  // });

  // const result = await responce.text();
  // document.querySelector('#value').innerHTML = result;
});
