class Student {
    constructor(name, rollNo, branch) {
        this.name = name
        this.rollNo = rollNo
        this.branch = branch
    }
    get name1() {
        return this.name;
    }
    set name1(name) {
        this.name = name;
    }
}

class Animal {
    constructor(name) {
        this.name = Animal.capitalized(name);
    }

    static capitalized(name) {
        return name.charAt(0).toUpperCase() + name.substr(1,name.length)
    }

    walk() {
        console.log(`Animal ${this.name} can walk!`)
    }
}

let rabbit = new Animal("rabbit")
rabbit.walk();

let s = new Student("Hrittk");
console.log(s);
s.name = "Kartik"
s.branch = "cse"
s.rollNo = 28
console.log(s)

