import React from 'react';
import { Button } from 'react-bootstrap';
import useLanguage from '@/hooks/useLanguage';

function HomePage() {
  const dicti = useLanguage();
  console.log(dicti);
  return (
    <div>
      <Button>test</Button>
      <div>Welcome to Nextsss.jas!</div>
    </div>
  );
}

export default HomePage;
