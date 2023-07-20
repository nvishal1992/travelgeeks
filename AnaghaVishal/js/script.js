// Get the target date (January 2nd, 2023, at 7:54:06 PM)
const targetDate = new Date('2023-01-02T19:54:06').getTime();

// Update the time elapsed every second
const timeElapsedInterval = setInterval(function() {
    const now = new Date().getTime();
    const timeElapsed = now - targetDate;

    // Calculate time units
    const months = Math.floor(timeElapsed / (30.44 * 24 * 60 * 60 * 1000)); // Approximation based on an average month
    const remainingTime = timeElapsed % (30.44 * 24 * 60 * 60 * 1000);
    const days = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
    const remainingTimeInDays = remainingTime % (24 * 60 * 60 * 1000);
    const hours = Math.floor(remainingTimeInDays / (60 * 60 * 1000));
    const remainingTimeInHours = remainingTimeInDays % (60 * 60 * 1000);
    const minutes = Math.floor(remainingTimeInHours / (60 * 1000));
    const seconds = Math.floor((remainingTimeInHours % (60 * 1000)) / 1000);

    // Display the time elapsed on the webpage
    const timeElapsedElement = document.getElementById('time-lapsed');
    timeElapsedElement.innerHTML = `${months} months, ${days} days, ${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}, 1000);

// Function to pad single-digit numbers with a leading zero
function padZero(num) {
    return num.toString().padStart(2, '0');
}
