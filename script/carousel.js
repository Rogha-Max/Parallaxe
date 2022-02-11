let precedent = $("#prev");
let suivant = $("#next");
let images = document.querySelectorAll("#carousel_img>img");
let link_nav = document.querySelectorAll("#carousel_nav>svg");
let bubble = document.querySelectorAll("#carousel_nav rect");
let selection = 0;

images[selection].style.display = 'block';
bubble[selection].style.stroke = '#7a805d';

suivant.click(function () {
    images[selection].style.display = 'none';
    selection += 1;
    if (selection > images.length - 1) {
        selection = 0;
    }
    images[selection].style.display = 'block';
    for (let k = 0; k < bubble.length; k++) {
        bubble[k].style.stroke = '#518781';
    }
    for (let k = 0; k < bubble.length; k++) {
        bubble[k].style.stroke = '#518781';
    }
    bubble[selection].style.stroke = '#7a805d';
});

precedent.click(function () {
    images[selection].style.display = 'none';
    selection -= 1;
    if (selection < 0) {
        selection = images.length - 1;
    }
    for (let k = 0; k < bubble.length; k++) {
        bubble[k].style.stroke = '#518781';
    }
    images[selection].style.display = 'block';
    bubble[selection].style.stroke = '#7a805d';
});

link_nav[0].addEventListener("click", () => {
    bubble[0].style.stroke = '#7a805d';
    for (let j = 0; j < images.length; j++) {
        images[j].style.display = 'none';
    }
    for (let k = 0; k < bubble.length; k++) {
        bubble[k].style.stroke = '#518781';
    }
    i = 0;
    images[i].style.display = 'block';
    bubble[i].style.stroke = '#7a805d';
});
link_nav[1].addEventListener("click", () => {
    for (let j = 0; j < images.length; j++) {
        images[j].style.display = 'none';
    }
    for (let k = 0; k < bubble.length; k++) {
        bubble[k].style.stroke = '#518781';
    }
    i = 1;
    images[i].style.display = 'block';
    bubble[i].style.stroke = '#7a805d';
});
link_nav[2].addEventListener("click", () => {
    for (let j = 0; j < images.length; j++) {
        images[j].style.display = 'none';
    }
    for (let k = 0; k < bubble.length; k++) {
        bubble[k].style.stroke = '#518781';
    }
    i = 2;
    images[i].style.display = 'block';
    bubble[i].style.stroke = '#7a805d';
});
link_nav[3].addEventListener("click", () => {
    for (let j = 0; j < images.length; j++) {
        images[j].style.display = 'none';
    }
    for (let k = 0; k < bubble.length; k++) {
        bubble[k].style.stroke = '#518781';
    }
    i = 3;
    images[i].style.display = 'block';
    bubble[i].style.stroke = '#7a805d';
});
link_nav[4].addEventListener("click", () => {
    for (let j = 0; j < images.length; j++) {
        images[j].style.display = 'none';
    }
    for (let k = 0; k < bubble.length; k++) {
        bubble[k].style.stroke = '#518781';
    }
    i = 4;
    images[i].style.display = 'block';
    bubble[i].style.stroke = '#7a805d';
});
link_nav[5].addEventListener("click", () => {
    for (let j = 0; j < images.length; j++) {
        images[j].style.display = 'none';
    }
    for (let k = 0; k < bubble.length; k++) {
        bubble[k].style.stroke = '#518781';
    }
    i = 5;
    images[i].style.display = 'block';
    bubble[i].style.stroke = '#7a805d';
});
link_nav[6].addEventListener("click", () => {
    for (let j = 0; j < images.length; j++) {
        images[j].style.display = 'none';
    }
    for (let k = 0; k < bubble.length; k++) {
        bubble[k].style.stroke = '#518781';
    }
    i = 6;
    images[i].style.display = 'block';
    bubble[i].style.stroke = '#7a805d';
});
link_nav[7].addEventListener("click", () => {
    for (let j = 0; j < images.length; j++) {
        images[j].style.display = 'none';
    }
    for (let k = 0; k < bubble.length; k++) {
        bubble[k].style.stroke = '#518781';
    }
    i = 7;
    images[i].style.display = 'block';
    bubble[i].style.stroke = '#7a805d';
});
link_nav[8].addEventListener("click", () => {
    for (let j = 0; j < images.length; j++) {
        images[j].style.display = 'none';
    }
    for (let k = 0; k < bubble.length; k++) {
        bubble[k].style.stroke = '#518781';
    }
    i = 8;
    images[i].style.display = 'block';
    bubble[i].style.stroke = '#7a805d';
});
