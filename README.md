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
> <summary>JSX의 조건문</summary>
>
> JSX 안에서는 if/else 문법을 바로 사용할 수 없음. 대신에 삼항연산자를 { }에서 사용가능
> ```JavaScript
> { 2 > 1 ? console.log('맞음): console.log('틀림') }
> ```
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
Step 1) <자식컴포넌트이름 작명={state이름}>    
Step 2) 자식컴포넌트에서 props 받아와서 사용
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
2) [Redux등 외부라이브러리](#redux)

# Hook
###  Hook 이란?
Hook은 16.8에서 새롭게 도입된 기능으로 함수형 컴포넌트에서 React state와 생명주기 기능을 연동할 수 있게 해주는 함수.
내장훅(use로 시작하는 함수)과 custom hooks가 있음 ex) useState(), useEffect()

### Hook 사용 이유
컴포너트 간의 계층을 바꾸지 않고 상태 로직을 재사용 할 수 있음.
하나의 컴포넌트 생명주기가 아닌 기능을 기반으로 하여 작은 함수 단위로 나눌 수 있음.

### Hook 규칙/문법
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


# Import/Export

# Route

# UseNavigate

# Lifecycle을 제어함수: useEffect()
### Lifecycle이란?
React에서 일어나는 'mount(페이지 최초로 로딩), update (HTML재랜더링), unmount (다른페이지로 이동)' 3개의 단계

### Lifecycle의 특정 단계에 어떻게 코드가 실행되게 할 수 있을까?
- useEffect()사용 
- 언제 useEffect()를 사용하면 될까?
  1) 특정 lifecycle 단계에서 실행하고 싶을 때 
  2) HTML 랜더링 후 실행하고 싶을 때 (JavaScript는 코드를 위에서 아래로 읽으므로 상단에 너무 시간이 오래 걸리는 작업이 있으면 HTML 랜더링이 안됨)
  3) 서버에서 데이터 가져오는 작업할 때 (데이터를 가져오기전에 HTML 랜더링 먼저되어도 상관없으므로)
  4) 타이머 장착하는 것들

### useEffect() 문법
useEffect()는 상태 변화(side effect: 의도하지 않은 결과)가 있을 때 이를 감지하여 특정 작업을 해줄 수 있는 훅.
**useEffect( () =>{** [실행할코드] }, [dependency]**)**
```JavaScript
function App() {
  // 1. mount + update 될 때마다 실행
  // 클래스 컴포넌트의 componentDidMount, componentDidUpdate 과 동일
  useEffect (() => { 실행할코드 })

  // 2. mount 단계 (1회) 실행. (dependency에 빈 배열[] 전달) 
  // 클래스 컴포넌트의 componentDidMount와 동일
  useEffect (() => { 실행할코드 }, [])

  // 3. mount와 + dependency가 변경될 때마다 실행
  // 클래스 컴포넌트의 componentDidMount, componentDidUpdate 과 동일
  useEffect (() => { }, [dependency]) // [[dependency]] 는 여러개 넣을 수 있음

  // 4. clean up function: useEffect()안의 코드 실행 전에 return ()=>{}안의 코드를 먼저 실행  => 타이머제거, socket 연결요청 제거, ajax요청 중단 이런 코드를 많이 작성
  useEffect (() => { 
    실행할코드2 // 그 다음 실행됨
    return () => {
      실행할코드1 //먼저 실행되고
    } 
  }
  // 4-1) useEffect안의 코드 실행 전에 항상 return 안의 코드가 먼저 실행
  useEffect (() => { 
    return () => {
      실행할코드1 
    }
  })

  // 4-2) unmout시 1회 실행
  useEffect( ()=> {
    return () => {
      함수1();
    }
  }, [])

```

# Ajax (Asynchronous Javascript And XML)
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
But, 실전에서 많이 사용하지 않음 => 왜냐면, 성능 이슈가 있고 컴포넌트 재활용이 힘듬 => [Redux](#redux)를 쓰자!
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


# Redux
모든 components가 props 없이 state 공유 가능. store.js에 모든 state가 저장되어 있음. 

### 설치 및 셋팅
1. Redux 설치
```
npm install @reduxjs/toolkit@1.8.1 react-redux
```

2. src/store.js 파일생성 & 하단코드 복붙
```JavaScript
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: { }
}) 
```

3. index.js에 가서 redux 쓰겠다고 선언해주기 
 - store.js에서 썼던 configureStore import 
 - <Provider store={store}></Provider>로 감싸기
```JavaScript
import store from './store.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
```

### 용어
- State
컴포넌트에서 자동 재렌더링 하기위해 사용되는 데이터

- Action
함수 객체

- Reducers
Action들을 모아 놓는 곳?. state를 변경하기 위해서 사용

- payload 
화물, 소포. 파라미터 받아올 때.

### 사용법
1. Redux store에 state 보관법
```JavaScript
(store.js)
import { configureStore, createSlice } from '@reduxjs/toolkit'

// step 1. createSlice() 사용해서 저장하고 싶은 state만들기 (createSlice()와 useState()가 용도비슷)
// { name : 'state이름', initialState : 'state값' }
let userName = createSlice({
  name: "userName",
  initialState: "kim" 
})

// 2. configureStore()에 생성한 state 등록. 여기 등록한 state는 모든 컴포넌트가 자유롭게 사용가능
// { 작명 : createSlice만든거.reducer } 
export default configureStore({
  reducer: { 
    userName: userName.reducer

  }
}) 
```

2. Redux store에 있는 state 사용법
**useSelector( (state)=>{ return state} )** 사용하여 redux store에 있는 모든 state가져 옴.
```JavaScript
(Cart.js)
import { useSelector } from 'react-redux';

function Cart() {
  // 아래 3가지 다 동일한 결과값. 편한것으로 사용
  let {userName} = useSelector( (state)=>{ state } );
  let userName1 = useSelector( (state)=>{ return state.userName });
  let userName2 = useSelector( (state)=> state.userName );
  
  console.log(userName);

  return(
    [생략]
  )
}
```

> [!Note]
> Redux store안에 모든걸 넣지는 말기! 컴포넌트간 공유가 필요없으면 그냥 useState()쓰면 되니깐.

3. store의 state 변경법
- initialState 가 object/array가 아닌경우
step 1.  'reducers'에 state 수정해주는 함수 만들고 export
**export let {** [만든함수이름] **} =** [변수]**.actions**
```JavaScript
(store.js)
import { configureStore, createSlice } from '@reduxjs/toolkit'

let userName = createSlice({
  name: "userName",
  initialState: "Kim",
  reducers: {
    changeName(state) {
      return "John" + state //John Kim
    },
    fun1(state){
      return ''
    }
  } 
})
export let { changeName } = userName.actions
```
step 2. 만든함수 import해서 사용
***let dispatch = useDispatch();***       
***dispatch(*** [함수이름] ***)***
```JavaScript
(child.js)
import { changeName } from '../store';

function Child() {
  let dispatch = useDispatch(); // useDispatch(): store.js로 요청보내주는 함수

  return(
    <>
      <button onClick={ ()=> dispatch( changeName() ) }>변경</button>
    </>
  )
}
```

- initialState 가 object/array인 경우
**state.**[객체키]로 접근
```JavaScript
let user = createSlice({
  name: "user",
  initialState: { name: "Kim", age: 20 },
  reducers: {
    changeName(state) {
      state.name = "park" // Immer.js라는 라이브러리가 자동으로 설치가 되어서, 알아서 state 복사본을 복사해서 리턴해줌
    },
    addAge(state) {
      state.age += 1
    }
  } 
})
export let { changeName, incAge } = user.actions
```
- 파라미터로 값을 전달 받고 싶은 경우
**action.payload**사용
```JavaScript
let user = createSlice({
  name: "user",
  initialState: { name: "Kim", age: 20 },
  reducers: {
    incAge(state, action) {
      state.age += action.payload
    }
  } 
})
export let { incAge } = user.actions
```

4. Import/Export
store.js가 너무 길어져서 파일 분리하고 싶다면? => 예를들어, store.js 부분 중 user부분 분리하고 싶음.   

1) step1. src 밑에 폴더랑 파일 새로 만들기: src/store/[Slice이름]Slice.js ex) userSlice.js
2) 분리하고 싶은 코드 자르기
ex)
```Javascript
(store.js 에서 user 부분 자르기)
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
export let { changeName, incAgeBy1, incAge } = user.actions
```
3) 새롭게 만든 userSlice.js에 붙여넣고 createSlice() 등 필요한 함수 import
    다른곳에서 쓰기 위해서 actions들과 user slice 객체 export
```JavaScript
import { createSlice } from "@reduxjs/toolkit"

let user = createSlice({
  [생략: 위랑 동일]
})
export let { changeName, incAgeBy1, incAge } = user.actions

export default user
```
4) 필요한 곳에서 사용









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
> let f = arr.forEach( (val) =>{
>   return val+1;
> })
> console.log(f); // undefined
>
> // 1-2) map()
> let m = arr.map( (val)=> {
>   return val+1; 
> })
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
> let newArr2 = arr.map( (val)=>{ val*2 })
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
**obj.find(** ([element], [index], [array]) => {} **)**
```JavaScript
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

let foundCherries = inventory.find( (ele, index)=>{ ele.name === "cherries" });

console.log( foundCherries ); // { name: 'cherries', quantity: 5 }
```

