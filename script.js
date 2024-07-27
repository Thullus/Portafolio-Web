// Get references to the elements
const modal = document.getElementById("myModal"); // Assuming you'll add this element with ID in HTML
const modalContent = document.querySelector(".modal-content img");
const closeButton = document.querySelector(".close");
const galleryImages = document.querySelectorAll(".galeria img");

// Function to open the modal
function openModal(imageUrl) {
  modal.style.display = "block";
  modalContent.src = imageUrl; // Assuming imageUrl is the larger version of the image
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Add event listener to each image in the gallery
galleryImages.forEach(image => {
  image.addEventListener("click", () => {
    // Assuming you have a dataset attribute named 'large-image' containing the larger image URL
    const largeImageUrl = image.dataset.largeImage;
    if (largeImageUrl) {
      openModal(largeImageUrl);
    } else {
      console.error("Image does not have a 'large-image' dataset attribute.");
    }
  });
});

// Add event listener to close button
closeButton.addEventListener("click", closeModal);
