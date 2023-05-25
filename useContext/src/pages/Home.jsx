import UserCard from '@components/UserCard/UserCard';
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function Home() {
  const [user, setUser] = useState([]);

  useEffect(()=>{
    axios
    .get("https://randomuser.me/api/?results=5")
    .then(({data}) => (setUser(data.results)))
  },[])

  return(
  <>
    <h1>Utilisation du Use context</h1>
    {user.map((element)=>{
      console.log(element);
      return (
        <UserCard key={element.cell} userData={element}/>
      )
    })}
  </>
  
  );
}
