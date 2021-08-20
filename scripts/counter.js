let count = 0;
let counter = document.querySelector('.counter');

counter.innerHTML = count;

document.getElementById('plus').addEventListener('click', ()=> {
    count++;
    counter.innerHTML = count;
});

document.getElementById('minus').addEventListener('click', ()=> {
    count--;
    count = (count<0) ? 0 : count;
    counter.innerHTML = count;
});