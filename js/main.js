function ibg(){for(var e=document.querySelectorAll(".ibg"),n=0;n<e.length;n++)e[n].querySelector("img")&&(e[n].style.backgroundImage="url("+e[n].querySelector("img").getAttribute("src")+")")}function click_menu(){menu.classList.toggle("active"),menu__body.classList.toggle("active")}function click_link(){menu.classList.toggle("active"),menu__body.classList.toggle("active")}ibg();var menu=document.querySelector(".icon-menu"),menu__body=document.querySelector(".header__menu");menu.addEventListener("click",click_menu);var link=document.querySelectorAll(".header__menu .menu__link");for(i=0;i<link.length;i++)link[i].addEventListener("click",click_link),console.log(link[i]);