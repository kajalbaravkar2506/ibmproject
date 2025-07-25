
import React from 'react';
import { Helmet } from 'react-helmet';

const EssentialsPage = () => {
  return (
    <>
      <Helmet>
        <title>Baby Essentials - BabyCare Buddy</title>
        <meta name="description" content="Discover must-have baby essentials, from diapers and wipes to strollers and car seats." />
      </Helmet>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Baby Essentials</h1>
        <p className="text-lg text-gray-600">Content for the Essentials page will be here. Stay tuned!</p>
      </div>
    </>
  );
};

export default EssentialsPage;
  