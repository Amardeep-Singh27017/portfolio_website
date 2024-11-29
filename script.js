// locomotive code for scroll 
// if we wnat LocomotiveScroll in web page, then make sure do not set the height of main container 

const scroll = new LocomotiveScroll({
    el: document.querySelector('#content'),
    smooth: true
})

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// loader-
window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('screenLoader');
    const main = document.getElementById('main');
    console.log(loadingScreen);
    console.log(main);
    
    // Hide loading screen and show main after the page has fully loaded
    loadingScreen.style.display = 'none';
    
    setTimeout(() => {
        main.style.display = 'block';
    }, 5000);
});

// --------------------------------------------sidebaar style-----------------------------------------------

var sidemen = document.getElementById('sidemenu');

function openmenu() {
    sidemen.style.right = "0";
}
function closemenu() {
    sidemen.style.right = "-200px"
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxVX6H0DKlO33dLsyMb-zfcy4UcQocfu5EtfFZXYV6lTRtX8uk_jZfRVdk6ahNEccWN/exec';
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent Successfully!";
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})

// navbar animation on load 
var nav = document.getElementById('nav');
window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        nav.style.top = "0px";
    } else {
        nav.style.top = "-80px";
    }
})


