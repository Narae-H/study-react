해당 내용은 코딩애플:apple: 수업을 듣고 정리한 글입니다.

# PWA 셋팅해서 앱으로 발행 (모바일앱인척)
- PWA(Progressive Web App)이란, 웹사이트를 앱처럼 사용할 수 있게 해주는 기술. PC일 경우 웹사이트의 바로 가기 아이콘 만들어주고, 모바일일 경우 웹사이트 자체를 홈화면에 설치해줌(앱과 동일하게 상단 주소창 같은것 다 없어짐, 일반 사용자는 앱이랑 구분을 못함).
- Cache storage때문에 오프라인에서도 동작 가능하고 앱 백그라운드에서도 동작가능.
- 푸시알림, 센서도 가능.

### 설치방법 
- React 프로젝트를 PWA 모듈 설치한다고 되는게 아니라, 처음부터 PWA 로 설치해야 함.
- PWA는 manifest.json, service-worker.js 파일 존재

```
npx create-react-app PROJECT-NAME --template cra-template-pwa
```

- manifest.json: 앱 설정파일 ex) 앱 이름, 앱아이콘 설정, 앱 처음 URL, 테마색상, 디스플레이 방법 등. [Web app manifest](https://web.dev/learn/pwa/web-app-manifest)

- service-worker.js: 오프라인에서도 사이트 열 수 있게 도와줌.   
Step 1. index.js 파일 수정: unregister() -> register()
```JavaScript
(index.js)
serviceWorkerRegistration.register();
```
Step 2. Build: 아래 명령어 실행하고 나면 build 폴더가 생성되고, 그 안에 pwa 에 필요한 파일들이 전부 생성 됨.
```
npm run build
```

### 실행방법
Step 1. 해당 프로젝트의 build 파일을 VS code로 열기   
Step 2. View 탭 > extensions
Step 3. live server 검색 > 설치
Step 4. index.html 파일 우클릭 > open with live server

[!NOTE] Chrome 개발자도구 (F12) > Application 탭 > Manifest, Cache Storage 확인 가능


## 특정파일 caching 하지 않도록 설정
Step 1. node_modules 폴더 > react-scripts > config > webpack.confg.js
Step 2. indjectManifest() 검색해서 exclude 부분에 정규식 형식으로 특정 파일 넣기