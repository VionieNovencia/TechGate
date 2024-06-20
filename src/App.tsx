import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home';
import LoginPage from './pages/Auth/Login';
import RegisterPage from './pages/Auth/Register';
import ForgotPasswordPage from './pages/Auth/ForgotPassword';
import NotificationPage from './pages/Notification';
import NotificationDetailPage from './pages/NotificationDetail';
import ProfilePage from './pages/Profile';
import CompanyProfilePage from './pages/CompanyProfile';
import EventPage from './pages/Events';
import JobsPage from './pages/Jobs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/notification/:id" element={<NotificationDetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/:name" element={<CompanyProfilePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/jobs" element={<JobsPage />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
