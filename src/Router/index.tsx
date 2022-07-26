import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from '../Landing';
import Login from "../authentication/login/index";
import Actors from '../Actors/index';
import Actor from '../Actors/Actor';

const WebRouter: React.FC = () => {
    return (
    <Router>
      <Routes>
        <Route path="/" element = {<Landing/>} />
        <Route path="/login" element = {<Login />} />
        <Route path="/actors" element = {<Actors />} />
        <Route path="/actors/:id" element = {<Actor />} />  
      </Routes>
    </Router>
    );
}

// Acts Route, Acts By Id, Contact Route, Login, Registration
export default WebRouter;








