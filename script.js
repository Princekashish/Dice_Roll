let images = ["dice-01.svg",
    "dice-02.svg",
    "dice-03.svg",
    "dice-04.svg",
    "dice-05.svg",
    "dice-06.svg"];
let dice = document.querySelectorAll("img");
function roll() {
    dice.forEach(function (die) {
        die.classList.add('shake');
    });
    setTimeout(function () {
        dice.forEach(function (die) {
            die.classList.remove('shake');
        });
        let dieOnevalue = Math.floor((Math.random() * 6));
        let dieTwovalue = Math.floor((Math.random() * 6));
        console.log(dieOnevalue, dieTwovalue);
        document.querySelector('#onedie').setAttribute("src", images[dieOnevalue]);
        document.querySelector('#twodie').setAttribute("src", images[dieTwovalue]);
        document.querySelector('#total').innerHTML = 'Your Roll is ' + ((dieOnevalue + 1) + (dieTwovalue + 1));
    },
        1000
    );
}
roll()
