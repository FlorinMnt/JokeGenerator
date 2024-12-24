
import React, { useState } from "react";
import axios from 'axios'; 
import { useNavigate } from "react-router-dom";


export const SignUp = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const signupData = async () => {
        try {
            const response = await axios.post('http://localhost:8081/req/signup', {
                username: username,
                password: password,
                email: email
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            console.log(response.data);
            // Adăugăm o redirecționare sau mesaj de succes
            alert('User registered successfully!');
            // Opțional: redirecționare către login
            navigate("/login");
        } catch (err) {
            setError("Invalid username or password");
            console.error("Error during signup: ", err.response ? err.response.data : err.message);
            alert('Error during registration: ' + (err.response?.data || err.message));
        }
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      // Aici trimiți datele către backend, de exemplu cu fetch sau axios
      console.log("Submitting", { username, password,email });
      signupData();
    };
  
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex justify-center items-center flex-col h-[500px] w-[500px]">
                <form className="flex justify-center items-center shadow-2xl flex-col box-border w-full h-full p-6 gap-2" onSubmit={handleSubmit}>
                    <h1 className="text-4xl">SignUp</h1>
                    <div className="flex flex-col w-full max-w-xs">
                      <label className="mb-1" htmlFor="username">Username:</label>
                      <input
                          className="outline-none placeholder-gray-500 placeholder-opacity-50 bg-white shadow-md input input-bordered w-full"
                          type="text"
                          id="username"
                          name="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Enter your Username"
                          required
                      />
                    </div>
                    <div className="flex flex-col w-full max-w-xs">
                      <label className="mb-1" htmlFor="username">Email:</label>
                      <input
                          className="outline-none placeholder-gray-500 placeholder-opacity-50 bg-white shadow-md input input-bordered w-full"
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your Email"
                          required
                      />
                    </div>
                    <div className="flex flex-col w-full max-w-xs mt-4">
                      <label className="mb-1" htmlFor="password">Password:</label>
                      <input
                          className="outline-none placeholder-gray-500 placeholder-opacity-50 bg-white shadow-md input input-bordered w-full"
                          type="password"
                          id="password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your Password"
                          required
                      />
                    </div>
                    <div className="wrap">
                      <button className="m-2 text-xl bg-indigo-900 btn w-80" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}