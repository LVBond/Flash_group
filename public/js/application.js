document.querySelector('#mainid').addEventListener('click', async (event) => {
  const { answerId } = event.target.dataset;
  const { questionId } = event.target.closest('.cardList').dataset;

  console.log({ answerId, questionId });
  // const number = event.srcElement.id;
  // arrAnswers.push(number);
  alert('Правильный ответ вы не узнаете никогда!');
  // const responce = await fetch('/input')

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
