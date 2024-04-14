import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Hero } from './pages/Hero.jsx';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from './components/Layout.jsx';
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';
import Goals from './pages/Goals.jsx';
import WorkoutTracker from './pages/WorkoutTracker.jsx';
import WorkoutSchedule from './pages/WorkoutSchedule.jsx';

export default function App() {

  return (
    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Hero />} />
              <Route path="signup" element={<Signin />} />
              <Route path="signin" element={<Signup />} />
              <Route path="goals" element={<Goals />} />
              <Route path="tracker" element={<WorkoutTracker />} />
              <Route path="schedule" element={<WorkoutSchedule />} />




            </Route>
          </Routes>
        </BrowserRouter>
     
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

