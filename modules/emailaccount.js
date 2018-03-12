class EmailAccount {
    constructor(settings) {
        this.settings = settings;
        this.Init();
    }

    Init() {
        this.html = this.RenderAccountInfo();
    }

    GetEmails() {

    }

    RenderAccountInfo() {
        return `
        <div class="account ${this.settings.type}">
            <aside class="icon">i</aside>
            <div class="info">
                <div class="name">${this.settings.name}</div>
                <div class="email">${this.settings.email}</div>
                <div class="email-type">${this.settings.type}</div>
            </div>
            <button class="remove-account">Remove Account</div>
        </div>`;
    }

    onSendNotification(e) {

    }

    onRemoveAccount(e) {

    }

    onAddAccount(e) {

    }

}

module.exports = {
    "EmailAccount": EmailAccount
};