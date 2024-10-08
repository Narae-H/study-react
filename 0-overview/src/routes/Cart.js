import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeStocks, decCountBy1, incCountBy1, setCartItems } from '../store';
import { incAge, incAgeBy1 } from '../store/userSlice';
import { memo, useMemo, useState } from 'react';

function Cart() {
  // let state = useSelector( (state) => state );
  // let {userName} = useSelector( (state)=>{ return state})
  // let stockList = useSelector( (state)=> state.stockList )
  let {user, cartItems} = useSelector( (state) => state );
  let dispatch = useDispatch();

  return (
    <>
      <p>{user.name}의 장바구니</p>
      <div>
        {user.age}
        <button onClick={ ()=>dispatch(incAgeBy1()) }>나이 한살 더</button>
        <button onClick={ ()=>dispatch(incAge(5)) }>나이 원하는만큼</button>
      </div>
      <div>
        <button onClick={ ()=>{
          let copiedCartItems = [...cartItems];
          copiedCartItems.sort( (a, b)=>{ 
            if( a.name > b.name) {
              return 1
            } else if ( a.name < b.name){
              return -1
            }
            return 0  
          })
          dispatch( setCartItems(copiedCartItems) )

        }}>상품명 순 정렬</button>
      </div>
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
                <td>
                  <button onClick={ ()=> dispatch(incCountBy1(item.id)) }>+</button>
                  <button onClick={ ()=> dispatch(decCountBy1(item.id)) }>-</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </>
  )
}

export default Cart; 