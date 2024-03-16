import React from 'react';
import axios from 'axios';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const YourComponent = () => {
  
  const handleGoogleLoginSuccess = async (response) => {
    const accessToken = response?.credential;

    const decodedToken = jwtDecode(accessToken);
    console.log("DecodedToken:", decodedToken);

    const userEmail = decodedToken.email;
    const userName = decodedToken.name;
    const sub = decodedToken.sub
    console.log("UserEmail:", userEmail);
    console.log("UserName:", userName);
    
    try {
      const postData = { google_id: sub , name : userName};
      const apiUrl = 'http://localhost:4100/api/user/register'; 
      const apiResponse = await axios.post(apiUrl, postData);
      console.log("API Response:", apiResponse.data);
    } catch (error) {
      console.error('Error posting data to API:', error);
    }
  };

  const handleLoginFailure = (error) => {
    console.error('Google login failed:', error);
  };

  return (
    <GoogleOAuthProvider clientId="960417137626-hkv8qsscs9h35d9j6lm5tsco6cjff607.apps.googleusercontent.com">
      <div>
        <GoogleLogin
          onFailure={handleLoginFailure}
          onSuccess={handleGoogleLoginSuccess}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default YourComponent;
