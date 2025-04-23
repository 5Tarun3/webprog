import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Q1App from './Q1';
import Q2App from './Q2';
import Q3App from './Q3';
import Q4App from './Q4';
import Q5App from './Q5';
import Q6App from './Q6';
import Q7App from './Q7';
import Q8App from './Q8';
import Q9App from './Q9';
import Q10App from './Q10';
import Q11App from './Q11';
import Q12App from './Q12';

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ padding: '1rem', backgroundColor: '#282c34' }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', margin: 0, padding: 0 }}>
            {[...Array(12)].map((_, i) => {
              const qNum = i + 1;
              return (
                <li key={qNum} style={{ marginRight: '1rem' }}>
                  <Link to={`/q${qNum}`} style={{ color: 'white', textDecoration: 'none' }}>
                    Q{qNum}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div style={{ padding: '1rem' }}>
          <Routes>
            <Route path="/q1" element={<Q1App />} />
            <Route path="/q2" element={<Q2App />} />
            <Route path="/q3" element={<Q3App />} />
            <Route path="/q4" element={<Q4App />} />
            <Route path="/q5" element={<Q5App />} />
            <Route path="/q6" element={<Q6App />} />
            <Route path="/q7" element={<Q7App />} />
            <Route path="/q8" element={<Q8App />} />
            <Route path="/q9" element={<Q9App />} />
            <Route path="/q10" element={<Q10App />} />
            <Route path="/q11" element={<Q11App />} />
            <Route path="/q12" element={<Q12App />} />
            <Route path="*" element={<div>Select a question from above.</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
