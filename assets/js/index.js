const emailNotification = {
    "title": "New emails",
    "body": "You have new emails",
    "icon": "" //path.join(__dirname, "../assets/assets/images/email.png")
};

const notification = new window.Notification(emailNotification.title, emailNotification);