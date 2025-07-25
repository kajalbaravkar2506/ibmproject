
import React from 'react';
import { Helmet } from 'react-helmet';

const ToysPage = () => {
  return (
    <>
      <Helmet>
        <title>Developmental Toys - BabyCare Buddy</title>
        <meta name="description" content="Find the best age-appropriate and developmental toys for your child." />
      </Helmet>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Toys & Development</h1>
        <p className="text-lg text-gray-600">Content for the Toys page will be here. Stay tuned!</p>
      </div>
    </>
  );
};

export default ToysPage;
  