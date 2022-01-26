export {}

// 실무에서는 타입스크립트가 반환 타입을 추론하도록 하는 게 보통 !!

const log = console.log

type Context = {
  addId?: string
  userId?: string
}

const print = (message:string, context: Context):void => {
  let time = new Date().toISOString()
  log(time, message, context.userId)
}

print("Contect Plz", {addId:'12', userId:"tta2AAf24"})

const print2 = (message:string, context: Context = {}):void => {
  let time = new Date().toISOString()
  log(time, message, context.userId ?? "Guest")
}

print2("Call me Plz")


function sumVariadic(...numbers:number[]):number {
  log( arguments ) // array 객체
  return numbers.reduce((total, n) => total + n, 0)
}

let test = [2,3,4,5,7,1]

log( sumVariadic(...test) )

// 함수를 호출하는 방법에 call, apply, bind로 호출할 수도 있다.

// call, apply, bind를 안전하게 사용하기 위해서는 strictBindCallApply를 tsconfig에 활성

// TS 규칙에서 no-valid-this를 활성화하면 클래스 메서드를 제외한 다른 곳에 this 사용을 막음


// noImplicitThis 함수에서 항상 this 타입을 명시적으로 설정하도록 강제할 수 있다.

function fancyDate(this: Date) {
  return `${this.getFullYear()} / ${this.getMonth() + 1} / ${this.getDate()}`
}

log( fancyDate.call(new Date) )

// generator에 이터러블 타입을 명시할 수 있다.
function* createFibonacciGenerator(): IterableIterator<number> {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b]
  }
}

const fibonacci = createFibonacciGenerator()

log( 'Fibonacci Number' )
log( fibonacci.next() )
log( fibonacci.next() )
log( fibonacci.next() )
log( fibonacci.next() )
log( fibonacci.next() )
log( fibonacci.next() )
log( fibonacci.next() )
log( fibonacci.next() )
log( fibonacci.next() )

let numbers = {
  // generator를 이런식으로 붙일 수도 있구나.. (축약 메서드 일 때)
  *[Symbol.iterator]() {
    for (let n = 1; n < 11; n++) {
      yield n 
    }
  }
}

let num = numbers[Symbol.iterator]()

log( 'Number test (range 1 ~ 10)')
log( num.next() )
log( num.next() )
log( num.next() )
log( num.next() )
log( num.next() )
log( num.next() )
log( num.next() )
log( num.next() )
log( num.next() )
log( num.next() )
log( num.next() )

type Sum = (a:number, b:number) => number

// 이런식으로 선언할 수도 있다.
const sum:Sum = (a, b) => a + b

// 타입 수준 : Typescript에서만 사용하는 문법
// 값 수준 : Javascript 에서만 사용하는 문법

function times (
  f: (index: number) => void,
  n: number
) {
  for (let i = 0; i < n; i++) {
    f(i)
  }
}

const f = (n:number|string): void =>  {
  log(n)
}

log( times(f, 4) ) // 함수 식을 넘겨주는 형태에 익숙해져야 한다.

// 단축형
type Log = (message: string, userId?: string) => void

// 전체형
/**
 * type Log = {
 *  (message: string, userId?: string): void
 * }
 */


let logger: Log = (message, userId = 'Not signed in') => {
  let time = new Date().toISOString()
  return `${time}, ${message}, ${userId}`
}

log( logger('Greeting!') )

type Reservation = string

// 오버로드를 할 경우 전체형이 가독성이 좋다.
type Reserve = {
  (from: Date, to: Date, destination: string): Reservation
  (from: Date, destination: string): Reservation
  (from: Date, toOrDestination: Date | string, destination?: string): Reservation
}

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

const getMonth1 = (date: any):number | undefined => {
  if (date instanceof Date) {
    return date.getMonth()
  }
}


const getMonth2 = (date: Date):number | undefined => {
    return date.getMonth()
}

// DomAPI에서 유용하게 핸들링
type CreateElement = {
  (tag: 'a'): HTMLAnchorElement
  (tag: 'canvas') : HTMLCanvasElement
  (tag: 'table') : HTMLTableElement
  (tag: string) : HTMLElement
}

// let createElement: CreateElement = (tag: string): HTMLElement => {

// }

type WarnUser = {
  (warning: string): void
  wasCalled: boolean
}

function warnUser(warning: WarnUser) {
  if (warnUser.wasCalled) {
    return
  }
  warnUser.wasCalled = true
  alert(warning)
}

warnUser.wasCalled = false


// 어떤 타입이 올지 미리 알 수 없는 상황이라면??

const _filter:Filter = (array, f) => {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    if ( f(item) ) result.push(item)
  }
  return result
}

const resultArr =  _filter([1,2,3,4], _ => _ < 4) 

log( resultArr )

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

log( _filter([1, 2, 3, 4], _ => _ > 2) )
log( _filter(['a', 'b', 'c'], _ => _ !== 'b') )

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
function map<T, U>(array: T[], f: (item: T) => U): U[] {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i])
  }
  return result
}

log( map([1,2,3,4,5], _ => _ * _ ) )

log( map(['a','b','c'], _ => _ === 'a') )
// ['a','b','c'] : T type
// _ === 'a' : U Type

log( map<string, boolean>(['a','b','c'], _ => _ !== 'a') ) // 명시하려면 두개다 명시해야한다.

let promise = new Promise<number>(resolve => resolve(45))
// <number>가 없을 경우 typescript는 {}로 추론
log( promise.then(result => result * 4) )

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

