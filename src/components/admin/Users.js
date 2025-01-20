import React, { useState } from 'react'
import * as store from "../store.js"

export default function Users() {
  const [users, setusers] = React.useState([]);
  React.useEffect(() => {
    let option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: store.getCurrentUserinfo()
      })
    }
    fetch(process.env.REACT_APP_BACKEND_URL + `/getusr`, option).then((res) => {
      return res.json();
    }).then((res) => {
      setusers(res.images_url);
      console.log("users=>", res);
    }).catch((err) => {
      console.log(err);
    })
  }, [store])
  return (
    <div className=' w-screen bg-black flex justify-center items-center  gap-2 p-5 flex-wrap'>
      {
        users && users.map((img) => {
          return (
            <div className="card">
              <div className="image_container">
                <img className="image" src={img}>
                </img>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
