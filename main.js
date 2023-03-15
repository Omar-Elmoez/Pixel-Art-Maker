document.querySelector('#sizePicker').addEventListener('click',
function (evt){
  if (evt.target.type === 'submit') {
    //remove previous table
    document.querySelector('#pixelCanvas').innerHTML = ' ';
    evt.preventDefault(); //stop page from refreshing
    let row = document.querySelector('#inputHeight').value;
    let col = document.querySelector('#inputWidth').value;
    print(row, col);
  }
})

function print(x, y){
    for (var i = 0; i < x; i++) {
    let queue = document.createElement('tr');
    for (var j = 0; j < y; j++) {
      let ele = document.createElement('td');
      queue.appendChild(ele);
    }
  document.querySelector('#pixelCanvas').appendChild(queue);
  }
}
document.querySelector('#pixelCanvas').addEventListener('click',
function (stor){
  if (stor.target.nodeName === 'TD') {
    stor.target.style.backgroundColor = document.
    querySelector('#colorPicker').value;
    }})
