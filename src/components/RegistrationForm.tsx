
import React from 'react';
import { useReduxForm } from '../hooks/useReduxForm';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const RegistrationForm: React.FC = () => {
  const { formData, handleChange, handleSubmit, handleReset } = useReduxForm();

  const gradientBg = "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500";
  const inputClasses = "border-2 border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200";
  const labelClasses = "text-indigo-700 font-medium";
  const errorClasses = "text-red-500 text-sm mt-1";
  
  return (
    <div className="max-w-md mx-auto p-8 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">Create Your Account</h2>
      
      {formData.isSubmitted ? (
        <div className="text-center bg-green-50 p-6 rounded-lg border-2 border-green-200">
          <div className="mb-4 text-green-600 text-xl font-bold">Registration Successful!</div>
          <p className="mb-4 text-indigo-700">Thank you for registering, {formData.firstName}!</p>
          <button
            onClick={handleReset}
            className={`px-6 py-3 ${gradientBg} text-white rounded-lg hover:opacity-90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1`}
          >
            Register Another User
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <Label htmlFor="firstName" className={`block ${labelClasses}`}>First Name</Label>
            <Input
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              className={`w-full ${inputClasses} ${formData.errors.firstName ? 'border-red-500' : ''}`}
              placeholder="Enter your first name"
            />
            {formData.errors.firstName && (
              <p className={errorClasses}>{formData.errors.firstName}</p>
            )}
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <Label htmlFor="lastName" className={`block ${labelClasses}`}>Last Name</Label>
            <Input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              className={`w-full ${inputClasses} ${formData.errors.lastName ? 'border-red-500' : ''}`}
              placeholder="Enter your last name"
            />
            {formData.errors.lastName && (
              <p className={errorClasses}>{formData.errors.lastName}</p>
            )}
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <Label htmlFor="email" className={`block ${labelClasses}`}>Email Address</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`w-full ${inputClasses} ${formData.errors.email ? 'border-red-500' : ''}`}
              placeholder="Enter your email"
            />
            {formData.errors.email && (
              <p className={errorClasses}>{formData.errors.email}</p>
            )}
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <Label htmlFor="password" className={`block ${labelClasses}`}>Password</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              className={`w-full ${inputClasses} ${formData.errors.password ? 'border-red-500' : ''}`}
              placeholder="Create a password"
            />
            {formData.errors.password && (
              <p className={errorClasses}>{formData.errors.password}</p>
            )}
          </div>

          <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
            <Label htmlFor="confirmPassword" className={`block ${labelClasses}`}>Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => handleChange('confirmPassword', e.target.value)}
              className={`w-full ${inputClasses} ${formData.errors.confirmPassword ? 'border-red-500' : ''}`}
              placeholder="Confirm your password"
            />
            {formData.errors.confirmPassword && (
              <p className={errorClasses}>{formData.errors.confirmPassword}</p>
            )}
          </div>

          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
            <Label htmlFor="dateOfBirth" className={`block ${labelClasses}`}>Date of Birth</Label>
            <div className={`border rounded-md ${formData.errors.dateOfBirth ? 'border-red-500' : inputClasses}`}>
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
              <p className={errorClasses}>{formData.errors.dateOfBirth}</p>
            )}
          </div>

          <div className="flex justify-between mt-8 pt-4 border-t-2 border-indigo-100">
            <button
              type="button"
              onClick={handleReset}
              className="px-5 py-2 bg-gradient-to-r from-gray-400 to-gray-500 text-white rounded-lg hover:opacity-90 transition-all shadow-md"
            >
              Reset
            </button>
            <button
              type="submit"
              className={`px-5 py-2 ${gradientBg} text-white rounded-lg hover:opacity-90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1`}
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
