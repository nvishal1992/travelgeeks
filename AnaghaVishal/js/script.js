// Get the current date and time
const currentDate = new Date();

// Get January 1st of the current year
const january1st = new Date(currentDate.getFullYear(), 0, 1);

// Calculate the time elapsed in milliseconds
const timeElapsed = currentDate.getTime() - january1st.getTime();

// Convert milliseconds to days, hours, minutes, and seconds
const millisecondsInSecond = 1000;
const millisecondsInMinute = millisecondsInSecond * 60;
const millisecondsInHour = millisecondsInMinute * 60;
const millisecondsInDay = millisecondsInHour * 24;

const days = Math.floor(timeElapsed / millisecondsInDay);
const hours = Math.floor((timeElapsed % millisecondsInDay) / millisecondsInHour);
const minutes = Math.floor((timeElapsed % millisecondsInHour) / millisecondsInMinute);
const seconds = Math.floor((timeElapsed % millisecondsInMinute) / millisecondsInSecond);

// Display the time elapsed on the webpage
const timeElapsedElement = document.getElementById('time-elapsed');
timeElapsedElement.innerHTML = `Time elapsed: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds.`;
