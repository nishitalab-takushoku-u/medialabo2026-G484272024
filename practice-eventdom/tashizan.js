let b = document.querySelector('#calc');
b.addEventListener('click', tashizan);

function tashizan() {
    let i1 = document.querySelector('#left');
    let i2 = document.querySelector('#right');
    let a = Number(i1.value);
    let c = Number(i2.value);
    let result = a + c;
    let span = document.querySelector('#answer');
    span.textContent = result;
}