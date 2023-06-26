
const navbar = document.getElementById("navbar");
const navigationbar = document.getElementById("navigationbar");



//? Navbar dark'a gecis islemi
document.addEventListener("scroll", () => {
    if( window.scrollY > 46){
        navbar.style.backgroundColor = "black"
        navigationbar.style.top = "50px"
        navigationbar.style.backgroundColor = "black"
        //* navigationbar.style.color = "white !important"
        navigationbar.querySelectorAll("a").forEach(element => {
            element.style.color = "white"
        });
    }else{
        navbar.style.backgroundColor = "transparent"
        navigationbar.style.top = "100px"
        navigationbar.style.backgroundColor = "white"
        navigationbar.querySelectorAll("a").forEach(element => {
            element.style.color = "black"
        });

    }
})

function navigation_checkbox(){
    console.log(navigationbar.style.right);
    if(navigationbar.style.right == "0px"){
        navigationbar.style.right = "-275px"
    }else{
        navigationbar.style.right = "0px"
    }
}