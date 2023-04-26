//select window image 6E219
const img = document.getElementById('images');

//click event
//toggle 
let toggle = true;
img.addEventListener('click', function(){
  toggle = !toggle;
  if(toggle){
      img.src = 'img\\6E219.png';
  }else{
      img.src = 'img\\6E219.gif';
  }

})