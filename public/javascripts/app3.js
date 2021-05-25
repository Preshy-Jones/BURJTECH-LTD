var imageChanger = document.querySelector('.showcase-5')
//console.log(imageChanger);
var images = ['blue-and-red-galaxy-artwork-1629236.jpg', 'abstract-blackboard-bulb-chalk-355948.jpg', 'hitachi-white-black-angle-grinder-162534.jpg', 'industry-metal-fire-radio-73833.jpg']
var counter = 0;

function changeImage() {
    if (counter >= images.length) {
        counter = 0;
    }

    imageChanger.style.background = 'url(' + 'images/' + images[counter] + ')';
    counter++;
    console.log(counter);
}

setInterval(changeImage, 3000)
