function removeDisplay(){
  document.getElementById("display").value="";
}
function DeletetoDisplay(value){
    var currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}
function appandDisplay(value)
{
   document.getElementById("display").value += value;
}
function answer() { 
   var result = eval(document.getElementById("display").value);
   document.getElementById("display").value = result;
}
