import anime from 'animejs/lib/anime.es.js';


const animetitle = ()=>{
    anime({
        targets: '.st0',
        translateX: '250px',
    });
    console.log('test');
}

animetitle(); 