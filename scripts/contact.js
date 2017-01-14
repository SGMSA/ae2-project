
function contact() {
    var myForm = document.getElementById("contact");
    myForm.addEventListener("submit", validateForm);
}


function validateForm(event) {
    var formValid = true;
    var myForm = document.getElementById("contact");
    // Applys validation for the first name input
    if (myForm.firstName.value == "") {
        formValid = false;
        document.getElementById("fName").style.backgroundColor = "#FF9292"; //Gives invalid input a coloured background
        document.getElementById("errorFirstName").style.display = "block"; // Displays the red cross if invalid
        
        event.preventDefault();
    } else {

        document.getElementById("fName").style.backgroundColor = "#fff"; // Makes valid input background white
        document.getElementById("errorFirstName").style.display = "none"; // Removes red cross
        document.getElementById("tickFirstName").style.display = "block"; // Displays green tick if valid
    }
    // Applys validation for the last name input 
    if (myForm.lastName.value == "") {
        formValid = false;
        
        document.getElementById("lName").style.backgroundColor = "#FF9292";
        document.getElementById("errorLastName").style.display = "block";
        
        event.preventDefault();
    } else {
    
        document.getElementById("lName").style.backgroundColor = "#fff";
        document.getElementById("errorLastName").style.display = "none";
        document.getElementById("tickLastName").style.display = "block";
    }
    // Applys validation for the email input
    if (myForm.userEmail.value == "") {
        formValid = false;

        document.getElementById("eMail").style.backgroundColor = "#FF9292";
        document.getElementById("errorEmail").style.display = "block";
        
        event.preventDefault();
    } else {
        document.getElementById("eMail").style.backgroundColor = "#fff";
        document.getElementById("errorEmail").style.display = "none";
        document.getElementById("tickEmail").style.display = "block";
    }
    // Applys validation for the message input
    if (myForm.userMessage.value == "") {
        formValid = false;
        
        document.getElementById("uMessage").style.backgroundColor = "#FF9292";
        document.getElementById("errorMessage").style.display = "block";
        
        event.preventDefault();
    } else {
        document.getElementById("uMessage").style.backgroundColor = "#fff";
        document.getElementById("errorMessage").style.display = "none";
        document.getElementById("tickMessage").style.display = "block";
    }
}