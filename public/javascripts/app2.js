const centerText = document.querySelector('.center-text')

const tl = new TimelineMax();

tl.fromTo(centerText, { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0 })