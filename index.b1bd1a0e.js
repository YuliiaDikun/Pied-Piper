(()=>{const e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),n=()=>{const t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open"),bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)};o.addEventListener("click",n),t.addEventListener("click",n),window.matchMedia("(min-width: 1199px)").addEventListener("change",(t=>{t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),(()=>{const e={openModalFirstBtn:document.querySelector("[data-modal-open]"),openModalSecondBtn:document.querySelector("[data-modal-open-second]"),openModalAboutBtn:document.querySelector("[data-modal-open-about]"),openModalBuyBtn:document.querySelector("[data-modal-open-buy]"),openModalIngredientsBtn:document.querySelector("[js-product-open-menu]"),closeModalFirstBtn:document.querySelector("[data-modal-close]"),closeModalSecondBtn:document.querySelector("[data-modal-close-second]"),closeModalAboutBtn:document.querySelector("[data-modal-close-about]"),closeModalBuyBtn:document.querySelector("[data-modal-close-buy]"),closeModalIngredientsBtn:document.querySelector("[js-product-close-menu]"),modalLocation:document.querySelector("[data-modal-location]"),modalFranchise:document.querySelector("[data-modal-franchise]"),modalAbout:document.querySelector("[data-modal-about]"),modalBuy:document.querySelector("[data-modal-buy]"),modalIngredients:document.querySelector("[js-product-menu-container]")};function o(e){e.classList.remove("backdrop--is-hidden")}function t(e){e.classList.contains("backdrop--is-hidden")||e.classList.add("backdrop--is-hidden")}e.openModalFirstBtn.addEventListener("click",(function(){o(e.modalLocation)})),e.openModalSecondBtn.addEventListener("click",(function(){o(e.modalFranchise)})),e.openModalAboutBtn.addEventListener("click",(function(){o(e.modalAbout)})),e.openModalBuyBtn.addEventListener("click",(function(){o(e.modalBuy)})),e.openModalIngredientsBtn.addEventListener("click",(function(){o(e.modalIngredients)})),e.closeModalFirstBtn.addEventListener("click",(function(){t(e.modalLocation)})),e.closeModalSecondBtn.addEventListener("click",(function(){t(e.modalFranchise)})),e.closeModalAboutBtn.addEventListener("click",(function(){t(e.modalAbout)})),e.closeModalBuyBtn.addEventListener("click",(function(){t(e.modalBuy)})),e.closeModalIngredientsBtn.addEventListener("click",(function(){t(e.modalIngredients)}))})();
//# sourceMappingURL=index.b1bd1a0e.js.map
