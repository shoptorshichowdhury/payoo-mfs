/* Transaction toggler button */
const transactionBtn = document.getElementById("transaction-toggle-btn");
transactionBtn.addEventListener("click", function(){
    //change btn click style
    toggleStyleBtn("transaction-toggle-btn");

    //show add money form section
    showFormSection("transaction-form");
});