
//Extends countdown.js with some helper functions


//Start countdown with default end time
function startdefaultcountdown() {
    countdown(window.year, window.month, window.day, window.hour, window.minute);
}


//Start countdown with custom end time
function startcountdown(yr, m, d, hr, min, note) {
    window.note = note;
    countdown(yr, m, d, hr, min);
}


//Gets called when times up
function touchdown(note) {
    //TODO: add callback code here
    window.external.notify(note);
}



