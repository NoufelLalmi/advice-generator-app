const btn = document.getElementById('button');
const qt = document.getElementById('qoute');
const qt_id = document.getElementById('qoute_id');

getData()

btn.addEventListener('click' , getData);

function getData(){
  qt.innerText = 'Loading...'
  qt_id.innerText = 'Loading...'
  fetch('https://api.adviceslip.com/advice')
  .then((response) => response.json())
  .then((data) => {
    qt.innerText = '“' + data.slip.advice + '”'
    qt_id.innerText ='#' + data.slip.id
  });
}