해당 내용은 [코딩애플🍎](https://codingapple.com/) 수업을 듣고 [별코딩](https://www.youtube.com/@starcoding)을 참고하여 정리한 글로, React 16.8 버전 이후의 내용을 담고 있습니다. 

# React 란? :camera_flash:
Single Page Application으로 새로고침 없이 부드럽게 이동 가능한데 그 이유는
- html 파일을 1개만 쓰고
- 다른 페이지 보여주고 싶을때는 html 부분만 바꿔주기 때문

### 사용이유
- JavaScript로 생짜코딩 가능하나 길어지니깐 **리액트라는 자바스크립트 라이브러리** 이용
- html을 **함수, array, object** 이런 곳에 보관하고 재사용

### 설치 및 개발환경 셋팅
1. [Node.js 웹사이트](https://nodejs.org/en) 에서 LTS라고 써있는 버전 설치 *chocolatey 설치 안해도 됨.
2. VS Code 설치
3. 작업용 폴더 생성
4. 폴더에서 Shift + 우클릭해서 'Open powershell window here' 선택
5. 터미널에서 명령어 입력해서 프로젝트 생성
```shell
npx create-react-app [프로젝트명]
```
7. VS code > Open folder > 생성된 프로젝트명 선택
8. Terminal > New Terminal
9. 터미널에 **npm start** 입력(내 사이트를 브라우저로 미리보기 띄우기)

> [!NOTE]
> <details>
> <summary>리액트 라이브러리 설치/삭제</summary>
> 
> - 기본패턴
> ```
> npm install [라이브러리 이름]
> ```
> 
> - 특정 버전 설치
> ```
> npm install [라이브러리 이름]@[버전번호]
> ```
>
> - 라이브러리 삭제
> ```
> npm uninstall [라이브러리 이름]
> ```
>
> - 설치된 라이브러리 확인
> package.json의 "dependencies"에서 확인 가능
>
> </details>

   
> [!NOTE]
> <details>
> <summary> 참고: JSX</summary>
> React의 js파일에서 쓰는 HTML
>
> ### 주요문법
> 1) className   : HTML 태그 내에서 classs는 className으로 쓴다. => class는 js에서 예약어이므로.
> 2) 데이터 바인딩: HTML 안에서 데이터를 바인딩 하고 싶을 때는 {중괄호} 를 쓴다.
> 3) style key값 : HTML 태그 내에서 style 작성 시 키 값이 '-'로 되있는 경우는 카멜표기법으로 쓴다 => js파일에서 '-'는 뺄셈을 뜻하므로.
> ```HTML
> <div className='black-nav'>
>   <p>{data}</p>
>   <p style={{color: 'red', fontSize: '16px'}}>style</p>
> </div>
> ```
> </details>

# Component
### Component 란?
리액트에서 앱을 이루는 가장 작은 조각. 레고블럭같은 느낌.   
컴포넌트는 새로운 컴포넌트를 생성할 수 있고, MVC의 뷰를 독립적으로 구성하여 재사용할 수 있음.

### 함수 컴포넌트 (Stateless Functional Component)
자바스크립트 함수 기반 컴포넌트. 자바스크립트 함수를 선언하듯이 `function`으로 컴포넌트를 정의하고, return문에 JSX코드 반환
1) 기본 선언법으로 만든 함수 컴포넌트
```JavaScript
function MyComponent() {

  return (
    <div>
      Hello React!
    </div>
  );
}
```

3) 화살표 문법으로 만든 함수 컴포넌트
```JavaScript
const MyComponent = () => {

  return (
    <div>
      Hello React!
    </div>
  );
};
```
![NOTE] VS Code 환경에서 `React Code snippet 라이브러리를 사용하면 편하게 생성 가능. rsc를 입력하면 함수형 컴포넌트 자동 완성

### 클래스 컴포넌트
자바스크립트의 클래스 기반 컴포넌트로 class를 정의하고 render()함수에서 jsx 코드를 반환

![NOTE] VS Code 환경에서 `React Code snippet 라이브러리를 사용하면 편하게 생성 가능. rcc를 입력하면 함수형 컴포넌트 자동 완성


# state
### state란?
자료를 잠깐 보관하는 곳. state는 변동 사항이 생기면 자동으로 html을 재랜더링 해줌 => 즉, **자주 값이 자주 바뀌어서 재랜더링이 필요한 곳**에 쓰면 됨.
|      특징      |   state                              |  변수                                                |
|----------------|--------------------------------------|-----------------------------------------------------|
|     공통점     | 변수를 보관                            | 변수를 보관                                          |
|     차이점     | state에 저장된 값이 변경되면 HTML **자동으로 재렌더링 O** | 변수에 저장된 값이 변경되도 HTML **다시 랜더링 X** -> 새로 고침 필요|

### 문법
- **기본 사용법**   
**let[**_state이름, state변경 함수 이름으로 함수로 set[변수명]으로 작명_**]** = **useState(**_'state에 넣을 값'_**);**
- state변경함수는 전부 asynchronous로 처리되기 때문에 현재의 값이 업데이트 되지 않는 값을 갖게 되면서 예상치 못한 문제가 생길 수도 있음. => 이걸 어떻게 처리하냐? [useEffect()](#useeffect-lifecycle을-제어함수) 를 써서 해결.

```JavaScript
(App.js)

import {useState} from 'react';

function App() {
  let[postName1, setPostName1] = useState('여자코트 추천');                   // 변수에 단일 값을 넣는 경우
  let[postName2, setPostName2] = useState(['여자코트 추천', '남자코트 추천']); // 변수에 array type으로 값을 넣는 경우

  return (
    <div>
      <p>{postName1}</p>
      <p>{postName2[0]}</p>
      <p>{postName2[1]}</p>
    </div>
  )
}
```
> [!NOTE]
> <details>
> <summary>자바스크립트 destructuring 문법</summary>
>   
> ```JavaScript
> // array안의 데이터들을 하나 하나 변수에 바인딩  
> let array = ['Hyeon', 20];
> let name  = array[0];
> let age   = array[1];
> 
> // 위의 코드 대신에 아래와 같이 사용. 왼쪽 오른쪽 형식을 똑같이 맞추면 자동으로 알아서 변수 생성
> let [name, age] = ['Hyeon', 20]
> ```
> </details>

- **state 변경하는 법**    
state만 변경했다고 해서 값이 바로 변경되는 것이 아니라, state변경 함수를 이용하여 state값을 저장해야 HTML 재렌더링이루어짐.
```JavaScript
// 👍 눌렀을 때, likes가 1씩 증가하는 함수
function App(){
  let [likes, setLikes] = useState(0);
  
  return (
     <h4> 글 제목 <span onClick={ () => { setLikes(likes++) }} >👍</span> { likes }</h4>
  )
}
```
> [!NOTE]
> <details>
> <summary> JSX에서 onClick 함수 사용</summary>
>
> 1) onClick에서 'C'는 대문자로
> 2) onClick 다음에는 { } 중괄호 사용
> 3) { } 안에는 함수를 넣어야 함
> </details>

- **state 변경함수 특징**
1) **기존 state == 신규 state** 가 **true**라면 동작하지 않음
2) JavaScript는 **call by sharing** 특징을 가지고 있으므로, 원시타입은 새로운 저장소에 값이 복사되고 객체타입(array, object, function)은 새로운 저장소에 주소값이 복사됨
3) 때문에, **let copiedObj = [...originObj]** 와 같이 전개(...)연산자(speard operation)를 사용하여 []를 풀어서 원시타입으로 저장해야 state변경함수에서 값이 변경된 것을 인지하고 HTML 재렌더링 가능 

> [!NOTE]
> <details>
> <summary>...연산자 (speard operation)</summary>
>
> 괄호를 벗겨서 객체타입을 원시타입으로 바꾸기 위한 연산자
> ```JavaScript
> // 예시1: 기본문법
> let data1 = [1, 2, 3];
> let data2 = [...data1];
> 
> console.log(data2)     // 결과값: 1, 2, 3
> 
> // 예시2: array 데이터 2개 합치고 싶을 때
> let data1 = [1, 2, 3];
> let data2 = [4, 5, 6];
> 
> let combinedData = [...data1, ...data2]
> console.log(combinedData);
> ```
> </details>

> [!NOTE]
> <details>
> <summary> JavaScript의 call by sharing</summary>
>
> 객체타입은 새로운 저장소에 값이 복사되는게 아니라 주소값이 복사됨.
> ```JavaScript
> // 1. 얕은 복사 (shallow copy)
> let originObj  = [1, 2, 3];
> let sCopiedObj = originObj;
> console.log( originObj );                 // 결과값: [1, 2, 3]
> console.log( sCopiedObj );                // 결과값: [1, 2, 3]
> console.log( originObj == sCopiedObj );   // 결과값: true (originObj이 저장하고 있는 주소값과 sCopiedObj가 저장하고 있는 주소값이 동일)
> 
> // 2. 다른 객체에 같은 값 대입 
> let originObj2  = [1, 2, 3];
> let sCopiedObj2 = [1, 2, 3];
> console.log( originObj2 );                // 결과값: [1, 2, 3]
> console.log( sCopiedObj2 );               // 결과값: [1, 2, 3]
> console.log( originObj2 == sCopiedObj2 ); // 결과값: false (originObj이 저장하고 있는 주소값과 sCopiedObj가 저장하고 있는 주소값이 다름)
> 
> // 3. 복사된 객체에 새로운 값 추가
> sCopiedObj.push(4);                       // sCopiedObj에만 값을 추가. 정확히는 sCopiedObj가 저장하고 있는 주소값에 가서 객체 변경 
> console.log( originObj );                 // 결과값: [1, 2, 3, 4]
> console.log( sCopiedObj );                // 결과값: [1, 2, 3, 4]
> console.log( originObj == sCopiedObj );   // 결과값: true (originObj이 저장하고 있는 주소값과 sCopiedObj가 저장하고 있는 주소값이 동일) 
> 
> // 4. 깊은 복사 (deep copy)
> let dCopiedObj = [...originObj];          // 전개(...) 연산자를 사용하여 복사된 값을 새로운 주소에 저장. 하지만 전개 연산자도 depth-level1까지만 복사 가능
>                                           // 참고: depth-level2에 또 다시 객체가 나온다면 다시 주소 값을 복사하여 저장하게 됨 
> dCopiedObj.push(5);
> console.log( originObj );                 // 결과값: [1, 2, 3, 4]
> console.log( dCopiedObj );                // 결과값: [1, 2, 3, 4, 5]
> console.log( originObj == dCopiedObj );   // 결과값: false (originObj이 저장하고 있는 주소값과 sCopiedObj가 저장하고 있는 주소값이 다름) 
> 
> // 5. 완전 깊은 복사
> // 1) 모든 깊이의 객체까지 복사하는, 커스텀 재귀 함수 사용
> // 2) Lodash의 cloneDeep() 사용 (별도 패키지 설치)
> // 3) JSON 객체의 메소드 이용 JSON.stringfy, JSON.parse
> ```
> </details>

# Component
### Component란?
많은 HTML tag들을 한 단어로 줄이고 싶을 때 사용 => 즉, **반복적인 html 축약/큰 페이지 저장/내용이 매우 자주 변경되는 HTML 사용**하면 됨

### 문법
Step 1) function 만듬 (function 이름은 첫글자는 대문자로)    
Step 2) 그 함수의 return 안에 축약하고 싶은 html 담기    
Step 3) 원하는 곳에 <함수명/> 사용하면 축약한 html 나옴    
```JavaScript
function App (){
  return (
    <div>
      (생략)
      <Modal/>
    </div>
  )
}

function Modal () {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
```

### 동적인 UI로 활용
Step 1) html css로 미리 UI 디자인    
Step 2) UI의 현재 상태를 state로 저장    
Step 3) state에 따라서 UI가 어떻게 보일지 조건문 등으로 작성    
```JavaScript
function App (){
  let [modalState, setModalState] = useState(0);

  return (
    <div>
      (생략)
      <button onClick={ () => { setModalState(1) }}>모달 보여줘</button>
      {
        modalState? <Modal/> : null
      }
    </div>
  )
}

function Modal () {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
```
> [!NOTE]
> <details>
> <summary>JSX의 조건문 5가지</summary>
>
> JSX 내에서 `<p>`if(조건문) {}`</p>` 이렇게 쓰는것 불가능하기 때문에 생겨난 패턴
>
> 1. return() 밖에서 쓰는 if/else    
> **return + JSX전체**를 뱉는 if 문 작성
> ```Javascript
> function Component() {
>  if ( true ) {
>    return <p>참이면 보여줄 HTML</p>;
>  } else {
>    return null;
>  }
> } 
> ```
>
> 2. return() 안에서 쓰는 삼항연산자 (ternary operator)    
> JSX의 return 안에서 쓰고싶다면 삼항연산자 사용
> ```JavaScript
> function Component() {
>   return (
>     <div>
>       {
>         2 > 1 ? <p>참</p>: <p>거짓</p> 
>       }
>     </div>
>   )
> }
> ```
>
> 3. && 연산자로 if 역할 대신    
> JavaScript에서 **&&** 연산자는 처음등장하는 false값을 찾아주므로, 이것을 활용 
> ```JavaScript
> function Component() {
>   return (
>     <div>
>       { 1 === 1 && <p>참이면 보여줄 HTML</p> }
>     </div>
>   )
> }
>```
>
> 4. switch/case 조건문    
> ```JavaScript
> function Component2(){
>   var user = 'seller';
>   switch (user){
>     case 'seller' :
>       return <h4>판매자 로그인</h4>
>     case 'customer' :
>       return <h4>구매자 로그인</h4>
>     default : 
>       return <h4>그냥 로그인</h4>
>   }
> }
> ```
>
> 5. object/array 자료형 응용    
> object에 내가 보여주고 싶은 자료 다 담고, 키 값이 되는 state 만들어서 쓰기 
> ```JavaScript
> var tabs = { 
>   info : <p>상품정보</p>,
>   shipping : <p>배송관련</p>,
>   refund : <p>환불약관</p>
> }
> 
> function Component() {
>   let [currentTab, setCurrentTab] = useState('info');
>   return (
>     <div>
>       {
>         tabs[currentTab]
>       }
>     </div>
>   )
> } 
> ```
> 
> </details>

> [!NOTE]
> <details>
> <summary>[].module.css 파일</summary>
>
> CSS파일 만들 때, 여러군데에서 겹치는 걸 막기위해서 하나의 js파일에만 종속적인 파일 만들 수 있음
> 이름을 **App.module.css**와 같이 만들면, App.js에서만 종속되는 파일 생성 가능.
> </details>

# Props
자식이 부모의 state 가져다가 쓰고 싶을 때

### 문법
Step 1. <자식컴포넌트이름 작명={state이름}>    
Step 2. 자식컴포넌트에서 props 받아와서 사용
```JavaScript

function App() {
  let [val, setVal] = useState('test');

  return (
    <div>
      <Child1 val={val}/>
      <Child2 val={val}/>
    </div>
  )
}

// 방법1) 파라미터 1개만 받아오기(일반적으로 자식컴포넌트의 파라미터는 props로 작명)
function Child1(props) {
  return (
    <p>{props.val}</p>
  )
}

// 방법2) 바로 특정 state 이름으로 받아오기
function Child2({val}) { // function Child2({val1, val2, val3}) 이렇게 여러개 받아오는것도 가능 
  return (
    <p>{val}</p>
  )
}
```

### Props의 단점
데이터는 '부모 -> 자식'만 절달 가능. 만약, '부모 -> 자식 -> 증손자' 에게 전달하고 싶다면? -> 부모에서 자식한테 전달하고 자식이 다시 증손자한테 전달하는건 너무나도 귀찮고 자식이 많아지고 depth도 깊어진다면 찾기도 힘듬.     
그럴때 쓸 수 있는것?     
1) [Context API (리액트 기본문법)](#context-api)
2) [Redux Toolkit등 외부라이브러리](#redux-toolkit)

# Hook
##  Hook 이란?
Hook은 16.8에서 새롭게 도입된 기능으로 함수형 컴포넌트에서 React state와 생명주기 기능을 연동할 수 있게 해주는 함수.
내장훅(use로 시작하는 함수)과 custom hooks가 있음 ex) useState(), useEffect(), useRef()

## Hook 사용 이유
컴포넌트 간의 계층을 바꾸지 않고 상태 로직을 재사용 할 수 있음.
하나의 컴포넌트 생명주기가 아닌 기능을 기반으로 하여 작은 함수 단위로 나눌 수 있음.

## Hook 규칙/문법
1) 같은 hook을 여러 번 호출 가능
```JavaScript
function App() {
  let [name, setName] = useState('홍길동');
  let [age, setAge]   = useState(20); 
}
```
2) 최상위 component에서만 호출 가능, 반복문/조건문/중첩된 함수 내에서 호출하면 안됨
```JavaScript
// 좋은 예
function MyComponent () {
  let [test, setTest] = useState(123);
  if ( [조건] ) {
    [생략]
  }
}

// 나쁜 예
function MyComponent () {
  if( [조건]) {
    let [test, setTest] = useState(123);
  }
}
```
3) 비동기함수 (async 키워드 붙은 함수)는 콜백함수로 사용할 수 없음
```JavaScript
function App() {
  useEffect(async () => {     // 에러 발생: Hook 함수 내에 비동기 함수 쓰였으므로. 
    await Promise.resolve(1); 
  })
}
``` 

## 자주쓰는 React Hooks
### useState(): 변수 & setter 선언
**1. 언제 사용하는가?**   
[`state`](#state) 를 생성하고 업데이트할 수 있는 훅으로 `setState()` 함수를 이용하여 `state` 상태를 변경할 경우, 재랜더링이 발생.

**2. 문법**   
- 기본 문법   
  ```JavaScript
  import { useState } from "react";

  const [state, setState] = useState(DEFAULT_VALUE);
  ```

- 이전 state 값과 새로 변경 할 값이 연관되어 있다면 => argument로 이전 state 사용
  ```JavaScript
  import { useState } from "react";

  const [state, setState] = useState( (prevState) => {
    const newState = [ newValue, ...prevState ]; 
    return newState;
  });
  ```

- useState를 사용해서 초기 값을 받아올때 무거운 일을 해야 한다면 => useState의 인자로 콜백함수 사용( 맨 처음 랜더링이 될 때만 `무거운일()` 실행하도록 할 수 있음)
  ```JavaScript
  import { useState } from "react";

  const [state, setState] = useState( () => {
    return 무거운일();
  });
  ```

### useEffect(): Lifecycle을 제어함수
> [!NOTE] 
> <details>
> <summary> Lifecycle이란? </summary>
>
> React에서 일어나는 `mount(화면에 최초로 랜더링)`, `update (재랜더링)`, `unmount (화면에서 사라질 때)` 3개의 단계
> </details>
   
**1. 언제 사용하는가?**   
- 특정 lifecycle 단계에서 실행하고 싶을 때 
- useEffect()는 화면의 랜더링이 끝난 후 실행되고, 랜더링 후 상태 dependecy가 변경 되었을 때 (JavaScript는 코드를 위에서 아래로 읽으므로 상단에 너무 시간이 오래 걸리는 작업이 있으면 HTML 랜더링이 안됨) => 재랜더링 방지는 X
- 서버에서 데이터 가져오는 작업할 때 (데이터를 가져오기전에 HTML 랜더링 먼저되어도 상관없고, 데이터 가져오다가 state/props가 변경되어 또 서버에서 데이터 가져온다면 버그 야기 가능성도 있으므로)
- 타이머 장착하는 것들

**2. 문법**
- 기본 문법     
  `컴포넌트가 랜더링 될 때(mount + update)`마다 실행   
  클래스 컴포넌트의 componentDidMount, componentDidUpdate 과 동일
  ```JavaScript
  import { useEffect } from 'react'; 

  useEffect (() => { 
    실행할코드 
  }); 
  ```
  
- `화면에 첫 랜더링(mount)` 될 때만 실행
  ```JavaScript
  import { useEffect } from 'react'; 

  useEffect (() => { 
    실행할코드 
  }, []); // 빈 배열 전달
  ```

- `화면에 첫 랜더링(mount)` + `dependency가 변경`될 때마다 실행   
dependency에 따라 얼마나 자주 호출될지 달라짐.
  ```JavaScript
  import { useEffect } from 'react'; 

  useEffect (() => { 
    실행할코드 
  }, [배열]); // 여기서 배열은 dependency라고 하며, 필수 값은 아님.
  ```

- `Clean up`: `화면에서 사라질 때(unmount)` + `랜더링(첫 랜더링 제외)시 불릴 useEffect()안의 코드 실행 전` 마다 실행 (Clean Up)    
  useEffect()안의 코드 실행 전에 `return ()=>{ }`안의 코드를 먼저 실행   
  타이머제거, socket 연결 요청 제거, ajax요청 중단 이런 코드로 많이 쓰임
  ```JavaScript
  import { useEffect } from 'react'; 

  // 1) useEffect()에서 return() 사용하는 법
  useEffect (() => { 
    실행할코드2; // 2) 그 다음 실행 됨
    return () => {
      실행할코드1; // 1) 먼저 실행되고
    } 
  }
  // 2) useEffect안의 코드 실행 전에 항상 return 안의 코드가 먼저 실행
  useEffect (() => { 
    return () => {
      실행할코드1; 
    }
  })

  // 3) unmout시 1회 실행
  useEffect( ()=> {
    return () => {
      실행할코드1;
    }
  }, [])
  ```

**3. 사용 예시**   
state 변경 함수의 asynchronous로 인한 문제점 해결
- Senario: 버튼을 누를 때마다
1) count라는 state를 +1 (버튼누른 횟수 기록용)  
2) age라는 state도 +1    
3) count 가 3 이상이면 더 이상 age증가 X   
=> 예상 시나리오는 (3)번이 제대로 동작할 것 같으나, 실제로는 asynchronous 때문에 count가 3 이상이여도 age가 증가할 수도 있음. setAge()가 setCount()보다 먼저 실행된다면.
```JavaScript
function App(){
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(20);

  return(
    <div>
      <p>{count}</p>
      <p>{age}</p>
      <button onClick={()=>{ 
        setCount(count++); 
        if(count < 3){ setAge(age++)}  
      }}>1씩 증가</button>
    </div>
  )
}
```

-해결방법: useEffect() 사용하여 count가 변경될 때만 age값이 변동하도록 설정.
```JavaScript
function App() {
  let [count, setCount] = useState(0);
  let [age, setAge] = setState(20);

  useEffect(()=>{
    setAge(age++);
  }, [count])

  return(
    <div>
      <p>{count}</p>
      <p>{age}</p>
      <button onClick={ ()=>{
        setCount(count++);
      }}></button>
    </div>
  )
}
```

### useMemo(): 컴포넌트 성능 최적화
**0. 시작 전 알아야할 사항**   
- `Memoization`: 동일한 값을 리턴하는 함수를 반복적으로 호출해야 한다면, 맨 처음 값을 메모리에 저장해서 필요할 때(dependency가 변경될 때)마다 또 다시 계산하지 않고 메모리에서 꺼내서 재사용 하는 기법.
=> 자주 사용 하는 값을 캐싱을 해둬서 그 값이 필요할 때마다 캐시 값에서 꺼내서 씀.
- `함수형 컴포넌트`는 말 그대로 `함수` 임. 함수형 컴포넌트가 랜더링이 된다는건 그 함수가 호출된다는 의미 -> 함수는 호출될 때 마다 그 내부에 정의되어 있는 모든 변수들이 초기화.  

**1. 언제 사용하는가?**   
- 컴포넌트 최적화할 때. (컴포넌트 내에서 동일한 함수를 반복적으로 호출 할 때)        
useMemo는 memoization을 위해서 따로 메모리를 소비해서 값을 저장하는 것. => 따라서, 무분별하게 사용하면 메모리 과부화로 오히려 성능 저하 가능성 있음.

**2. 문법**   
- 기본 문법 
  ```JavaScript
  import { useMemo } from 'react';

  //useMemo()의 인자: 콜백함수, 디펜던시(optional)
  const value = useMemo( () => {
    return 콜백함수(); // 콜백함수: momoization할 값을 계산해서 리턴해주는 함수
  }, [디펜던시])       // 디펜던시: 디펜던시가 변경될 때 마다 다시 memoization을 해서 메모리 값을 업데이트.
  ```

**3. 사용 예시**  
Senario: useEffect()를 사용하는데 `status라는 dependency가 존재`하는 경우   
- `status`가 `원시 타입`인 경우:    
  |이벤트 | 랜더링 순서 |
  |------|------------|
  |`숫자 변경 버튼` 클릭 | num 변경 ->  App() 재랜더링 -> status 값 변경 X -> useEffect() 호출 X |  
  |`전등 변경 버튼` 클릭 | isOn 변경 ->  App() 재랜더링 -> status 값 변경 O -> useEffect() 호출 O | 
   
  
  ```JavaScript
  import React, { useState, useEffect } from 'react';

  function App() {
    const [num, setNum] = useState(0);
    const [isOn, setisOn] = useState(false);

    const status = isOn? '켜짐' : '꺼짐';

    useEffect( () => {
      console.log('전등 상태(status) 변경 됨! num은 노상관!');
    }, [status]);

    return (
      <div>
        <button onClick={ () => setNum(num+1) }>숫자 변경</button>
        <span>변경된 숫자: {num}</span>
      </div>
      <div>
        <button onClick={ () => setisOn(!isOn) }>전등 변경</button>
        <span>전등: {status}</span>
      </div>
    ) 
  }
  export default App;
  ```

- `status`가 `객체 타입`인 경우 + `useEffect()`만 사용   
  => 아래 코드를 실행한다면 예상치 못한 결과가 나옴. 왜 그럴까? 
  |이벤트 | 랜더링 순서 |
  |------|------------|
  |`숫자 변경 버튼` 클릭 | num 변경 ->  App() 재랜더링 -> status 값 변경 X -> **useEffect() 호출 안되기를 원했으나 호출됨??????** |  
  |`전등 변경 버튼` 클릭 | isOn 변경 ->  App() 재랜더링 -> status 값 변경 O -> useEffect() 호출 O | 

  ```JavaScript
  import React, { useState, useEffect } from 'react';

  function App() {
    const [num, setNum] = useState(0);
    const [isOn, setisOn] = useState(false);

    const status = {
      light: isOn? '켜짐' : '꺼짐'
    }

    useEffect( () => {
      console.log('전등 상태(status) 변경 됨! num은 노상관!');
    }, [status]);

    return (
      <div>
        <button onClick={ () => setNum(num+1) }>숫자 변경</button>
        <span>변경된 숫자: {num}</span>
      </div>
      <div>
        <button onClick={ () => setisOn(!isOn) }>전등 변경</button>
        <span>전등: {status.light}</span>
      </div>
    ) 
  }
  export default App;
  ```
  => 그 이유는, `status`가 객체 타입이라서 값을 저장하는게 아니라 메모리 주소를 저장하기 때문.    
  => useEffect()의 실행 조건인 depedency에서, `원시타입은 실질적인 값을 비교`하는 반면에 `객체타입은 메모리 주소를 비교`함.    
  => 때문에, 객체의 값이 같은 것과 상관없이 재랜더링된 객체의 주소값이 달라져 useEffect()가 실행

  > <details>
  > <summary> [!NOTE] 원시(Primitive)타입 & 객체(Object) 타입</summary>
  >
  > | 타입     | 값 할당 | 종류   |
  > |---------|--------|--------|
  > | 원시타입  | `값`을 저장                | String, Number, Boolean, Null, Undefined, BigInt, Symbol |
  > | 객체타입  | 값이 아닌 `메모리 주소`를 저장 | Object, Array, function (원시타입을 제외한 모든 것)                  | 
  >
  > </details>

  => 그렇다면 재랜더링 해도 useEffect() 실행 안되게 하고 싶다면?     
  => 재랜더링 할 때에 `status`가 초기화 되는걸 막아주면 됨. 이럴 때 사용될 수 있는게 useMemo()
   
- `status`가 `객체 타입`인 경우 + `useEffect() + useMemo()` 사용  
  ```JavaScript
  import React, { useState, useEffect, useMemo } from 'react';

  function App() {
    const [num, setNum] = useState(0);
    const [isOn, setisOn] = useState(false);

    const status = useMemo( ()= > {
      return { 
        light: isOn? '켜짐' : '꺼짐' 
      };
    }, [isOn]);

    useEffect( () => {
      console.log('전등 상태(status) 변경 됨! num은 노상관!');
    }, [status]);

    return (
      <div>
        <button onClick={ () => setNum(num+1) }>숫자 변경</button>
        <span>변경된 숫자: {num}</span>
      </div>
      <div>
        <button onClick={ () => setisOn(!isOn) }>전등 변경</button>
        <span>전등: {status.light}</span>
      </div>
    ) 
  }
  export default App;
  ```

> [!NOTE]
> <details>
> <summary>useMemo vs useEffect</summary>
>
> | | useMemo | useEffect|
> |-|---------|----------|
> |언제 동작     | 랜더링 과정 중 | 랜더링이 완료된 이후 & 랜더링 후 상태가 업데이트 되었을 때 |
> |재랜더링 방지 | 방지 가능 | 방지 불가능 |
> </details>

### useCallback(): 컴포넌트 성능 최적화
**1. 언제 사용하는가?**   
- 컴포넌트 내에서 `동일한 함수`를 반복적으로 호출 하여 최적화가 필요할 때 ( useMemo와 다르게 인자로 전달한 콜백 함수 자체를 memoization 함) 
  - 자식 컴포넌트에 props로 함수(ex) 이벤트 핸들러 함수)를 전달하는 경우
  - 외부에서 값을 가져오는 api를 호출하는 경우   

useMemo는 memoization을 위해서 따로 메모리를 소비해서 값을 저장하는 것. => 따라서, 무분별하게 사용하면 메모리 과부화로 오히려 성능 저하 가능성 있음.

**2. 문법**   
- 기본 문법 
  ```JavaScript
  import { useCallback } from 'react';

  //useMemo()의 인자: 콜백함수, 디펜던시(optional)
  const value = useCallback( () => {
    return 콜백함수(); // 콜백함수: momoization할 함수
  }, [디펜던시])       // 디펜던시: 디펜던시가 변경될 때 마다 다시 memoization을 해서 메모리 값을 업데이트.
  ```

**3. 사용 예시**  
- `someFunction`가 `객체 타입(function)`이고, `useEffect()`만 사용   
  => 아래 코드를 실행한다면, useEffect()안의 코드가 계속 실행됨. 
  |이벤트 | 랜더링 순서 |
  |------|------------|
  |`input` 숫자 변경 | number 변경 ->  App() 재랜더링 -> someFunction은 객체이므로 메모리 주소값 변경 됨 -> useEffect() 호출 O |    
  
  > ![NOTE] 
  > 원시타입과 객체타입의 값 할당이 궁금하다면 [useMemo()](#usememo-컴포넌트-성능-최적화)의 `원시(Primitive)타입 & 객체(Object) 타입` 참고

  ```JavaScript
  import { useEffect, useState } from 'react';

  function App() {
    const[number, setNumber] = useState(0);

    const someFunction = () => {
      console.log(`someFunc: number: ${number}`);
      return;
    }

    useEffect( () => {
      console.log('someFunction이 변경되었습니다.');
    }, [someFunction])

    return (
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <button onClick={someFunction}> Call someFunc </button>
      </div>
    )

    export default App;
  }
  ```

- `someFunction`가 `객체 타입(function)`이고, `useEffect() + useCallback()` 사용   
  ```JavaScript
  import { useEffect, useState, useCallback } from 'react';

  function App() {
    const[number, setNumber] = useState(0);

    const someFunction = useCallback(() => {
      console.log(`someFunc: number: ${number}`);
      return;
    }, [number]);

    useEffect( () => {
      console.log('someFunction이 변경되었습니다.');
    }, [someFunction])

    return (
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <button onClick={someFunction}> Call someFunc </button>
      </div>
    )

    export default App;
  }
  ```

### useContext()

### useRef()

### useSelector()



## Custom hook
- 반복되는 로직을 함수(Custom hook)로 만들어서 으로 코드 재사용하기.
- hook을 여러다른 컴포넌트에서 재사용할 때 상태값은 컴포넌트 별로 독립적으로 추가. => 즉, 컴포넌트A 에서 값을 변경해도 컴포넌트B에서 값 변경 안됨. 

- 사용법
```JavaScript
// 1. 사용하고 싶은 함수 만들기
(hooks/like.js)
// 1-1) 함수 앞에 export 붙이고, 함수명은 use()로 시작하기(왜냐면 커스텀 함수 안에 use로 시작하는 hook함수 있으니깐)
// use로 함수 이름을 시작해야 리액트가 커스텀 훅으로 인식하여 훅 규칙 적용
export function useLike(){
  let [like, setLike] = useState(0);

  function addLike(){
    setLike(like+1)
  }

  // 1-2) return 이용해서 내보내줄 변수 또는 함수 적어주기, 여러개 쓸 때는 []를 이용.
  return [like, addLike];
}

(Detail.js)
// 2. import
import { useLike } from "../hooks/like.js";

function Detail() {
  // 3. 변수와 함수 받아오기
  let [like, addLike] = useLike();

  return(
    <div>
    // 4. 사용
      {like}<span onClick={ ()=>{ addLike() }}>❤</span>
    </div>
  )
}
```
- 주의점: 함수안에 use로 시작하는 hook함수를 포함하고 있다면, custom 함수도 use로 시작하도록 작명해야함. (안하면 에러남)
=> hook 함수(use로 시작하는 함수)는 컴포넌트의 함수 안에만 적어야 함. (return() 안에다가 적을 수 없음)

 > [!NOTE] Custom hook의 사용은 (Toss의 Slash Github)[https://github.com/toss/slash/tree/main/packages/react/react/src/hooks]에서 영감을 받아 인용 됨. Custom hook 사용예시 참고.

# Import/Export
### 특징/유의점
- 변수, 함수, 자료형 전부 export 가능.
- 파일마다 export default 라는 키워드는 한번만 사용가능.
- 파일경로는 ./부터 시작(현재경로라는 뜻임).

### 사용법
- 데이터 1개 내보낼 때
export default / import
```Javascript
(data.js)
let a = 10;
export default a;          // 내보내고 싶을 땐: export default [변수명]

(app.js)
import a from './data.js'; // 가져다 쓰고 싶을 땐: import [변수명] from [파일위치]
console.log(a)
```

- 데이터 여러개 내보낼 때
export {} / import {}
```JavaScript
(data.js)
let a = 20;
let b = 'Kim';
export {a, b};          // 내보내고 싶을 땐: export [변수명]

(app.js)
import {a, b} from './data.js'; // 가져다 쓰고 싶을 땐: import [변수명] from [파일위치]
console.log(a)
```


# Route / Link
페이지를 나눌 때, 일반 HTML은 여러개의 HTML 파일을 만들어서 사용. 하지만, React는 Single Page Application이므로 index.html 하나의 페이지 밖에 없음.   
=> 따라서, 리액트에서는 누가 다른 페이지 요청하면 그냥 내부의 `<div></div>`를 갈아치움. 직접 다 하긴 귀찮으니 **react-router-dom**라이브러리 이용

### react-router-dom 설치/셋팅 방법
1. 설치
```
npm install react-router-dom@6
```
2. 셋팅
import해오고, `<App/>`을 `<BrowserRouter>`로 감싸면 끝
```JavaScript
(index.js)
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
); 
```

### 사용법
1. 일반 경로   
Step 1. import해오고   
Step 2. `<Routes></Routes>` 를 만들고 그 안에 
Step 3. `<Route/>` 작성: `<Route path="/경로" element={보여줄 HTML} />` https://URL/***경로***로 접속했을 때, **보여줄HTML**로 갈아치워라.

```JavaScript
(App.js)
// 1. import
import { Routes, Route } from 'react-router-dom'

function App(){
  return (
    (생략)
    <Routes>
      // --- 일반경로
      <Route path="/" element={ <div>메인페이지</div> } /> 
      <Route path="/detail" element={ <div>상세페이지임</div> } />
      <Route path="/about" element={ <div>어바웃페이지임</div> } />
      
      // --- 404: 위로 경로말고 다른 URL로 접속시
      <Route path='*' element={<div>404 Error</div>}/>
    </Routes>
  )
}
```
> [!NOTE] 
> <details>
> <summary> 이렇게 element에 다 때려넣으면, 코드가 너무 길어지니깐 element안에 넣을 내용을 따로 분리해서 만들자! => 프로젝트 폴더 구조 </summary>
>
> 거의 대부분의 파일은 .js 파일임 => 비슷한 .js끼리 한 폴더에 넣기
> - src/components: 컴포넌트 역할하는 .js파일들
> - src/routes    : 페이지 역할을 하는 .js 파일들
> - src/utils     : 자주쓰는 .js 파일들 
> - src/img       : 이미지 파일들
> </details>

2. 중첩된 경로(nested routes)   
/about/member, /about/location 처럼 /about 아래에 하위 경로 만들고 싶을 때는 `<Route>`안에 `<Route>` 넣기.   
Step 1. 필요한 라이브러리 import하고
Step 2. `<Route>`안에 `<Route>` 넣는데, 하위 route의 path는 "/"로 시작 안함
Step 3. `<Outlet>`을 이용하여 about 페이지 어느 부분에 /member, /location 보여줄지 결정
```JavaScript
(App.js)
// 1. import
import { Routes, Route, Outlet } from 'react-router-dom'

function App(){
  return (
    (생략)
    <Routes>
      <Route path='/about' element={ <About/> }>
        <Route path='member' element={<div>Memeber</div>}/>
        <Route path='location' element={<div>Location</div>}/>
      </Route>
    </Routes>
  )
}

function About() {
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet> // 하위 route가 보여질 자리
    </div>
  )
}
```

### `<Link/>` 페이지 이동 버튼
JavaScript의 `<a href=""></a>`와 동일    
Step 1. Link import 해오고   
Step 2. `<Link to="[경로]">[메뉴이름]</Link>` 넣기   
```JavaScript
(App.js)
import { Link } from 'react-router-dom';
function App() {
  [생략]

  return (
    <Link to="/">홈</Link>
    <Link to="/detail">상세페이지</Link>
  )
}

```
> [!NOTE] 
> <details>
> <summary>근데 `<Link>` 좀 못생김. 그럼, useNavigate() 라이브러리를 쓰자</summary>
>
> useNavigate()는 기존 HTML태그&스타일에 함수만 바인딩 하는거니깐 기존 스타일 유지가능.   
> 페이지 앞/뒤로도 이동가능
> ```JavaScript
> (app.js)
> import { useNavigate } from 'react-router-dom';
> function App(){
>   let navigate = useNavigate()
>   
>   return (
>     (생략)
>     <button onClick={()=>{ navigate('/') }}>홈</button>
>     <button onClick={()=>{ navigate('/detail') }}>이동버튼</button>
>     <button onClick={()=>{ navigate(1) }}>앞으로 이동</button>
>     <button onClick={()=>{ navigate(-1) }}>뒤로 이동</button>
>   )
> }
> ```
> 
> </details>

# Ajax (Asynchronous Javascript And XML) 요청
JavaScript를 통해서 서버에 데이터를 비동기 방식으로 요청

### 문법
아래 3가지 중 1개 쓰면 됨
1. XMLHttpRequest: 옛날 JavaScript 문법
2. [fetch](#fetch-사용법): 최근 JavaScript 문법
3. [axios](#axios-사용법): 외부 라이브러리

### fetch() 사용법
```JavaScript
fetch('서버URL')
  .then( (res)=> { //요청 성공 시,
    console.log(res.json()) // 결과 값을 json()으로 변환해주는 과정 필요
  })
  .catch( (e)= >{ // 요청 실패 시,
    console.log( e ); 
  })
``` 

### axios() 사용법
JavaScript 의 문법인 fetch()를 보다 쉽게 사용하기 위한 외부라이브러리. 예를 들어, axios.get()로 데이터 받아온 경우 JSON으로 변환 과정없이 필요없이 알아서 JSON으로 변환해줌.
1. axios 설치
  ```
  npm install axios
  ```

2. 사용법
- Get 요청 (데이터 받아오기)
```JavaScript
import axios from 'axios'

[생략]
function App() {
  return (
    <>
      <button onClick={ () => {
        axios.get('서버URL')
            .then( (res) => {
              // 서버요청결과: 'res.data'에 데이터 있음
            })
            .catch( ()=> {
              // 실패했을때 코드
            })
      }}>한개 요청해서 데이터 받아오기(Get)</button>

      <button onClick={ () => {
        Promise.all( [axios.get('서버URL1'), axios.get('서버URL2')] )
        .then() // 서버 URLs 전부 다 성공했을 떄 실행
        .catch()
      }}>여러개 요청해서 데이터 받아오기(Get, Promise)</button>
    </>
  )
}
```
- Post 요청 (데이터 보내기)
```JavaScript
import axios from 'axios'

[생략]
function App() {
  return (
    <>
      <button onClick={ () => {
        axios.post('서버URL', [서버로보낼 데이터셋])
      }}>데이터 보내기(Post)</button>
    </>
  )
}
```

> [!NOTE]
> <details>
> <summary> Automatic batching </summary>
>
> React **18버전 이상** 부터는, state 변경함수들이 연달아서 여러개 처리되어야한다면 state 변경함수를 다 처리하고 마지막에 한 번만 재렌더링. 
> 만약, 근접해 있는 state 변경함수를 다 처리하고 싶다면,
> 1) setTimeout()으로 시간 차 주거나
> 2) flushSync() 를 사용하여 동기적 업데이트 진행
> </details>

# Context API
'부모-> 자식'으로 데이터 전송을 쉽게하기 위한 state의 보관함.   
But, 실전에서 많이 사용하지 않음 => 왜냐면, 성능 이슈가 있고 컴포넌트 재활용이 힘듬 => [Redux Toolkit](#redux-toolkit)를 쓰자!
> [!Note]
> <Details>
> <Summary> 성능 & 컴포넌트 재활용 이슈?</Summary>
>
> 1. 성능이슈: State 변경 시 쓸데없는 컴포넌트까지 전부 재렌더링. ex) 데이터는 넘겼지만 아직 데이터를 보여주는 곳이 없는데, 데이터를 넘겼다는 이유만으로 전부 다 재렌더링.
> 2. 컴포넌트 재활용 이슈: Component 내에 Context를 가져오는 부분(let {stock} = useContext(Context1))이 있고, 다른 부모에서 해당 component 호출하려면 'stock, Context1'등을 다시 정의해줘야 함. 부모에서 전달이 안되어서 정의가 되어있지 않다면 에러발생.  
> </Details>

### 사용방법
```JavaScript
(App.js)
// 1. createContext() 사용하여 context 생성
export let Context1 = createContext();

function App(){
   let[stock, setStock] = useState([10, 14, 10]);

   return(
     <>
      // 2. Context1로 데이터 전달해주고 싶은 자식을 감쌈
      <Context1.Provider value={{ stock }}>
        <Children/>
      </Context1.Provider>
    </>
   )
}

(Children.js)
import {useState, useEffect, useContext} from 'react';
// 3. Context1을 import
import {Context1} from './../App.js';

function Children(){
  //4. useContext()를 사용하여 꺼내고 싶은 데이터 꺼냄
  let {stock} = useContext(Context1)

  return (
    <div>{stock}</div>
  )
}
```


# Redux Toolkit
- 모든 components가 props 없이 state 공유 가능. store.js에 모든 state가 저장되어 있음. 
- Redux에서 사용하는 용어
 - action: 함수 객체
 - reducer: Action들을 모아 놓는 곳. state를 변경하기 위해서 사용
 - payload: 화물, 소포라는 뜻으로 dispatch()에서 파라미터(화물) 받아올 때씀.

### 설치 및 셋팅
1. Redux 설치
```
npm install @reduxjs/toolkit@1.8.1 react-redux
```

2. 셋팅 
```JavaScript
(store.js)
// 1. src/store.js 생성 및 아래 코드 복붙
import { configureStore, createSlice } from '@reduxjs/toolkit'

export default configureStore({
  reducer: { 
  }
}) 

(index.js)
// 2. import
import store from './store.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 3. <Provider store={store}></Provider>로 감싸기
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
```

### 사용법
1. store에 단순 객체 보관 
- store에 state 보관법
```JavaScript
(store.js)
import { configureStore, createSlice } from '@reduxjs/toolkit'

// 1. createSlice() 사용해서 저장하고 싶은 state만들기. (createSlice()와 useState()가 용도비슷)
// { name : 'state이름', initialState : 'state값' }
let userName = createSlice({
  name: "userName",
  initialState: "Kim" 
})

// 2. configureStore()에 생성한 state 등록. 여기 등록한 state는 모든 컴포넌트가 자유롭게 사용가능
// { 작명 : createSlice만든거.reducer } 
export default configureStore({
  reducer: { 
    userName: userName.reducer
  }
});
```
- store에 저장된 state 사용법
```JavaScript
(Cart.js)
// 1. import useSelector()
import { useSelector } from 'react-redux';

function Cart() {
  // 2. useSelector()이용하여 store에 있는 모든 state가져옴.
  // 아래 3가지 다 동일한 결과값. 편한것으로 사용
  let {userName} = useSelector( (state)=>{ state } );
  let userName1 = useSelector( (state)=>{ return state.userName });
  let userName2 = useSelector( (state)=> state.userName );
  
  console.log(userName); // 결과값: Kim

  return(
    [생략]
  )
}
```

2. store에 함수 추가: initialState 가 object/array가 아닌경우
- store에 state 보관법
```JavaScript
(store.js)
import { configureStore, createSlice } from '@reduxjs/toolkit'

// 1. createSlice() 사용: 초기 값은 initialState에 저장하고 , 함수는 reducers :{} 안에 추가
let userName = createSlice({
  name: "userName",
  initialState: "Kim",
  reducers: {
    // 2. 추가하고 싶은 함수는 reducers에 추가, 함수 파라미터로 initialState 접근 가능
    // initialState가 object/array가 아닌 경우 state로 바로 호출
    changeName(state) {
      return "John" + state // John Kim
    },
    fun1(state){
      return 'test'
    }
  } 
})
// 3. 생성한 함수들 내보내기
export let { changeName, fun1 } = userName.actions

// 4. configureStore()에 생성한 state 등록. 여기 등록한 state는 모든 컴포넌트가 자유롭게 사용가능
// { 작명 : createSlice만든거.reducer } 
export default configureStore({
  reducer: { 
    userName : userName.reducer
  }
}) 
```
- store에 저장된 state 사용법 
```JavaScript
(Child.js)
// 1. 함수 사용하기 위해 useDispatch() 가져오기 + store에 저장된 함수 가져오기 
import { useSelector, useDispatch } from 'react-redux';
import { changeName } from '../store';

function Child() {
  let userName = useSelector( (state)=> state.userName );
  // 2. useDispatch() 선언: store.js로 요청보내주는 함수
  let dispatch = useDispatch();

  return(
    <>
      // 3. 사용: dispatch()를 통해서 changeName()호출
      <button onClick={ ()=> dispatch( changeName() ) }>변경</button>
      <p>{userName}</p> // 처음에는 Kim이고, 위에 버튼 누르면 John Kim으로 변경
    </>
  )
}
```

3. store에 변경 함수 추가: initialState 가 object/array인 경우
- store에 state 보관법
```JavaScript
(store.js)
import { configureStore, createSlice } from '@reduxjs/toolkit'

// 1. createSlice() 사용: 초기 값은 initialState에 저장하고 , 함수는 reducers :{} 안에 추가
let user = createSlice({
  name: "user",
  initialState: { name: "Kim", age: 20 },
  reducers: {
    // 2. 추가하고 싶은 함수는 reducers에 추가, 함수 파라미터로 initialState 접근 가능
    // initialState가 object/array인 경우는 state.OBJECT_KEY로 접근
    changeName(state) {
      state.name = "park" // Immer.js라는 라이브러리가 자동으로 설치가 되어서, 알아서 state 복사본을 복사해서 리턴해줌
    },
    incAge(state) {
      state.age += 1
    }
  } 
})
// 3. 생성한 함수들 내보내기
export let { changeName, incAge } = user.actions

// 4. configureStore()에 생성한 state 등록. 
export default configureStore({
  reducer: { 
    user : user.reducer
  }
}) 
```
- store에 저장된 state 사용법 
```JavaScript
(Child.js)
// 1. 함수 사용하기 위해 useDispatch() 가져오기 + store에 저장된 함수 가져오기 
import { useSelector, useDispatch } from 'react-redux';
import { incAge } from '../store';

function Child() {
  // 2. state값 가져오기 + state의 저장 함수 쓸 준비
  let user = useSelector( (state)=> state.user );
  let dispatch = useDispatch();

  return(
    <>
      // 3. 사용
      <button onClick={ ()=>dispatch(incAge()) }>나이 한살 추가</button>
      <p>{user.age}</p> // 결과 값: 20 -> 21
    </>
  )
}
```

4. store의 함수 호출 시, 파라미터로 값을 전달받고 싶은 경우
- store에 state 보관법
```JavaScript
(store.js)
import { configureStore, createSlice } from '@reduxjs/toolkit'

// 1. createSlice() 사용: 초기 값은 initialState에 저장하고 , 함수는 reducers :{} 안에 추가
let user = createSlice({
  name: "user",
  initialState: { name: "Kim", age: 20 },
  reducers: {
    // 2. 추가하고 싶은 함수는 reducers에 추가
    // state: initialState의 값, action.payload: 파라미터로 전달받은 값
    incAge(state, action) {
      state.age += action.payload
    }
  } 
})
// 3. 생성한 함수들 내보내기
export let { incAge } = user.actions

// 4. configureStore()에 생성한 state 등록
export default configureStore({
  reducer: { 
    user : user.reducer
  }
}) 
```

- store에 저장된 state 사용법 
```JavaScript
(Child.js)
// 1. 함수 사용하기 위해 useDispatch() 가져오기 + store에 저장된 함수 가져오기 
import { useSelector, useDispatch } from 'react-redux';
import { incAge } from '../store';

function Child() {
  // 2. state값 가져오기 + state의 저장 함수 쓸 준비
  let user = useSelector( (state)=> state.user );
  let dispatch = useDispatch();

  return(
    <>
      // 3. 사용: dispatch()를 통해서 changeName(PAYLOAD)호출
      <button onClick={ ()=>dispatch(incAge(5)) }>나이 5살 추가</button>
      <p>{user.age}</p> // 결과 값: 20 -> 25
    </>
  )
}
```

### Import/Export
store.js가 너무 길어져서 파일 분리하고 싶다면? => 예를들어, store.js 부분 중 user부분 분리하고 싶음.   

Step 1. src 밑에 폴더랑 파일 새로 만들기: src/store/[Slice이름]Slice.js ex) userSlice.js   
Step 2. 분리하고 싶은 코드 잘라서 새로운 파일에 붙여넣고, createSlice()등 필요한 라이브러리 import
```Javascript
(userSlice.js)
// 1. 필요한 함수들 import
import { createSlice } from "@reduxjs/toolkit"

// 2. createSlice()함수
let user = createSlice({
  name: "user",
  initialState: { name: "Kim", age: 20 },
  reducers: {
    changeName(state) {
      state.name = "park"
    },
    incAgeBy1(state) {
      state.age += 1
    },
    incAge(state, action) {
      state.age += action.payload
    }
  } 
})
// 3. 다른 곳에서 쓰기 위해서 함수(actions) export
export let { changeName, incAgeBy1, incAge } = user.actions

// 4. 다른 곳에서 쓰기 위해서 객체 export
export default user
```
Step 4. store.js에서 import
```JavaScript
(store.js)
// 1. 잘라냈던 userSlice import
import user from './store/userSlice'

[생략]

// 2. configureStore()에 저장
export default configureStore({
  reducer: { 
    user : user.reducer,
    [생략]
  }
}) 
```

Step 5. 다른곳에서 user state 쓰고 싶을 때 이전과 동일하게 사용. but, import 경로가 store.js가 아닌 [Slice이름]Slice.js임.
```JavaScript
(Child.js)
// 1. 함수 사용하기 위해 useDispatch() 가져오기 + store에 저장된 함수 가져오기 
import { useSelector, useDispatch } from 'react-redux';
import { incAge } from '../store/userSlice';

function Child() {
  // 2. state값 가져오기 + state의 저장 함수 쓸 준비
  let user = useSelector( (state)=> state.user );
  let dispatch = useDispatch();

  return(
    <>
      // 3. 사용: dispatch()를 통해서 changeName(PAYLOAD)호출
      <button onClick={ ()=>dispatch(incAge(5)) }>나이 5살 추가</button>
      <p>{user.age}</p> // 결과 값: 20 -> 25
    </>
  )
}
```

> [!Note]
> Redux store안에 모든걸 넣지는 말기! 컴포넌트간 공유가 필요없으면 그냥 useState()쓰면 되니깐.

### Redux 에서 api 호출한 결과 저장하고 싶을 때
개발하다보면 전역에서 자주 사용되는 api를 호출하거나, api 호출한 결과를 여러 군데에서 사용해야 할 상황이 생기는데, 이와 같은 비동기 처리를 redux store에서는 자체적으로 하지 못함.   
=> Redux를 사용할 때는 redux-thunk, redux-saga와 같은 미들웨어를 사용해서 비동기 처리를 진행   
=> 하지만, 위의 기능들 같은 경우 Redux와 같이 사용하기 위한 러닝커브가 조금 있기 때문에, Redux Toolkit의 createAsyncThunk를 사용해 비동기 처리를 진행

- createAsyncThunk() 사용법   
Promise의 3가지 상태와 같이 pending, fulfilled, rejected의 상태를 갖음
```JavaScript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 1. CreateAsyncThunk를 이용하여 데이터 가져옴
export const fetchSkills = createAsyncThunk(
  'skills/fetchSkills',
  async () => {
    const response = await axios.get('/data/skills/skills.json');
    return response.data.skills;
  }
);

// 2. extraReducers라는 것을 통해서 createAsyncThunk로 생성한 Thunk 등록 (Redux 자체적으로는 비동기 처리를 지원하지 않음)
const skillsSlice = createSlice({
  name: 'skills',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkills.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchSkills.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default skillsSlice.reducer;
```

# LocalStorage 
브라우저 안에 있는 저장소

### 위치
Chrome 개발자 모드(F12) > Application 탭 > Local Storage

### 특징
1. key:value 형태로 저장가능   
2. 최대 5MB까지 문자/JSON만 저장가능 (숫자를 저장해도 문자로 변환해서 저장 됨)   
3. 유저가 캐시를 지우지 않는 한, 사이트 재접속해도 남아있음    
[!NOTE] Local Storage는 재접속해도 남아있지만, Session Storage는 브라우저 끄면 날라감.

### 사용법
1. 일반 문자인 경우
```JavaScript
localStorage.setItem('age', '20')
localStorage.getItem('age')
localStorage.removeItem('age')
```

2. array/object 인 경우   
local storage는 문자 또는 JSON만 저장 가능하므로, JSON 타입으로 변형필요
```JavaScript
let obj = {name : 'kim'}

// 넣을때: JSON.stringify() 이용해서 '객체 -> 문자'로 변경
localStorage.setItem('data', JSON.stringify(obj)); 

// 꺼낼때: JSON.parse() 이용해서 '문자 -> JSON'으로 변경
console.log( JSON.parse( localStorage.getItem('data') ) )
```

### 외부 라이브러리
- redux-persist
- Jotai
- Zustand


# react-query
병렬쿼리(Parallel Queries), 종속쿼리 등을 이용하여 실시간 데이터를 주고 받기 쉬움. useQuery()는 비동기로 동작하므로 여러개 비동기 query가 있다면 userQueries() 사용하면 좋음. 또는 useQuery()에서 enabled를 사용하면 동기적으로 사용가능.   
실시간 데이터를 지속적으로 가져와야 하는 사이트(SNS, 코인거래소) 등에서 쓰면 좋음. 그 외 사이트는 안써도 상관없음.

### 설치 및 셋팅
1. 설치
```
npm install react-query@3
```

2. 셋팅   
Step 1. 필요한 컴포넌트 불러오기   
Step 2. queryClient 생성   
Step 3. `<QueryClientProvider client={queryClient}>`로 <App/> 감싸기   
```JavaScript
(index.js)
// 1. Import
import { QueryClient, QueryClientProvider } from 'react-query';

// 2. queryClient  생성
const queryClient =  new QueryClient(); 

[생략]

root.render(
  // 3. <App/>를 <QueryClientProvider client={queryClient}>로 감싸기
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </QueryClientProvider>
);

```

3. 사용방법   
ajax요청 할 때 react-query를 써서 요청하면 더 편리함.   
Step 1. useQuery 가져오기   
Step 2. useQuery()사용, 쿼리키는 단순하게 문자열도 되고 배열 형태로도 사용 가능.   
 - 사용법1: **const res = useQuery(**[쿼리키], [쿼리함수]**)**
 - 사용법2: **const res = useQuery({queryKey:** [쿼리키], **queryFn:** [쿼리함수] **})**

[!NOTE] queryKey를 통해 고유한 값을 부여함으로써 react-query가 query캐싱 관리를 할 수 있도록 해준다.

```JavaScript
import { useQuery } from 'react-query';

function App() {
  // 함수들(axios(), useQuery() 에서 return 해줘야 result1 변수에 값 담는 것 가능.
  // 사용법 1. return 다 표기한 경우
  let res1 = useQuery('userInfo', ()=> {return axios.get('https://codingapple1.github.io/userdata.json').then( (a) => {return a.data} ) });  

  // 사용법 2. {return } 생략한 경우
  let res2 = useQuery('userInfo', ()=> axios.get('https://codingapple1.github.io/userdata.json').then( (a) => a.data ) );  
  
  // 사용법 3. then()생략한 경우. => result3변수에서 데이터 접근 방법만 달라질 뿐 값 가져오는건 문제 없음.
  let res3 = useQuery('userInfo', ()=> axios.get('https://codingapple1.github.io/userdata.json') );  
  
  // 사용법 4. destructuring 문법으로 결과값 할당
  let {data, isLoading, isError} = useQuery('userInfo', ()=> axios.get('https://codingapple1.github.io/userdata.json') ); 

  // 사용법 5. destructuring 문법으로 결과값 할당, data라는 변수는 너무 많이 쓰이므로 data 받아온걸 다른 이름(shoeData)으로 변경
  let {data: shoeData, isLoading, isError} = useQuery('userInfo', ()=> axios.get('https://codingapple1.github.io/userdata.json') ); 

  return (
    [생략]
  )
}
```

4. Result format   
ajax요청을 변수하나로 쉽게 상태(성공/실패/로딩중)가능   
 - result.data: ajax요청이 성공했을 때 가져오는 데이터   
 - result.isLoading: ajax가 요청중일 때 'true'   
 - result.isError: ajax요청이 실패했을 때 'true'   
 - result.isSuccess: ajax요청이 실패했을 때 'true'   
```JavaScript
function App() {
  let res = useQuery('userInfo', ()=> axios.get('https://codingapple1.github.io/userdata.json').then( (a) => a.data ) );

  return (
    <div className='ms-auto userInfo'>
      { res.isLoading && '로딩중'}
      { res.isError && '에러남'}
      { res.isSuccess && res.data.name }
    </div>
  )
}
``` 

5. query key   
- 여러 곳에서 user Info를 쓰고 싶어서 전부 다 useQuery([쿼리키], axios.get())를 쓴다면 서버에 반복적으로 요청하게되어 비효율적일까?      
 => 결론은 NO! react-query는 쿼리키가 같다면 한번만 요청함. 때문에, state, props 전송하지 않고 중복해서 사용해도 됨. 
- 쿼리키는 배열[] 형태이며, 원소로는 String, Object 둘 다 가능. 배열 원소들의 순서가 다르면 다른 키로 인식. but, 객체 안에서는 값만 같다면 순서는 상관없음    
  예시 1) ['a', 'b'] 는 ['b', 'a'] 동일한 키인가? => NO!   
  예시 2) ['a', {status: 'completed', page: 1}]와 ['a', {page: 1, status: 'completed'}] 는 같은 키인가? => YES!    
  예시 3) ['a', {status: 'completed', page: 2}]와 ['a', {page: 1, status: 'completed'}] 는 같은 키인가? => NO!       

```JavaScript
function App() {
  // 1. 키 값 비교
  // 예시1: 키값 같음, 쿼리함수 같음) 같은 키값을 가지므로 한개의 요청만 이루어 지고, res2는 그대로 res1의 결과값을 가져와서 사용.  
  const res1 = useQuery('userInfo', [쿼리함수1]);
  const res2 = useQuery('userInfo', [쿼리함수1]);

  // 예시2: 키값 다름, 쿼리함수 같음) 같은 쿼리함수 이지만 다른 키 값을 가지므로 두개의 요청을 함.  
  const res3 = useQuery('userInfo3', [쿼리함수3]);
  const res4 = useQuery('userInfo4', [쿼리함수3]);

  // 예시3: 키값 같음, 쿼리함수 다름) 다른 쿼리함수 이지만 같은 키 값을 가지므로 한개의 요청만 이루어지고, res6은 res5의 결과값을 가져와서 사용.  
  const res5 = useQuery('userInfo5', [쿼리함수5]);
  const res6 = useQuery('userInfo5', [쿼리함수6]);
}
```

6. 파라미터 전달
- 쿼리함수에서 파라미터를 전달하고 싶다면?
```JavaScript
function App() {
  let {data} = useQuery(
      ['userInfo', userIds],
      ()=> queryFun1(userIds)
  )
}

```

7. 자주 쓰이는 query options   
1) staleTime: number | Infinity (default: 0)
 - userQuery()로 ajax 감싸면, 틈만나면 자동으로 재요청(refetch)해줌.
 - refetch가 발생되는 이유는 queryKey에 매핑되는 데이터가 "fresh" 하지 않고 "stale" 해졌다고 생각하기 때문.
 - staleTime을 이용하여 'fresh 데이터니 refetch하지 말아라' 라고 설정 할 수 있다.
```JavaScript
function App(
  // staleTime 값이 0인 경우, 한 번 데이터를 조회해오면, 그 데이터는 바로 stale 하다고 생각하고 refetch.
  // 예를 들어, staleTime을 2000ms 라고 설정하면 2초 동안은 fresh한 데이터라고 여김.
  let res1 = useQuery('userInfo', ()=> axios.get('https://codingapple1.github.io/userdata.json'), {staleTime: 2000} )
)
```

2) retry: boolean | number | (failureCount: number, error: TError) => boolean (default: 3)
쿼리 요청 실패시 알아서 retry 해줌. true 설정 시 무한 재시도하고, false 설정 시 재시도 하지 않음. 
```JavaScript
function App(
  // staleTime 값이 0인 경우, 한 번 데이터를 조회해오면, 그 데이터는 바로 stale 하다고 생각하고 refetch.
  // 예를 들어, staleTime을 2000ms 라고 설정하면 2초 동안은 fresh한 데이터라고 여김.
  let res1 = useQuery('userInfo', ()=> axios.get('https://codingapple1.github.io/userdata.json'), {retry: 10} )
)
```

3) refetchOnWindowFocus: boolean | "always" (default: always)
 - 다른 곳(다른 브라우저, 다른 실행프로그램 등등)에 갔다가 페이지 내부를 클릭하는 경우, refetch 일어남.
```JavaScript
function App(
  // 페이지를 활성화 할 때마다 실행.(예를 들어, 바탕화면을 클릭했다가 해당 페이지를 다시 클릭하면 refetch 실행)
  // false로 설정하면, 페이지가 다시 활성화되도 refetch 안일어남.
  let res2 = useQuery('userInfo', ()=> axios.get('https://codingapple1.github.io/userdata.json'), {refetchOnWindowFocus: false} )
)
```

4) cacheTime: number | Infinity (default: 5 * 60 * 1000ms )
 - 캐싱기능으로 인해 더 빠르게 느껴짐.(5분 동안은 결과값 기억)
 - 만약, 11시 11분에 요청한번 하고 11시 14분에 한번 더 요청한다면? => 캐싱된 값을 먼저 보여주고, 그 다음에 GET요청을 함(더 빠름)
```JavaScript
function App() {
  let res1 = useQuery('userInfo', ()=> axios.get('https://codingapple1.github.io/userdata.json'), {cacheTime: infinity});
}
```

5) enabled: boolean (default: true)
 - query 실행 조건을 설정하여 조건문 없이도 데이터 요청 제어 가능   
 - 비동기 함수인 useQuery()를 동기적으로 사용 가능
```JavaScript
function App() {

  // 1. 데이터 요청제어
  const { data: userInfo } = useQuery('userInfo',() => axios.get('https://codingapple1.github.io/userdata.json'));


  // 2. 동기적으로 실행: 위의 문장에서 userInfo가 empty가 아니여야지만 아래 문장 실행가능하므로 동기적으로 실행
  const { data: userInfo } = useQuery('userInfo',() => axios.get('https://codingapple1.github.io/userdata.json'));

  const { data: userImg, isError } = useQuery(
      'userImg',
      () => axios.get('https://codingapple1.github.io/userImage'),
      {
        enabled: !!userInfo // userInfo 존재하지 않는다면 실행막음. 
      });
}
```

> [!NOTE]
> <details>
> <summary>PTK Query도 유사한 기능 제공</summary>
> 
> redux-toolkit 설치하면 RTK Query도 자동으로 설치됨.
> 근데, 문법이 좀 더러워서 react-query가 더 쉬움.
> </details>


# React용 유용한개발자도구
변환된 html, css말고, 컴포넌트 미리 보고 싶거나, props 확인하고 싶을 때

## React용 개발자 도구 설치
### React Developer Tools   
Chrome에서 **Chrome web store** 접속 > **React Developer Tools** 검색 > **Chrome 에 추가** 눌러서 설치 > 크롬재시작 > 설치하고 나면 **Components, Profiler** 탭 생기고 여기서 디버깅 가능

### Redux DevTools   
Chrome에서 **Chrome web store** 접속 > **Redux DevTools** 검색 > **Chrome 에 추가** 눌러서 설치 >  크롬재시작 > 설치하고 나면 **Redux** 탭 생기고 여기서 디버깅 가능
- store 한 눈에 보여줌. state 변경한 내역 알려줌.

# 성능개선 방법
## 성능개선 확인 tools
### React Developer Tools
**1. 설치 방법**   
[React Developer Tools](#react-developer-tools)

**2. 사용방법**
- Component 탭: 특정요소 선택하여 찾기, props 값 확인, 특정 코드 위치 확인   
=> Component 탭을 활성화 시키고 프로젝트를 열면 컴포넌트가 재랜더링 될 때 재 랜더링되는 컴포넌트 반짝거림
- Profiler 탭: 랜더링 속도 측정하여 성능 저하되는 컴포넌트 찾음   
=> 녹화시작 > 끝 > 어떤 컴포넌트가 시간 소요가 많이 되었는지 확인. 보통은 o.xxxxx ms가 소요. 그 이상 소요된다면 뭔가 문제가 있을지도?

### Lighthouse   
Lighthouse는 웹사이트의 성능을 측정하고 개선 방향을 제시해 주는 툴

**1. 설치방법**
별도의 설치 필요 없음. 크롬 개발자모드(F12)에서 Lighthouse 탭에서 사용 가능.

**2. 사용방법**
- 모드
  - 탐색(Navigation) : Lighthouse의 기본 값, 초기 페이지 로딩 시 발생하는 성능 문제를 분석한다.
  - 기간(Timespan) : 사용자가 정의한 시간 동안 발생한 성능 문제를 분석한다.
  - 스냅샷(Snapshot) : 현재 상태의 성능 문제를 분석한다.
- 카테고리
  - 성능(Performance) : 웹 페이지의 로딩 과정에서 발생하는 성능 문제를 분석한다.
  - 접근성(Accessibility) : 서비스의 사용자 접근성 문제를 분석한다.
  - 권장 사항(Best practices) : 웹사이트의 보안 측면과 웹 개발의 최신 표준에 중점을 두고 분석한다.
  - 검색엔진 최적화(SEO) : 검색엔진에서 얼마나 잘 크롤링되고 검색 결과에 표시되는지 분석한다.
  - 프로그레시브 웹 앱(Progressive Web App) : 서비스 워커와 오프라인 동작 등, PWA와 관련된 문제를 분석한다.

## 성능을 개선할 수 있는 방법
### 1. Lazy import
- React는 Single page application이기 때문에 발행을 하기 위해 npm run build 하고 나면 하나의 html, css, js 파일이 생성됨. 모든 내용이 다 하나의 페이지에 들어가있으므로 React로 만들어진 페이지는 느림.   
- 메인 페이지에서는 다른 페이지까지 로드 할 필요가 없기 때문에, "다른 페이지는 필요할 때 import 해주세요." 라고 명령가능. 그게 바로, **lazy import**.   
- 장점: 아래와 같이 lazy(()=>{}) 쓰게되면, 하나의 js파일이 아니라 별도의 js 파일이 생성 되어 로딩 속도 개선할 수 있음.
- 단점: details 페이지나 cart 페이지 접속하려고 할 때 약간의 지연(로딩시간) 발생, `<Suspense/>` 이용하여 '로딩중...' 문구 띄우는 방법도 고려해 볼 수 있음.
```JavaScript
(App.js)
// 1. import libraries
import { lazy, Suspense } from 'react'; 

// 2. lazy( ()=>{} )
const DetailPage = lazy(() => import('./routes/Detail.js'));
const Cart       = lazy(() => import('./routes/Cart.js')).

function App() {
  return (
    // 3. Optional: 로딩중 문구 띄우고 싶다면, 지연이 되는 컴포넌트를 <Suspense/> 로 감싸기. 귀찮으면, <Routes> 부분을 <Suspense/>로 감싸도 상관없음.
    <Suspense fallback={ <div>로딩중...</div> }>
      <Detail shoes={shoes} />
    </Suspense>
  )
}
```

### 2. memoization
- 리액트는 부모 컴포넌트가 랜더링이 되면 자식 컴포넌트도 항상 재랜더링. 근데 만약 자식 컴포넌트가 속도가 너무 오래걸리는 컴포넌트 라면? => 성능저하 일으킬 수 있음.
- 따라서, 메모리에 값을 기억해 두고 그 캐시된 값을 불러오도록 하여 성능 향상 시키는 것 가능.

**1. React.memo()**
- 장점: 부모 컴포넌트가 리렌더링 되어도 props가 변경되지 않았다면 자식은 리렌더링 되지 않음
- 단점: 1) memo()는 실행될 때마다, 기존 props와 신규 props가 같은지 비교 작업(간접비)을 하고 다르다면 재랜더링 작업을 함. => 만약, props가 길고 복잡하다면 비교하는데도 시간 많이 소요될 수 있으므로 오히려 성능저하 일으킬 수 있음.    
       2) memo()는 계산한 값을 메모리에 저장하는 것이므로, 불필요하게 많이 쓴다면 메모리 소비로 이어질 수 있음.
- React.memo()와 memo()는 동일.   
  - React.memo(Component, (prevProps, nextProps) => {}) / memo(Component, (prevProps, nextProps) => {}) 
  - Component: memoize 하려는 컴포넌트, (prevProps, nextProps) => {}: opetional로 이전 props와 새로운 props를 받아서 비교. true를 반환하면 리랜더 안됨. 
```JavaScript
import { memo, useState } from 'react';

export default function MyApp() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  return (
    <>
      <label>
        Name{': '}
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Address{': '}
        <input value={address} onChange={e => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
    </>
  )
}
```

### useMemo
사용 방법은 [useMemo](#usememo-컴포넌트-최적화-캐싱기능) 참고

### useTransition
리액트 18버전부터 추가된 기능으로, 느린 컴포넌트 성능 향상 기능 (카드 빛 돌려막기 느낌). startTransition()안에 있는 코드를 뒤로 늦쳐줌. 실행 시점을 조절하면서 성능항상.
```JavaScript
// 1. import
import {useState, useTransition} from 'react'

let a = new Array(10000).fill(0)

function App(){
  let [name, setName] = useState('')
  // 2. 선언
  // isPending은 startTransition()이 처리중일때 true
  let [isPending, startTransition] = useTransition()
  
  return (
    <div>
      <input onChange={ (e)=>{ 
        // 3. 지연시키기고 싶은 부분을 startTransition()로 감싸기
        startTransition(()=>{
          setName(e.target.value) 
        })
      }}/>

      {
        isPending? '로딩중 : 
        a.map(()=>{
          return <div>{name}</div>
        })
      }
    </div>
  )
}
```

### useDeferredValue
startTransition()랑 비슷. 지연시키고 싶은 변수를 넣음.
```JavaScript
import {useState, useDeferredValue} from 'react'

let a = new Array(10000).fill(0)

function App(){
  let [name, setName] = useState('')
  let state1 = useDeferredValue(name)
  
  return (
    <div>
      <input onChange={ (e)=>{ 
          setName(e.target.value) 
      }}/>

      {
        a.map(()=>{
          return <div>{state1}</div>
        })
      }
    </div>
  )
}
```


# React build
React는 개발 끝나면 build를 해야 쓸 수 있음. Build를 하고 나면 build folder 생성됨. React코드 수정할 때마다 build 할 필요 없고, 마지막 deploy할 때만 build 하면 됨.
```
npm run build
```

# 유용한 JavaScript 문법
### forEach()
반복문처럼 사용. object/array의 자료 개수만큼 안의 코드 실행
**obj.forEach( (**[element], [index], [array])=>{}**)**
```JavaScript
let testObj = [{"id": 1, "name": "name1", "phone": "123-456-789"},
               {"id": 2, "name": "name2", "phone": "234-567-890"},
               {"id": 3, "name": "name3", "phone": "345-678-901"}
              ];

testObj.forEach( (item, index)=>{
  console.log(item);  // {"id": 1, "name": "name1", "phone": "123-456-789"}, {"id": 2, "name": "name2", "phone": "234-567-890"}, {"id": 3, "name": "name3", "phone": "345-678-901"}
  console.log(index); // 1, 2, 3
})
```

### map()
반복문처럼 사용. object/array의 자료 개수만큼 안의 코드 실행
**obj.map( (**[element], [index], [array])=>{}**)**
```JavaScript
let testObj = [{"id": 1, "name": "name1", "phone": "123-456-789"},
               {"id": 2, "name": "name2", "phone": "234-567-890"},
               {"id": 3, "name": "name3", "phone": "345-678-901"}
              ];

testObj.map( (item, index)=>{
  console.log(item);  // {"id": 1, "name": "name1", "phone": "123-456-789"}, {"id": 2, "name": "name2", "phone": "234-567-890"}, {"id": 3, "name": "name3", "phone": "345-678-901"}
  console.log(index); // 1, 2, 3
})
```

> [!NOTE]
> <details>
> <summary> forEach() vs map() </summary>
>   
> |      특징      |   forEach()                                     |  map()                                                            |
> | ---------------- | ------------------------------------------------ | -------------------------------------------------------------------- |
> |    문법        | obj.forEach( ([element], [index], [array])=>{}) | obj.map( ([element], [index], [array])=>{})                 |
> |    특징        | 반복문 (array/object 각 요소에 대해 작업을 수행)  | 반복문 (array/object 각 요소를 반환하여 새로운 객체를 생성)           |
> |    공통점      | 원본 객체를 변경하지 않음                         | 원본 객체를 변경하지 않음                                           |
> |    차이점      |  리턴값 없음(undefined)                          | 리턴값 있음                                                        | 
>
> ```JavaScript
> let arr = [1, 2, 3];
> // 1. 리턴값 비교
> // 1-1) forEach()
> let f = arr.forEach( (val) => val+1 )
> console.log(f); // undefined
>
> // 1-2) map()
> let m = arr.map( (val)=> val+1 )
> console.log(m) //[2, 3, 4]
>
> 
> // 2. 특정 객체의 값을 변경하고 싶을 때
> // 2-1) forEach()
> let newArr1 = [];
> arr.forEach( (val)=>{ newArr1.push(val*2) })
> console.log(newArr1) // [2, 4, 6]
>
> // 2-2) map()
> let newArr2 = arr.map( (val)=> val*2 )
> console.log(newArr2); // [2, 4, 6]
> ```
> </details>



### sort()
array/object의 자료 정렬 함수
**obj.sort(** ([element1], [element2]) => {} **)**
```JavaScript
// 1. 기본 사용법
let arr = [4, 2, 6];

arr.sort();
console.log(arr); // 2, 4, 6

// 2. 사용자 정의 함수: 이름순으로 정렬하고 싶다면?
let arr=[{ "id": 1, name: "Kim"},
         { "id": 2, name: "Hyeon"},
         { "id": 3, name: "Ahn"}
        ];
arr.sort( (a, b)=>{
  const nameA = a.name.toUpperCase();  
  const nameB = b.name.toUpperCase();

  if( nameA > nameB )  return 1;
  if( nameA < nameB )  return -1;

  return 0; // 반드시 리턴있어야 하므로
  
});
console.log(arr) // [{ "id": 3, name: "Ahn"}, { "id": 2, name: "Hyeon"}, { "id": 1, name: "Kim"}]      

// 3. ascii 문자가 아닌 경우 비교
let arr2 = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
arr2.sort( (a, b) => a.localeCompare(b) );
console.log( err2 ); // ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
```

### find()
array/object에서 특정 자료 찾음
**obj.find(** ([element], [index], [array]) => { return [조건] } **)**
```JavaScript
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

let foundCherries = inventory.find( (ele, index)=>{ return ele.name === "cherries" });

console.log( foundCherries ); // { name: 'cherries', quantity: 5 }
```

### findIndex()
array/object에서 특정 자료를 찾아서 몇번째인지 리턴해줌
**obj.findIndex(**([element])=>{ if([조건문]){ return [조건]} } **)**
```JavaScript
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

let foundIndex = inventory.findIndex( (ele)=>{ return ele.name === "cherries" });

console.log( inventory[foundIndex] ); // { name: 'cherries', quantity: 5 }
```

### some()
각 요소들 중 하나라도 true 값을 리턴한다면, true   
**Array.prototype.some(** ([element], [index], [array]) => { return [조건] } **)**
```JavaScript
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even)); // Expected output: true
```

### every()
각 요소들 모두가 다 true 이여야만, true   
**Array.prototype.every(** ([element], [index], [array]) => { return [조건] } **)**
```JavaScript
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even)); // Expected output: false
```

### Array 
1. 함수
- arr.push([추가 데이터]): 배열 끝에 추가
- arr.pop(): 가장 마지막 요소 제거
- arr.unshift(): 배열의 첫 번째 자리에 새로운 요소 추가
- arr.shift(): 배열의 첫 번째 요소를 제거
- app.splice([인덱스], [몇개자를건지])
- app.slice([시작인덱스], [끝인덱스])  // 시작인덱스부터 끝인덱스 전까지 추출

2. 배열 중복 제거   
- Set이용
```JavaScript
const dupArr    = [1, 2, 3, 1, 2];
const set       = new Set(dupArr);
const uniqueArr = [...set];

console.log(uniqueArr) // 결과: [1, 2 ,3]
```

# JavaScript: Sync / async 
- JavaScript는 일반적으로 synchronous(동기) 처리 => 윗부분부터 순서대로 코드가 실행
- 하지만, 일부 함수들(시간이 오래걸리는애들)은 asynchronous(비동기)로 처리. => 순차적으로 실행되지 않고 완료되면 실행 ex) ajax(), setTimeout()

# Declaring Variables Shorthand (변수 단축 선언)
같은 선언 타입을 가진 변수를 한줄로 선언. const로 단축 선언 시, 초기값 할당하지 않으면 SyntaxError 발생.
```JavaScript
let a,
    b = 1,
    c;
//a : undefined
//b : 2
//c : undefined

const d = 4,
    e = 5;
//const d,e=5; => Uncaught SyntaxError: Missing initializer in const declaration
```

# Short-circuit Evaluation (단축 평가 값)
논리 연산자는 왼쪽에서 오른쪽으로 실행되므로, 왼쪽에서 true가 나오면, 더 이상 오른쪽의 값은 평가되지 않고 바로 종료.   
- true가 되는 조건: 값이 존재   
- false가 되는 조건: null, undefined, false, etc.
```JavaScript
const str = "some text";
const result1 = str || "default value";
// result1 = "some text";

const nothing = null;
const result2 = nothing || "default value";
// result2 = "default value";

const result3 = str && "If str is truthy return this";
//result3 = "If str is truthy return this"
```

# Property shorthand (단축 속성명)
객체에 속성으로 사용하려는 키 값과 같은 이름의 변수가 있을 경우, key: value할당을 축양형으로 사용할 수 있음.
```JavaScript
const a = 1,
    b = 2,
    c = 3;

const obj1 = {
    a: a,
    b: b,
    c: c,
};

const obj2 = { a, b, c }; // {a:1,b:2,c:3}
```

# Spread Syntax(전개구문)
Object앞에 '...'연산자를 붙이면 object의 literal을 복제하는 기능.

# Rest Parameter(나머지 매개변수)
매개변수 이름 앞에 '...'을 붙여, 할당되지 않는 매개변수를 배열로 받는 기능
```JavaScript
function fn1(name, age, ...arg) {
    // name = 'Doe'
    // age = 21
    // arg = ['handsome','cool','nice'];
}
fn1("Doe", 21, "handsome", "cool", "nice");
```
# Default Parameter Values(기본값 매개변수)
argument 없이 함수가 실행될 경우 undefined 대신 사용될 값을 할당.
```JavaScript
function fn1(name = "John Doe", age = 30) {
    console.log(`${name} is ${age} years old`);
}
fn1();
//John Doe is 30 years old
fn1("Peter", 15);
//Peter is 15 years old
```

# Object Destructuring(구조 분해 할당)
배열/객체의 속성을 해체하여, 그 값을 개별 변수에 담을 수 있게 하는 표현식
```JavaScript
let [a, b] = ["1", "2", "3"];
// a : 1 , b : 2
let [c, d, ...e] = ["1", "2", "3", "4", "5"];
// c : 1, d : 2, e : [3, 4, 5]
```

```JavaScript
let o = { p: 42, q: true };
let { p: foo, q: bar } = o;
// foo = 42 , bar = true
```

# 참고링크
- [코딩애플 인강](https://codingapple.com/)
- [코딩애플 유튜브](https://www.youtube.com/@codingapple)
- [별코딩 유튜브](https://www.youtube.com/@starcoding) 
- [리액트 공식문서](https://ko.legacy.reactjs.org/docs/getting-started.html)
