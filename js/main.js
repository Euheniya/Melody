$(document).ready(function () {
  var currentFloor=2;/*переменная, обозначающая этаж */
  var floorPath = $(".home-image path"); /*переменная, обозначающая подсветку этажа */
  var counterUp=$(".counter-up");/*переменная, обозначающая верхнюю стрелку в счетчике */
  var counterDown=$(".counter-down");/*переменная, обозначающая нижнюю стрелку в счетчике */
  var modal = $(".modal");/*переменная, модальное окно*/
  var modalCloseButton = $(".modal-close-button");/*переменная для кнопки закрытия модального окна */
  var viewFlatsButton=$(".view-flats");/*переменная для кнопки Смотреть квартиры */

  //функция при наведении мышкой на этаж  
  /*floorPath.on("click",function(){ /*при нажатии на этаж меняется счетчик */
   floorPath.on("mouseover",function(){/*при наведении на этаж меняется счетчик */
   /* console.log($(this).attr("data-floor"));/*Вывод № этажа в консоль*/ 
   floorPath.removeClass("current-floor");/*очищаем переменную currentFloor */
   currentFloor=$(this).attr("data-floor");/*переменной присвоили № этажа */
   $(".counter").text(currentFloor);/*счетчику присвоили переменную с № этажа */
  });

    floorPath.on('click',toggleModal)/*при нажатии на этаж открывается модальное окно*/

    modalCloseButton.on('click',toggleModal);/*закрыть модальное окно*/

    viewFlatsButton.on('click',toggleModal); /*вызов модального окна при нажатии на кнопку смотреть */

  //отслеживаем клик по кнопке вверх
  counterUp.on("click", function(){
   if (currentFloor<18){/*проверка не выше 18 этажа */
     /* console.log("кликнули по кнопке вверх");/*проверка работы верхней кнопки в консоли */
    currentFloor++;/*увеличиваем переменную этажа на 1 */
    UsCurrentFloor = currentFloor.toLocaleString("en-US",{minimumIntegerDigits:2,useGroupping:false});/*настройка фомата счетчика для вывода через 0 */
    /*$(".counter").text(currentFloor);/*переменной-счетчику прсвоили значение переменной этажа+1 */
    $(".counter").text(UsCurrentFloor);/*переменной-счетчику прсвоили значение переменной этажа+1 в отформатированном формате*/
    floorPath.removeClass("current-floor");/*очищаем переменную currentFloor */
    $(`[data-floor=${UsCurrentFloor}]`).toggleClass("current-floor");/*добавляем класс  этажу */
   }
  })
  
  //отслеживаем клик по кнопке вверх
  counterDown.on("click", function(){
   if (currentFloor>2){/*проверка не ниже 2 этажа */
     /* console.log("кликнули по кнопке вниз");/*проверка работы нижней кнопки в консоли */
    currentFloor--;/*уменьшаем переменную этажа на 1 */
    UsCurrentFloor = currentFloor.toLocaleString("en-US",{minimumIntegerDigits:2,useGroupping:false});/*настройка фомата счетчика для вывода через 0 */
    /*$(".counter").text(currentFloor);/*переменной-счетчику прсвоили значение переменной этажа-1 */
    $(".counter").text(UsCurrentFloor);/*переменной-счетчику прсвоили значение переменной этажа-1 в отформатированном формате*/
    floorPath.removeClass("current-floor");/*очищаем переменную currentFloor */
    $(`[data-floor=${UsCurrentFloor}]`).toggleClass("current-floor");/*добавляем класс  этажу */
   }
  });

  function toggleModal(){ /*функция открытия/закрытия модального окна */
      modal.toggleClass("is-open");
    }
});