/* ------------------------ All Utilities code are here    ------------------------------- */

//log out button
document.getElementById("log-out-btn").addEventListener("click", function(){
     // window.location.href = "/index.html";
     window.open('index.html', '_self');
});

//get input value by id
function getInputFieldValueById(id){
     return parseFloat(document.getElementById(id).value);
};

//get text value from div
function getTextValueById(id){
     return parseFloat(document.getElementById(id).innerText);
};

//toggle style change
function toggleStyleBtn (id){
     //hide style from other button
     document.getElementById("add-money-btn").classList.remove("border-[#0874F2]", "text-[#0874F2]", "bg-[#0874F20D]");
     document.getElementById("cash-out-btn").classList.remove("border-[#0874F2]", "text-[#0874F2]", "bg-[#0874F20D]");
     document.getElementById("transfer-money-btn").classList.remove("border-[#0874F2]", "text-[#0874F2]", "bg-[#0874F20D]");
     document.getElementById("get-bonus-btn").classList.remove("border-[#0874F2]", "text-[#0874F2]", "bg-[#0874F20D]");
     document.getElementById("pay-bill-btn").classList.remove("border-[#0874F2]", "text-[#0874F2]", "bg-[#0874F20D]");
     document.getElementById("transaction-toggle-btn").classList.remove("border-[#0874F2]", "text-[#0874F2]", "bg-[#0874F20D]");
     
     //add style to the select one
     document.getElementById(id).classList.add("border-[#0874F2]", "text-[#0874F2]", "bg-[#0874F20D]");
};



//show form section -->
function showFormSection(id){
     //hide all the form
     document.getElementById("latest-payment-form").classList.add("hidden");
     document.getElementById("add-money-form").classList.add("hidden");
     document.getElementById("cash-out-form").classList.add("hidden");
     document.getElementById("transfer-money-form").classList.add("hidden");
     document.getElementById("get-bonus-form").classList.add("hidden");
     document.getElementById("pay-bill-form").classList.add("hidden");
     document.getElementById("transaction-form").classList.add("hidden");

     //show add money form
     document.getElementById(id).classList.remove("hidden");
};