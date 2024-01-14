import React from "react";

const Navbar = ({ filteritem, menulist }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menulist.map((curElem) => (
            <button key={curElem} className="btn-item" onClick={() => filteritem(curElem)}>
              {curElem}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
