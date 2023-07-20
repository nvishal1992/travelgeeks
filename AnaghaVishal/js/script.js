// Get the target date (replace with your desired start date and time)
const targetDate = new Date('2023-01-02T19:54:06').getTime();

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
