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

function getReverse(hello) {
    letter_text = hello.split("");
    
    const new_list=[]
    letter_text.forEach(ele => {
      new_list.unshift(ele);
    });
    console.log(new_list.join(""))
}

getReverse("world");

