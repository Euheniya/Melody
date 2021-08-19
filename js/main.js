$(document).ready(function () {
  var currentFloor=2;/*переменная, обозначающая этаж */
  var counterUp=$(".counter-up");/*переменная, обозначающая верхнюю стрелку в счетчике */
  /*$(".home-image path").on("click",function(){ /*при нажатии на этаж меняется счетчик */
   $(".home-image path").on("mouseover",function(){/*при наведении на этаж меняется счетчик */
   /* console.log($(this).attr("data-floor"));/*Вывод № этажа в консоль*/ 
   currentFloor=$(this).attr("data-floor");/*переменной присвоили № этажа */
   $(".counter").text(currentFloor);/*счетчику присвоили переменную с № этажа */
  });
  counterUp.on("click", function(){
   /* console.log("кликнули по кнопке вверх");/*проверка работы верхней кнопки в консоли */
    currentFloor++;/*увеличиваем переменную этажа на 1 */
    usCurrentFloor = currentFloor.toLocaleString("en-US",{minimumIntegerDigits:2,useGroupping:false});/*настройка фомата счетчика для вывода через 0 */
    /*$(".counter").text(currentFloor);/*переменной-счетчику прсвоили значение переменной этажа+1 */
    $(".counter").text(UsCurrentFloor);/*переменной-счетчику прсвоили значение переменной этажа+1 в отформатированном формате*/
  })
});