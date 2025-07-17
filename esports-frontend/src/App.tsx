import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import EventDetailsPage from './pages/EventDetailsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events/:id" element={<EventDetailsPage />} />
          {/* Add more routes for teams, players, upcoming events here */}
          <Route path="*" element={<NotFoundPage />} /> {/* Catch-all for 404 */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;