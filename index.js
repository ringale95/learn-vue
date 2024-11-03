let count = 0;
const btnElement = document.getElementById('btn');
btnElement.addEventListener('click', () =>{
    count += 1;
    btnElement.textContent = `You click me ${count} times`;
})