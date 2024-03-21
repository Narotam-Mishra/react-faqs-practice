import { useEffect, useState } from 'react'
import DynamicSearchFilterTest from './DynamicSearchFilterTest';

const apiUrl = "https://jsonplaceholder.typicode.com/users";

const DynamicSearch = () => {
  const[users, setUsers] =  useState([]);

  const getData = () => {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const usernames = data.map((user) => user.name);
            console.log(usernames);
            setUsers(usernames);
        })
        .catch((err) => {
            console.log('Error fetching data:', err);
        })
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
        <h2>Dynamic Search Test</h2><br />
        <DynamicSearchFilterTest data={users}/>
    </div>
  )
}

export default DynamicSearch