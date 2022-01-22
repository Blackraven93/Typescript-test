var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var a = [1, 2, 3, 4];
var ro = a;
// ReadonlyArray<number> === Array<number> === number[]
// ro[0] = 12; error!
// Index signature in type 'readonly number[]' only permits reading.
// ro.push(5); error!
// Property 'push' does not exist on type 'readonly number[]'.
// ro.length = 100; error!
// Cannot assign to 'length' because it is a read-only property.
// a = ro; error!
// The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabel2(labeledObj) {
    console.log(labeledObj.label);
}
var myObj2 = { size: 10, label: "Size 10 Object" };
printLabel2(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
var todos = []; // Todo라는 객체만 value로 받는다.
// 파라미터 todo의 타입으로 Todo 인터페이스를 선언하였다.
function addTodo(todo) {
    todos = __spreadArray(__spreadArray([], todos, true), [todo], false);
}
// 파라미터 todo는 Todo 인터페이스를 준수하여야 한다.
var newTodo = { id: 1, content: 'typescript', completed: false };
addTodo(newTodo);
console.log(todos);
// 함수 인테페이스를 구현하는 함수는 인터페이스를 준수하여야 한다.
var squareFunc = function (num) {
    return num * num;
};
console.log(squareFunc(10)); // 100
// Todo 클래스는 ITodo 인터페이스를 구현하여야 한다.
// 프로퍼티가 인터페이스를 따른다.
var Todo = /** @class */ (function () {
    function Todo(id, content, completed) {
        this.id = id;
        this.content = content;
        this.completed = completed;
    }
    return Todo;
}());
var todo = new Todo(1, 'Typescript', false);
console.log(todo);
/*
인터페이스를 구현하는 클래스는 인터페이스에서 정의한 프로퍼티와 추상 메소드를 반드시 구현하여야 한다.
*/
var People = /** @class */ (function () {
    // 인터페이스에서 정의한 프로퍼티의 구현
    function People(name) {
        this.name = name;
        // this.name = name 생략 가능
    }
    // 인터페이스에서 정의한 추상 메소드의 구현
    People.prototype.sayHello = function () {
        console.log("Hello ".concat(this.name));
    };
    return People;
}());
function greeter(person) {
    person.sayHello();
}
var me = new People('Lee');
greeter(me); // Hello Lee
var userInfo = {
    username: 'ungmo2@gmail.com',
    password: '123456'
};
console.log(userInfo);
// 왜 에러나지..?
var student = {
    name: 'Lee',
    age: 20,
    grade: 3
};
var webDeveloper = {
    name: 'Lee',
    age: 20,
    skills: ['HTML', 'CSS', 'JavaScript']
};
// 구현은 상속하지 않음
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person2;
}());
var developer = {
    name: 'Lee',
    age: 20,
    skills: ['HTML', 'CSS', 'JavaScript']
};
