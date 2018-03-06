const emailNotification = {
    "title": "New emails",
    "body": "You have new emails",
    "icon": "" //path.join(__dirname, "../assets/assets/images/email.png")
};

const notification = new window.Notification(emailNotification.title, emailNotification);

const folders = document.querySelectorAll(".info-panel li");

folders.forEach(function (e, i) {
    e.addEventListener("click", FolderSelected);
});

function FolderSelected(e) {
    this.classList.add("active");
}

function getChildren(n, skipMe){
    var r = [];
    for ( ; n; n = n.nextSibling ) 
       if ( n.nodeType == 1 && n != skipMe)
          r.push( n );        
    return r;
};

function getSiblings(n) {
    return getChildren(n.parentNode.firstChild, n);
}
