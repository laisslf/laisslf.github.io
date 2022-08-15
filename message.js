function formValidation() {
    clearerrors();
    var phone =validatePhoneNumber();
    var street = validateStreet(); 
    var city = validateCity();    
    var postalcode = validatePostalCode();
    var fName = validateFirstName();
    var lName = validateLastName();
    var email = validateEmail();
    var message = validateMessage();
    
    result = phone && street && city && postalcode && email && fName && lName && message;  

    return result;
 } 
 function validateFirstName() {
    var errors = document.querySelector("#errors");
    var elem = document.getElementById("first");    
    if(elem.value == ""){
       errors.innerHTML += "<p>*Please fill in your first name.</p>";
       elem.style.border = "2px solid red";
       return false;
    }
    return true;
 }
 function validateLastName() {
    var errors = document.querySelector("#errors");
    var elem = document.getElementById("last");    
    if(elem.value == ""){
        errors.innerHTML += "<p>*Please fill in your last name.</p>";
       elem.style.border = "2px solid red";
       return false;
    }
    return true;
 }
 function validateEmail() {
    var errors = document.querySelector("#errors");
    var elem = document.getElementById("email");  
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  
    if(elem.value == ""){
        errors.innerHTML += "<p>*Please fill in your email.</p>";
       elem.style.border = "2px solid red";
       return false;
    }
       
   if(!elem.value.match(regex)){
      errors.innerHTML += '<p>*Email invalid';
      document.signup.email.style.border = "2px solid red";                
      return false;
  }  
    return true;

 }
 function validateMessage() {
    var errors = document.querySelector("#errors");
    var elem = document.getElementById("message");   
    if(elem.value.length == 0){
        errors.innerHTML += "<p>*Please leave a message.</p>";
       elem.style.border = "2px solid red";
       return false;
    }

    return true;

 }
 
 function validateStreet() {
    var errors = document.querySelector("#errors");
    var allAlpha = true;
    var elem = document.getElementById("street");
    var inputValue = elem.value.trim();
    inputValue = inputValue.toUpperCase();
    for (var i = 0; i < inputValue.length; i++) {       
         if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z" )  { allAlpha = false; }    }  
    if (!allAlpha){
       errors.innerHTML += "<p>*Street name: cannot contain digits.</p>";
       elem.style.border = "2px solid red";
       return false;
    } 
    return true;
 } 
 function validateCity() {
    var errors = document.querySelector("#errors");
    var allAlpha = true;
    var elem = document.getElementById("city");
    var inputValue = elem.value.trim();
    inputValue = inputValue.toUpperCase();
    for (var i = 0; i < inputValue.length; i++) {       
         if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z" )  { allAlpha = false; }    }  
    if (!allAlpha){
       errors.innerHTML += "<p>*City name: cannot contain digits.</p>";
       elem.style.border = "2px solid red";
       return false;
    } 
    return true;
 } 
 
 function clearerrors() {
    document.querySelector("#errors").innerHTML = "";
    document.signup.phone.style.border = "1px solid black";
    document.signup.postalcode.style.border = "1px solid black";
    document.signup.city.style.border = "1px solid black";
    document.signup.street.style.border = "1px solid black";
    document.signup.first.style.border = "1px solid black";
    document.signup.last.style.border = "1px solid black";
    document.signup.message.style.border = "1px solid black";
    document.signup.email.style.border = "1px solid black";
    document.signup.email.style.border = "1px solid black";
    
     
 }

 function showErrors(messages) {      
    document.getElementById('errors').innerHTML += messages;

 }  

function validatePhoneNumber() {
    var errors = document.querySelector("#errors");
    var elem = document.getElementById("phone");    
    var regex = /^(\([0-9]{3}\))(\s{1})([0-9]{3})((\-){1})([0-9]{4})$/;
    if(elem.value != ""){
        if(!elem.value.match(regex)){
            errors.innerHTML += '<p>*Phone Number format: (xxx) xxx-xxxx </p>';
            document.signup.phone.style.border = "2px solid red";                
            return false;
        }        
    }
    return true;
}
function validatePostalCode() {
    var errors = document.querySelector("#errors");
    var elem = document.getElementById("postalcode");
    var input = elem.value.trim().toUpperCase();
    var regex = /^([A-Z]{1})([0-9]{1})([A-Z]{1})(\s{1})([0-9]{1})([A-Z]{1})([0-9]{1})$/
    if(input != ""){
        if(!input.value.match(regex)){
            errors.innerHTML += '<p>*Postal Code: only Canadian format allowed "N1N 1N1"</p>';
            document.signup.postalcode.style.border = "2px solid red";
            return false;
        }        
    } 
    return true;
}

