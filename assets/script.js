function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn','.FN')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  //select window image
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
