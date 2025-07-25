
import React from 'react';
import { Helmet } from 'react-helmet';

const NutritionPage = () => {
  return (
    <>
      <Helmet>
        <title>Nutrition Guide - BabyCare Buddy</title>
        <meta name="description" content="A comprehensive nutrition guide for babies and toddlers at every stage." />
      </Helmet>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Nutrition Guide</h1>
        <p className="text-lg text-gray-600">Content for the Nutrition page will be here. Stay tuned!</p>
      </div>
    </>
  );
};

export default NutritionPage;
  