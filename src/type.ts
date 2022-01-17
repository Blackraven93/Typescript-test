export {}
let foo: string = 'hello';
let bar: number = 123;

const multiply = (x:number, y:number): number => x * y


console.log(multiply(2, 5))

let isDone: boolean = false;

let n: null = null;

let u: undefined = undefined;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blud";
color = 'red';
let myName: string = `Lee`;
let greeting: string = `Hello, my name is ${ myName }`;
console.log(greeting)

const obj: object = {};

let list1 :any[] = [1, "two", true];
let list2: number[] = [1, 2, 3];
let list3: Array<number> = [1,2,3]; // 제네릭 배열 타입

// tuple
let tuple:[string, number];

tuple = ["hello", 10];
tuple = ["10", "hello"] // error
tuple = ['hello', 10, 'world', 100] // error
tuple.push(true) // error

// enum: 열거형은 숫자값 집합에 이름을 지정한 것이다.
enum Color1 {Red, Green, Blue};
let c0: Color1 = Color1.Red;
let c1: Color1 = Color1.Green;

console.log(c0)
console.log(c1)

enum Color2 {Red = 1, Green, Blue};
let c2: Color2 = Color2.Green

console.log(c2)

enum Color3 {Red = 1, Green = 2, Blue = 4};
let c3: Color3 = Color3.Blue;

console.log(c3); // 4


// any

let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false

// void: 일반적으로 함수에서 반환값이 없을 경우 사용한다.
function warnUser(): void {
    console.log("This is my warning message");
}

// never : 결코 발생하지 않는 값
function infiniteLoop(): never {
    while (true) {}
}

function error(message:string): never {
    throw new Error(message);
}

// string: 원시 타입 문자열 타입
let primiteveStr: string;
primiteveStr = 'hello'; // OK
// 원시 타입 문자열 타입에 객체를 할당하였다.
primiteveStr = new String('hello'); // Error

console.log(primiteveStr)

/*
Type 'String' is not assignable to type 'string'.
'string' is a primitive, but 'String' is a wrapper object. Prefer using 'string' when possible.
*/

// String: String 생성자 함수로 생성된 String 래퍼 객체 타입
let objectStr: String;
objectStr = 'hello'; // OK
objectStr = new String('hello'); // OK

console.log(objectStr)

// Date 타입
const today: Date = new Date();

// HTMLElement 타입
const elem: HTMLElement | null = document.getElementById('myId');

class Person { }
// Person 타입
let person: Person = new Person();

let raven;

console.log(typeof foo);

let parrot = "bird"; // type 추론

parrot = 123 // error


// Type casting
const $input = <HTMLInputElement>document.querySelector('input["type="text"]');
const val = $input.value;

const _$input = document.querySelector('input["type="text"]') as HTMLInputElement;
const _val = _$input.value;


// Type alias
interface Car {
    name: string,
    year?: number
}

// 빈 객체를 Person 타입으로 지정

const car = {} as Car;
car.name = "Audie";
car.year = 2020;
car.tire = 4; // error

type Car2 = {
    name: string,
    year?: number
}

const car2 = {} as Car2;
car2.name = "BMW";
car2.year = 2022;
car2.tire = 4;


// 문자열 리터럴로 타입 지정
type Str = 'Lee';

// 유니온 타입으로 타입 지정
type Union = string | null;

// 문자열 유니온 타입으로 타입 지정
type Name = 'Lee' | 'Kim';

// 숫자 리터럴 유니온 타입으로 타입 지정
type Num = 1 | 2 | 3 | 4 | 5;

// 객체 리터럴 유니온 타입으로 타입 지정
type Obj = {a: 1} | {b: 2};

// 함수 유니온 타입으로 타입 지정
type Func = (() => string) | (() => void);

// 인터페이스 유니온 타입으로 타입 지정
type Shape = Square | Rectangle | Circle;

// 튜플로 타입 지정
type Tuple = [string, boolean];
const t: Tuple = ['', '']; // Error

// 상속을 통해 확장이 필요하다면 인터페이스가 유리(extends implements 가능) 