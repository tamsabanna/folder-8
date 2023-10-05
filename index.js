const elementdays = document.querySelector(".leftdays");
const elementhours = document.querySelector(".lefthours");
const elementminutes = document.querySelector(".leftminutes");
const elementseconds = document.querySelector(".leftseconds");
const clockclass = document.querySelector(".clock");
const heading = document.querySelector("h3");


const seconds = 1000,
minutes = 60 * seconds,
hours = 60 * minutes,
days = 24 * hours;

const timerfunction = ()=>{

    let now = new Date(), 
    dd = String(now.getDate()).padStart(2, "0");
    mm = String(now.getMonth()).padStart(2, "0");
    yyyy = String(now.getFullYear()).padStart(4, "20");
    now = `${mm}/${dd}/${yyyy}`;

    const entereddate = prompt("Enter Date").padStart(2, "0")
    const enteredmonth = prompt("Enter Month").padStart(2, "0")
    const enteredyear = prompt("Enter year").padStart(4, "20")
    let targeteddate = `${enteredmonth}/${entereddate}/${enteredyear}`;

    if (now < targeteddate){
        targetdate = `${enteredmonth}/${entereddate}/${enteredyear +1}`;
    }

   const intervalId = setInterval(() => {
    const targetdate = new Date(targeteddate).getTime();
    const currentdate = new Date().getTime();


    const differnce = targetdate - currentdate;

    const leftdays = (Math.floor(differnce/days));
    const lefthrs = (Math.floor((differnce % days)/hours));
    const leftmins = (Math.floor((differnce%hours)/minutes));
    const leftsecs = (Math.floor((differnce%minutes)/seconds));


    elementdays.innerText = leftdays;
    elementhours.innerText = lefthrs;
    elementminutes.innerText = leftmins;
    elementseconds.innerText = leftsecs;

    if (differnce < 0){
        clearInterval(intervalId);
        clockclass.style.display = "none";
        heading.innerText = "Time's up"
   };

   }, 0);



};
timerfunction();