const submitBtn= document.getElementById("submitBtn");
const nameError=document.getElementById("nameError");
const emailError=document.getElementById("emailError");
const passwordError=document.getElementById("passwordError");
const form=document.querySelector("form");
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(validateName() && validateEmail() && validatePassword()){
        alert("Form is Submitted Successfully");
        form.reset();
        nameError.innerHTML="";
        emailError.innerHTML="";
        passwordError.innerHTML="";
    }
});
function validateName(){
    let name=document.getElementById("name").value;
    if(name.length==0){
        nameError.innerHTML="Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/ )){
        nameError.innerHTML="Write full Name";
        return false;
    }
    nameError.innerHTML="";
    return true;
}
function validateEmail(){
    let email=document.getElementById("email").value;
    if(email.length==0){
        emailError.innerHTML="Enter valid Email";
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML="Write correct Email";
        return false;
    }
    emailError.innerHTML="";
    return true;
}
function validatePassword(){
    let password=document.getElementById("password").value;
    if(password.length==0){
        passwordError.innerHTML="Password is required";
        return false;
    }
    if(!password.match(/^(?=.*\d)(?=.([a-z]))(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
        passwordError.innerHTML="Password should contain 1 Uppercase,1 lowercase , 1 digit & 1alphabet 1special character";
        return false;
    }
    passwordError.innerHTML="";
    return true;
}