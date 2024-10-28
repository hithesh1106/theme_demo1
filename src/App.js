import React, { useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState("Hithesh");

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const themeStyles = {
    Hithesh: {
      backgroundColor: "blue",
      text: "Hi ,this is Hithesh. Welcome to theme.",
    },
    Shafeek: {
      backgroundColor: "grey",
      text: "Hi ,this is  Shafeek. Welcome to theme.",
    },
  };

  return (
    <div className="App">
      <h1>Theme Change</h1>

      {/* Theme options */}
      <div style={{ marginBottom: "20px" }}>
        <span style={{ fontSize: "18px", fontWeight: "bold" }}>Theme: </span>
        <select value={theme} onChange={handleThemeChange}>
          <option value="Hithesh">Hithesh</option>
          <option value="Shafeek">Shafeek</option>
        </select>
      </div>

      {/* Box that changes with theme */}
      <div
        style={{
          padding: "30px",
          color: "#333",
          backgroundColor: themeStyles[theme].backgroundColor,
          borderRadius: "15px",
        }}
      >
        <p style={{ fontSize: "20px" }}>{themeStyles[theme].text}</p>
      </div>
    </div>
  );
}

export default App;
