 const evenNum='Even';
 const oddNum='Odd';
 const notCorrectValue='The entered value is not a number';
/** 
 *  1) написати функцію, яка повертає рядок 'odd' або 'even', в залежності від 
 *  прийнятого аргументу(число).
 *  Значення для перевірки функції вводить користувач.
 * @param {number} number
 * @returns {string}
 */
 function checkOddOrEvenNum () {
    number = prompt('Enter number', 1);
    if (number === '' || number === null || Number.isNaN(Number(number))) {
        return notCorrectValue;
    }
    if (number % 2 === 0) {
        return evenNum;
    }
    return oddNum;
  }
  console.log(checkOddOrEvenNum());
  

  /**
   * 2)написати функцію, яка приймає два аргументи і, якщо аргументи одного типу, 
   * то повертає той, який має більше значення (якщо значення рівні - повертаємо null), 
   * інакше(якщо різного типу) теж повертає null.
   * Значення для перевірки функції вводимо без користувача.
  * @param {*} value1
  * @param {*} value2
  * @returns  {* | null}
  */
  function compareValues (value1, value2) {
    if (typeof value1 === typeof value2) {
        if (value1 === value2) {
            return null;
        }
        if (value1 > value2) {
            return value1;
       }
        if (value1 < value2) {
            return value2;
        }
    }
    return null;
 }  
 
//     second variant
//function compareValues (value1, value2) {
//    if (typeof value1 === typeof value2) {
//        if (value1 === value2) {
//            return null;
//        }
//        else{
//            return (value1 > value2) ? value1 : value2;
//        }
// }
//    return null;
//  }
// second variant

  
  console.log(compareValues(3, 9));
  console.log(compareValues(1, 4));
  console.log(compareValues('abc', '11'));
  console.log(compareValues('1', 14));
