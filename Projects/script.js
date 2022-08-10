let error = false;
// ============= Validation for first name ==============
function validFirstName(){
    let firstNameInput = document.getElementById('first-name').value
    if(firstNameInput.length >= 1 && 
       firstNameInput.match(/^[A-Za-z]+$/)
    ){
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
        // error = false;
    }    
    else{
        document.getElementById('first-name-valid').style.display = 'none'
        document.getElementById('first-name-invalid').style.display = 'block'
        error = true;
    }
}
// ============= Validation for last name ==============
function validLastName(){
    let lastNameInput = document.getElementById('last-name').value
    if(lastNameInput && lastNameInput.match(/^[a-zA-Z]+$/)){  // If lastNameInput is empty String it returns " Falsy " means it executes else condition...
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
        // error = false;
    }
    else{
        document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById('last-name-invalid').style.display = 'block'
        error = true;
    }
}

// ============= Validation for MAIL ID ==============
function validEmail(){
    let emailInput = document.getElementById('email').value
    //  --> Whether exists (contains atleast one letter)
    //  --> @
    //  --> .
    //  --> After last '.' there should be atleast 2 characters(.com, .co, .in)
    //  --> first character should not be '@'
    if(emailInput && 
        emailInput.includes('@') &&
        emailInput.includes('.') &&
        emailInput.indexOf('@') != 0 &&
        emailInput.lastIndexOf('.') <= emailInput.length - 3
        ){
         document.getElementById('email-valid').style.display = 'block'
         document.getElementById('email-invalid').style.display = 'none'
        //  error = false;
     }
     else{
         document.getElementById('email-invalid').style.display = 'block'
         document.getElementById('email-valid').style.display = 'none'
         error = true;
     }
}

// ============= Validation for City ==============
function validCity(){
    let cityInput = document.getElementById('city').value
    if(cityInput.length >= 3 && 
       cityInput.match(/^[a-zA-Z]+$/) 
        ){
        document.getElementById('city-valid').style.display = 'block'
        document.getElementById('city-invalid').style.display = 'none'
        // error = false;
    }
    else{
        document.getElementById('city-invalid').style.display = 'block'
        document.getElementById('city-valid').style.display = 'none'
        error = true;
    }
}

// ============= Validation for State ==============
function validState(){
    let stateInput = document.getElementById('state').value
    if(stateInput != 'none'){
        document.getElementById('state-valid').style.display = 'block'
        document.getElementById('state-invalid').style.display = 'none'
        // error = false;
    }
    else{
        document.getElementById('state-invalid').style.display = 'block'
        document.getElementById('state-valid').style.display = 'none'
        error = true;
    }
}

// ============= Validation for PinCode ==============
function validPinCode(){
    let pincodeInput = document.getElementById('pincode').value
    if(pincodeInput.length == 6 && 
    // isNaN(pincodeInput) == false 
       pincodeInput.match(/^[0-9]+$/) 
    // pincodeInput.match(/^[a-zA-Z]+$/) === null
       ){
        document.getElementById('pincode-valid').style.display = 'block'
        document.getElementById('pincode-invalid').style.display = 'none'
        // error = false;
    }
    else{
        document.getElementById('pincode-invalid').style.display = 'block'
        document.getElementById('pincode-valid').style.display = 'none'
        error = true;
    }
}

// ============= Validation for Terms And Conditions ==============
function validtnC(){
    let tnCInput = document.getElementById('tnC').checked
    if(tnCInput){
        document.getElementById('tnC-invalid').style.display = 'none'
    //    error = false;
    }
    else{
        document.getElementById('tnC-invalid').style.display = 'block'
        error = true;
    }
}
function validjoin(){
    let tnCInput = document.getElementById('join').checked
    if(tnCInput){
        document.getElementById('join-invalid').style.display = 'none'
    //    error = false;
    }
    else{
        document.getElementById('join-invalid').style.display = 'block'
        error = true;
    }
}

// ============= Validation for SUBMIT Button ==============
function validate(){
    validFirstName()
    validLastName()
    validEmail()
    validCity()
    validState()
    validPinCode()
    validtnC()
    validjoin()
    if(!error){
        alert("Your Application Form is submitted Successfully...!")
        document.getElementById('first-name').value = ''
        document.getElementById('first-name-valid').style.display = 'none'
        document.getElementById('last-name').value = ''
        document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById('email').value = ''
        document.getElementById('email-valid').style.display = 'none'
        document.getElementById('city').value = ''
        document.getElementById('city-valid').style.display = 'none'
        document.getElementById('state').value = 'none'
        document.getElementById('state-valid').style.display = 'none'
        document.getElementById('pincode').value = ''
        document.getElementById('pincode-valid').style.display = 'none'
        document.getElementById('tnC').checked = false
    }
    else{
        error = false;
        alert("Please fill with correct details")
    }
}

// ============= Cheching for errors after clicking submit button if any ===========

