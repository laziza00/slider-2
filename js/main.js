let imgs = document.getElementById('imgs');
let leftBtn = document.getElementById('left');
let rightBtn = document.getElementById('right');


let img = document.querySelectorAll('#imgs img');

let idx = 0;

function changeImg() {
    if (idx > img.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = img.length - 1
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`
}

rightBtn.addEventListener('click', function change() {
    idx++;
    resetInter();
    changeImg()
})
leftBtn.addEventListener('click', function change() {
    idx--;
    resetInter();
    changeImg()
})

let interval = setInterval (run, 3000);

function run () {
    idx++;
    changeImg();
}

function resetInter () {
    clearInterval(interval);
    interval = setInterval(run, 3000);
}
