// Sample baby photo list (you can replace these URLs with actual photo URLs)
const babyPhotos = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
];

// Populate the photo list with baby photos
const photoListElement = document.getElementById('photo-list');
babyPhotos.forEach(photoUrl => {
    const listItem = document.createElement('li');
    const photo = document.createElement('img');
    photo.src = photoUrl;
    listItem.appendChild(photo);
    photoListElement.appendChild(listItem);
});

// Function to capture the event details for a photo
function captureEvent() {
    const eventNameInput = document.getElementById('eventName');
    const eventDateInput = document.getElementById('eventDate');
    const selectedPhoto = document.querySelector('.selected');

    if (selectedPhoto && eventNameInput.value && eventDateInput.value) {
        const eventDetails = document.createElement('div');
        eventDetails.innerHTML = `<strong>${eventNameInput.value}</strong>: ${eventDateInput.value}`;
        selectedPhoto.appendChild(eventDetails);

        // Clear the input fields after capturing the event
        eventNameInput.value = '';
        eventDateInput.value = '';
    }
}
