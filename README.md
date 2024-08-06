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

# State
### State란?
자료를 잠깐 보관하는 곳. state는 변동 사항이 생기면 자동으로 html을 재랜더링 해줌 => 즉, 자주 값이 자주 바뀌어서 재랜더링이 필요한 곳에 쓰면 됨.
|      특징      |   state                              |  변수                                                |
|----------------|--------------------------------------|-----------------------------------------------------|
|     공통점     | 변수를 보관                            | 변수를 보관                                          |
|     차이점     | 저장된 값이 변경되면 HTML **다시 랜더링 O** | 저장된 값이 변경되도 HTML **다시 랜더링 X** -> 새로 고침 필요|

### 문법
**let[**_변수명, 해당 변수에 값을 넣을 때 쓰는 함수로 set[변수명]으로 작명_**]** = **useState(**_'변수에 넣을 값'_**);**
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
<details>
<summary>자바스크립트 destructuring 문법</summary>
  
array안에 있는 데이터들을를 변수로 쉽게 저장
```JavaScript
// Array안의 값들을 하나 하나 변수에 바인딩  
let array = ['Hyeon', 20];
let name  = array[0];
let age   = array[1];

// 위의 코드 대신에 아래와 같이 사용. 왼쪽 오른쪽 형식을 똑같이 맞추면 자동으로 알아서 변수 생성
let [name, age] = ['Hyeon', 20]
```
</details>




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
