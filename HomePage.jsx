
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";

const HomePage = () => {
  const { toast } = useToast();

  const handleExpertClick = () => {
    toast({
      title: "🚧 Feature in Progress",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const ageGroups = [
    { name: 'Newborn', range: '0-3 months', link: '/age-groups/newborn' },
    { name: 'Infant', range: '4-12 months', link: '/age-groups/infant' },
    { name: 'Toddler', range: '1-3 years', link: '/age-groups/toddler' },
    { name: 'Preschooler', range: '3-5 years', link: '/age-groups/preschooler' },
  ];

  return (
    <>
      <Helmet>
        <title>BabyCare Buddy - Personalized Care for Every Tiny Step</title>
        <meta name="description" content="Your one-stop guide for baby care, from nutrition and essentials to toys and clothes. Get expert advice for every stage of your child's growth." />
      </Helmet>
      <div className="bg-pink-50">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-pink-100 to-rose-100">
             <div className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-10" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4"
                >
                    Personalized Care for <span className="text-pink-500">Every Tiny Step</span>
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8"
                >
                    Your trusted companion in the beautiful journey of parenthood.
                </motion.p>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="flex justify-center space-x-4"
                >
                    <Button asChild size="lg" className="bg-pink-500 hover:bg-pink-600 text-white shadow-lg">
                        <NavLink to="/age-groups/newborn">Explore by Age</NavLink>
                    </Button>
                    <Button size="lg" variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white" onClick={handleExpertClick}>
                        Ask a Paediatric Expert
                    </Button>
                </motion.div>
            </div>
        </section>

        <section className="py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Select an Age Group</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {ageGroups.map((group, index) => (
                        <motion.div
                            key={group.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'}}
                            className="bg-white rounded-xl shadow-md p-6 text-center"
                        >
                            <NavLink to={group.link} className="block">
                                <h3 className="text-2xl font-semibold text-pink-500">{group.name}</h3>
                                <p className="text-gray-500 mt-1">{group.range}</p>
                            </NavLink>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
  