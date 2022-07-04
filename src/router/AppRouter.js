import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import App from '../App';
import { MoviePage } from '../pages/MoviePage';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/:id" element={<MoviePage/>} />
        </Routes>
    </>
  )
}
