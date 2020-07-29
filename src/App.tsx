import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import AppRoutes from './routes'
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <AppRoutes />
    </div>
  );
}

export default App;
