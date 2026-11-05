import React from 'react';
import ProductInformation from './pages/ProductInformation';
import './styles/global.css';
import './styles/components.css';
import './styles/responsive.css';

export function App() {
  return (
    <div className="app-container">
      <ProductInformation />
    </div>
  );
}

export default App;
