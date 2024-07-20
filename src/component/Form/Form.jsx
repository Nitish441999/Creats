import React from 'react'
import "./Form.css"
import { Link } from 'react-router-dom'

function Form() {
  return (
    <div>
        <div className="container-fluid">
            <div className="row  justify-content-center">
                <div className="col-md-8 formContainer">
                    <form>
                   
                        <div className="rasiterPage">
                        <h3>RGISTER</h3>
                        
                            <label for="fname">First name:</label><br />
                            <input type="text" id="fname" name="fname"  /><br />

                            <label for="fname">Second name:</label><br />
                            <input type="text" id="sname" name="Sname"  /><br />

                            <label for="fname">Email:</label><br />
                            <input type="email" id="email" name="email"  /><br />

                            <label for="fname">New Password:</label><br />
                            <input type="password" id="password" name="password" /><br />

                            <label for="fname">Conform Password:</label><br />
                            <input type="password" id="rpassword" name="rpassword"  /><br />

                            <label for="fname">Mobile No:</label><br />
                            <input type="number" id="mobile" name="mobile"  /><br />

                            <button >Register</button><br/>
                           <p> Click here to <Link to="/login">LOGIN</Link></p>
                            
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
            
    </div>
  )
}

export default Form;
