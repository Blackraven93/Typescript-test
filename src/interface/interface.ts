let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;


// ReadonlyArray<number> === Array<number> === number[]

// ro[0] = 12; error!
// Index signature in type 'readonly number[]' only permits reading.
// ro.push(5); error!
// Property 'push' does not exist on type 'readonly number[]'.
// ro.length = 100; error!
// Cannot assign to 'length' because it is a read-only property.
// a = ro; error!
// The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.

function printLabel(labeledObj: { label: string }) {
    console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

interface LabeledValue {
    label: string;
}

function printLabel2(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

let myObj2 = { size: 10, label: "Size 10 Object" };
printLabel2(myObj);

interface SquareConfig {
    color?: string;
    width?: number;
}

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black" });
console.log(mySquare)

// 인터페이스의 정의
interface Todo {
    id: number;
    content: string;
    completed: boolean;
}

let todos: Todo[] = []; // Todo라는 객체만 value로 받는다.

// 파라미터 todo의 타입으로 Todo 인터페이스를 선언하였다.
function addTodo(todo: Todo) {
    todos = [...todos, todo];
}

// 파라미터 todo는 Todo 인터페이스를 준수하여야 한다.
const newTodo: Todo = { id: 1, content: 'typescript', completed: false };
addTodo(newTodo);
console.log(todos)
// [ { id: 1, content: 'typescript', completed: false } ]

// 함수 인터페이스의 정의
interface SquareFunc {
    (num: number): number;
}

// 함수 인테페이스를 구현하는 함수는 인터페이스를 준수하여야 한다.
const squareFunc: SquareFunc = function (num) {
    return num * num;
}

console.log(squareFunc(10)); // 100

// 인터페이스의 정의
interface ITodo {
    id: number;
    content: string;
    completed: boolean;
}

// Todo 클래스는 ITodo 인터페이스를 구현하여야 한다.
// 프로퍼티가 인터페이스를 따른다.
class Todo implements ITodo {
    constructor(
        public id: number,
        public content: string,
        public completed: boolean
    ) { }
}

const todo = new Todo(1, 'Typescript', false);

console.log(todo);

// 인터페이스의 정의
interface IPerson {
    name: string;
    sayHello(): void;
}

/*
인터페이스를 구현하는 클래스는 인터페이스에서 정의한 프로퍼티와 추상 메소드를 반드시 구현하여야 한다.
*/
class People implements IPerson {
    // 인터페이스에서 정의한 프로퍼티의 구현
    constructor(public name: string) {
        // this.name = name 생략 가능
    }

    // 인터페이스에서 정의한 추상 메소드의 구현
    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}

function greeter(person: IPerson): void {
    person.sayHello();
}

const me = new People('Lee');
greeter(me); // Hello Lee

interface UserInfo {
    username: string;
    password: string;
    age?: number;
    address?: string;
}

const userInfo: UserInfo = {
    username: 'ungmo2@gmail.com',
    password: '123456'
}

console.log(userInfo);

interface Person {
    name: string;
    age?: number;
}

// 인터페이스 상속
interface Student extends Person {
    grade: number;
}
// 왜 에러나지..?
const student: Student = {
    name: 'Lee',
    age: 20,
    grade: 3
}



interface Person {
    name: string;
    age?: number;
}

interface Developer {
    skills: string[];
}

// 왜 에러나지..? (인터페이스 다중 상속)
interface WebDeveloper extends Person, Developer { }

const webDeveloper: WebDeveloper = {
    name: 'Lee',
    age: 20,
    skills: ['HTML', 'CSS', 'JavaScript']
}

// 구현은 상속하지 않음
class Person2 {
    constructor(public name: string, public age: number) { }
}


interface Developer extends Person2 {
    skills: string[];
}

const developer: Developer = {
    name: 'Lee',
    age: 20,
    skills: ['HTML', 'CSS', 'JavaScript']
}