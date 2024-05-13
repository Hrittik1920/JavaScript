console.log("log")
console.info("info")
console.warn("warn")
console.error("error")
console.assert("err" != false)
console.assert("err" == false)

console.time("forLoop")
for(let a = 1;a<5;a++) {
    console.log(233)
}
console.timeEnd("forLoop")

console.time("whileLoop")
let a = 1;
while(a<5) {
    console.log(233)
    a++;
}
console.timeEnd("whileLoop")
