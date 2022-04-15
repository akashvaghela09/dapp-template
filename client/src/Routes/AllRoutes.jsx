import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Dashboard } from "./Dashboard";
import { PageNotFound } from "./PageNotFound";

const AllRoutes = () => {
    return (
        <div className="bg-green-400 h-full">
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/dashboard" element={<Dashboard />}/>
            <Route exact path="*" element={<PageNotFound />}/>
        </Routes>
        </div>
    )
}

export { AllRoutes }