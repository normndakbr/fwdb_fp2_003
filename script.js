var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var city = document.querySelector('.city');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');

button.addEventListener('click', function () {
            fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=65bbeaab9e4aa37b4fae724f1dfbecc3')
                .then(response => response.json())
                    .then(data => {
                        var cityValue = data['name'];
                        var tempValue = data['main']['temp'];
                        var descValue = data['weather'][0]['description'];
                        var windValue = data['wind']['speed'];

                        city.innerHTML = cityValue;
                        temp.innerHTML = "Temperature: " + (tempValue - 273).toFixed(1) + " °C";
                        desc.innerHTML = "Condition: " + descValue;
                        wind.innerHTML = "Wind Speed: " + (windValue * 3.6).toFixed(2) + " km/h";
                    })
                    

                    .catch(err => alert("Nama kota yang Anda masukkan salah!"))
                })