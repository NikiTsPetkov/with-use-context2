import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Table from './pages/Table';
import About from './pages/About';
import Info from './pages/Info';
import './style.css';

export const userContext = createContext();
export default function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showWebsite, setShowWebsite] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        const data = await response.json();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);
  return (
    <BrowserRouter>
      <userContext.Provider
        value={{ users, setUsers, showWebsite, setShowWebsite }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={isLoading ? <h1>Loading...</h1> : <Table />}
            />
            <Route path="info/:id" element={<Info />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </userContext.Provider>
    </BrowserRouter>
  );
}
