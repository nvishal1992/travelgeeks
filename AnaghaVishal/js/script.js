// Get the start date (replace with your desired start date and time)
const startDate = new Date('2023-01-02T19:54:06').getTime();

// Update the time lapsed every second
const timeLapsedInterval = setInterval(function() {
    const now = new Date().getTime();
    const timeLapsed = now - startDate;

    // Calculate time units
    const days = Math.floor(timeLapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLapsed % (1000 * 60)) / 1000);

    // Format the output as "DD-MM-YYYY HH:MM:SS"
    const formattedTime = `${padZero(days)}-${padZero(months)}-${padZero(years)} ${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

    // Display the time lapsed on the webpage
    const timeLapsedElement = document.getElementById('time-lapsed');
    timeLapsedElement.innerHTML = formattedTime;
}, 1000);

// Function to pad single-digit numbers with a leading zero
function padZero(num) {
    return num.toString().padStart(2, '0');
}
