/*
 * Напиши скрипт вибору вартості готелю по кількості зірок.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Якщо в змінній stars щось окрім чисел 1-5, виведи рядок
 * 'Такої кількості зірок немає'
 */



const stars = 1;
let price 
if(stars===1){
    price= 20;
   
} else if(stars===2){
    price = 30;
} else if(stars===3){
    price=50;
} else {
    console.log("Not enought stars on stock")
}

  switch(stars){
    case 1:
        price = 20;
        break;
    case 2:
            price = 30;
            break;
    case 3:
            price= 50;
            break;
    case 4:
            price = 79;
           break;
}

const id = 2;
let delivery;

switch(id){
    case 1:
        console.log("самовивіз")
        break;

    case 2:
        console.log("курєр")
        break;
    case 3:
        console.log("курєр")
        break;
        default: log;
}



const mood = "sad"

switch(mood){
    case "happy":
        console.log("VERY HAPPY");
        break;
    case "sad":
        console.log("VERY SAD")
        break
    case "angry":
        console.log("VERY ANGRY")
        break;

    default: log;

}







/*

 * Напиши скрипт вибору вартості готелю по кількості зірок.
 * 1,2 - 20$, 3,4 - 30$, 5 - 120$
 */

/*
 * Напиши скрипт вибору опції доставки товару.
 * Опція зберігається в зміній option: 1 - самовивіз, 2 - кур'єр, 3 - пошта
 *
 * В зміну message записати повідомлення в залежності від поції.
 * - 'Ви можете забрати товар завтра з 12:00 в нашому офісі'
 * - 'Кр'єр доставить замовлення завтра з 9:00 до 18:00'
 * - 'Посилка буде надіслана сьогодні'
 * - 'Вам зателефонує наш менеджер'
 */
