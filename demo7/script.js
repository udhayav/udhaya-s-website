window.addEventListener('load',horaire)
function horaire(){
  var date = new Date();
  
  var day= date.getDay();
  var semaine = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  var month = date.getMonth();
  var mois = ["JAN","FEB","MAR","APR","MAY","JUN","JULY","AUG","SEP","OCT","NOV","DEC"];
  var dateNum= date.getDate();
  var hour = date.getHours();
  var min = date.getMinutes();
  var ampm;
  var seconds= date.getSeconds();
  if(hour>12){
    ampm="PM";
  
  }else{
    ampm="AM";
  }
  hour = hour % 12;
  if(hour<10){
    hour = '0' + hour;
  }
  
  console.log(hour);
  
  document.getElementById("month").innerHTML = mois[month];
  document.getElementById("date").innerHTML = dateNum;
  document.getElementById("week").innerHTML = semaine[day];
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = min;
  document.getElementById("ampm").innerHTML = ampm;
  document.getElementById("seconds").innerHTML = seconds;
  setTimeout(horaire,100);
  
}
