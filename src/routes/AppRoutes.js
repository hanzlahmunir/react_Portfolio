import React, { lazy, Suspense, useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { TitleContext } from '../context/TitleContext';

// Lazy load pages
const Home = lazy(() => import('../pages/Home'));
const Education = lazy(() => import('../pages/Education'));
const Projects = lazy(() => import('../pages/Projects'));
const Contact = lazy(() => import('../pages/Contact'));

// Helper to set title using context
const RouteWithTitle = ({ Component, title }) => {
    const { setTitle } = useContext(TitleContext);

    useEffect(() => {
        setTitle(title);
    }, [title, setTitle]);

    return <Component />;
};

const AppRoutes = () => {
    return (
        <Suspense fallback={<div style={{ padding: '20px' }}>Loading...</div>}>
            <Routes>
                <Route path="/" element={<RouteWithTitle Component={Home} title="Home" />} />
                <Route path="/education" element={<RouteWithTitle Component={Education} title="Education" />} />
                <Route path="/projects" element={<RouteWithTitle Component={Projects} title="Projects" />} />
                <Route path="/contact" element={<RouteWithTitle Component={Contact} title="Contact" />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
