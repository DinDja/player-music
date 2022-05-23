let musica = document.querySelector('audio');


//eventos do script

document.querySelector('.botao-play').addEventListener('click', tocarMusica);
document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

//funções

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';

}

function atualizarBarra(){
    let Barra = document.querySelector('progress');
    Barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let timeDuration = document.querySelector('.inicio');
    timeDuration.textContent =segundosPminutos(Math.floor(musica.currentTime));
}
function segundosPminutos(segundos){
    let cMinutos = Math.floor( segundos / 60);
    let cSegundos = segundos % 60;
    if (cSegundos < 10){
        cSegundos = '0' + cSegundos;
    }
    return cMinutos+':'+ cSegundos;
}
