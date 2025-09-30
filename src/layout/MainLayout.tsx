import React from 'react';
import { Outlet } from "react-router";
import './MainLayout.css';
import Footer from '../components/footer';
import Header from '../components/Header';

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="MainContent">
        <Outlet />
      </main>
      <Footer />      
    </>
  );
}
