let b = document.querySelector('button#print');
b.addEventListener('click', greeting);
function greeting() {
    let i = document.getElementsByName('shimei')[0];
    let shimei = i.value;
    let aisatsu = 'こんにちは，' + shimei + 'さん';
    let p = document.getElementById('message');
    p.textContent = aisatsu;
}