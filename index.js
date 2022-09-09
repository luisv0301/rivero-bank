const hamburMenu = document.getElementById("hambur-menu");
const hamburMenuMobile = document.querySelector(".hambur-menu--mobile");
const drawer = document.querySelector(".drawer");
const drawerLogo = document.querySelector(".drawer__logo");



if (window.matchMedia("(min-width: 1060px)").matches) {
   
    hamburMenu.addEventListener("click", () => {
        console.log("ejecutandoe...")
        drawer.classList.toggle("drawer--small")
        drawerLogo.classList.toggle("no-visible")
        })
  }

hamburMenuMobile.addEventListener("click", () => {
    drawer.classList.add("drawer--visible")
    })

    hamburMenu.addEventListener("click", () => {
        drawer.classList.remove("drawer--visible")
        })