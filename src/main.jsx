import React from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import styled from 'styled-components';

    const Home = () => (
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    );

    const Header = styled.header`
      background: darkblue;
      color: white;
      padding: 1rem;
    `;

    const MainContent = () => (
      <main style={{ minHeight: '80vh', padding: '2rem' }}>
        <h1>Welcome to Increasion</h1>
        <p>Discover ConqianMP and our other games.</p>
      </main>
    );

    const Footer = styled.footer`
      background: #333;
      color: gold;
      text-align: center;
      padding: 1rem;
      position: absolute;
      bottom: 0;
      width: 100%;
    `;

    const App = () => (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    );

    ReactDOM.render(<App />, document.getElementById('root'));
