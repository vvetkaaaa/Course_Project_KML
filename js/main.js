const buttons = document.querySelectorAll('.style-tattoo-btn');
// цикл для каждой кнопки
buttons.forEach(function(button) {
  // назначить обработчик события click
  button.addEventListener('click', function() {
    // убрать класс "style-tattoo-btn-active" со всех кнопок
    buttons.forEach(function(btn) {
      btn.classList.remove('style-tattoo-btn-active');
    });
    // добавить класс "style-tattoo-btn-active" к нажатой кнопке
    this.classList.add('style-tattoo-btn-active');
  });
});

const button = document.getElementById("btn-click") ;
 button.addEventListener("click", Click);
 function Click(){
     alert("Ваш запрос отправлен!");
}


