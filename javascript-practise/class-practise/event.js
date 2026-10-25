function changeText(){
   let ans= document.getElementById("ans");
   ans.textContent= "Hello World!";
}
   let ans= document.getElementById("ans");
ans.removeEventListener("click", changeText);