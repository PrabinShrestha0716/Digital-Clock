function updateclock(){
    const now = new Date();
    let hours = now.getHours();
     let minutes =now.getMinutes();
      let seconds =now.getSeconds();
      let Year = now.getFullYear();
      let month = now.getMonth();
      let day = now.getDate();
      let week = now.getDay();

      let period = "AM";

if (hours >= 12) {
        period = "PM";
    }
    if (hours === 0) {
        hours = 12; // midnight
    } else if (hours > 12) {
        hours = hours - 12;
    }

switch (week) {
    case 0:
    week="SUN";
    break;
    case 1:
    week="MON";
    break;
    case 2:
    week="TUE";
    break;
    case 3:
    week="WED";
    break;
    case 4:
    week="THUR";
    break;
    case 5: 
    week="FRI";
    break;
    case 6:
    week="SAT";
    break;

    default:
        break;
}
hours = String(hours).padStart(2, "0");
minutes = String(minutes).padStart(2, "0");
seconds = String(seconds).padStart(2, "0");

const timeString = `${hours}:${minutes}:${seconds} ${period}`;
const dateString = `${Year}/${month+1}/${day}`;
const dayString = `${week}`;

document.querySelector(".time-display").textContent = timeString;
document.querySelector(".date-display").textContent = dateString;
document.querySelector(".day-display").textContent = dayString;

}


 updateclock();
 setInterval(updateclock, 1000);