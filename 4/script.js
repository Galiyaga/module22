let latitude, longitude;
const btn = document.querySelector('#button');
const timezone = document.querySelector('#timezone');
const dateTimeTxt = document.querySelector('#date_time_txt');

const error = () => {
    timezone.textContent = 'Невозможно получить ваше местоположение';
};

const success = (position) => {
    console.log('position', position);
    latitude  = position.coords.latitude;
    longitude = position.coords.longitude;
};

navigator.geolocation.getCurrentPosition(success, error);

btn.addEventListener('click', () => {
    fetch(`https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${latitude}&long=${longitude}`)

    .then((response) => {
        const result = response.json();
        return result;
      })
    .then((data) => {
        timezone.innerText = data.timezone;
        dateTimeTxt.innerText = data.date_time_txt;
      })
      .catch(() => {console.log('error') });
  });