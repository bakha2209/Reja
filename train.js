// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba boling",//0-20
//   "togri boshliq tanlang va koproq xato qiling", //20-30
//   "ozingizga ishlashni boshlang", //30-40
//   "siz kuchli bolgan narsalarni qiling",//40-50
//   "yoshlarga investitsiya qiling",//50-60
//   "endi dam oling, boldida endi" //60
// ];

// // function maslahatBering(a,callback) {
// //     if(typeof a !=='number') callback("insert a number",null);
// //     else if (a<=20) callback(null,list[0]);
// //     else if (a>20 && a<=30) callback(null, list[1]);
// //     else if (a>30 && a<=40) callback(null, list[2]);
// //     else if (a>40 && a<=50) callback(null, list[3]);
// //     else if (a>50 && a<=60) callback(null, list[4]);
// //     else {
// //       setTimeout(function () {
// //         callback(null,list[5]);
// //       },5000)
// //     }
// // }

// // console.log("passed here 0");
// // maslahatBering(65,(err,data) => {
// //   if(err) console.log('ERROR:',err);
// //   else {console.log('javob:',data)} 
// // })

// // console.log("passed here 1");



// // asyn 
// async function maslahatBering(a) {
//     if(typeof a !=='number') throw new Error ("insert a number");
//     else if (a<=20) return list[0];
//     else if (a>20 && a<=30) return list[1];
//     else if (a>30 && a<=40) return list[2];
//     else if (a>40 && a<=50) return list[3];
//     else if (a>50 && a<=60) return list[4];
//     else {
//       return new Promise((resolve,reject) => {
//         setTimeout(function () {
//           resolve(list[5]);
//         },5000) // agar shu yerda setInterval ni ishlatganimizda bir marta ishlaydi va toxtaydi
//                 // shuning uchun uni callback da ishlatsak ishlaydi
//       })
      
//     }
// }

// // call via tnen/catch
// // console.log("passed here 0");
// // maslahatBering(65)
// //   .then(data => {
// //     maslahatBering(30)
// //     .then(data => {
// //       console.log("javob:",data);
// //     })
// //     .catch(err => {
// //       console.log("Error:",err);
// //     })
  
// //   console.log("passed here 1");
// //     console.log("javob:",data);
// //   })
// //   .catch(err => {
// //     console.log("Error:",err);
// //   })

// // console.log("passed here 1");


// // call via await
// async function run () {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(65);
//     console.log(javob);
// }
// run()

// function getReverse(hello) {
//     letter_text = hello.split("");
    
//     const new_list=[]
//     letter_text.forEach(ele => {
//       new_list.unshift(ele);
//     });
//     console.log(new_list.join(""))
// }

// getReverse("world");

//Secar challenge

// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// let code = 2;


// function decodeMessage(message,secret) {
//   const letter_message = message.split("");
//   const letter_alphabet = alphabet.split("");
//   const new_list =[]
//   for (value of letter_message) {
//     if (letter_alphabet.includes(value)) {
//       //console.log(letter_alphabet.indexOf(value));
//       const new_index = letter_alphabet.indexOf(value) + secret;
//       if (new_index>25) {
//         const new_index_1 = new_index - 26;
//         new_list.push(letter_alphabet[new_index_1])
//       }else if(new_index<0){
//         const new_index_2 = new_index + 26;
//         new_list.push(letter_alphabet[new_index_2]) 
//       }else {new_list.push(letter_alphabet[new_index])};
      
//     } else {new_list.push(value)}
//   }
//   return new_list.join("")
// }



// let message = "yes, how are you doing? my general!";
// let secret_msg = decodeMessage(message,code);
// console.log("Secret =>", secret_msg)

// setTimeout(() => {
//   code*=-1;
//   const message_encoded = decodeMessage(secret_msg,code);
//   console.log("Original =>", message_encoded)
// },5000)


function findDoublers(word) {
  const letter_word = word.split("");

  const new_list = new Set(letter_word)
  const filteredElements = letter_word.filter(ele => {
    if (new_list.has(ele)) {
      new_list.delete(ele)} else {
        return ele;
      }
    
  } )
  console.log(filteredElements)  
  
    
    
}

findDoublers("hello")

// function findDoublers(str) {
//   // Bo'sh ob'ektni yaratamiz, harflarni san'aymiz
//   const charCount = {};

//   // Stringni aylanib o'tamiz va harflarni san'aymiz
//   for (const char of str) {
//       if (charCount[char]) {
//           // Agar harf allaqachon sanalgan bo'lsa, true qaytar
//           return true;
//       }
//       charCount[char] = 1;
//   }

//   // Harf bir marta ham takrorlanmagan bo'lsa, false qaytar
//   return false
// }
// findDoublers("hello")