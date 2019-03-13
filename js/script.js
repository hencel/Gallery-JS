var list = document.querySelectorAll('li');
var body = document.querySelector('body');

for(var i=0; i<list.length; i++) {
  list[i].addEventListener('click', gall);
}

function gall() {
  console.log(this.querySelector('img').getAttribute('src'));
  var fullScreen = document.createElement('div');
  var imgNew = document.createElement('img');
  
  fullScreen.classList.add('fullScreen');
  imgNew.setAttribute('src', './' + this.querySelector('img').getAttribute('src'));

  body.appendChild(fullScreen);
  fullScreen.appendChild(imgNew);
  imgNew.addEventListener('click', function() {
    this.parentElement.parentElement.removeChild(fullScreen);
  })
}