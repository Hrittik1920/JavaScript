let id1 = document.getElementById("id1")
console.log(id1)
console.log(id1.matches(".class"))
console.log(id1.matches(".box"))
console.log(sp1.closest("#sp1"))
let span = document.getElementsByClassName("span")
// console.log(id1.contains(span))  :- It will give an error when we try to use class name on contains function
console.log(id1.contains(sp1))
