import React, { useEffect } from 'react';

export default function Home(): JSX.Element {
  useEffect(() => {
    window.location.replace('/docs');
  }, []);

  return <div />;
}
