import { Button } from 'react-bootstrap';

import useLanguage from '@/hooks/useLanguage';

function Navbar() {
  const CONSTANTS = useLanguage();
  console.log(CONSTANTS);
  return (
    <div>
      <Button>{CONSTANTS.LOGIN}</Button>
      <Button>{CONSTANTS.REGISTER}</Button>
    </div>
  );
}

export default Navbar;
