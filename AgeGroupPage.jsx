
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";

const PageContent = ({ age }) => {
    const { toast } = useToast();

    const handleGenderFilter = (gender) => {
        toast({
            title: "🚧 Filter Applied (Placeholder)",
            description: `This feature isn't fully implemented. Filtering for ${gender}.`,
        });
    };

    const ageData = {
        newborn: { title: "Newborn (0-3 Months)" },
        infant: { title: "Infant (4-12 Months)" },
        toddler: { title: "Toddler (1-3 Years)" },
        preschooler: { title: "Preschooler (3-5 Years)" },
    };

    const currentAge = ageData[age] || { title: "Age Group" };

    const sections = ["Nutrition", "Essentials", "Toys", "Clothes", "Do's & Don'ts"];

    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{currentAge.title}</h1>
            <p className="text-lg text-gray-600 mb-8">Discover tailored advice and products for your little one.</p>

            <div className="flex items-center justify-between mb-8 p-4 bg-white rounded-lg shadow-sm">
                <div>
                    <span className="font-semibold mr-4">Gender Filter:</span>
                    <Button variant="outline" className="mr-2" onClick={() => handleGenderFilter('Boy')}>Boy</Button>
                    <Button variant="outline" className="mr-2" onClick={() => handleGenderFilter('Girl')}>Girl</Button>
                    <Button variant="outline" onClick={() => handleGenderFilter('Unisex')}>Unisex</Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sections.map(section => (
                    <div key={section} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                        <h2 className="text-2xl font-bold text-pink-500 mb-4">{section}</h2>
                        <p className="text-gray-600 mb-6">Explore {section.toLowerCase()} tips and products for the {age} stage.</p>
                        <Button asChild className="bg-pink-500 hover:bg-pink-600 text-white">
                            <NavLink to={`/${section.toLowerCase().replace(/ & /g, '-and-')}`}>Learn More</NavLink>
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const AgeGroupPage = () => {
    const { age } = useParams();

    return (
        <>
            <Helmet>
                <title>{age ? `${age.charAt(0).toUpperCase() + age.slice(1)}` : 'Age Group'} - BabyCare Buddy</title>
                <meta name="description" content={`Find essentials, nutrition, toys and clothing advice for your ${age}.`} />
            </Helmet>
            <PageContent age={age} />
        </>
    );
};

export default AgeGroupPage;
  