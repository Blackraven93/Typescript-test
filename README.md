# Typescript test repository

## Typescript를 연습하는 레파지토리 입니다.

- Typescript의 핵심은 타입에 대한 핸들링이다.
- OOP를 사용하기 위해 정적언어로써 타입들을 핸들링한다.
- 때문에 단순히 타입을 체크하는것 이상으로 지원하는 class문법과 interface문법은 중요하다.
- 이 레파지토리의 목적은 Typescript를 이용하여 조금더 안전하고 다양한 패턴을 OOP의 시선으로 연습하는 것이다. 

### Cheet sheet

- Types
- Interfaces
- Classes
- Control Flow Analysis

#### Typescript type

|   Type    |  JS   |  TS   |                                        Description                                        |
| :-------: | :---: | :---: | :---------------------------------------------------------------------------------------: |
|  boolean  |   O   |   O   |                                       true와 false                                        |
|   null    |   O   |   O   |                                   값이 없다는 것을 명시                                   |
| undefined |   O   |   O   |                             값을 할당하지 않은 변수의 초기값                              |
|  number   |   O   |   O   |                             숫자(정수와 실수, Infinity, NaN)                              |
|  string   |   O   |   O   |                                          문자열                                           |
|  symbol   |   O   |   O   | 고유하고 수정 불가능한 데이터 타입이며 주로 객체 프로퍼티들의 식별자로 사용(ES6에서 추가) |
|   array   |       |   O   |                                           배열                                            |
|   tuple   |       |   O   |                    고정된 요소수 만큼의 타입을 미리 선언후 배열을 표현                    |
|   enum    |       |   O   |                        열거형. 숫자값 집합에 이름을 지정한 것이다.                        |
|    any    |       |   O   |          타입 추론(type inference)할 수 없거나 타입 체크가 필요없는 변수에 사용           |
|   void    |       |   O   |                     일반적으로 함수에서 반환값이 없을 경우 사용한다.                      |
|   never   |       |   O   |                                   결코 발생하지 않는 값                                   |

#### Typescript class

##### 접근 제한자

|   접근 가능성    | Public | Protected | Private |
| :--------------: | :----: | :-------: | :-----: |
|   클래스 내부    |   O    |     O     |    O    |
| 자식 클래스 내부 |   O    |     O     |    X    |
| 클래스 인스턴스  |   O    |     X     |    X    |

##### Readonly

- 클래스 내에 상수 선언 가능
- 생성자 함수 내부에서는 값 할당 가능 이외에는 읽기 가능

##### Static

- 생성자 함수에서 실행 가능한 메서드, 인스턴스에서는 실행할 수 없다.
- static 키워드는 메서드 뿐만 아니라 프로퍼티에도 적용 가능하다.

##### Abstract

- 추상 클래스(abstract class)는 하나 이상의 추상 메소드를 포함하며 일반 메소드도 포함할 수 있다.
- 추상 메소드는 내용이 없이 메소드 이름과 타입만이 선언된 메소드를 말하며 선언할 때 abstract 키워드를 사용한다.
- 추상 클래스를 정의할 때는 abstract 키워드를 사용하며, 직접 인스턴스를 생성할 수 없고 상속만을 위해 사용된다.
- 추상 클래스를 상속한 클래스는 추상 클래스의 추상 메소드를 반드시 구현하여야 한다.

#### Interface

- 타입 체크를 위해 사용되며 변수, 함수, 클래스에 사용할 수 있다.
- 인터페이스는 프로퍼티와 메소드를 가질 수 있다는 점에서 클래스와 유사하나 직접 인스턴스를 생성할 수 없고 모든 메소드는 추상 메소드이다.
- 추상 클래스와 다른점은 상속관계가 아니다 각각 다른 클래스에서 상속받은 하위 인스턴스 및 상속 클래스들에 대하여 인터페이스를 부탁할 수 있다.
- 인터페이스는 변수, 함수, 클래스 등 다양한 형태로 지정이 가능하다.
- 덕타이핑에 주의하라(주의해야 할 것은 인터페이스를 구현하였다는 것만이 타입 체크를 통과하는 유일한 방법은 아니다. 타입 체크에서 중요한 것은 값을 실제로 가지고 있는 것이다.)

##### 선택적 프로퍼티

- ? 를 통해서 선택적으로 프로퍼티를 받을 수 있다.

##### 상속

- 인터페이스는 상속, 다중 상속, 클래스도 상속 받을 수 있다.

#### TypeScript - Type Alias

- 타입을 사용하여 객체의 형태뿐만 아니라 직접적으로 값을 지정해줄 수 있다.

#### Type vs Interface

- 언제 Type을 사용하고 Interface를 사용하는지 정리했다.
- type은 새로운 속성을 추가하기 위해서 다시 같은 이름으로 선언할 수 없다
- interface는 항상 선언적 확장이 가능하다

```Typescript
interface Bird {
    name: string
    isFly: boolean
    color: string[]
}
interface Bird {
    species: string
}

// 하지만 type은 Error 발생

type Bird = {
    name: string
    isFly: boolean
    color: string[]
}
type Bird = {
    species: string
}
// Error: Duplicate identifier 'Bird'.
```

- Interface는 객체에만 이용가능하다.(객체를 사용하는 부분에서 interface를 사용하는 것이 좋음)
- Type은 복수의 타입을 지정할 수 있다. (computed value)

```Typescript
type names = 'firstName' | 'lastName'
```

#### Generic

- 클래스를 정의하는 시점에 매개변수나 반환값의 타입 선언이 어려운 경우 제네릭을 사용한다.
- 제네릭은 선언 시점이 아닌 생성 시점에 타입을 명시한다.
- 이는 하나의 타입이 아닌 다양한 타입을 사용할 수 있도록 한다.
- 제네릭 선언시 T(Type parameter)를 관용적으로 사용한다.