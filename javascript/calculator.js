function appendNum(num){
    document.getElementById("display").value += num;
}
function appendOp(op){
    document.getElementById("display").value += op;
}
function clearDisplay(){
    document.getElementById("display").value += "";
}
function displayResult(){
  try{  document.getElementById("display").value = eval(document.getElementById("display").value);
}catch(e){
    alert("Invalid Expression");
}
}