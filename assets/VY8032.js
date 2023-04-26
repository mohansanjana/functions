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