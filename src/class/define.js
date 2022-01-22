"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getAge", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.greeting = function () {
        return "Greeting ".concat(this.name, " !!");
    };
    return Person;
}());
exports.default = Person;
var person = new Person("raven", 4);
console.log(person.getName);
console.log(person.getAge);
console.log("접근 제한자");
var Foo = /** @class */ (function () {
    function Foo(x, y, z) {
        // public, protected, private 접근 제한자 모두 클래스 내부에서 참조 가능하다.
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return Foo;
}());
var foo = new Foo('x', 'y', 'z');
// public 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조 가능하다.
console.log(foo.x);
// protected 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조할 수 없다.
console.log(foo.y);
// error TS2445: Property 'y' is protected and only accessible within class 'Foo' and its subclasses.
// private 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조할 수 없다.
console.log(foo.z);
// error TS2341: Property 'z' is private and only accessible within class 'Foo'.
var Bar = /** @class */ (function (_super) {
    __extends(Bar, _super);
    function Bar(x, y, z) {
        var _this = _super.call(this, x, y, z) || this;
        // public 접근 제한자는 자식 클래스 내부에서 참조 가능하다.
        console.log(_this.x);
        // protected 접근 제한자는 자식 클래스 내부에서 참조 가능하다.
        console.log(_this.y);
        // private 접근 제한자는 자식 클래스 내부에서 참조할 수 없다.
        console.log(_this.z);
        return _this;
        // error TS2341: Property 'z' is private and only accessible within class 'Foo'.
    }
    return Bar;
}(Foo));
var Bird = /** @class */ (function () {
    function Bird(x) {
        this.x = x;
    }
    return Bird;
}());
var bird = new Bird("crow");
console.log(bird);
var Animal = /** @class */ (function () {
    function Animal(x) {
        this.x = x;
    }
    return Animal;
}());
var animal = new Animal("lion");
console.log(animal);
// console.log(animal.x) 자바스크립트로 컴파일 되어 출력은 되지만 타입스크립트에서 오류
var Fish = /** @class */ (function () {
    function Fish(x) {
        console.log(x);
    }
    return Fish;
}());
var fish = new Fish("tuna");
console.log(fish); // 접근 제한자를 걸어 놓지 않으면 constructor 내부에서만 참조
console.log("ReadOnly");
var RTD = /** @class */ (function () {
    function RTD() {
        // class Field 에서 할당하거나
        this.PRICE = 12000;
        // constructor에서 할당 가능
        this.DRINK = 'whisky';
    }
    RTD.prototype.log = function () {
        // readonly가 선언된 프로퍼티는 재할당이 금지된다.
        // this.PRICE = 10; Cannot assign to 'MAX_LEN' because it is a constant or a read-only property.
        // this.DRINK = 'Hi'; Cannot assign to 'MSG' because it is a constant or a read-only property.
        console.log("MAX_LEN: ".concat(this.PRICE)); // MAX_LEN: 5
        console.log("MSG: ".concat(this.DRINK)); // MSG: hello
    };
    return RTD;
}());
new RTD().log();
var Static = /** @class */ (function () {
    function Static(prop) {
        this.prop = prop;
    }
    Static.method = function () {
        return "this is Stactic method";
    };
    return Static;
}());
console.log(Static.method());
var staticMehod = new Static("prop");
// console.log(staticMehod.method()) Error
var InstanceCounter = /** @class */ (function () {
    function InstanceCounter() {
        // 생성자가 호출될 때마다 카운터를 1씩 증가시킨다.
        InstanceCounter.instanceCounter++;
    }
    // 생성된 인스턴스의 갯수
    InstanceCounter.instanceCounter = 0;
    return InstanceCounter;
}());
var InstanceCounter1 = new InstanceCounter();
var InstanceCounter2 = new InstanceCounter();
var InstanceCounter3 = new InstanceCounter();
var InstanceCounter4 = new InstanceCounter();
var InstanceCounter5 = new InstanceCounter();
var InstanceCounter6 = new InstanceCounter();
console.log(InstanceCounter.instanceCounter); // 6
// console.log(InstanceCounter2.instanceCounter);  error TS2339: Property 'instanceCounter' does not exist on type InstanceCounter.
var Dog = /** @class */ (function () {
    function Dog() {
    }
    // 일반 메소드
    Dog.prototype.move = function () {
        console.log('roaming the earth...');
    };
    return Dog;
}());
// 직접 인스턴스를 생성할 수 없다.
// new Dog();
// error TS2511: Cannot create an instance of the abstract class 'Dog'.
var GoldenLitriber = /** @class */ (function (_super) {
    __extends(GoldenLitriber, _super);
    function GoldenLitriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 추상 클래스를 상속한 클래스는 추상 클래스의 추상 메소드를 반드시 구현하여야 한다
    GoldenLitriber.prototype.makeSound = function () {
        console.log('bowwow~~');
    };
    return GoldenLitriber;
}(Dog));
var myDog = new GoldenLitriber();
myDog.makeSound();
myDog.move();
