/*-------- transfer money toggler button -------*/
document.getElementById("transfer-money-btn").addEventListener("click", function () {
    //change btn click style
    toggleStyleBtn("transfer-money-btn");

    //show transfer money form section
    showFormSection("transfer-money-form");
});

/*------- transfer money form button ---------*/
document.getElementById("transferMoney-btn").addEventListener("click", function (event) {
    event.preventDefault();

    //get the amount & pin number
    const transferMoney = getInputFieldValueById("transfer-money-amount");
    const pinNumber = getInputFieldValueById("transferMoney-pin");

    //validation [temporary]
    if (pinNumber === 1234) {
        const currentBalance = getTextValueById("available-balance");

        if (transferMoney > currentBalance) {
            alert("You have not enough balance to transfer money");
            return;
        }

        const newBalance = currentBalance - transferMoney;

        document.getElementById("available-balance").innerText = newBalance;

        // show it in transaction section
        let time = new Date();
        let now = time.toLocaleString("en-US", {hour: 'numeric', minute: 'numeric', hour12: true});

        const div = document.createElement("div");
        div.innerHTML = `
            <div class="px-4 py-3 bg-white border border-[#0808081A] rounded-xl flex justify-between items-center mb-3">
                        <div class="flex gap-2 items-center">
                            <div class="p-3 rounded-full bg-[#0808080D]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18.7 0.9C18.85 0.85 19 0.9 19.1 0.95C19.35 1.1 19.5 1.35 19.55 1.7L20.05 4.4H20.9L20.4 1.55C20.3 0.95 20 0.5 19.55 0.2C19.2 0 18.8 -0.05 18.45 0.05L4.55005 4.35L7.15005 4.4L18.7 0.9Z" fill="#F04B36"/>
                                <path d="M22.2 4.4001H20.95H20.1H7.19995L4.54995 4.3501C4.19995 4.4501 3.84995 4.7001 3.64995 5.1001C3.49995 5.3501 3.44995 5.6001 3.44995 5.9001V12.8001C3.99995 12.6501 4.59995 12.5501 5.19995 12.5501C8.64995 12.5501 11.45 15.2501 11.45 18.5501C11.45 19.1001 11.4 19.6001 11.25 20.1001H22.2C22.9 20.1001 23.5 19.4501 23.5 18.6501V15.4001H17.4C17.15 15.4001 17 15.2001 17 15.0001V9.6501C17 9.4001 17.2 9.2501 17.4 9.2501H23.5V5.9001C23.5 5.1001 22.9 4.4001 22.2 4.4001Z" fill="#F7A93B"/>
                                <path d="M17.8 14.55H23.5V10.05H17.8V14.55ZM20.4 11.45C20.8 11.45 21.15 11.85 21.15 12.3C21.15 12.8 20.8 13.15 20.4 13.15C20 13.15 19.65 12.75 19.65 12.3C19.65 11.85 20 11.45 20.4 11.45Z" fill="#E77528"/>
                                <path d="M5.25 13.5C2.35 13.5 0 15.75 0 18.5C0 21.25 2.35 23.5 5.25 23.5C7.4 23.5 9.4 22.2 10.15 20.25C10.35 19.7 10.5 19.1 10.5 18.5C10.5 15.75 8.15 13.5 5.25 13.5ZM7.25 19H5.75V20.5C5.75 20.75 5.55 21 5.25 21C5 21 4.75 20.8 4.75 20.5V19H3.25C3 19 2.75 18.8 2.75 18.5C2.75 18.25 2.95 18 3.25 18H4.75V16.5C4.75 16.25 4.95 16 5.25 16C5.5 16 5.75 16.2 5.75 16.5V18H7.25C7.5 18 7.75 18.2 7.75 18.5C7.75 18.8 7.55 19 7.25 19Z" fill="#0DB89A"/>
                              </svg></div>
                            <div>
                                <h4 class="text-base font-semibold text-[#080808B2]">Transfer Money</h4>
                                <p class="text-xs text-[#080808B2]">Today ${now}</p>
                            </div>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <g clip-path="url(#clip0_11_8567)">
                                  <path d="M11 12.75C11 13.0152 11.1054 13.2696 11.2929 13.4571C11.4804 13.6446 11.7348 13.75 12 13.75C12.2652 13.75 12.5196 13.6446 12.7071 13.4571C12.8946 13.2696 13 13.0152 13 12.75C13 12.4848 12.8946 12.2304 12.7071 12.0429C12.5196 11.8554 12.2652 11.75 12 11.75C11.7348 11.75 11.4804 11.8554 11.2929 12.0429C11.1054 12.2304 11 12.4848 11 12.75Z" stroke="#080808" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M11 19.75C11 20.0152 11.1054 20.2696 11.2929 20.4571C11.4804 20.6446 11.7348 20.75 12 20.75C12.2652 20.75 12.5196 20.6446 12.7071 20.4571C12.8946 20.2696 13 20.0152 13 19.75C13 19.4848 12.8946 19.2304 12.7071 19.0429C12.5196 18.8554 12.2652 18.75 12 18.75C11.7348 18.75 11.4804 18.8554 11.2929 19.0429C11.1054 19.2304 11 19.4848 11 19.75Z" stroke="#080808" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M11 5.75C11 6.01522 11.1054 6.26957 11.2929 6.45711C11.4804 6.64464 11.7348 6.75 12 6.75C12.2652 6.75 12.5196 6.64464 12.7071 6.45711C12.8946 6.26957 13 6.01522 13 5.75C13 5.48478 12.8946 5.23043 12.7071 5.04289C12.5196 4.85536 12.2652 4.75 12 4.75C11.7348 4.75 11.4804 4.85536 11.2929 5.04289C11.1054 5.23043 11 5.48478 11 5.75Z" stroke="#080808" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                  <clipPath id="clip0_11_8567">
                                    <rect width="24" height="24" fill="white" transform="translate(0 0.75)"/>
                                  </clipPath>
                                </defs>
                              </svg>
                        </div>
                    </div>
        `
        
        document.getElementById("transaction-container").appendChild(div);

    } else {
        alert("Failed to transfer money. Please try again later");
        return;
    }
});

