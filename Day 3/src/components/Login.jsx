import * as React from 'react'

const Login = () => {

const [formdata, SetFormData]=React.useState({
            
    username:"",
    password:""

})

const handleonChange = (e) =>{
    const [name, value] =[e.target.name, e.target.value];
    SetFormData({
       ...formdata,
       [name]: value
    })  
    
}

const SubmitForm = (e) =>{
    e.preventDefault();
    console.log(formdata);
}

  return (
    <div class="wrapper login">
        <div class="container">
            <div class="col-left">
                <div class="login-text">
                    <h2>Welcome!</h2>
                    <p>Create your account.<br/>For Free!</p> <a href="" class="btn">Sign Up</a>
                </div>
            </div>
            <div class="col-right">
                <div class="login-form">
                    <h2>Login</h2>
                    <form action="" onSubmit={SubmitForm}>
                        <p> <label>Username/Email address<span>*</span></label> <input type="text" placeholder="Username or Email" required onChange={handleonChange}/> </p>
                        <p> <label>Password<span>*</span></label> <input type="password" placeholder="Password" required onChange={handleonChange}/> </p>
                        <p> <input type="submit" value="Sign In" onChange={handleonChange}/> </p>
                        <p> <a href="">Forgot password?</a> </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
        
  )
}

export default Login