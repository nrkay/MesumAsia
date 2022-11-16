import React, { useState } from 'react';
import axios from "axios";

function Form() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState([]);


    function error() {
        alert('LOGIN GAGAL')
    }

    function succeed() {
        alert('Yeay, Akun Anda Berhasil Terdaftar. Silahkan Login')
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log("tes")
        // setUserName("")

        // Post API
        axios.post('https://6350d871dfe45bbd55afb4ff.mockapi.io/MuseumAsia/user', {
            userName,
            password,
          })
          .then(() => {
            setUserName("")
            setPassword("")
            succeed()
          })
          .catch((error) => {
            error()
            console.log(error);
          });
    }



    console.log(userName)
     
return (
<>
    <section>
        <div className="container">
            <div className="login row vh-100">
                {/* login form */}
                <div className="login-form col-lg-6  text-black bg-danger">
                    <div className="row d-flex justify-content-center mt-5">
                        <div className="col-8 bg-warning wh-100">
                            {/* logo in form login */}
                            <div className="mt-3 p-3 bg-danger">
                                <h1>Musemum Asia</h1>
                            </div>
                            <div className="mt-3">
                                <h2>Sign UP</h2>
                                <form onSubmit={handelSubmit}>
                                    <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" className="form-control mt-3" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" />
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control mt-3" id="exampleInputPassword1" />
                                    <button className="btn btn-dark mt-3 p-2">Dark</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* picture in login */}
                <div className="login-background col-sm-6 px-0 d-none d-md-block bg-warning">
                    Column
                </div>
            </div>
        </div>
    </section>
</>
);
}

export default Form;