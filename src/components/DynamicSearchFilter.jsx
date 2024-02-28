import { useEffect, useState } from "react";
import '../styles/DynamicSearchFilter.css'

const DynamicSearchFilter = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searched, setSearched] = useState([]);

  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  const getData = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    getData();
  },[]);

  useEffect(() => {
    if(searchQuery){
      setSearched(
        users.filter((user) => {
          return Object.values(user)
            .join("")
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        })
      )
    }else{
      setUsers(users);
    }
  }, [searchQuery, users]);

  return (
    <div className="con">
      <input
        type="text"
        placeholder="Search Users..."
        className="input-box"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="grid-main">
        {searchQuery.length > 0
          ? searched.map((user) => {
              return (
                <div key={user.id} className="grid-child">
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              );
            })
          : users.map((user) => {
              return (
                <div key={user.id} className="grid-child">
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default DynamicSearchFilter;