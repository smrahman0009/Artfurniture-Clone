function mobileMenu(){
    var menuList = document.getElementById("mobile-menu-list");
    if(menuList.style.display === "block"){
        menuList.style.display = "none";
    }else{
        menuList.style.display = "block";
    }
}