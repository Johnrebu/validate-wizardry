
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import RegistrationForm from '../components/RegistrationForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <Provider store={store}>
          <RegistrationForm />
        </Provider>
      </div>
    </div>
  );
};

export default Index;
