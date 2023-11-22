import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../page';
function App (){
    return(
        <Router>
            <Routes>
                <Route path="/components/contacts/new" element={<Home/>}/>

            </Routes>
        </Router>
    )
}
export default React;