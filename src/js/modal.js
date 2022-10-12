(() => {
  const refs = {
    openModalFirstBtn: document.querySelector("[data-modal-open]"),
    openModalSecondBtn: document.querySelector("[data-modal-open-second]"),
    
    // Read more

    // 

    // Buy now

    //
    
    // Ingredients
    openModalIngredientsBtn: document.querySelector("[js-product-open-menu]"),
    //


    closeModalFirstBtn: document.querySelector("[data-modal-close]"),
    closeModalSecondBtn: document.querySelector("[data-modal-close-second]"),
    
    // Read more

    // 

    // Buy now

    //
    
    // Ingredients
    closeModalIngredientsBtn: document.querySelector("[js-product-close-menu]"),
    //


    modalLocation: document.querySelector("[data-modal-location]"),
    modalFranchise: document.querySelector("[data-modal-franchise]"),
    
    // Read more

    //
    
    // Buy now

    //

    // Ingredients
    modalIngredients: document.querySelector("[js-product-menu-container]"),
    //
  };

  function toggleModal(modal) {
    modal.classList.remove("backdrop--is-hidden");
  }
  
  function close (modal) {     
    if (!modal.classList.contains('backdrop--is-hidden')) { 
      modal.classList.add('backdrop--is-hidden');
    }
  }

  // MODALS init //

  refs.openModalFirstBtn.addEventListener("click", function() {
    const firstModal = refs.modalLocation;
    toggleModal(firstModal);    
  });

  refs.openModalSecondBtn.addEventListener("click",  function() {
    const secondModal = refs.modalFranchise;
    toggleModal(secondModal);    
  });

                        // Read more //
  // refs.openModalFirstBtn.addEventListener("click", function() {
  //   const firstModal = refs.modalLocation;
  //   toggleModal(firstModal);    
  // });

  // refs.openModalSecondBtn.addEventListener("click",  function() {
  //   const secondModal = refs.modalFranchise;
  //   toggleModal(secondModal);    
  // });
  // 
  
                        // Buy now //
  // refs.openModalFirstBtn.addEventListener("click", function() {
  //   const firstModal = refs.modalLocation;
  //   toggleModal(firstModal);    
  // });

  // refs.openModalSecondBtn.addEventListener("click",  function() {
  //   const secondModal = refs.modalFranchise;
  //   toggleModal(secondModal);    
  // });
  //

  
  // Ingredients //
  refs.openModalIngredientsBtn.addEventListener("click", function() {
    const firstModal = refs.modalIngredients;
    toggleModal(firstModal);    
  });

  // refs.openModalSecondBtn.addEventListener("click",  function() {
  //   const secondModal = refs.modalFranchise;
  //   toggleModal(secondModal);    
  // });
  //
  
  
  // CLOSE init //

  refs.closeModalFirstBtn.addEventListener("click", function() {
    const firstModal = refs.modalLocation;
    close(firstModal);    
  });
  refs.closeModalSecondBtn.addEventListener("click", function() {
    const secondModal = refs.modalFranchise;    
    close(secondModal);    
  }); 

                          // Read more
  // refs.closeModalFirstBtn.addEventListener("click", function() {
  //   const firstModal = refs.modalLocation;
  //   close(firstModal);    
  // });
  // refs.closeModalSecondBtn.addEventListener("click", function() {
  //   const secondModal = refs.modalLocation;
  //   close(secondModal);    
  // }); 
  
                          // Buy now
  // refs.closeModalFirstBtn.addEventListener("click", function() {
  //   const firstModal = refs.modalLocation;
  //   close(firstModal);    
  // });
  // refs.closeModalSecondBtn.addEventListener("click", function() {
  //   const secondModal = refs.modalLocation;
  //   close(secondModal);    
  // });
  
    // Ingredients
    refs.closeModalIngredientsBtn.addEventListener("click", function() {
    const firstModal = refs.modalIngredients;
    close(firstModal);    
    });


  // refs.closeModalSecondBtn.addEventListener("click", function() {
  //   const secondModal = refs.modalLocation;
  //   close(secondModal);    
  // });

})();