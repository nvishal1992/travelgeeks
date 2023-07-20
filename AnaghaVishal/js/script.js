// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Show the teddy bear animation after a slight delay (to allow time for the CSS to load)
    const teddyBear = document.querySelector(".teddy-bear");
    setTimeout(function() {
        teddyBear.style.display = "block";
        teddyBear.style.animation = "teddy-bear-animation 5s linear 1"; // Apply the CSS animation
    }, 100);

    // Hide the teddy bear after 10 seconds
    setTimeout(function() {
        teddyBear.style.display = "none";
    }, 11000); // 11000 milliseconds = 11 seconds (animation duration + 1 second buffer)

    // Your previous JavaScript code here to dynamically load images and event details
});


function showImage(src) {
    // Show the enlarged image container
    const enlargedContainer = document.getElementById('enlargedContainer');
    enlargedContainer.style.display = 'block';

    // Set the image source of the enlarged image
    const enlargedImg = document.getElementById('enlargedImg');
    enlargedImg.src = src;

    // Show the image overlay
    const imageOverlay = document.querySelector('.image-overlay');
    imageOverlay.style.display = 'block';

    // Add a class to trigger the animation
    enlargedContainer.classList.add('enlarged-animation');

    // Hide the enlarged image after 5 seconds
    setTimeout(() => {
        hideImage();
    }, 5000);
}

function hideImage() {
    // Hide the enlarged image container
    const enlargedContainer = document.getElementById('enlargedContainer');
    enlargedContainer.style.display = 'none';

    // Hide the image overlay
    const imageOverlay = document.querySelector('.image-overlay');
    imageOverlay.style.display = 'none';

    // Remove the class to reset the animation
    enlargedContainer.classList.remove('enlarged-animation');
}
