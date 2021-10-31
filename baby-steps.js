
let somme=0;
for (let i = 2; i < process.argv.length; i++) {
 
  somme+=Number(process.argv[i])
}
console.log(somme);
console.log(process.argv[1])