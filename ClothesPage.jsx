
import React from 'react';
import { Helmet } from 'react-helmet';

const ClothesPage = () => {
  return (
    <>
      <Helmet>
        <title>Baby Clothes Guide - BabyCare Buddy</title>
        <meta name="description" content="Seasonal guides, size charts, and material information for baby clothes." />
      </Helmet>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Baby Clothes</h1>
        <p className="text-lg text-gray-600">Content for the Clothes page will be here. Stay tuned!</p>
      </div>
    </>
  );
};

export default ClothesPage;
  