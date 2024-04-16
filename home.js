

const closeButtons = document.querySelectorAll(".close-button");
const openM = document.querySelector(".add")
let lastOpenedModal = null;

let modals = document.querySelectorAll(".modal");
let modalY = document.querySelector(".Yoga")
let nameF=document.querySelector('.nameF')
let openNewF=document.querySelector('.openNewF')

const openNewD = document.querySelector('.openNewD');
let modalD = document.querySelector(".newDocument");

openNewD.addEventListener('click', function () {
  closeAllModals();
  toggleModal(modalD);
});


/* SHOWS MODAL (it's with parameter so if you replace the parameter
    in the brackets with modal1, it will show the modal with booking options, 
    if you replace with modalG it will display the gym modal */


    function toggleModal(modal) {
      modals.forEach((m) => {
        if (m !== modal) {
          m.classList.remove("show-modal");
        }
      });
    
      modal.classList.toggle("show-modal");
      lastOpenedModal = modal.classList.contains("show-modal") ? modal : null;
    }
    
    function closeAllModals() {
      modals.forEach((modal) => {
        modal.classList.remove("show-modal");
      });
      lastOpenedModal = null;
    }
    
    // closes book more modal when you click outside it //
    function windowOnClick(event) {
      if (event.target === lastOpenedModal) {
        toggleModal(lastOpenedModal);
      }
    }
    
    window.addEventListener("click", windowOnClick);

    openM.addEventListener("click", function () {
      toggleModal(lastOpenedModal || modals[0]); // If no modal is open, open the first one
    });
    
    closeButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        closeAllModals();
      });
    });
    
    openNewF.addEventListener("click", function () {
      closeAllModals();
      toggleModal(nameF);
    });
// Get references to the elements
const addFolderOption = document.querySelector(".f");
const recentSection = document.querySelector(".recent");

// Function to add a new folder
function addFolder() {
  closeAllModals();
  // Create a new folder element with the same structure
  const newFolder = document.createElement("div");
  newFolder.className = "file append-folder";

  const folderIcon = document.createElement("img");
  folderIcon.src = "img/folder.png";
  folderIcon.className = "fol icon";

  const folderName = document.createElement("h3");
  const Fname=document.querySelector('.naming').value;
  folderName.textContent = Fname || "New Folder";

  // Append the elements to the new folder
  newFolder.appendChild(folderIcon);
  newFolder.appendChild(folderName);

  // Append the new folder to the recent section
  recentSection.appendChild(newFolder);
  // Clear the input field after adding the folder
  document.querySelector('.naming').value = '';
}

// Function to add a new document
function addDocument() {
  closeAllModals();
  // Create a new document element with the same structure
  const newDocument = document.createElement("div");
  newDocument.className = "file";

  const documentIcon = document.createElement("img");
  documentIcon.src = "img/document.png";
  documentIcon.className = "docum icon";

  const documentName = document.createElement("h3");
  const Dname = document.querySelector('.naming.D').value;
  documentName.textContent = Dname || "New Document";

  // Append the elements to the new document
  newDocument.appendChild(documentIcon);
  newDocument.appendChild(documentName);

  // Append the new document to the recent section
  recentSection.appendChild(newDocument);
  // Clear the input field after adding the folder
  document.querySelector('.naming').value = '';
}

// Add event listener to the "ADD DOCUMENT" option
document.querySelector(".button1.d").addEventListener("click", function(){
  addDocument();
});

// Add event listener to the "ADD FOLDER" option
addFolderOption.addEventListener("click", function(){
  addFolder();
  const openModal = document.querySelector(".show-modal");
    
    if (openModal) {
      // If there is an open modal, close it
      toggleModal(openModal);
    }
})








