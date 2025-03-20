// var a = document.querySelector("h1")
// a.innerHTML = "I am Ishma , BCA Student"
// a.style.color="pink"
// console.log(a)

// var b = document.querySelectorAll(".header")
// for(var i = 0; i<b.length;i++){
//     b[i].style.color = "blue"
//     b[i].style.backgroundColor="yellow"
// }
// console.log(b)

// a.addEventListener("click",function(){
//     alert("Welcome")
//     console.log("Hi")
//     this.innerHTML="I am changed"
// })

// var c = document.querySelector(".light")
// var count = 0;
// c.addEventListener("click",function(){
//    count++;

//     if (count % 2 == 0){
//         c.style.backgroundColor="grey"
//     }else{
//         c.style.backgroundColor="yellow"
//     }
// })


var c = document.querySelector(".light")
c.addEventListener("click",function(){
    c.classList.toggle("on");
})