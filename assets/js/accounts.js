const accountDisplay = document.querySelector("#accounts-section .accounts");
const accountServices = document.querySelectorAll("#accounts-section .services div");
const accountRemovalButtons = document.querySelector("#accounts-section .account .remove-account");

function LoadAccountEmails() {

}

function onAccountServiceClick(e) {

}

function onAccountServiceSave(e) {

}

function onAccountRemove(e) {

}

(function() {
    // Create events
    for (let service of accountServices) {
        service.addEventListener("click", (e) => onAccountServiceClick(e));
    }

    // Load in the saved accounts
    let savedAccounts = [ // TEMPORARY
        {
            "type": "google",
            "email": "twister1002@gmail.com",
            "name": "Tyler Yeary"
        },
        {
            "type": "google",
            "email": "twister1004@gmail.com",
            "name": "Sabrina Yeary"
        }
    ]

    let accountMarkup = "";
    for (let account of savedAccounts) {
        accountMarkup += `
        <div class="account ${account.type}">
            <aside class="icon">i</aside>
            <div class="info">
                <div class="name">${account.name}</div>
                <div class="email">${account.email}</div>
                <div class="email-type">${account.type}</div>
            </div>
            <button class="remove-account">Remove Account</div>
        </div>`;
    }

    accountDisplay.innerHTML = accountMarkup;

})();
