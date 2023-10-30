import React from "react";
import axios from "axios";
function ViewTableRow(props) {
  const deleteFunc = () => {
    let url = "http://localhost:5050/employee/delete-employee/";
    axios
      .delete(url + props.obj._id)
      .then((res) => {
        if (res.status === 200) {
          alert("Employee deleted successfully");
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <tr>
      <td>{props.obj.name}</td>
      <td>{props.obj.email}</td>
      <td>{props.obj.password}</td>
      <td>
        <button>Edit</button>
        <button onClick={deleteFunc}>Delete</button>
      </td>
    </tr>
  );
}

export default ViewTableRow;