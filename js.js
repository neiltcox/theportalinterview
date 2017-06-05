var x = 1
function changecolor() {
  if (x ===1){
    document.getElementById("text").style.color = 'yellow';
    x = 0
  }else{
    document.getElementById("text").style.color = 'blue';
    x= 1
  }
}
