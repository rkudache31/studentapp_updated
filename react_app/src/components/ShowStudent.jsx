import React, {  useEffect, useState } from "react";
export default function ShowStudent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async()=>{
    let result = await fetch('http://student-back-svc:3000/student',{
      method:"GET"
    });
    result = await result.json();
    setData(result)
    console.log(result)
  }

  return (
    <div className="data-table">
      <h1 className="headline">List Student Information</h1>
      <table className="table">
        <thead>
        <tr>
          <th>Sr.No</th>
          <th>Student Name</th>
          <th>Date of Birth</th>
          <th>Gender</th>
          <th>Address</th>
          <th>Mobile No</th>
        </tr>
        </thead>
       <tbody>
       {data.map((item,index) => {
                return (
                    <tr  key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.dateofbirth}</td>
                        <td>{item.gender}</td>
                        <td>{item.address}</td>
                        <td>{item.mobileno}</td>
                    </tr>
                )
            })}
       </tbody>
      </table>
    </div>
  )
}
