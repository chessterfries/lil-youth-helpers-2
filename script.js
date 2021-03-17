var firstName, lastName, email, message;
firstName = document.getElementById("first-name");
lastName = document.getElementById("last-name");
email = document.getElementById("email-text");
message = document.getElementById("message");

function submitContactForm() {
    if(firstName.value === "") {
        alert("Some Values in the form are incomplete. Please fill them out, then try again.");
    }
    else if(lastName.value === "") {
        alert("Some Values in the form are incomplete. Please fill them out, then try again.");
    }
    else if(email.value === "") {
        alert("Some Values in the form are incomplete. Please fill them out, then try again.");
    }
    else if(message.value === "") {
        alert("Some Values in the form are incomplete. Please fill them out, then try again.");
    }
    else {
        alert("Thanks for contacting us! We will get back to you as soon as we can!");
    }
}

var checkbox1 = document.getElementById("job-interest-checkbox-1");
var checkbox2 = document.getElementById("job-interest-checkbox-2");
var checkbox3 = document.getElementById("job-interest-checkbox-3");
var checkbox4 = document.getElementById("job-interest-checkbox-4");
var checkbox5 = document.getElementById("job-interest-checkbox-5");
var checkbox6 = document.getElementById("job-interest-checkbox-6");
var checkbox7 = document.getElementById("job-interest-checkbox-7");
var checkbox8 = document.getElementById("job-interest-checkbox-8");
var checkbox9 = document.getElementById("job-interest-checkbox-9");
var checkbox10 = document.getElementById("job-interest-checkbox-10");
var otherText = document.getElementById("other-text");

var studentName = document.getElementById("student-name");
var studentAge = document.getElementById("student-age");
var male = document.getElementById("male");
var female = document.getElementById("female");
var studentEmail = document.getElementById("student-email");
var yesTransportation = document.getElementById("yes-transportation");
var noTransportation = document.getElementById("no-transportation");
var parentName = document.getElementById("parent-name");
var parentEmail = document.getElementById("parent-email");
var address = document.getElementById("address");
var contactNumber = document.getElementById("contact-number");
var yesHealthConcerns = document.getElementById("yes-health-concerns");
var noHealthConcerns = document.getElementById("no-health-concerns");
var healthConcernsExplanation = document.getElementById("health-concerns-explanation");
var agreeTermsConditions = document.getElementById("agree-terms-conditions");
var initial = document.getElementById("initial");

function submitJoinTeamForm() {
    if(checkbox1.checked === true) {
        checkbox2.required = false;
        checkbox3.required = false;
        checkbox4.required = false;
        checkbox5.required = false;
        checkbox6.required = false;
        checkbox7.required = false;
        checkbox8.required = false;
        checkbox9.required = false;
        checkbox10.required = false;
    }
    else if(checkbox2.checked === true) {
        checkbox1.required = false;
        checkbox3.required = false;
        checkbox4.required = false;
        checkbox5.required = false;
        checkbox6.required = false;
        checkbox7.required = false;
        checkbox8.required = false;
        checkbox9.required = false;
        checkbox10.required = false;
    }
    else if(checkbox3.checked === true) {
        checkbox1.required = false;
        checkbox2.required = false;
        checkbox4.required = false;
        checkbox5.required = false;
        checkbox6.required = false;
        checkbox7.required = false;
        checkbox8.required = false;
        checkbox9.required = false;
        checkbox10.required = false;
    }
    else if(checkbox4.checked === true) {
        checkbox1.required = false;
        checkbox2.required = false;
        checkbox3.required = false;
        checkbox5.required = false;
        checkbox6.required = false;
        checkbox7.required = false;
        checkbox8.required = false;
        checkbox9.required = false;
        checkbox10.required = false;
    }
    else if(checkbox5.checked === true) {
        checkbox1.required = false;
        checkbox2.required = false;
        checkbox3.required = false;
        checkbox4.required = false;
        checkbox6.required = false;
        checkbox7.required = false;
        checkbox8.required = false;
        checkbox9.required = false;
        checkbox10.required = false;
    }
    else if(checkbox6.checked === true) {
        checkbox1.required = false;
        checkbox2.required = false;
        checkbox3.required = false;
        checkbox4.required = false;
        checkbox5.required = false;
        checkbox7.required = false;
        checkbox8.required = false;
        checkbox9.required = false;
        checkbox10.required = false;
    }
    else if(checkbox7.checked === true) {
        checkbox1.required = false;
        checkbox2.required = false;
        checkbox3.required = false;
        checkbox4.required = false;
        checkbox5.required = false;
        checkbox6.required = false;
        checkbox8.required = false;
        checkbox9.required = false;
        checkbox10.required = false;
    }
    else if(checkbox8.checked === true) {
        checkbox1.required = false;
        checkbox2.required = false;
        checkbox3.required = false;
        checkbox4.required = false;
        checkbox5.required = false;
        checkbox6.required = false;
        checkbox7.required = false;
        checkbox9.required = false;
        checkbox10.required = false;
    }
    else if(checkbox9.checked === true) {
        checkbox1.required = false;
        checkbox2.required = false;
        checkbox3.required = false;
        checkbox4.required = false;
        checkbox5.required = false;
        checkbox6.required = false;
        checkbox7.required = false;
        checkbox8.required = false;
        checkbox10.required = false;
    }
    else if(checkbox10.checked === true) {
        checkbox1.required = false;
        checkbox2.required = false;
        checkbox3.required = false;
        checkbox4.required = false;
        checkbox5.required = false;
        checkbox6.required = false;
        checkbox7.required = false;
        checkbox8.required = false;
        checkbox9.required = false;
        otherText.required = true;
    }

    if(studentName.value === "") {
        alert("Some Values in the form are incomplete. Please fill them out, then try again.");
    }
    else if(studentEmail.value === "") {
        alert("Some Values in the form are incomplete. Please fill them out, then try again.");
    }
    else if(parentName.value === "") {
        alert("Some Values in the form are incomplete. Please fill them out, then try again.");
    }
    else if(parentEmail.value === "") {
        alert("Some Values in the form are incomplete. Please fill them out, then try again.");
    }
    else if(address.value === "") {
        alert("Some Values in the form are incomplete. Please fill them out, then try again.");
    }
    else if(contactNumber.value === "") {
        alert("Some Values in the form are incomplete. Please fill them out, then try again.");
    }
    else if(initial.value === "") {
        alert("Some Values in the form are incomplete. Please fill them out, then try again.");
    }
    else if(checkbox1.checked === false && checkbox2.checked === false && checkbox3.checked === false && checkbox4.checked === false && checkbox5.checked === false && checkbox6.checked === false && checkbox7.checked === false && checkbox8.checked === false && checkbox9.checked === false && checkbox10.checked === false) {
        alert("Some Values in the form are incomplete. Please fill them out, then try again.");
    }
    else if(male.checked === false && female.checked === false) {
        alert("Some Values in the form are incomplete. Please fill them out, then try again.");
    }
    else if(yesHealthConcerns.checked === false && noHealthConcerns.checked === false) {
        alert("Some Values in the form are incomplete. Please fill them out, then try again.");
    }
    else if(yesTransportation.checked === false && noTransportation.checked === false){
        alert("Some Values in the form are incomplete. Please fill them out, then try again.");
    }
    else if(noTransportation.checked === true) {
        alert("You must have a source of transportation in order to submit this form.");
    }
    else if(agreeTermsConditions.checked === false) {
        alert("Some Values in the form are incomplete. Please fill them out, then try again."); 
    }
    else {
        alert("You have successfully joined our team! From now onwards, you will recieve updates from Lil' Youth Helpers about your job(s).");
    }
    
    if(noTransportation.checked === true) {
        noTransportation.setCustomValidity("You Must Have A Source Of Transportation");
    }
    else if(yesTransportation.checked === true) {
        noTransportation.setCustomValidity("");
    }
}

function startChatAlert() {
    var x = confirm('Are you sure you want to start your chat session?');
    if(x === true) {
        location.href = 'chat.html';
    }
    else {
        location.href = '#';
    }
}

function leaveChatAlert() {
    var x = confirm("Are you sure you want to leave the chat?");
    if(x === true) {
        location.href = 'contact-us.html';
    }
}

function togglePassword() {
    var x = document.getElementById("password");
    if(x.type === "text") {
        x.type = "password";
    }
    else {
        x.type = "text";
    }
}

function togglePassword2() {
    var x = document.getElementById("password-2");
    if(x.type === "text") {
        x.type = "password";
    }
    else {
        x.type = "text";
    }
}

function showHelpers() {
    if(document.getElementById("zip-code").value === "") {
        document.getElementById("helpers").style.display = "none";
    }
    else {
        document.getElementById("zip-code").style.display = "block";
    }
}