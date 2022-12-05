import React from "react";

const Header = () => {
  const headerStyle = {
    padding: "20px 0",
  };

  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: "600",
          lineHeight: "1em",
          color: "darkcyan",
          textTransform: "lowercase",
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        groceries
      </h1>
    </header>
  );
};

export default Header;
