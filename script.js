const arrow = document.getElementById('arrow');

arrow.addEventListener('click', function(){
    document.getElementById('about-me-container').scrollIntoView({behavior: 'smooth'})
})