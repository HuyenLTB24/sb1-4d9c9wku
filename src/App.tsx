import React from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { useAuthStore } from './store/authStore';

function App() {
  const { isLoggedIn } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-50">
      {isLoggedIn ? (
        <Layout>
          <Dashboard />
        </Layout>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;