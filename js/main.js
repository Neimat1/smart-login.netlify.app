
var userNameInput = document.getElementById("userName");
var userEmailInput = document.getElementById("userEmail");
var userPassInput = document.getElementById("userPass");

var signEmailInput = document.getElementById("signEmail");
var signPassInput = document.getElementById("signPass");

localStorage.setItem("home",JSON.stringify("home.html"));

// var users=[];
var users ;
//there is no data stored 
if(localStorage.getItem("usersList")==null){
    var users=[];
}
else{
    users = JSON.parse(localStorage.getItem("usersList"));
}
function addUser(){
    if(!checkIsEmpty()){
        if(exist()){
            displayExist();
        }
        else{
        var user = {
            name:userNameInput.value,
            email:userEmailInput.value,
            password:userPassInput.value,
        }
        
        users.push(user);
        localStorage.setItem("usersList",JSON.stringify(users));
        displaySucess()
        clearForm();
    }
        
    }
    else{
        displayRequired();
    }
   
   
};
function exist(){
    for(var i=0;i<users.length;i++){
        if(users[i].email==userEmailInput.value ){
            return true; 
        }
    }
    return false;
}
function searchUser(){
    if(checkIsEmptySign()){
        displayRequiredSign();
        console.log("5raba 2nta");
    }
    else{
        for(var i=0;i<users.length;i++){
            if(users[i].email==signEmailInput.value && users[i].password==signPassInput.value){
                console.log(users[i].name);
                location.href=JSON.parse( localStorage.getItem("home"));
               
                console.log("3lam");
            }
            else{
                displayIncorrect();
            }
        }
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
function checkIsEmptySign(){
    if(signEmailInput.value =="" || signPassInput.value =="" ){
        return true;
    }
    else{
        return false;
    }
}

// email already exists
function displayRequired(){
    document.getElementById("required").innerHTML=`<span class=' text-danger'>All inputs is required</span>`;

};
function displayExist(){
    document.getElementById("required").innerHTML=`<span class=' text-danger'>email already exists</span>`;

};
function displayIncorrect(){
    document.getElementById("result-sign").innerHTML=`<span class=' text-danger'>incorrect email or password</span>`;
};
function displayRequiredSign(){
    document.getElementById("result-sign").innerHTML=`<span class=' text-danger'>All inputs is required</span>`;
};
function displaySucess(){
    document.getElementById("required").innerHTML=`<span class=' text-success'>Success</span>`;
};
