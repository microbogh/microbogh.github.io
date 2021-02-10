var normal = document.getElementById("nav-menu");
var reverse = document.getElementById("nav-menu-left");

var icon = normal !== null ? normal : reverse;

// Toggle the "menu-open" % "menu-opn-left" classes
function toggle() {
    var navRight = document.getElementById("nav");
    var navLeft = document.getElementById("nav-left");
    var nav = navRight !== null ? navRight : navLeft;

    var button = document.getElementById("menu");
    var site = document.getElementById("wrap");

    if (nav.className == "menu-open" || nav.className == "menu-open-left") {
        nav.className = "";
        button.className = "";
        site.className = "";
    } else if (reverse !== null) {
        nav.className += "menu-open-left";
        button.className += "btn-close";
        site.className += "fixed";
    } else {
        nav.className += "menu-open";
        button.className += "btn-close";
        site.className += "fixed";
    }
}

// Ensures backward compatibility with IE old versions
function menuClick() {
    if (document.addEventListener && icon !== null) {
        icon.addEventListener('click', toggle);
    } else if (document.attachEvent && icon !== null) {
        icon.attachEvent('onclick', toggle);
    } else {
        return;
    }
}

menuClick();

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// PwCheck.
function pwdCheck4() {
    var password = prompt('Inserisci la password:');
    if (password.toLowerCase() == "mcb2020") {
        window.open("https://jmp.sh/KQOq5Xo")
    } else {
        alert("La password non è corretta, riprova.");
    }
}

// PwCheck.
function pwdCheck3() {
    var password = prompt('Inserisci la password:');
    if (password.toLowerCase() == "mcb2018") {
        window.open("https://jmp.sh/pNxXSQ1")
    } else {
        alert("La password non è corretta, riprova.");
    }
}

// PwCheck.
function pwdCheck2() {
    var password = prompt('Inserisci la password:');
    if (password.toLowerCase() == "mcb2018") {
        window.open("https://jmp.sh/XVxEZAY")
    } else {
        alert("La password non è corretta, riprova.");
    }
}

// PwCheck.
function pwdCheck1() {
    var password = prompt('Inserisci la password:');
    if (password.toLowerCase() == "mcb2017") {
        window.open("https://jmp.sh/iQjRDLH")
    } else {
        alert("La password non è corretta, riprova.");
    }
}
