const btnMenuCatalog = document.querySelector(".catalog-menu-button");

btnMenuCatalog.addEventListener("click", clickBtnCatalog);
function clickBtnCatalog(){
    btnMenuCatalog.classList.toggle("active");
}