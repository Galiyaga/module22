const width = window.screen.width;
const height = window.screen.height;

console.log(width, height);

const geo = document.querySelector('#geo');
const btn = document.querySelector('.button');

const error = () => {
    geo.textContent = 'Информация о местоположении недоступна'
}

const successful = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    geo.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
}

btn.addEventListener('click', () => {
    if(!navigator.geolocation) {
        geo.textContent = 'Геолокация не поддерживается Вашим браузером'
    } else {
        geo.textContent = 'Ожидание...'
        navigator.geolocation.getCurrentPosition(successful, error);
    }

})

