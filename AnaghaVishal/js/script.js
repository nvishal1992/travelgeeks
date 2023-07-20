document.addEventListener("DOMContentLoaded", function() {
    const photoList = document.querySelector(".photo-list");

    // Replace the following array with your actual event details
    const events = [
        {
            imgSrc: "img/1.jpg",
            eventName: "Event 1",
            eventDate: "Date 1",
            eventLocation: "Location 1"
        },
        {
            imgSrc: "img/2.jpg",
            eventName: "Event 2",
            eventDate: "Date 2",
            eventLocation: "Location 2"
        },
        // Add more event objects as needed
    ];

    events.forEach(event => {
        const photoItem = document.createElement("div");
        photoItem.classList.add("photo-item");

        const imgElement = document.createElement("img");
        imgElement.src = event.imgSrc;
        photoItem.appendChild(imgElement);

        const eventDetails = document.createElement("div");
        eventDetails.classList.add("event-details");
        eventDetails.innerHTML = `
            <p><strong>${event.eventName}</strong></p>
            <p>Date: ${event.eventDate}</p>
            <p>Location: ${event.eventLocation}</p>
        `;

        photoItem.appendChild(eventDetails);
        photoList.appendChild(photoItem);
    });
});
