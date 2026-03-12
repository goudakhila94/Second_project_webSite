const toggle = document.getElementById("themeToggle");

toggle.onclick = function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark"))
   {
       toggle.innerHTML="☀";
}else{
toggle.innerHTML="🌙";
}

}

function validateForm() {

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let event = document.getElementById("event").value;

if(name === "" || email === ""){
alert("Please fill all required fields");
return false;
}

if(event === "Select Event Type"){
alert("Please select an event type");
return false;
}

alert("Your event booking has been submitted successfully!");

return true;
}
