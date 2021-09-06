//alert('Ma is  coming');

const maComing = () => {
    alert('Ammu is coming open the book')
};

const askMarket = () => {
    const confirmMsg = confirm('are you going to market so some nessery gusaris buy');
    console.log(confirmMsg);
    if (confirmMsg === true) {
        console.log("okay baby .lats Go shoping");

    }
    else {
        console.log('Tk poish nai Baby,so shoping korbo na');
    }
};

const bookingCar = () => {
    const name = prompt('what is your name');

    if (name === null) {
        console.log("no result funde");
    }
    if (name) {
        const place = prompt(' plesa your diseard location ');
        console.log("place:", place);

    }
    console.log("name:", name);




}
