
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { 
  updateField, 
  setError, 
  clearError, 
  setIsSubmitted, 
  resetForm 
} from '../redux/formSlice';

export const useReduxForm = () => {
  const formData = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  const handleChange = (field: string, value: any) => {
    dispatch(updateField({ field, value }));
    dispatch(clearError(field as any));
  };

  const validateForm = () => {
    let isValid = true;

    // First Name validation
    if (!formData.firstName.trim()) {
      dispatch(setError({ field: 'firstName', message: 'First name is required' }));
      isValid = false;
    } else if (formData.firstName.length > 50) {
      dispatch(setError({ field: 'firstName', message: 'First name must be less than 50 characters' }));
      isValid = false;
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      dispatch(setError({ field: 'lastName', message: 'Last name is required' }));
      isValid = false;
    } else if (formData.lastName.length > 50) {
      dispatch(setError({ field: 'lastName', message: 'Last name must be less than 50 characters' }));
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      dispatch(setError({ field: 'email', message: 'Email is required' }));
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      dispatch(setError({ field: 'email', message: 'Please enter a valid email address' }));
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      dispatch(setError({ field: 'password', message: 'Password is required' }));
      isValid = false;
    } else if (formData.password.length < 8) {
      dispatch(setError({ field: 'password', message: 'Password must be at least 8 characters' }));
      isValid = false;
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      dispatch(setError({ field: 'confirmPassword', message: 'Please confirm your password' }));
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      dispatch(setError({ field: 'confirmPassword', message: 'Passwords do not match' }));
      isValid = false;
    }

    // Date of Birth validation
    if (!formData.dateOfBirth) {
      dispatch(setError({ field: 'dateOfBirth', message: 'Date of birth is required' }));
      isValid = false;
    } else {
      const today = new Date();
      const birthDate = new Date(formData.dateOfBirth);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      
      if (age < 18) {
        dispatch(setError({ field: 'dateOfBirth', message: 'You must be 18 years or older' }));
        isValid = false;
      }
    }

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateForm();
    
    if (isValid) {
      dispatch(setIsSubmitted(true));
      console.log('Form submitted successfully:', formData);
      // Here you would typically send the data to a backend
    }
  };

  const handleReset = () => {
    dispatch(resetForm());
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    handleReset,
    validateForm,
  };
};
