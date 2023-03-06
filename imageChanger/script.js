var image= document.getElementsByClassName("collection");
console.log(image);
var count =0;
image[count].style.display = "block";
function change(num){
  for(i=0;i<image.length;i++){
    image[i].style.display = "none";
   
  }
  image[num].style.display = "block";
}
