let href = document.getElementById('demo-a').getAttribute('href');
let input = document.getElementById('demo-input');
let btn = document.getElementById('btn-demo');
btn.addEventListener ('click', () => {
    input.value += href;
})
