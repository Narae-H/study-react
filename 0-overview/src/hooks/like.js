import axios from "axios";
import { useState } from "react";

export function useLike(){
  let [like, setLike] = useState(0);
  function addLike() {
      setLike( like => like+1 )
  }

  return [like, addLike];
}

export function useUsername() {
  let [userName, setUserName] = useState("");
  axios.get('/username.json').then( (a)=>{
    setUserName(a.data);
  })

  return userName;
}

