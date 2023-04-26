 //select window image EK203
 const img = document.getElementById('images');

 //click event
 //toggle 
 let toggle = true;
 img.addEventListener('click', function(){
   toggle = !toggle;
   if(toggle){
       img.src = 'img\\EK203.png';
   }else{
       img.src = 'img\\EK203.gif';
   }

 })