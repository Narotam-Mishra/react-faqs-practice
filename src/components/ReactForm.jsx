import { useState } from "react";

const ReactForm = () => {
  const[userData, setUserData] = useState({});

  const inputChangeHandler = (name, value) => {
    let data = ({ [name] : value });
    setUserData((prevUserData) => ({...prevUserData, ...data}));
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userData);
  }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="username">Usernme:</label>
                <input type="text" name="username" id="username" onChange={(e) => inputChangeHandler(e.target.name, e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" onChange={(e) => inputChangeHandler(e.target.name, e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={(e) => inputChangeHandler(e.target.name, e.target.value)}/>
            </div><br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default ReactForm