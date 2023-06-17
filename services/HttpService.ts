import { toast } from 'react-hot-toast';
import axios, { AxiosError } from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_APP_BASE_URL + '/v0.2';
axios.defaults.headers.common['X-API-KEY'] = process.env.NEXT_PUBLIC_APP_API_KEY;

axios.interceptors.response.use(null, (error: AxiosError) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.error(error);
    toast.error('An unexpected error occurred.');
  }
  const errorMessage = error.message ?? 'An unexpected error occurred.';
  console.error(errorMessage);
  toast.error(
    'There seems to be a problem loading our products, please try again later',
    { duration: 5000 }
  );
  return Promise.reject(error);
});

export const expectedError = (error: AxiosError, statusCode: number) =>
  error.response && error.response.status === statusCode;

export const apiError = (status: string) => status !== 'success';

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  expectedError,
  apiError,
};
