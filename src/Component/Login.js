import React from "react";
import axios from "axios";
import styled from "styled-components";

const Login = () => {

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        console.log(response)
    })
}
  return (
    <Root>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="login_form">
              <h4>Login</h4>
              <div>
                <hr className="divider" />
              </div>
              <div className="btn_div">
                <button onClick={handleSubmit}>Login with Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
};
export default Login;

const Root = styled.section`
  .container-fluid {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    .login_form {
      border: 1px solid transparent;
      box-shadow: 0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07);
      background-color: #eaf9f5;
      width: 350px;
      border-radius: 10px;
      padding: 40px 0 60px 0;
      h4 {
        font-size: 25px;
        font-weight: 700;
        color: #333;
        text-align: center;
        margin-bottom: 20px;
      }
      div {
        display: flex;
        justify-content: center;
        .divider {
          width: 40%;
          height: 2px;
          background-color: grey;
          margin: 0;
        }
      }

      .btn_div {
        display:flex;
        justify-content:center;
        margin-top:80px;
        button {
          background-color: #00b2a2;
          color: #fff;
          font-weight: 700;
          border-radius: 23px;
          display: inline-block;
          padding: 10px 30px;
          transition: all 0.5s ease-out;
          border: 1px solid transparent;
   
        }
      }
    }
  }
`;
