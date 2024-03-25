import { isLoggedIn } from '@/utils/auth';
import { useRouter } from 'next/router';
import { ComponentType, useEffect } from 'react';

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const Wrapper = (props: P) => {
    const router = useRouter();

    useEffect(() => {
      // Check if user is not logged in, redirect to login page
      if (!isLoggedIn()) {
        router.push('/login');
      }
    }, []);

    // If user is logged in, render the wrapped component
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
