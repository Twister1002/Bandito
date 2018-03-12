const accountDisplay = document.querySelector("#accounts-section .accounts");
const accountServices = document.querySelectorAll("#accounts-section .services div");

function onAccountServiceClick(e) {

}

function onAccountRemoveClick(e) {
    console.log("Account to be removed");
}

(function() {
    for (let account of emailAccounts) {
        accountDisplay.innerHTML += account.html;
    }

    // Create events
    for (let service of accountServices) {
        service.addEventListener("click", (e) => onAccountServiceClick(e));
    }

    // Remove Account Events
    let accountRemovalButtons = document.querySelectorAll("#accounts-section .account .remove-account");
    for (let account of accountRemovalButtons) {
        account.addEventListener("click", (e) => onAccountRemoveClick(e));
    }
})();
