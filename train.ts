/*  Project Standards:
    - Logging standards
    - Naming standards
      function, method, cariable => Camel
      class => Snake
      folder => Kebab
      css => snale
    - Error handling
*/

/* 

Traditinal Api
Rest Api
GraphQL Api

.....
*/

/*

  Traditional FD  => SSR => EJS
  Modern FD       => SPA => REACT


*/

/**   <Sessions>
  request join
  self destroy

 */

  /* VALIDATIONS:

  FrontEnd validation
   validation

  Backend validation
  DataBase validation
  
  
  
  
  */


//   TASK M:


function getSquareNumbers(arr: Number[]){
  // console.log(arr[0]);
 for(let i = 0; i < arr.length; i++){
  return  i;

  // Math.pow(arr[i] , 2)
 }
  // console.log(result);
  // console.log(arr);
  // console.log(arr);
}

getSquareNumbers([1, 2, 3])



// Shunday function tuzing, u raqamlardan tashkil topgan array qabul qilsin
// va array ichidagi har bir raqam uchun raqamning o'zi va hamda o'sha raqamni kvadratidan
// tashkil topgan object hosil qilib, hosil bo'lgan objectlarni array ichida qaytarsin

// MASALAN: MASALAN: getSquareNumbers([1, 2, 3]) return [{ number: 1, square: 1 }, { number: 2, square: 4 }, { number: 3, square: 9 }];


   // TASK L:
// function  reverseSentence(arr:string) {
//   let reversed = '';
//   for (let i = arr.length - 1 ; i>= 0; i--){
//     reversed += arr[i];
//   }
//   console.log(reversed.split(' ').reverse())
// }



//   reverseSentence("we like coding!")



  // So'zlarni ketma - ketligini buzmasdan har bir so'zni
  // alohida teskarisiga o'girib beradigan fucntion tuzing.
  // Funtion yagona string qabul qilsin
  
  // MASALAN: reverseSentence("we like coding!") return "ew ekil !gnidoc";
  // Qaytayotgan natijaga e'tibor bersangiz, so'zlar joyi o'zgarmasdan turgan o'rnida teskarisiga o'girilmoqda




// function countVowels(text:string):void {
//   const vovels = ['a',  'e' ,'i', 'o', 'u' ];
//   const lowerCase = text.toLowerCase().split('');
//   let amountVovel = 0;

//   for(let i = 0 ; i < lowerCase.length; i++){
//     if(vovels.includes(lowerCase[i])){
//       amountVovel++;
//     }
//   }
//   console.log(lowerCase)
//   console.log(amountVovel);
// }

//     countVowels("strriiuuuRAaiiiring"); // return 1

// Berilayotgan parametr tarkibida nechta unli harf bor
// ekanligini aniqlovchi function tuzing

// MASALAN: countVowels("string"); return 1

// Yuqoridagi misolda 'string' so'zi tarkibida yagona unli harf 'i'
// bo'lganligi uchun '1'ni qaytarmoqda
// TASK J:

// function findLongestWord(arr: string): void {
//   const str = arr.split(" ");
//   const result = str.sort(function (a: string, b: string): number {
//     return b.length - a.length;
//   })[0];
//   console.log(result);
// }

// findLongestWord("I came from Uzbekistan!");

// Shunday function tuzing, u string qabul qilsin.
// Va string ichidagi eng uzun so'zni qaytarsin.

// MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

// Yuqoridagi text tarkibida 'Uzbekistan'
// eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda

// TASK I:

// function majorityElement(numArr: number[]) {
//   // console.log(numArr);
//   let maxCount = 0;
//   let maj: number | null = null;
//   for (let i = 0; i < numArr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < numArr.length; j++) {
//       if (numArr[i] === numArr[j]) {
//         count++;
//         // console.log(count);
//       }
//     }
//     if (count > maxCount) {
//       maxCount = count;
//       maj = numArr[i];
//     }
//   }

//   console.log(`bu yerda eng kop ${maj} soni qatnashgan`);
// }

// majorityElement([1, 2, 3, 4, 5, 4, 3, 4, 3, 4, 3, 3, 3]);

// Shunday function tuzing, u parametrdagi array ichida eng ko'p
// takrorlangan raqamni topib qaytarsin.

// MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

// Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.

/*  Project Standards:
    - Logging standards
    - Naming standards
      function, method, cariable => Camel
      class => Snake
      folder => Kebab
      css => snale
    - Error handling
*/

/* 

Traditinal Api
Rest Api
GraphQL Api

.....
*/

// console.log("Train js");

// H2-TASK:

// function getDigits(str: string): void {
//   const result = str.replace(/\D/g, "");
//   console.log(result);
// }

// getDigits("m14i1t");

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"
// H-TASK:

// function getPositive(num: number[]): void{
//     const result = num.filter((ele: number) => {
//         return ele >= 0
//     }).join("");
//     console.log(typeof result);
//     console.log(result);
//     console.log(`"${result}"`);

// }
// getPositive([1, -4, 2]) ;

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

// reja

// Shunday function tuzing, u bitta string (matn) qabul qiladi va ushbu matnda nechta so‘z borligini hisoblab return qiladi.
// function countWords(text) {
//   const result = text.split(" ").length;
//   console.log(result)
// }

// countWords("Salom, mening ismim Ali shawn asdas asdas asd asd ");

// Shunday function tuzing, u bitta string parametr qabul qiladi va ushbu stringda faqat bir marta uchragan harflarni aniqlab, array ko‘rinishida return qilsin.
// function findLargestNumber(items) {
// console.log(items)
//   const hightNumber = Math.max(...items)
//   console.log(hightNumber);

//   console.log(`eng quyori raqam bu ${hightNumber} va uning index raqami bu --- ${items.indexOf(hightNumber)}`)
// }

// findLargestNumber([2,4,5342,6546,345,435])

// TASK F
// function findDoublers(text) {
//         const arr = text.split("");

//         for (let i = 0; i < arr.length; i++) {
//           if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
//             return true;
//           }
//         }
//         return false;
//       }

//       console.log(findDoublers("hello"));
// console.log(findDoublers("salom"));

// Yagona string argumentga ega findDoublers nomli function tuzing
// Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
// true yokida false natija qaytarsin.

// MASALAN: findDoublers("hello"); natija true qaytadi. Sababi ikki marotaba takrorlangan 'll' harfi mavjud!

// E-TASK:

// function getReverse(str) {

//         const reversedStr = str.split("").reverse();
//         console.log(reversedStr)
// }
// getReverse("hello");

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

// @MITASK

// TASK D
// function checkContent(par1, par2){
//     const a = par1.split("").sort().join("");
//     const b = par2.split("").sort().join("");
//    console.log(a===b);
// };
// checkContent("mitgroup", "gmtiprou");

// Ikkita parametra ega function tuzing, va functioning
// berilgan birinchi va ikkinchi parametr qiymatlari o'zaro to'liq
// mos kelsa true qiymat qaytarsin

// Masalan: checkContent("mitgroup", "gmtiprou");
// Yuqoridagi misolda birinchi va ikkinchi parametr qiymatli bir xil
// ya'ni bir xil harflar qatnashganligi uchun true qiymat qaytaradi.

// *****************************

// TASK-C
// const moment = require("moment");
// class Shop {
//         non;
//         lagmon;
//         cola;
//         constructor(non, lagmon, cola){
//                 this.non = non;
//                 this.lagmon = lagmon;
//                 this.cola = cola
//         }

//         qoldiq(){
//                 console.log(`hozir ${moment().format("HH:mm")} da ${this.non}ta non, ${this.lagmon}ta lagmon, ${this.cola}ta cola mavjud`);
//         }

//         sotish(name, amount) {
//                 if(name === "non"){
//                 this.non -= amount;
//                 } else if(name === "lagmon"){
//                 this.lagmon -= amount;
//                 }else if(name === "cola"){
//                 this.cola -= amount;
//                 }else{
//                         console.log("bunday mahsulot mavjud emas")
//                 }
//         }

//         qabul(name, amount) {
//                 if(name === "non"){
//                 this.non += amount;
//                 } else if(name === "lagmon"){
//                 this.lagmon += amount;
//                 }else if(name === "cola"){
//                 this.cola += amount;
//                 }else{
//                         console.log("bunday mahsulot mavjud emas")
//                 }
//         }

// };
// const shop = new Shop(4, 5, 2);
// shop.qoldiq();
// console.log("********")
// shop.sotish("non", 3);
// shop.qoldiq();

// shop.qabul("lagmon", 3);
// shop.qoldiq();

// Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
// Hamda classning quyidagdek 3'ta metodi bo'lsin:

// 1) qoldiq
// 2) sotish
// 3) qabul

// Har bir metod ishga tushgan vaqtda log qilinsin

// MASALAN:
// const shop = new Shop(4, 5, 2)

// shop.qoldiq();
// natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

// shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
// Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!

// B-TASK:

// function countDigits(text) {
//         const str = text.split("");
//         console.log(typeof str)
//         const result = str.filter(ele => Number(ele));
//         console.log(`${text} text'da    atiga ${result.length} ta son bor`);
// }

// countDigits("ad2a54y79wet0sf757gb9");

// B-TASK:

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

// @MITASK

// A-TASK:

// function countLetter (letter,  word){
//    const letters = word.split("");
//    const found = letters.filter((ll) => ll === letter);
//    console.log(`${word} sozida ${found.length} ta ${letter} harfi bor `);

// };

// countLetter("e",  "engeenering");

// TASK A

// Harf sifatida kiritilgan birinchi parametr,
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing

// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// // 3 sonini qaytaradi

// Assalomu alaykum

// MITASK’larni train.js fileda yozasiz!

// yozish tartibingiz:

// Masalani izohi
// A-TASK:

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// masalani yechimi:
// Qilgan Yechimingiz…

// agarda npm run train deganimda train.js ishga tushmasa yengilgina “FAIL” bo’lasiz!

//  *********************************************************
// Video 1

// NodeJs event loop & asynchrnous  & callback functions

// CallBack functions
// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba boling", // 0-20
//     "Togri boshliq tanlang va koproq hato qiling", // 20-30
//     "Uzingizga ishlatishni boshlang", //30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga inversitsiya qiling", // 50-60
//     "endi dam oling foydasi yoq" , //60

// ];

// function maslahatBering(a, callback){
//     if(typeof a !== "number") callback("Please insert the Number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30 ) callback(null, list[1]);
//     else if(a > 30 && a <= 40 ) callback(null, list[2]);
//     else if(a > 40 && a <= 50 ) callback(null, list[3]);
//     else if(a > 50 && a <= 60 ) callback(null, list[4]);
//     else{
//         setTimeout(() => {
//             callback(null, list[5]);
//         }, 5000);
//     }
// };

// console.log("Passead here");

// maslahatBering(99, (err, data) => {
//     if(err) console.log("ERROR:", err);
//     else{
//         console.log("Javob: ", data);
//     }

// })

// console.log("Passead here 1");

//  *********************************************************
// Video 2 : aSynchronous function

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba boling", // 0-20
//     "Togri boshliq tanlang va koproq hato qiling", // 20-30
//     "Uzingizga ishlatishni boshlang", //30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga inversitsiya qiling", // 50-60
//     "endi dam oling foydasi yoq" , //60

// ];

// async function maslahatBering(a){
//     if(typeof a !== "number") throw new Error ("Please insert the Number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30 ) return list[1];
//     else if(a > 30 && a <= 40 ) return list[1];
//     else if(a > 40 && a <= 50 ) return list[1];
//     else if(a > 50 && a <= 60 ) return list[1];
//     else{
//         return new Promise((resolve, reject) => {
//             setInterval(() => {
//                 resolve(list[5]);
//             }, 1000);
//         });

// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(list[5]);
//     }, 5000);
// });

// setTimeout(() => {
//     callback(null, list[5]);
//         // }, 5000);
//     }
// };

// console.log("Passead here");

//     maslahatBering(500).then((data) => {
//         console.log("javob:", data);
//     }).catch((err) => {
//         console.log("ERROR:", err);
//     })

// console.log("Passead here 1");

//

// async function run() {
//     let javob = await maslahatBering(19);
//     console.log(javob);
//     javob = await maslahatBering(33);
//     console.log(javob);
//     javob = await maslahatBering(66);
//     console.log(javob);
//     javob = await maslahatBering(53);
//     console.log(javob);
//     javob = await maslahatBering(66);
//     console.log(javob);
// }

// run();
