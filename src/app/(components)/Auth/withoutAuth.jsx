"use client"
import { useState, useLayoutEffect } from 'react';
import { redirect } from 'next/navigation';
import Loader from '../loader/Loader';

const withoutAuth = (Component) => {
  const NonAuthenticatedComponent = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {
      const token = typeof window !== 'undefined' ? localStorage.getItem('sianchesToken') : null;
      setIsLoading(false);

      if (token) {
        redirect('/')
      }
    }, []);

    if (isLoading) {
      return <Loader />; // Or display a loading indicator
    }

    return <Component {...props} />;
  };

  NonAuthenticatedComponent.displayName = `withoutAuth(${Component.displayName || Component.name || 'Component'})`;

  return NonAuthenticatedComponent;
};

export default withoutAuth;