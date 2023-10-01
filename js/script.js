const horas = document.getElementById('horas'); //armazenar o elemento
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){ //Função para atulizar o relógio na página
    let dateToday = new Date(); /*hora atual*/
    let hr  = dateToday.getHours(); 
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hr<10)  hr = '0' + hr;  // se hora for menor que 10, será adicionado um '0' do lado esquerdo. Exemplo: se for 9:47 -> ficará: 09:47
    if (min<10) min = '0' + min;
    if (sec<10) sec = '0' + sec;
    horas.textContent = hr;    // é atribuido o valor que está na váriavrl hr, para a váriavel Horas.
    minutos.textContent = min;
    segundos.textContent = sec;
})