"use strict";

function validateLogin() {
    fetch('./database.json')
        .then(function(resp){
            return resp.json();
        })
        .then(function(data){
            console.log(data);
        });
    /*============================================================
    * Extracting values from the inner function validate function
    */
    const username = usernameFunc();
    const password = passwordFunc();
    const error = errorFunc();

    /*=====================================================
    * The inner functions
    * Getting values from the login.html
    */
    function usernameFunc() {
        return document.forms["loginForm"]["username"].value;
    }

    function passwordFunc() {
        return document.forms["loginForm"]["password"].value;
    }

    function errorFunc() {
        return document.getElementById("error");
    }
    /*====================================================*/

    var e_msg = "";


    if(username.trim() == "" || password.trim() == ""){
        e_msg = "Inputs cannot be empty"; //Error message
        setInterval( ()=> { 
            error.innerHTML = e_msg;
            error.classList.remove("error");
            error.classList.add("error_show");
        }, 100);
        return false;
    }else{
        if(username != result){
            console.log(username);
        }
    }
    return true;
}

function validateRegister(){
    /*============================================================
    * Extracting values from the inner function validate function
    */
   const firstname = firstnameFunc();
   const lastname = lastnameFunc()
   const email = emailFunc();
   const username = usernameFunc();
   const password = passwordFunc();
   const cPassword = cPasswordFunc();
   const error = errorFunc();

    /*======================================================
    * Input fromt the register page
    */
    function firstnameFunc() {
        return document.forms["registerForm"]["firstname"].value;
    }

    function lastnameFunc() {
        return document.forms["registerForm"]["lastname"].value;
    }

    function emailFunc() {
        return document.forms["registerForm"]["email"].value;
    }

    function usernameFunc() {
        return document.forms["registerForm"]["username"].value;
    }

    function passwordFunc() {
        return document.forms["registerForm"]["password"].value;
    }
    function cPasswordFunc(){
        return document.forms["registerForm"]["cPassword"].value
    }

    function errorFunc() {
        return document.getElementById("error");
    }

    var e_msg = "";


    if(firstname.trim() == "" || lastname.trim() == "" || email.trim() == "" || username.trim() == "" || password.trim() == "" || cPassword.trim() == ""){
        e_msg = "Input cannot be empty"; //Error message
        setInterval( ()=> { 
            error.innerHTML = e_msg;
            error.classList.remove("error");
            error.classList.add("error_show");
        }, 100);
        return false;

    }
    return true;

}
