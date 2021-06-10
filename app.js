const base_Url = 'http://api.openweathermap.org/data/2.5/weather?q=city&units=metric&appid=40131850ee656d434f99a769b1992139&lang=es';

const btn = document.getElementById('boton');
var con=0;
btn.addEventListener('click',function(){
    const input = document.querySelector('input'); 
    var city = input.value;
    const url = `${base_Url.replace('city',city)}`
    fetch(url)
        .then((respuesta)=>respuesta.json())
        .then((ResponseJson) =>mostrarData(ResponseJson))
})


const mostrarData = (ResponseJson) => {
    const url_image = 'http://openweathermap.org/img/wn/im-we@2x.png';
    const recuadro = document.getElementById('re');
    const time = document.createElement('div');
    time.classList.add('recuadro');
    const timeContent = `
    <div class="sub_recuadro">
        <div>
            <p> ${ResponseJson.name}</p>
            <p> ${ResponseJson.sys.country} </p>
        </div>
        <p class="temperatura"><b> ${ResponseJson.main.temp}&deg</b></p>
        <img src="${url_image.replace('im-we',ResponseJson.weather[0].icon)}" class="img-weather">
        <p> ${ResponseJson.weather[0].description} </p> 
        
    </div>
    `;
    time.innerHTML = timeContent;
    recuadro.appendChild(time);
}

