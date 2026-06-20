// for displaying the list of experience , education and skills 

let tablinks = document.getElementsByClassName("links");
let tabcontents = document.getElementsByClassName("tabContains");


function openTab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("activeone");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("tabshow");
    }
    event.currentTarget.classList.add("activeone");
    document.getElementById(tabname).classList.add("tabshow");

}

//for the sidebar

const sideMenu = document.getElementById("sideBar");
function openMenu(){
    sideMenu.style.right = "0";
}
function closeMenu() {
    sideMenu.style.right = "-200px";
}
