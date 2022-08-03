import React from "react";
import { AppContext } from "./AppContext";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router-routes/router";

function App() {
  const appRef = React.createRef<HTMLDivElement>();
  return (
    <div className="app" ref={appRef}>
      <AppContext.Provider value={appRef}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
