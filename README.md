# Typescript test repository

## Typescript를 연습하는 레파지토리 입니다.

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