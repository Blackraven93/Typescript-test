class Person {
    private fullName: String;
    constructor(private firstName: String, private lastName: String) {
        this.fullName = `${firstName} ${lastName}`
    }

    public getName(): String {
        return this.fullName;
    }
}

let person: Person = new Person("raven", "black");
console.log(person.getName())



interface Plus {
    (x: number, y: number): number;
}
const add : Plus = (x, y) => {
    return x + y
}

console.log(add(1,2))