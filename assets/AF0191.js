//select window image AF0191
const img = document.getElementById('images');

//click event
//toggle 
let toggle = true;
img.addEventListener('click', function(){
  toggle = !toggle;
  if(toggle){
      img.src = 'img\\AF0191.png';
  }else{
      img.src = 'img\\AF0191.gif';
  }

})