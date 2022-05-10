import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/navbar/Navbar';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Button variant="primary">test</Button>
      <div>Welcome to Nextsss.jas!</div>
    </div>
  );
}

export default HomePage;
