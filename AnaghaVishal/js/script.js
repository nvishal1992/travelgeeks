// Get the target date and time (January 2nd, 2023, 7:54:06 PM)
const targetDate = new Date('2023-01-02T19:54:06').getTime();

// Update the time elapsed every second
const timeElapsedInterval = setInterval(function() {
    const now = new Date().getTime();
    const timeElapsed = now - targetDate;

    // Calculate time units
    const millisecondsInSecond = 1000;
    const millisecondsInMinute = millisecondsInSecond * 60;
    const millisecondsInHour = millisecondsInMinute * 60;
    const millisecondsInDay = millisecondsInHour * 24;
    const millisecondsInMonth = millisecondsInDay * 30.44; // Approximation based on an average month

    const months = Math.floor(timeElapsed / millisecondsInMonth);
    const remainingTime = timeElapsed % millisecondsInMonth;
    const days = Math.floor(remainingTime / millisecondsInDay);
    const hours = Math.floor((remainingTime % millisecondsInDay) / millisecondsInHour);
    const minutes = Math.floor((remainingTime % millisecondsInHour) / millisecondsInMinute);
    const seconds = Math.floor((remainingTime % millisecondsInMinute) / millisecondsInSecond);

    // Display the time elapsed on the webpage
    const timeElapsedElement = document.getElementById('time-lapsed');
    timeElapsedElement.innerHTML = `${months} months, ${days} days, ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
