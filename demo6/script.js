var count = 0;
var names = ["luffy","zoro","sanji","nami","brook"];

function navigation(num){
  count+=num;
  var image = document.getElementsByClassName("images");
  console.log(image);
  for(i=0;i<image.length;i++)
  {
    image[i].style.display="none";
   
  }
  if(count > image.length-1)
  {
    count=0
  }
  if(count<0)
  {
    count= image.length -1;
  }
  image[count].style.display="block";
  document.getElementById("name").innerHTML = names[count];
}