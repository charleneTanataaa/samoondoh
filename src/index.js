function museumClick(){
    console.log("Museum Clicked!")
}

function clock(){
    const clockElement = document.getElementById("clock");
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    clockElement.innerText = `${h}:${m}`;
    console.log(h);
    setTimeout(clock, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
}
clock();