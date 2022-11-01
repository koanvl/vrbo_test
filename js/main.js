let btnSidebareOpen = document.querySelector(".btn-sidebar-open");
let sidebar = document.querySelector("#sidebar");
let btnAsideClose = document.querySelector(".btn-sidebar-close");



  btnSidebareOpen.addEventListener('click', function(){        
    sidebar.classList.add("isVisible");    
  })
  btnAsideClose.addEventListener('click', function(){        
    sidebar.classList.remove("isVisible");    
  })

 
 
 
