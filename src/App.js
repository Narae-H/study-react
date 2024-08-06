import { useState } from 'react';
import './App.css';
import { Container, Nav, Navbar, Row, Col, Card } from 'react-bootstrap';
import { Routes, Route, useNavigate, Outlet} from 'react-router-dom';

import data from './data.js';
import DetailPage from './routes/Detail.js';

function App() {
  let [shoes, setShoes]  = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate("/")}}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate("/detail")}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
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
          </>

        } />

        <Route path='/detail/:id' element={ <DetailPage shoes={shoes}/> } />

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
  return (
    <Col md={4}>
      <Card>
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

export default App;
