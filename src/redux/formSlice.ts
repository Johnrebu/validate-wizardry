
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: Date | null;
  errors: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    dateOfBirth: string;
  };
  isSubmitted: boolean;
}

const initialState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  dateOfBirth: null,
  errors: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
  },
  isSubmitted: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{ field: keyof FormState; value: any }>
    ) => {
      const { field, value } = action.payload;
      if (field in state && field !== 'errors' && field !== 'isSubmitted') {
        (state as any)[field] = value;
      }
    },
    setError: (
      state,
      action: PayloadAction<{ field: keyof FormState['errors']; message: string }>
    ) => {
      const { field, message } = action.payload;
      state.errors[field] = message;
    },
    clearError: (state, action: PayloadAction<keyof FormState['errors']>) => {
      state.errors[action.payload] = '';
    },
    setIsSubmitted: (state, action: PayloadAction<boolean>) => {
      state.isSubmitted = action.payload;
    },
    resetForm: (state) => {
      return initialState;
    },
  },
});

export const { updateField, setError, clearError, setIsSubmitted, resetForm } = formSlice.actions;
export default formSlice.reducer;
