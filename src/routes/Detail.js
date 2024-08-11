import { useContext, useEffect, useState } from "react";
import { Row, Tab, Tabs } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { Context1 } from './../App.js'

function DetailPage ( props ) {
  let {id} = useParams();
  let shoesItem = props.shoes.find( (o) => o.id == id );
  // let [count, setCount] = useState(0);
  // let [input, setInput] = useState('');
  let [tab, setTab] = useState('home');
  let [fade, setFade] = useState('');

  let {stock} = useContext( Context1 );

  // useEffect (() => {
  //   if( isNaN(input) ) { console.log("그러지 마세요") }

  //   return () => {
  //   }
  // }, [input])

  useEffect( ()=>{
    setTimeout(setFade('end'), 100);

    return( ()=>{
      setFade('');
    })
  },[])

  return (
    <div className={'container start ' + fade }>
      {/* { alert? <div className="alert alert-warning">2초 뒤 숨겨줫!</div> : null } */}
      {/* {count} */}
      {/* <button onClick={ () => { setCount( count ++ )}}>버튼</button> */}
      {
        (id >= 0 && id <=2) ? 
        (<div className="row">
          <div className="col-md-6">
            <img src={"https://codingapple1.github.io/shop/shoes" + (shoesItem.id+1) + ".jpg"} width="100%" alt="detailedImage"/>
          </div>
          <div className="col-md-6">
            {/* <input onChange={ (e) => { setInput(e.target.value) }}></input> */}
            <h4 className="pt-5">{shoesItem.title}</h4>
            <p>{shoesItem.content}</p>
            <p>{shoesItem.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
          </div>
        ):null}
        <Tabs 
          activeKey={ tab }
          onSelect={ (tab)=>{ setTab(tab)} }
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            Tab content for Home
          </Tab>
          <Tab eventKey="profile" title="profile">
            Tab content for Profile
          </Tab>
          <Tab eventKey="contact" title="contact">
            Tab content for contact
          </Tab>

        </Tabs>

        <GrandChildren shoes={props.shoes}/>
    </div>   
  )
}

function GrandChildren({shoes}) {
  let {stock} = useContext( Context1 );
  
  return (
    <p>{stock[0]}</p>
  )
}


export default DetailPage;