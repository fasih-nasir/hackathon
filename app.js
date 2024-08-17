// Top header date
import {auth, getDocs, updateDoc,doc, deleteDoc ,signOut, collection, addDoc, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, provider, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "./files/config.mjs"
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
// console.log(window.scrollY);

if(window.scrollY > 200 ){
    nav.classList.add("topnav")
}
else{
    nav.classList.remove("topnav")
}
})


// var  create1=document.getElementById("cret");

// create1.addEventListener("click", (r)=>{

// var email0=document.getElementById("email0").value;
// var password0=document.getElementById("pass0").value;
// var name0=document.getElementById("name0").value;
// var dob0=document.getElementById("dob").value;
// var gender0=document.getElementById("gender").value;
// var age0=document.getElementById("age").value;
// var country0=document.getElementById("country").value;
// var profession0=document.getElementById("profession").value;
// try {
//     const date = new Date();
//       const docRef =  addDoc(collection(db, "hack"), {
//         name: name0,
//         email:email0,
//       dob:dob0,
//       gender:gender0,
//       age:age0,
//       profession:profession0,
//       country:country0,
//       day:date.toString().split(" ").slice(0,5)
  
//       });
//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
// createUserWithEmailAndPassword(auth, email0, password0)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     alert("account is created")
//     // ...
// })
// .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
// });

// })

