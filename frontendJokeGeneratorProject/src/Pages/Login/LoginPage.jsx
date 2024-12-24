import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const redirectToSignup = () => {
      navigate("/signup");
  };

  const loginData = async () => {
    try {
        const response = await axios.post('http://localhost:8081/req/login', {
            username,
            password,
        }, {
            withCredentials: true
        });
        
        console.log(response); // Inspectează răspunsul

        if (response.status === 200) {
            console.log("Login successful");
            login();
        }
    } catch (err) {
        console.error("Error during login:", err); // Afișează detalii despre eroare
        if (err.response) {
            setError(err.response.data.message || "Invalid username or password");
        } else {
            setError("Something went wrong. Please try again.");
        }
    }
};

const handleSubmit = (e) => {
    e.preventDefault();

    // Verifică dacă există câmpuri goale
    if (!username || !password) {
        setError("All fields are required");
        return;
    }

    // Resetează mesajul de eroare înainte de trimiterea datelor
    setError("");

    // Aici trimiți datele către backend
    console.log("Submitting", { username, password });
    loginData();
};

  return (
    <div className="flex justify-center items-center min-h-screen">
        <div className="flex justify-center items-center flex-col h-[500px] w-[500px]">
            <form className="flex justify-center items-center shadow-2xl flex-col box-border w-full h-full p-6 gap-2" onSubmit={handleSubmit}>
                <h1 className="text-4xl">Login</h1>
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
                {error && <p className="text-red-500 mt-2">{error}</p>}
                <p className="mt-4">
                    Not registered?{" "}
                    <a
                        onClick={(e) => {
                            e.preventDefault();
                            redirectToSignup();
                        }}
                        className="text-indigo-900 hover:text-blue-800 hover:underline transition-colors duration-300 cursor-pointer"
                    >
                        Create an account
                    </a>

                </p>

            </form>
        </div>
    </div>
  );
};
