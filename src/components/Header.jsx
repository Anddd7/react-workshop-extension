import React from 'react';

const Header = ({ unmarkedCount }) => (
  <div>
    <h3>共有 <strong>{unmarkedCount}</strong> 件待办</h3>
  </div>
)

export default Header;