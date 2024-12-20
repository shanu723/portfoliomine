// script.js

function validateForm() {
    let isValid = true;
  
    
    document.getElementById("name-error").innerText = "";
    document.getElementById("email-error").innerText = "";
    document.getElementById("message-error").innerText = "";
  
  
    const name = document.getElementById("name").value;
    if (name === "") {
      document.getElementById("name-error").innerText = "Name is required.";
      isValid = false;
    }
  
    
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zAZ]{2,6}$/;
    if (!emailPattern.test(email)) {
      document.getElementById("email-error").innerText = "Please enter a valid email.";
      isValid = false;
    }
  
  
    const message = document.getElementById("message").value;
    if (message.length < 10) {
      document.getElementById("message-error").innerText = "Message must be at least 10 characters long.";
      isValid = false;
    }
  
    return isValid;
  }
  