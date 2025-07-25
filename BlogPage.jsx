
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, User, ArrowRight, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const BlogPage = () => {
  const { toast } = useToast();

  const handleReadMore = () => {
    toast({
      title: "📖 Read Full Article",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const blogPosts = [
    {
      id: 1,
      title: "10 Mistakes New Parents Make (And How to Avoid Them)",
      excerpt: "Starting your parenting journey? Learn from common mistakes and set yourself up for success with these expert tips.",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "New Parents",
      image: "New parents learning baby care techniques",
      featured: true
    },
    {
      id: 2,
      title: "Choosing the Right Formula: A Complete Guide",
      excerpt: "Navigate the world of baby formula with confidence. Our comprehensive guide covers everything from ingredients to preparation.",
      author: "Lisa Chen, RN",
      date: "March 12, 2024",
      readTime: "12 min read",
      category: "Nutrition",
      image: "Baby bottles with different types of formula",
      featured: true
    },
    {
      id: 3,
      title: "How to Transition to Solid Foods Successfully",
      excerpt: "Make the leap from milk to solids with ease. Step-by-step guidance for introducing your baby to their first foods.",
      author: "Dr. Michael Rodriguez",
      date: "March 10, 2024",
      readTime: "10 min read",
      category: "Nutrition",
      image: "Baby eating first solid foods in high chair",
      featured: true
    },
    {
      id: 4,
      title: "Sleep Training Methods That Actually Work",
      excerpt: "Discover gentle, effective sleep training techniques that help both baby and parents get the rest they need.",
      author: "Emma Thompson, Sleep Consultant",
      date: "March 8, 2024",
      readTime: "15 min read",
      category: "Sleep",
      image: "Peaceful baby sleeping in crib",
      featured: false
    },
    {
      id: 5,
      title: "Baby-Proofing Your Home: Room by Room Guide",
      excerpt: "Create a safe environment for your curious crawler with our comprehensive baby-proofing checklist.",
      author: "Safety Expert Team",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Safety",
      image: "Baby-proofed living room with safety gates",
      featured: false
    },
    {
      id: 6,
      title: "Understanding Your Baby's Developmental Milestones",
      excerpt: "Track your baby's growth and development with our month-by-month milestone guide and know when to celebrate.",
      author: "Dr. Amanda Foster",
      date: "March 3, 2024",
      readTime: "11 min read",
      category: "Development",
      image: "Baby reaching developmental milestones",
      featured: false
    },
    {
      id: 7,
      title: "Postpartum Recovery: Taking Care of Mom Too",
      excerpt: "Self-care isn't selfish. Learn how to prioritize your physical and mental health during the postpartum period.",
      author: "Dr. Jennifer Walsh",
      date: "March 1, 2024",
      readTime: "9 min read",
      category: "Mom Care",
      image: "New mother practicing self-care and recovery",
      featured: false
    },
    {
      id: 8,
      title: "Building Strong Bonds: Activities for You and Baby",
      excerpt: "Strengthen your connection with simple, meaningful activities that promote bonding and development.",
      author: "Child Development Team",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Bonding",
      image: "Parent and baby bonding through play activities",
      featured: false
    },
    {
      id: 9,
      title: "Managing Colic: Soothing Techniques That Help",
      excerpt: "When your baby won't stop crying, try these proven techniques to provide comfort and relief for both of you.",
      author: "Dr. Robert Kim",
      date: "February 25, 2024",
      readTime: "8 min read",
      category: "Health",
      image: "Parent comforting crying baby with gentle techniques",
      featured: false
    }
  ];

  const categories = [
    { name: "All", count: blogPosts.length },
    { name: "New Parents", count: 1 },
    { name: "Nutrition", count: 2 },
    { name: "Sleep", count: 1 },
    { name: "Safety", count: 1 },
    { name: "Development", count: 1 },
    { name: "Mom Care", count: 1 },
    { name: "Bonding", count: 1 },
    { name: "Health", count: 1 }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Parenting Blog - Expert Tips & Advice | BabyCare Buddy</title>
        <meta name="description" content="Read expert parenting advice, baby care tips, and helpful guides from pediatricians and child development specialists." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-400 to-purple-500 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <BookOpen className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-4">
                Parenting Blog
              </h1>
              <p className="text-xl max-w-3xl mx-auto opacity-90">
                Expert advice, practical tips, and heartfelt stories to support you on your parenting journey
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => toast({
                    title: `📂 ${category.name} Category`,
                    description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
                  })}
                  className="px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all text-gray-700 hover:text-purple-600 border border-gray-200 hover:border-purple-300"
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <Star className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-600">
                Our most popular and helpful parenting guides
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
                >
                  <div className="relative">
                    <img  alt={post.title} className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Button 
                      onClick={handleReadMore}
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Regular Posts */}
        <section className="py-16 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-600">
                Fresh insights and tips for modern parents
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
                >
                  <div className="relative">
                    <img  alt={post.title} className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Button 
                      onClick={handleReadMore}
                      variant="outline"
                      className="w-full border-purple-300 text-purple-600 hover:bg-purple-50"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Heart className="h-16 w-16 mx-auto text-white" />
              <h2 className="text-4xl font-bold text-white mb-4">
                Never Miss an Article
              </h2>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest parenting tips, expert advice, and helpful guides delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
                />
                <Button
                  onClick={() => toast({
                    title: "📧 Newsletter Subscription",
                    description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
                  })}
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold"
                >
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Popular Topics
              </h2>
              <p className="text-xl text-gray-600">
                Explore our most searched parenting topics
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "Sleep Training",
                "Breastfeeding",
                "Baby Food",
                "Potty Training",
                "Teething",
                "Growth Charts",
                "Vaccinations",
                "Childproofing",
                "Tantrums",
                "Screen Time",
                "Discipline",
                "Milestones"
              ].map((topic, index) => (
                <motion.button
                  key={topic}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => toast({
                    title: `🔍 ${topic} Articles`,
                    description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
                  })}
                  className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all text-center card-hover"
                >
                  <p className="text-gray-800 font-medium text-sm">{topic}</p>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;
