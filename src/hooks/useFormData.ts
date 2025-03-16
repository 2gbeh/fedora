import {useState} from 'react';
// SHARED IMPORTS
import {PROTOTYPING} from '@/constants/PROTOTYPING';
import {sleep} from '@/utils/sleep';

const P = PROTOTYPING.auth;

type FormDataType = {
  emailOrUsername: string;
  password: string;
};

const initialFormData = {
  emailOrUsername: '',
  password: '',
};

const mockFormData = {
  emailOrUsername: '2gbeh',
  password: 'password',
};

export function useFormData() {
  const [formData, setFormData] = useState<FormDataType>(
    P.formData ? mockFormData : initialFormData,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  // ACTIONS
  const resetFormData = () => setFormData(initialFormData);

  const mutateFormData = (name: keyof FormDataType, value: string) =>
    setFormData(prev => ({...prev, [name]: value}));

  const handleSubmit = async () => {
    setIsSubmitting(true);
    if (P.action) {
      await sleep();
    }
    resetFormData();
    setIsSubmitting(false);
  };

  return {formData, mutateFormData, handleSubmit, isSubmitting};
}
