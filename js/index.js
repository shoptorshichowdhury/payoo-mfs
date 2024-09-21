/*----------------------- index JS here -------------------------*/

const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function(event){
    event.preventDefault();

    //get mobile number & pin number
    const mobileNumber = getInputFieldValueById("mobile-number-input");
    const pinNumber = getInputFieldValueById("pin-number-input");

    //validation of number input
    if(isNaN(mobileNumber) || isNaN(pinNumber)){
        alert("Please give valid number");
        return;
    }

    //pin verify [temporary version]
    if (pinNumber === 1234){
        window.location.href = "/home.html";
    }else{
        alert("Wrong pin or phone number. Try again later!");
    }
});