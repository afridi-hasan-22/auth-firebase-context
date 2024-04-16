import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../providers/AuthProvider";


const Login = () => {
    const {signIn} = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value;
        
        signIn(email,password).then(result => {
          toast.success('Sucessfully logged in')
          e.target.reset()
        }).catch(error=> {
          console.log(error.message);
          toast.error('Something wrong')
        })
    }
  return (
    <div className="my-container">
      <div className=" w-full hero min-h-screen bg-base-200">
        <div className="w-[50%] hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card shrink-0 w-full shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
              <p className="text-center text-xl">New here ? please <span className="text-blue-500"><Link to='/register'>Register</Link></span></p>
            </form>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
