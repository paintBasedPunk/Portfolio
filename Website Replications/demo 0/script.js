// --- Change Background Image On Scroll ---
let bg_layer = document.getElementById('bg-layer')

window.addEventListener('scroll', changeBackground)

function changeBackground(){
  if (window.pageYOffset < 1*window.innerHeight){
    bg_layer.style.backgroundImage = "url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
  }
  
  if (window.pageYOffset > 1*window.innerHeight){
    bg_layer.style.backgroundImage = "url('https://images.unsplash.com/photo-1508287459906-37445322fdf6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
  }
}

// --- Accordion Menu ---
let item = document.getElementsByClassName('item');
let sub_menu = document.getElementsByClassName('sub-menu');
let list = document.getElementsByClassName('list')

// convert button nodeList to an array
var array = Array.from(item)

// click event for every element
for(n = 0; n < item.length; n++){
  item[n].addEventListener('click', openMenu);
}

// open menu
function openMenu(e){
  var index = array.indexOf(e.target)
  
  // className toggle    
  item[index].classList.toggle('active')
    
  
  if(item[index].className === 'item active'){
    // increase size of sub menu
    sub_menu[index].style.height = list[index].scrollHeight + 'px'

    // display sub menu list
    list[index].style.opacity = 1
    list[index].style.transition = 'opacity 200ms ease-in-out 400ms'
  }
  else{
    // decrease size of sub menu
    sub_menu[index].style.height = 0 + 'px'

    // hide sub menu list
    list[index].style.opacity = 0
    list[index].style.transition = 'opacity 100ms ease-in-out'
  }
}