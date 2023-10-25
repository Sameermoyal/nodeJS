console.log('a');

console.log('b');
(async function  (){
   await new Promise(resolve=>setTimeout(()=>{
    console.log('c');
    resolve();

   },3000))

   await new Promise(resolve=>setTimeout(()=>{
    console.log('d');
    resolve();
   },0));
   console.log('e');
})()



