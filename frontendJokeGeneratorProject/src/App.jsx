
// import React from "react"
// import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
// import { Home } from './Pages/Home/Home'
// import { JokeManager } from './Pages/JokeManager/JokeManager'
// import { Navbar } from "./components/Navbar/Navbar"
// import { Footer } from "./components/Footer/Footer"
// import { Test } from './Pages/Test/Test'
// import { JokesList } from "./Pages/JokesList/JokesList"
// import { SignUp } from "./Pages/Signup/Signup"
// import { LoginPage } from "./Pages/Login/loginPage.jsx"
// import ProtectedRoute from "./components/ProtectedRoute.jsx";

// const  App = () => {

//   return (
//     <Routes>
//     {/* Paginile publice */}
//     <Route path="/login" element={<LoginPage />} />
//     <Route path="/signup" element={<SignUp />} />

//     {/* Paginile protejate */}
//     <Route
//       path="/home"
//       element={
//         <ProtectedRoute>
//           <Home />
//         </ProtectedRoute>
//       }
//     />
//     <Route
//       path="/jokemanager"
//       element={
//         <ProtectedRoute>
//           <JokeManager />
//         </ProtectedRoute>
//       }
//     />
//     <Route
//       path="/jokelist"
//       element={
//         <ProtectedRoute>
//           <JokesList />
//         </ProtectedRoute>
//       }
//     />

//     {/* Redirecționare implicită către login */}
//     <Route path="*" element={<LoginPage />} />
//   </Routes>
//   )

// }
// export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { JokeManager } from "./Pages/JokeManager/JokeManager";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { JokesList } from "./Pages/JokesList/JokesList";
import { SignUp } from "./Pages/Signup/Signup";
import { LoginPage } from "./Pages/Login/loginPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* Paginile publice */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Paginile protejate */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/joke"
            element={
              <ProtectedRoute>
                <JokeManager />
              </ProtectedRoute>
            }
          />
          <Route
            path="/jokes_list"
            element={
              <ProtectedRoute>
                <JokesList />
              </ProtectedRoute>
            }
          />

          {/* Redirecționare implicită către login */}
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
