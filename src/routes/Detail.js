import { useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailPage ( props ) {

  useEffect (() => {
    setTimeout( () => {
      document.querySelector(".alert.alert-warning").style.display='none';
    }, 2000)

  })

  let {id} = useParams();

  // Find the item by the parameter id
  let shoesItem = props.shoes.find( function(o) {
    return o.id == id;
  });
  // 짧은버전: let shoesItem = props.shoes.find( (o) => o.id == id );

  return (
    <div className="container">
      <div className="alert alert-warning">2초 뒤 숨겨줫!</div>
      {
        (id >= 0 && id <=2) ? 
        (<div className="row">
            <div className="col-md-6">
            <img src={"https://codingapple1.github.io/shop/shoes" + (shoesItem.id+1) + ".jpg"} width="100%" alt="detailedImage"/>
            </div>
            <div className="col-md-6">
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