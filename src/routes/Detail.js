import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailPage ( props ) {
  let {id} = useParams();
  let shoesItem = props.shoes.find( (o) => o.id == id );
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);

  let [input, setInput] = useState('');

  useEffect (() => {
    // let timer = setTimeout( () => { setAlert(false); }, 2000)

    if( isNaN(input) ) { console.log("그러지 마세요") }

    return () => {
      // clearTimeout(timer);
    }
  }, [input])

  return (
    <div className="container">
      { alert? <div className="alert alert-warning">2초 뒤 숨겨줫!</div> : null }
      {count}
      <button onClick={ () => { setCount( count ++ )}}>버튼</button>
      {
        (id >= 0 && id <=2) ? 
        (<div className="row">
            <div className="col-md-6">
            <img src={"https://codingapple1.github.io/shop/shoes" + (shoesItem.id+1) + ".jpg"} width="100%" alt="detailedImage"/>
            </div>
            <div className="col-md-6">
              <input onChange={ (e) => { setInput(e.target.value) }}></input>
            <h4 className="pt-5">{shoesItem.title}</h4>
            <p>{shoesItem.content}</p>
            <p>{shoesItem.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
      ):null}
    </div>   
  )
}


export default DetailPage;