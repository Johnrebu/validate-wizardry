
import React from 'react';
import { useReduxForm } from '../hooks/useReduxForm';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const RegistrationForm: React.FC = () => {
  const { formData, handleChange, handleSubmit, handleReset } = useReduxForm();

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create Your Account</h2>
      
      {formData.isSubmitted ? (
        <div className="text-center">
          <div className="mb-4 text-green-600 text-xl">Registration Successful!</div>
          <p className="mb-4 text-gray-700">Thank you for registering, {formData.firstName}!</p>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
          >
            Register Another User
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="firstName" className="block text-gray-700">First Name</Label>
            <Input
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              className={`w-full ${formData.errors.firstName ? 'border-red-500' : ''}`}
              placeholder="Enter your first name"
            />
            {formData.errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{formData.errors.firstName}</p>
            )}
          </div>

          <div>
            <Label htmlFor="lastName" className="block text-gray-700">Last Name</Label>
            <Input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              className={`w-full ${formData.errors.lastName ? 'border-red-500' : ''}`}
              placeholder="Enter your last name"
            />
            {formData.errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{formData.errors.lastName}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email" className="block text-gray-700">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`w-full ${formData.errors.email ? 'border-red-500' : ''}`}
              placeholder="Enter your email"
            />
            {formData.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formData.errors.email}</p>
            )}
          </div>

          <div>
            <Label htmlFor="password" className="block text-gray-700">Password</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              className={`w-full ${formData.errors.password ? 'border-red-500' : ''}`}
              placeholder="Create a password"
            />
            {formData.errors.password && (
              <p className="text-red-500 text-sm mt-1">{formData.errors.password}</p>
            )}
          </div>

          <div>
            <Label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => handleChange('confirmPassword', e.target.value)}
              className={`w-full ${formData.errors.confirmPassword ? 'border-red-500' : ''}`}
              placeholder="Confirm your password"
            />
            {formData.errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{formData.errors.confirmPassword}</p>
            )}
          </div>

          <div>
            <Label htmlFor="dateOfBirth" className="block text-gray-700">Date of Birth</Label>
            <div className={`border rounded-md ${formData.errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'}`}>
              <DatePicker
                id="dateOfBirth"
                selected={formData.dateOfBirth}
                onChange={(date) => handleChange('dateOfBirth', date)}
                className="w-full px-3 py-2 rounded-md focus:outline-none"
                placeholderText="Select your date of birth"
                showYearDropdown
                dropdownMode="select"
                maxDate={new Date()}
              />
            </div>
            {formData.errors.dateOfBirth && (
              <p className="text-red-500 text-sm mt-1">{formData.errors.dateOfBirth}</p>
            )}
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
            >
              Register
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
