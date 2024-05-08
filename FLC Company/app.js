function showMenu(){
    let navLinks = document.getElementById("navLinks")
    navLinks.style.left = "-19%";
    
}
function hideMenu(){
    let navLinks = document.getElementById("navLinks")
    navLinks.style.left = "-100%";
}

function validateform() {
event.preventDefault();

let name = document.getElementById('name').value.trim();
let email = document.getElementById('email').value.trim();
let surname = document.getElementById('surname').value.trim();
let country = document.getElementById('country').value.trim();
let number = document.getElementById('number').value.trim()

if (name === "" || 
surname === "" || 
email === "" || 
number === "" ||
country === ""){
alert("Please, fill all fields");
return;
}


window.location.href = 'king.html';
}
