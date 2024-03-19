import React,{useState} from "react"
import axios from "axios";
const Getusers = () => {
    const [users,setusers] = useState([]);
    const getuser = () =>{
     axios.get("https://reqres.in/api/users")
    .then(response => setusers(response.data.data))
    .catch(error => console.log(error))
    }
  return (
    <div>
        <h3>Blue Whale</h3>
        <button onClick={getuser}>getuser</button>
        <table>
            <thead>
                <tr>
                    <th>first name</th>
                    <th>last name</th>
                    <th>email</th>
                    <th>avatar</th>
                </tr>
            </thead>
            <tbody>
        {
        users.length > 0 ? (
                users.map((value) =>(
                <tr>
                  <td>{value.first_name}</td>
                  <td>{value.last_name}</td>
                  <td>{value.email}</td>
                  <td><img src={value.avatar}/></td>
                </tr>
                ))
        ) : (
            <tr>
                <td>no data found to display</td>
            </tr>
        )
        }
        </tbody>
        </table>
    </div>
  )
}
export default Getusers;