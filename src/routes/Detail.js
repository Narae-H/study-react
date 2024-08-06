import { useParams } from "react-router-dom";

function DetailPage ( props ) {
  let {id} = useParams();

  // Find the item by the parameter id
  let shoesItem = props.shoes.find( function(o) {
    return o.id == id;
  });
  // let shoesItem = props.shoes.find( (o) => o.id == id );

  return (
    <div className="container">
      {
        (id >= 1 && id <=2) ? 
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