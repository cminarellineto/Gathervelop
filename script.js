
function openMenu(){
    document.getElementById("nav").onmouseleave= function() {closeMenu()}
    document.getElementById("header").style.width = "20%"
    document.getElementById("aside").style.visibility = "visible"
    document.getElementById("aside").style.opacity = "1"
    document.getElementById("menuIcon").style.display = "none"
    
    setTimeout(() => {
        document.getElementById("menu").style.visibility = "visible"
        document.getElementById("menu").style.opacity ="1"
    }, 200)
}

function closeMenu() {
    document.getElementById("menu").style.visibility = "hidden"
    document.getElementById("menu").style.opacity ="0"
    document.getElementById("aside").style.visibility = "hidden"
    document.getElementById("aside").style.opacity = "0"
    setTimeout(() => {
        document.getElementById("menuIcon").style.display = "flex"
        document.getElementById("header").style.width = "5%"
    }, 150)
}
