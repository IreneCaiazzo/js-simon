//refresh

const x = setInterval(function() {

    //definire data iniziale e finale
    const today = new Date().getTime();
    const countDownDate = new Date("Apr 28, 2023 9:30:00").getTime();

    console.log(today);
    console.log(countDownDate);

    const countDown = countDownDate - today;
    console.log(countDown);


    //rendere leggibile la data

    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((countDown % (1000 * 60)) / 1000);

    console.log (days, hours, mins, secs);

    //display sul DOM

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "+ mins + "m " + secs + "s ";

}, 1000);
