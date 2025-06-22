console.log("Train js");
import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));
// TASK G:
function getHighestIndex(text){
    const result = Math.max(...text)
    console.log(`berilgan array'ning ichidagi eng katta son bu ${chalk.red(`${result}`)} va uning array'dagi index raqami bu ${chalk.bgMagenta.magenta(`${text.indexOf(result)}`)} `);
}
getHighestIndex([5, 21, 12, 21 ,8]); 


// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
// Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.