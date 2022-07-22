document.querySelector('#mainid').addEventListener('click', async (event) => {
  event.preventDefault();
  const number = event.path.;
  console.log('!!!!!!!', number);
  // const responce = await fetch('/rolls', {
  //   method: 'post',
  //   headers: { 'Content-Type': 'Application/json' },
  //   body: JSON.stringify({ number }),
  // });

  // const result = await responce.text();
  // document.querySelector('#value').innerHTML = result;
});
