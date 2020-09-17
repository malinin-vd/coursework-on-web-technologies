/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция сладера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Валидация
function validateForm() {
    var name = document.forms["callback"]["name"].value;
    var email = document.forms["callback"]["email"].value;
    var phone = document.forms["callback"]["phone"].value;
    var country = document.forms["callback"]["country"].value;
    var letters = /^[A-Za-zА-Яа-я]+$/;
    var email_reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    var phone_reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    if (name == "" || !name.match(letters)) {
        swal("Ваше имя", "Заполните поле корректно!", "error");
        return false;
    } else if (email == "" || !email.match(email_reg)) {
        swal("Email", "Заполните поле корректно!", "error");
        return false;
    } else if (phone == "" || !phone.match(phone_reg)) {
        swal("Телефон", "Заполните поле корректно!", "error");
        return false;
    } else if (country == "" || !country.match(letters)) {
        swal("Город", "Заполните поле корректно!", "error");
        return false;
    } else {
        swal("Отлично!", "Ваша заявка отправлена!", "success");
        return true;
    }
}
function validateFormTradeIn() {
    var car_make = document.forms["trade_in_value"]["car_make"].value;
    var car_name = document.forms["trade_in_value"]["car_name"].value;
    var cost_new_car = document.forms["trade_in_value"]["cost_new_car"].value;
    var car_mileage = document.forms["trade_in_value"]["car_mileage"].value;
    var word = /^[\w\dА-я]+$/;
    var number = /\d/;
    if (car_make == "" || !car_make.match(word)) {
        swal("Марка машины", "Заполните поле корректно!", "error");
        return false;
    } else if (car_name == "" || !car_name.match(word)) {
        swal("Название машины", "Заполните поле корректно!", "error");
        return false;
    } else if (cost_new_car == "" || !cost_new_car.match(number)) {
        swal("Цена покупки", "Заполните поле корректно!", "error");
        return false;
    } else if (car_mileage == "" || !car_mileage.match(number)) {
        swal("Пробег машины", "Заполните поле корректно!", "error");
        return false;
    } else {
        var result =  (cost_new_car*0.7) - (car_mileage/1.5);
        swal("Отлично!", "Автомобиль " + car_make + " " + car_name + " будет стоить в Trade-in " + Math.floor(result) + " рублей", "success");
        return true;
    }
}