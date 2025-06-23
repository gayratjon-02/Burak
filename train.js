// console.log("Train js");


// H-TASK: 

function getPositive(num){
    const result = num.filter((ele) => {
        return ele >= 0;
    }).join("").toString();
    console.log(`"${result}"`);
    console.log(result);
   
 


}
getPositive([1, -4, 2]) ;





// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"



// import chalk from 'chalk';

// console.log(chalk.blue('Hello world!'));
// // TASK G:
// function getHighestIndex(text){
//     const result = Math.max(...text)
//     console.log(`berilgan array'ning ichidagi eng katta son bu ${chalk.red(`${result}`)} va uning array'dagi index raqami bu ${chalk.bgMagenta.magenta(`${text.indexOf(result)}`)} `);
// }
// getHighestIndex([5, 21, 12, 21 ,8]); 


// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
// Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.