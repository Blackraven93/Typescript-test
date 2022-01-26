"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// 실무에서는 타입스크립트가 반환 타입을 추론하도록 하는 게 보통 !!
var log = console.log;
var print = function (message, context) {
    var time = new Date().toISOString();
    log(time, message, context.userId);
};
print("Contect Plz", { addId: '12', userId: "tta2AAf24" });
var print2 = function (message, context) {
    var _a;
    if (context === void 0) { context = {}; }
    var time = new Date().toISOString();
    log(time, message, (_a = context.userId) !== null && _a !== void 0 ? _a : "Guest");
};
print2("Call me Plz");
function sumVariadic() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    log(arguments); // array 객체
    return numbers.reduce(function (total, n) { return total + n; }, 0);
}
var test = [2, 3, 4, 5, 7, 1];
log(sumVariadic.apply(void 0, test));
// 함수를 호출하는 방법에 call, apply, bind로 호출할 수도 있다.
// call, apply, bind를 안전하게 사용하기 위해서는 strictBindCallApply를 tsconfig에 활성
// TS 규칙에서 no-valid-this를 활성화하면 클래스 메서드를 제외한 다른 곳에 this 사용을 막음
// noImplicitThis 함수에서 항상 this 타입을 명시적으로 설정하도록 강제할 수 있다.
function fancyDate() {
    return "".concat(this.getFullYear(), " / ").concat(this.getMonth() + 1, " / ").concat(this.getDate());
}
log(fancyDate.call(new Date));
// generator에 이터러블 타입을 명시할 수 있다.
function createFibonacciGenerator() {
    var a, b;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                a = 0;
                b = 1;
                _b.label = 1;
            case 1:
                if (!true) return [3 /*break*/, 3];
                return [4 /*yield*/, a];
            case 2:
                _b.sent();
                _a = [b, a + b], a = _a[0], b = _a[1];
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
var fibonacci = createFibonacciGenerator();
log('Fibonacci Number');
log(fibonacci.next());
log(fibonacci.next());
log(fibonacci.next());
log(fibonacci.next());
log(fibonacci.next());
log(fibonacci.next());
log(fibonacci.next());
log(fibonacci.next());
log(fibonacci.next());
var numbers = (_a = {},
    // generator를 이런식으로 붙일 수도 있구나.. (축약 메서드 일 때)
    _a[Symbol.iterator] = function () {
        var n;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    n = 1;
                    _a.label = 1;
                case 1:
                    if (!(n < 11)) return [3 /*break*/, 4];
                    return [4 /*yield*/, n];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    n++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    },
    _a);
var num = numbers[Symbol.iterator]();
log('Number test (range 1 ~ 10)');
log(num.next());
log(num.next());
log(num.next());
log(num.next());
log(num.next());
log(num.next());
log(num.next());
log(num.next());
log(num.next());
log(num.next());
log(num.next());
// 이런식으로 선언할 수도 있다.
var sum = function (a, b) { return a + b; };
// 타입 수준 : Typescript에서만 사용하는 문법
// 값 수준 : Javascript 에서만 사용하는 문법
function times(f, n) {
    for (var i = 0; i < n; i++) {
        f(i);
    }
}
var f = function (n) {
    log(n);
};
log(times(f, 4)); // 함수 식을 넘겨주는 형태에 익숙해져야 한다.
// 전체형
/**
 * type Log = {
 *  (message: string, userId?: string): void
 * }
 */
var logger = function (message, userId) {
    if (userId === void 0) { userId = 'Not signed in'; }
    var time = new Date().toISOString();
    return "".concat(time, ", ").concat(message, ", ").concat(userId);
};
log(logger('Greeting!'));
// let reserve: Reserve = (
//   from: Date,
//   toOrDestination: Date | string,
//   destination? : string
// ) => {
//   if (toOrDestination instanceof Date && destination !== undefined) {
//     // 편도 여행 예약
//   } else if (typeof toOrDestination === 'string') {
//     // 왕복 여행 예약
//   }
// }
// 구체적으로 타입을 유지해라.
// 예를들어
var getMonth1 = function (date) {
    if (date instanceof Date) {
        return date.getMonth();
    }
};
var getMonth2 = function (date) {
    return date.getMonth();
};
function warnUser(warning) {
    if (warnUser.wasCalled) {
        return;
    }
    warnUser.wasCalled = true;
    alert(warning);
}
warnUser.wasCalled = false;
// 어떤 타입이 올지 미리 알 수 없는 상황이라면??
var _filter = function (array, f) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (f(item))
            result.push(item);
    }
    return result;
};
var resultArr = _filter([1, 2, 3, 4], function (_) { return _ < 4; });
log(resultArr);
// filter type을 지정해보자
// type Filter = {
//   (array: number[], f: (item: number) => boolean) : number[]
//   (array: string[], f: (item: string) => boolean) : string[]
//   (array: Array<number|string>, f: (item:number|string) => boolean) : Array<number|string>
// }
// 이때 사실은 제네릭을 사용해야 한다!!
// type Filter = {
//   <T>(array: T[], f: (item:T) => boolean): T[]
// }
// filter 함수는 T라는 제네릭 타입 매개변수를 사용한다.
// 여기서 T는 자리를 맡아둔다는 의미 (플레이스 홀더 타입)
log(_filter([1, 2, 3, 4], function (_) { return _ > 2; }));
log(_filter(['a', 'b', 'c'], function (_) { return _ !== 'b'; }));
// 제네릭으로 추론 가능
// 제네릭 선언 방법
// 1. T한정 값을 갖는다.
// type Filter = {
//   <T>(array: T[], f: (item: T) => boolean): T[]
// }
// let filter: Filter = ...
// 2. T의 범위를 모든 시그니처로 한정한 전체 호출 시그니쳐
// type Filter = {
//    (array: T[], f: (item: T) => boolean): T[]
// }
// let filter: Filter<number> = ...
// 3. 1과 비슷하지만 전체 시그니처가 아니라 단축 호출 시그니처
// type Filter = <T>(array: T[], f: (item: T) => boolean) => T[]
// let filter: Filter = ...
// 4. 2와 비슷하지만 전체 시그니처가 아니라 단축 호출
// type Filter<T> = (array: T[], f: (item: T) => boolean) => T[]
// let filter: Filter<string> = ...
// 5. T를 시그니처 범위로 한정한, 이름을 갖는 함수 호출 시그니처.
// function filter<T>(array: T[], f: (item: T) => boolean): T[] {
//  ...
// }
// function map(array: unknown[], f: (item: unknown) => unknown): unknown[] {
//   let result = []
//   for (let i = 0; i < array.length; i++) {
//     result[i] = f(array[i])
//   }
//   return result
// }
// 제네릭 이용
function map(array, f) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result[i] = f(array[i]);
    }
    return result;
}
log(map([1, 2, 3, 4, 5], function (_) { return _ * _; }));
log(map(['a', 'b', 'c'], function (_) { return _ === 'a'; }));
// ['a','b','c'] : T type
// _ === 'a' : U Type
log(map(['a', 'b', 'c'], function (_) { return _ !== 'a'; })); // 명시하려면 두개다 명시해야한다.
var promise = new Promise(function (resolve) { return resolve(45); });
// <number>가 없을 경우 typescript는 {}로 추론
log(promise.then(function (result) { return result * 4; }));
// 이벤트 제네릭
// type Event<T> = {
//   target: T
//   type: string
// }
// let myEvent: Event<HTMLButtonElement | null> = {
//   target: document.querySelector('#myButton'),
//   type: "click"
// }
/**
 * type TimedEvent<T> = {
 *    event: MyEvent<T>
 *    from: Date
 *    to: Date
 * }
 *
 * function triggerEvent<T>(event: MyEvent<T>): void {
 *
 * }
 *
 * triggerEvent({
 *  target: document.querySelector('#myButton)
 *  type: 'mouseover'
 * })
 */
