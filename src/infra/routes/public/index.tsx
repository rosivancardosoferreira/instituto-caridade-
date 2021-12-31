import React from "react";
import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

//LAYOUTS
import Header from "presentation/layout/Header";

//PAGES
import Home from "presentation/pages/public/Home";

export default function Public () {
    return(
        <Routes>
            <Route path="/" element={
                <Header>
                    <Home />
                </Header>
            }/>

            <Route
                path="*"
                element={
                    <Navigate to="/"/>
                }
            />
        </Routes>
    )
}