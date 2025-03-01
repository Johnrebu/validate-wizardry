
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import RegistrationForm from '../components/RegistrationForm';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';

const Index = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<{ first_name?: string, last_name?: string } | null>(null);
  
  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        const { data, error } = await supabase
          .from('profiles')
          .select('first_name, last_name')
          .eq('id', user.id)
          .maybeSingle();
        
        if (!error && data) {
          setProfile(data);
        }
      }
    };
    
    fetchProfile();
  }, [user]);
  
  const displayName = profile ? 
    (profile.first_name || user?.email?.split('@')[0]) : 
    (user?.email?.split('@')[0] || 'Guest');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-white mb-2 drop-shadow-lg">
            Welcome, {displayName}!
          </h1>
          <p className="text-white text-opacity-90">
            {user ? 'Your account is ready' : 'Please fill out the form below to register'}
          </p>
        </div>
        <Provider store={store}>
          <RegistrationForm />
        </Provider>
      </div>
    </div>
  );
};

export default Index;
