/* //Задача 1
Напишите однострочное решение,
которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива. */

console.log(
  // Входной массив
  [1, 4, 3, 0, 4, 5, 4]
  // Оставляем только чётные числа
    .filter((Element) => !(Element % 2))
  // Считаем квадратный корень и записываем в аккумулятор
    .reduceRight((accumulator, Element) => accumulator + Math.sqrt(Element), 0),
); // 6
