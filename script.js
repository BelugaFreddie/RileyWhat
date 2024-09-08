const arrow = document.getElementById('arrow');

arrow.addEventListener('click', function(){
    document.getElementById('about-me-container').scrollIntoView({behavior: 'smooth'})
})

const arroww = document.getElementById('arroww');

arroww.addEventListener('click', function(){
    document.getElementById('home-page').scrollIntoView({behavior: 'smooth'})
})