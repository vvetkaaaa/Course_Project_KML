const openWindow = document.getElementById('open-pop-up');
const closeWindow = document.getElementById('pop-up-close');
const popUp = document.getElementById('pop-up');

openWindow.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closeWindow.addEventListener('click', () => {
    popUp.classList.remove('active');
})
