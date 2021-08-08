const cursor = document.querySelector('.cursor-inner');
const cursor2 = document.querySelector('.cursor-outer');
const hover = document.querySelectorAll('.hover');
const body = document.querySelector('.body');

document.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';

    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
});

hover.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('inner-cursor');
        cursor2.classList.remove('outer-cursor');
    });
    link.addEventListener('mouseover', () => {
        cursor.classList.add('inner-cursor');
        cursor2.classList.add('outer-cursor');
    });
});







// Dark || Lidht mode
// const body = document.getElementById('body');
// const checkbox = document.getElementById('checkbox');

// checkbox.addEventListener('click', () => {
//     if (checkbox.checked === true) {
//         body.classList.add('light-bg');
//     } else {
//         body.classList.remove('light-bg');
//     }
// })
