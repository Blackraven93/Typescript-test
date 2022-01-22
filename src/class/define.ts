export default class Person {
    name: string;
    age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    get getName() {
        return this.name
    }

    get getAge() {
        return this.age
    }

    greeting() {
        return `Greeting ${this.name} !!`
    }
}

const person = new Person("raven", 4)

console.log(person.getName)
console.log(person.getAge)

console.log("접근 제한자")

class Foo {
    public x: string;
    protected y: string;
    private z: string;

    constructor(x: string, y: string, z: string) {
        // public, protected, private 접근 제한자 모두 클래스 내부에서 참조 가능하다.
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

const foo = new Foo('x', 'y', 'z');

// public 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조 가능하다.
console.log(foo.x);

// protected 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조할 수 없다.
console.log(foo.y);
// error TS2445: Property 'y' is protected and only accessible within class 'Foo' and its subclasses.

// private 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조할 수 없다.
console.log(foo.z);
// error TS2341: Property 'z' is private and only accessible within class 'Foo'.

class Bar extends Foo {
    constructor(x: string, y: string, z: string) {
        super(x, y, z);

        // public 접근 제한자는 자식 클래스 내부에서 참조 가능하다.
        console.log(this.x);

        // protected 접근 제한자는 자식 클래스 내부에서 참조 가능하다.
        console.log(this.y);

        // private 접근 제한자는 자식 클래스 내부에서 참조할 수 없다.
        console.log(this.z);
        // error TS2341: Property 'z' is private and only accessible within class 'Foo'.
    }
}

class Bird {
    constructor(public x: string) {

    }
}

const bird = new Bird("crow");
console.log(bird) // 

class Animal {
    constructor(private x: string) {

    }
}

const animal = new Animal("lion");
console.log(animal)
// console.log(animal.x) 자바스크립트로 컴파일 되어 출력은 되지만 타입스크립트에서 오류

class Fish {
    constructor(x: string) {
        console.log(x)
    }
}

const fish = new Fish("tuna");
console.log(fish) // 접근 제한자를 걸어 놓지 않으면 constructor 내부에서만 참조


console.log("ReadOnly")
class RTD {
    // class Field 에서 할당하거나
    private readonly PRICE: number = 12000;
    private readonly DRINK: string;

    constructor() {
        // constructor에서 할당 가능
        this.DRINK = 'whisky';
    }

    log() {
        // readonly가 선언된 프로퍼티는 재할당이 금지된다.
        // this.PRICE = 10; Cannot assign to 'MAX_LEN' because it is a constant or a read-only property.
        // this.DRINK = 'Hi'; Cannot assign to 'MSG' because it is a constant or a read-only property.

        console.log(`MAX_LEN: ${this.PRICE}`); // MAX_LEN: 5
        console.log(`MSG: ${this.DRINK}`); // MSG: hello
    }
}

new RTD().log()

class Static {

    prop: string

    constructor(prop: string) {
        this.prop = prop
    }

    static method() {
        return `this is Stactic method`
    }
}

console.log(Static.method())

const staticMehod = new Static("prop")
// console.log(staticMehod.method()) Error

class InstanceCounter {
    // 생성된 인스턴스의 갯수
    static instanceCounter = 0;
    constructor() {
        // 생성자가 호출될 때마다 카운터를 1씩 증가시킨다.
        InstanceCounter.instanceCounter++;
    }
}

var InstanceCounter1 = new InstanceCounter();
var InstanceCounter2 = new InstanceCounter();
var InstanceCounter3 = new InstanceCounter();
var InstanceCounter4 = new InstanceCounter();
var InstanceCounter5 = new InstanceCounter();
var InstanceCounter6 = new InstanceCounter();

console.log(InstanceCounter.instanceCounter);  // 6
// console.log(InstanceCounter2.instanceCounter);  error TS2339: Property 'instanceCounter' does not exist on type InstanceCounter.

abstract class Dog {
    // 추상 메소드
    abstract makeSound(): void;
    // 일반 메소드
    move(): void {
        console.log('roaming the earth...');
    }
}

// 직접 인스턴스를 생성할 수 없다.
// new Dog();
// error TS2511: Cannot create an instance of the abstract class 'Dog'.

class GoldenLitriber extends Dog {
    // 추상 클래스를 상속한 클래스는 추상 클래스의 추상 메소드를 반드시 구현하여야 한다
    makeSound() {
        console.log('bowwow~~');
    }
}

const myDog = new GoldenLitriber();
myDog.makeSound();
myDog.move();
