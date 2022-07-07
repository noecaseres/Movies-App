import React from 'react';
import { Routes, Route} from "react-router-dom";
import App from '../App';
import Layout from '../Layout';
import { MoviePage } from '../pages/MoviePage';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<App/>} />
              <Route path="/:id" element={<MoviePage/>} />
            </Route>
        </Routes>
    </>
  )
}
