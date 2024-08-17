// Top header date

var date=new Date();
document.getElementById("dat").innerHTML=`${date.toDateString()}`

setTimeout(() => {
    var loder=document.getElementById("lo")
    var type=document.getElementById("type")
   loder.classList.add("add1")
   type.classList.add("add1")
}, 
// 3500
);
window.addEventListener("scroll",()=>{
var nav=document.querySelector(".navbc");
console.log(window.scrollY);

if(window.scrollY > 200 ){
    nav.classList.add("topnav")
}
else{
    nav.classList.remove("topnav")
}
})
