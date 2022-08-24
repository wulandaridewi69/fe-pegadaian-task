import { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../pages/Detail";
import Homepage from "../pages/App";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/detail/:id" element={<Detail />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router