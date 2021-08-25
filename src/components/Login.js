import React from 'react';
import {Link} from 'react-router-dom';
import '../components/css/Login.css';

const Login = () => {
    
    return (
        <div className="container">
        <div className="py-4">
        <div class="login-form">    
    <form>
		<div class="avatar"><i class="far fa-user"></i></div>
    	<h4 class="modal-title">Login to Your Account</h4>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Username" required="required"/>
        </div>
        <div class="form-group">
            <input type="password" class="form-control" placeholder="Password" required="required"/>
        </div>
        <div class="form-group small clearfix">
            <label class="checkbox-inline"><input type="checkbox"/> Remember me</label>
            <Link to="#">Forgot Password?</Link>
        </div> 
        <input type="submit" class="btn btn-primary btn-block btn-lg" value="Login"/>              
    </form>			
    <div class="text-center small">Don't have an account? <Link to="/signup">Sign up</Link></div>
</div>
        </div>  
        </div>
    )
}

export default Login;
