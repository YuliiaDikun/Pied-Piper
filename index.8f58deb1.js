(()=>{const e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),n=()=>{const t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open"),bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)};o.addEventListener("click",n),t.addEventListener("click",n),window.matchMedia("(min-width: 1199px)").addEventListener("change",(t=>{t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),(()=>{const e={openModalFirstBtn:document.querySelector("[data-modal-open]"),openModalSecondBtn:document.querySelector("[data-modal-open-second]"),closeModalFirstBtn:document.querySelector("[data-modal-close]"),closeModalSecondBtn:document.querySelector("[data-modal-close-second]"),modalLocation:document.querySelector("[data-modal-location]"),modalFranchise:document.querySelector("[data-modal-franchise]")};function o(e){e.classList.remove("backdrop--is-hidden")}function t(e){e.classList.contains("backdrop--is-hidden")||e.classList.add("backdrop--is-hidden")}e.openModalFirstBtn.addEventListener("click",(function(){o(e.modalLocation)})),e.openModalSecondBtn.addEventListener("click",(function(){o(e.modalFranchise)})),e.closeModalFirstBtn.addEventListener("click",(function(){t(e.modalLocation)})),e.closeModalSecondBtn.addEventListener("click",(function(){t(e.modalLocation)}))})();
//# sourceMappingURL=index.8f58deb1.js.map
