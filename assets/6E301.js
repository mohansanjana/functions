 //select window image 6E301
 const img = document.getElementById('images');

 //click event
 //toggle 
 let toggle = true;
 img.addEventListener('click', function(){
   toggle = !toggle;
   if(toggle){
       img.src = 'img\\6E301.png';
   }else{
       img.src = 'img\\6E301.gif';
   }

 })