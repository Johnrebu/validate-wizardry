
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut, User } from 'lucide-react';

const Navigation = () => {
  const { user, signOut } = useAuth();
  
  return (
    <nav className="bg-white bg-opacity-90 backdrop-blur-sm shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
          ColorForm
        </Link>
        
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <div className="flex items-center">
                <User className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-gray-700">{user.email}</span>
              </div>
              <Button variant="outline" size="sm" onClick={signOut} className="flex items-center">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </>
          ) : (
            <Link to="/auth">
              <Button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:opacity-90">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
