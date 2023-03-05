var userInput =  document.getElementById("userInput");
var allItems = document.getElementById("allItems");
var pencil = document.getElementById("pencil");
userInput.addEventListener("keydown", function(event){
if(event.key== "Enter"){
    addItem();
  
  }
})

pencil.addEventListener("click",function(){
  allItems.innerHTML="";
})
function addItem(){
  var h2 = document.createElement("h2");
  h2.innerHTML = "- " + userInput.value;
  h2.addEventListener("click",function(){
    h2.style.textDecoration ="line-through";
    
  })
  allItems.insertAdjacentElement("beforeend",h2);
  userInput.value=""; 
}
