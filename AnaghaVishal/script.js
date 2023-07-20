// Get January 2nd at 7:00 PM of the current year
const targetDate = new Date(new Date().getFullYear(), 0, 2, 19, 0, 0).getTime();

// Update the time elapsed every second
const timeElapsedInterval = setInterval(function() {
    const now = new Date().getTime();
    const timeElapsed = now - targetDate;

    // Calculate time units
    const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

    // Display the time elapsed on the webpage
    const timeElapsedElement = document.getElementById('time-elapsed');
    timeElapsedElement.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds.`;
}, 1000);
