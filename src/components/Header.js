import React from 'react';

import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <div style={{ width: "100%", textAlign: "center", borderBottom: "1px solid rgb(250, 250, 250)" }}>
      <b className='clickable' onClick={() => {navigate("/")}} style={{ color: "white", fontSize: "2.5rem" }}>STAR WARS PLANETOPEDIA</b>
    </div>
  );
}

export default Header;