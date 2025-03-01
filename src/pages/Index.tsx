
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import RegistrationForm from '../components/RegistrationForm';
import { useAuth } from '@/context/AuthContext';

const Index = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-white mb-2 drop-shadow-lg">Welcome, {user?.email}!</h1>
          <p className="text-white text-opacity-90">Please fill out the form below to register</p>
        </div>
        <Provider store={store}>
          <RegistrationForm />
        </Provider>
      </div>
    </div>
  );
};

export default Index;
