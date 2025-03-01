
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Navigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2 } from 'lucide-react';

const Auth = () => {
  const { user, signIn, signUp, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [activeTab, setActiveTab] = useState('login');

  // Redirect if user is already logged in
  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    signIn(email, password);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    signUp(email, password, { firstName, lastName });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl bg-white bg-opacity-95 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
            Welcome Back
          </CardTitle>
          <CardDescription>
            Sign in to your account or create a new one
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-indigo-700 font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-2 border-indigo-300 focus:border-indigo-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-indigo-700 font-medium">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-2 border-indigo-300 focus:border-indigo-500"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:opacity-90 transition-all"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="register">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-indigo-700 font-medium">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="border-2 border-indigo-300 focus:border-indigo-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-indigo-700 font-medium">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      className="border-2 border-indigo-300 focus:border-indigo-500"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="registerEmail" className="text-indigo-700 font-medium">Email</Label>
                  <Input
                    id="registerEmail"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-2 border-indigo-300 focus:border-indigo-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="registerPassword" className="text-indigo-700 font-medium">Password</Label>
                  <Input
                    id="registerPassword"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-2 border-indigo-300 focus:border-indigo-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-indigo-700 font-medium">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="border-2 border-indigo-300 focus:border-indigo-500"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:opacity-90 transition-all"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    'Create Account'
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-center text-sm text-gray-600">
          {activeTab === 'login' ? (
            <p>Don't have an account? <span className="text-blue-600 cursor-pointer" onClick={() => setActiveTab('register')}>Register</span></p>
          ) : (
            <p>Already have an account? <span className="text-blue-600 cursor-pointer" onClick={() => setActiveTab('login')}>Login</span></p>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Auth;
