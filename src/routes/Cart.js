import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';


function Cart() {
  // let {userName} = useSelector( (state)=>{ return state})
  // let stockList = useSelector( (state)=> state.stockList )
  // console.log(userName);
  // console.log(stockList);

  let cartItems = useSelector( (state)=> state.cartItems );
  
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
        </tr>
      </thead>
      <tbody>
        {
          cartItems.map( (item, i)=>
            <tr key={i}>
              <td>{i+1}</td>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>변경하기</td>
            </tr>
          )
        }
      </tbody>
    </Table>
  )
}

export default Cart; 