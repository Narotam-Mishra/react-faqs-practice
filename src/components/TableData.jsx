import useUsers from "../hooks/useUsers"

const TableUsers = () => {
    const { users, loading } = useUsers();

    if(loading){
        return <div>Loading...</div>
    }

    const tableContainer = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };

    const headerStyle = {
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "32px",
    };

    const tableStyle = {
      width: "90%",
      margin: "20px auto",
      overflowX: "auto",
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      background: "#fff",
      padding: "16px",
      border: "2px solid #000",
      borderCollapse: "collapse", 
    };

    const thTdStyle = {
      border: "2px solid #000",
      padding: "10px",
      textAlign: "left",
    };

    const theadStyle = {
        backgroundColor: "#007bff",
        color: "white",
    };

    return (
      <>
        <h2 style={headerStyle}>List of Users</h2>
        <div style={tableContainer}>
          <table style={tableStyle}>
            <thead style={theadStyle}>
              <tr>
                <th style={thTdStyle}>Id</th>
                <th style={thTdStyle}>Name</th>
                <th style={thTdStyle}>Username</th>
                <th style={thTdStyle}>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={index}>
                    <td style={thTdStyle}>{user.id}</td>
                    <td style={thTdStyle}>{user.name}</td>
                    <td style={thTdStyle}>{user.username}</td>
                    <td style={thTdStyle}>{user.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    style={{
                      textAlign: "center",
                      padding: "10px",
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    API is not working or returned no data
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </>
    );
}

export default TableUsers;