// Get the target date (2nd Jan 2023, 7:54:06 PM)
const targetDate = new Date(2023, 0, 2, 19, 54, 6);

// Update the time lapsed every second
const timeLapsedInterval = setInterval(function() {
    const now = new Date();
    const timeElapsed = now - targetDate;

    // Calculate time units
    const years = Math.floor(timeElapsed / (365.25 * 24 * 60 * 60 * 1000));
    const days = Math.floor(timeElapsed / (24 * 60 * 60 * 1000));
    const months = Math.floor(days / 30.44); // Approximation based on an average month
    const remainingDays = days % 30.44;
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the output as "dd-mm-yyyy hh:mm:ss"
    const formattedTime = `${padZero(now.getDate())}-${padZero(now.getMonth() + 1)}-${now.getFullYear()} ${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

    // Display the time lapsed on the webpage
    const timeLapsedElement = document.getElementById('time-lapsed');
    timeLapsedElement.innerHTML = `${years} years, ${months} months, ${remainingDays} days, ${formattedTime}`;
}, 1000);

// Function to pad single-digit numbers with a leading zero
function padZero(num) {
    return num.toString().padStart(2, '0');
}
