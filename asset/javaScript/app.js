let getBar = document.getElementById("bar");
let getCancel = document.getElementById("cancel");
let getHeader = document.getElementById("header")

function myBar() {
    if (getBar) {
        getHeader.style.display = "block";
        getBar.style.display = "none";
        getCancel.style.display="block"
    }
}

function myCancel() {
    if (getCancel) {
        getHeader.style.display = "none";
        getCancel.style.display = "none";
        getBar.style.display="block"
    }
}