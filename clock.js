function updateClock(){
    // Get the current date
    let currentTime = new Date();

    // Extract hours, minutes, seconds from the date
    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    // Pad 0 if hours, minutes, seconds are less than 10 (single digit)
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // Convert railway clock to AM/PM clock. means converting 24-hours clock to 12-hours.
    currentHours = (currentHours > 12) ? currentHours-12 : currentHours;
    currentHours = (currentHours == 0) ? 12 : currentHours;
    currentHours = (currentHours < 10 ? "0" : "") + currentHours;

    // Choose AM/PM as per the time of day.
    let timeOfDay = (currentHours > 12) ? "AM" : "PM";

    // Preparing the time string for hours, minutes, seconds and AM/PM.
    let currentTimeStr = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

    // Inserting the time string inside DOM.
    document.getElementById('clock').innerHTML = currentTimeStr;
}