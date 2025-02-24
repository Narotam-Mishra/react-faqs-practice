import { useState } from "react";
import { useEffect } from "react"

const apiURL = "https://jsonplaceholder.typicode.com/users";

const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
            setUsers(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching data: ", error)
            setLoading(false);
        })
    }, []);

    return { users, loading };
}

export default useUsers;