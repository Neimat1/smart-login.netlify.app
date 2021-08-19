var userNameInput = document.getElementById("userName");
var userEmailInput = document.getElementById("userEmail");
var userPassInput = document.getElementById("userPass");

// console.log(userName,userEmail,userPass);
// var users=[];
var users;
//there is no data stored 
if(localStorage.getItem("usersList"==null)){
    var users=[];
}
else{
    users = JSON.parse(localStorage.getItem("usersList"));
}
function addUser(){
    if(!checkIsEmpty()){
        var user = {
            name:userNameInput.value,
            email:userEmailInput.value,
            password:userPassInput.value,
        }
        users.push(user);
        localStorage.setItem("usersList",JSON.stringify(users));
        displaySucess()
        // clearForm();
    }
    else{
        displayRequired();
    }
   
   
};

function clearForm(){
   userNameInput.value="";
   userEmailInput.value="";
   userPassInput.value="";
//    console.log("Done ya m3lm");
};
function checkIsEmpty(){
    if(userNameInput.value!="" && userPassInput.value !="" && userEmailInput.value !=""){
        return false;
    }
    else{
        return true;
    }
}
(function welcome(){
    document.getElementById("welcome").innerHTML=`<h1 class='  text-info opacity-75'>Welcome ya 3m</h1>`;
})();
function displayRequired(){
    document.getElementById("required").innerHTML=`<span class=' text-danger'>All inputs is required</span>`;
};
function displaySucess(){
    document.getElementById("required").innerHTML=`<span class=' text-success'>Success</span>`;
};

