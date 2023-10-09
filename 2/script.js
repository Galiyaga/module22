const btn = document.querySelector('.button')

btn.addEventListener('click', () => {
    let icon1 = document.querySelector('#icon1')
    let icon2 = document.querySelector('#icon2')

    if(icon1.style.display === 'none') {
        icon1.style.display = 'block';
        icon2.style.display = 'none';
    } else {
        icon1.style.display = 'none';
        icon2.style.display = 'block';
    }
})