//select window image VY8032
const img = document.getElementById('images');

//click event
//toggle 
let toggle = true;
img.addEventListener('click', function(){
  toggle = !toggle;
  if(toggle){
      img.src = 'img\\lisbon.png';
  }else{
      img.src = 'img\\lisbon.gif';
  }

})


function runRadio() {
  var audio = document.getElementById('myaudio');
  
  audio.volume = 1;
  audio.src = 'sound\\cabin.mp3';
  audio.preload = none;
  audio.play();
}