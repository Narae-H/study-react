import { createContext, lazy, Suspense, useState } from 'react';
import './App.css';
import { Container, Nav, Navbar, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { Routes, Route, useNavigate, Outlet, Link} from 'react-router-dom';
import axios from 'axios';

import data from './data.js';
import Spinner from './img/spinner.gif'
import { useQuery } from 'react-query';

// import DetailPage from './routes/Detail.js';
// import Cart from './routes/Cart.js';

const DetailPage = lazy(() => import('./routes/Detail.js'));
const Cart       = lazy(() => import('./routes/Cart.js'));

export let Context1 = createContext()

function App() { 
  let [shoes, setShoes]  = useState(data);
  let [stock, setStock]  = useState([10, 11, 12]); // Context API로 전달해보자
  let [moreCnt, setMoreCnt] = useState(2);
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  // 1. 유저가 본 상품 리스트
  let watchedItem = JSON.parse(localStorage.getItem('watched'));
  watchedItem = (watchedItem == null)? [] : watchedItem;

  // 2. 유저 정보
  let {data: userInfo, isLoading, isError, isSuccess} = useQuery('userInfo', ()=> axios.get('https://codingapple1.github.io/userdata.json') );

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate("/")}}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate("/detail")}}>Detail</Nav.Link>
            <Nav.Link onClick={() => { navigate("/cart")}}>Cart</Nav.Link>
          </Nav>
          <Nav className='ms-auto userInfo'>
            { isLoading && '로딩중'}
            { isError && '에러남'}
            { isSuccess && userInfo.data && userInfo.data.name }
          </Nav>
        </Container>
      </Navbar>

      <Suspense fallback={ <div>로딩중임</div>}>
        <Routes>
          <Route path='/' element={
            <>
              <div>
                <ListGroup className='watched-list'>
              { 
                watchedItem.reverse().map( (item, i) => {
                return (
                  <ListGroup.Item action variant="dark" key={i}>
                    <div className='img-wrapper' onClick={ ()=> navigate("/detail/"+item)}>
                      <img src={"https://codingapple1.github.io/shop/shoes" + (item+1) + ".jpg"}/>
                    </div>
                  </ListGroup.Item>
                  )
                })
              }
                </ListGroup>
              </div>

              <div className='main-bg'></div>
        
              <button onClick={() => {
                let sortedShoes = [...shoes];
                sortedShoes.sort(function(a, b){
                  if( a.title > b.title ) {
                    return 1;
                  } else if( a.title === b.title ) {
                    return 0;
                  } else {
                    return -1;
                  }
                })
                setShoes(sortedShoes);
              }}>정렬</button>

              <Container>
                <Row>
                  {
                    shoes.map( function(item, i) {
                      return(
                        <NaCard item={item} i={i} key={i}/>
                      )
                    })

                  }
                </Row>
              </Container>

              {
                (moreCnt >= 2 && moreCnt < 4)?
                <button onClick={ ()=> {
                  setLoading(true);

                  axios.get('https://codingapple1.github.io/shop/data'+ moreCnt +'.json')
                  .then( (res) => {
                    let modifiedItems = [...shoes, ...res.data];
                    setShoes(modifiedItems);
                    setMoreCnt(moreCnt+1);
                    setLoading(false);
                  })
                  .catch( (e) => {
                    console.log(e);
                    setLoading(false);
                  })

                }}>더보기</button>
                : <p>No more items</p>
              }
              { loading? <Loading/>:null }
            </>

          } />

          <Route path="/detail" element={
            <>
              {
                shoes.map( (item, i)=>{
                  return <p key={i}><Link key={i} to={"/detail/" + item.id}>{item.title}</Link></p>
                })
              }
            </>
          }/>

          <Route path='/detail/:id' element={ 
            <Context1.Provider value={{stock}}>
              <DetailPage shoes={shoes}/> 
            </Context1.Provider>
          } />

          <Route path="/cart" element={ <Cart/>}/>

          <Route path='/about' element={ <About/> }>
            <Route path='member' element={<div>Memeber</div>}/>
            <Route path='location' element={<div>Location</div>}/>
          </Route>
          <Route path="/event" element={ <Event/> }>
            <Route path="one" element={ <div>첫 주문시 양배추즙 서비스</div>}/>
            <Route path="two" element={ <div>생일기념 쿠폰받기</div>}/>
          </Route>

          <Route path='*' element={<div>404 Error</div>}/>
        </Routes>
      </Suspense>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function About() {
  return (
    <div>
      <h4>회사정보임.</h4>
      <Outlet></Outlet>
    </div>
  )
}

function NaCard( props ) {
  let navigate = useNavigate();
  return (
    <Col md={4}>
      <Card onClick={()=> {
          navigate("/detail/"+props.item.id);
        }}>
        <Card.Img variant="top" src={"https://codingapple1.github.io/shop/shoes" + (props.item.id + 1) + ".jpg"} />
        <Card.Body>
          <Card.Title><h4>{props.item.title}</h4></Card.Title>
          <Card.Text>
            {props.item.content}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>    
  )
}

function Loading(props) {
  return (
    <div className='loading'>
      <p>Loading...</p>
      <img src={Spinner} alt='loading'/>
    </div>
  )
}

export default App;
