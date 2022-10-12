(() => {
  const refs = {
    openModalFirstBtn: document.querySelector("[data-modal-open]"),
    openModalSecondBtn: document.querySelector("[data-modal-open-second]"),
    
    // Read more

    // 

    // Buy now

    //
    
    // Ingredients

    //

    closeModalFirstBtn: document.querySelector("[data-modal-close]"),
    closeModalSecondBtn: document.querySelector("[data-modal-close-second]"),
    
    // Read more

    // 

    // Buy now

    //
    
    // Ingredients

    //

    modalLocation: document.querySelector("[data-modal-location]"),
    modalFranchise: document.querySelector("[data-modal-franchise]"),
    
    // Read more

    //
    
    // Buy now

    //

    // Ingredients

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
  // refs.openModalFirstBtn.addEventListener("click", function() {
  //   const firstModal = refs.modalLocation;
  //   toggleModal(firstModal);    
  // });

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
    const secondModal = refs.modalLocation;
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
  // refs.closeModalFirstBtn.addEventListener("click", function() {
  //   const firstModal = refs.modalLocation;
  //   close(firstModal);    
  // });
  // refs.closeModalSecondBtn.addEventListener("click", function() {
  //   const secondModal = refs.modalLocation;
  //   close(secondModal);    
  // });

})();