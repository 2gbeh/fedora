import { GetServerSideProps } from 'next';
import { PATH } from '@/constants/PATH';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: PATH.login,
      permanent: false,
    },
  };
};

export default function LoginPage() {
  return null;
}