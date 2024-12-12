
import { Routes, Route } from 'react-router-dom';
import RegisterForm from './LoginFrom/FromOne'; // Correct path to RegisterForm
import DataShowPage from './LoginFrom/DataShowPage';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RegisterForm />} /> {/* Render RegisterForm at '/' */}
        <Route path="/DataShowPage" element={<DataShowPage />} />
      </Routes>
    </div>
  );
}
