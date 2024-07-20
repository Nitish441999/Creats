import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className=' col-md-8 loginSec'>
                    <form>
                        <div className='loginPage'>
                            <h3>LOGIN</h3>
                            <label for="fname">Email:</label><br />
                            <input type="email" id="email" name="email"  /><br />

                            <label for="fname"> Password:</label><br />
                            <input type="password" id="password" name="password" /><br />
                            <button >Login</button><br/>
                            <p> Click here to <Link to="/form">REGISTER</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Login;
