/* const btn = document.querySelector('.btn');

btn = document.addEventListener('click', function(){
    document.getElementById('menu').classList.toggle('active');
}) */

const btn = document.querySelector('.btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', function(event) {
    event.stopPropagation(); // Evita que el evento se propague al documento
    menu.classList.toggle('active');
});

// Cierra el menú si se hace clic fuera del mismo
/* document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !btn.contains(event.target)) {
        menu.classList.remove('active');
    }
}); */
