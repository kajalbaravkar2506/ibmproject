
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "📧 Message Sent!",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleLiveChat = () => {
    toast({
      title: "💬 Live Chat",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - BabyCare Buddy</title>
        <meta name="description" content="Get in touch with BabyCare Buddy for expert advice, support, and answers to your baby care questions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-400 to-purple-500 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <MessageCircle className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-4">
                Get in Touch
              </h1>
              <p className="text-xl max-w-3xl mx-auto opacity-90">
                We're here to support you on your parenting journey. Reach out with questions, concerns, or just to say hello!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How Can We Help?
              </h2>
              <p className="text-xl text-gray-600">
                Choose the best way to reach us
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Mail,
                  title: "Email Support",
                  description: "Get detailed answers to your questions",
                  contact: "support@babycarebuddy.com",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Phone,
                  title: "Phone Support",
                  description: "Speak directly with our experts",
                  contact: "1-800-BABY-CARE",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: MessageCircle,
                  title: "Live Chat",
                  description: "Instant help when you need it",
                  contact: "Available 24/7",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  description: "Come see us in person",
                  contact: "123 Baby Street, Care City",
                  color: "from-orange-500 to-red-500"
                }
              ].map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 text-center card-hover"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.color} rounded-full mb-6`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="text-sm font-medium text-gray-800">{method.contact}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-white/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Send className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Question</option>
                    <option value="nutrition">Nutrition Advice</option>
                    <option value="safety">Safety Concerns</option>
                    <option value="development">Development Questions</option>
                    <option value="products">Product Recommendations</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                  <Button
                    type="button"
                    onClick={handleLiveChat}
                    variant="outline"
                    size="lg"
                    className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-full"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Start Live Chat
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
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
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "How quickly will I receive a response?",
                  answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please use our live chat feature."
                },
                {
                  question: "Do you provide medical advice?",
                  answer: "We provide general parenting guidance and information. For medical concerns, always consult with your pediatrician or healthcare provider."
                },
                {
                  question: "Is your advice suitable for all babies?",
                  answer: "Our guidance is general in nature. Every baby is unique, so always consider your child's individual needs and consult professionals when needed."
                },
                {
                  question: "Can I request specific topics to be covered?",
                  answer: "Absolutely! We love hearing from parents about what topics would be most helpful. Send us your suggestions anytime."
                },
                {
                  question: "Do you offer phone consultations?",
                  answer: "We offer phone support for general questions. For detailed consultations, we recommend scheduling with a pediatric professional."
                },
                {
                  question: "How can I stay updated with new content?",
                  answer: "Subscribe to our newsletter and follow us on social media for the latest tips, guides, and updates from BabyCare Buddy."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Office Hours */}
        <section className="py-16 bg-white/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Clock className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Support Hours
              </h2>
              <p className="text-xl text-gray-600">
                When you can reach us
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Email & Phone Support</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Monday - Friday:</strong> 8:00 AM - 8:00 PM EST</p>
                    <p><strong>Saturday:</strong> 9:00 AM - 5:00 PM EST</p>
                    <p><strong>Sunday:</strong> 10:00 AM - 4:00 PM EST</p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Chat</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Available 24/7</strong></p>
                    <p>Instant responses during business hours</p>
                    <p>Automated assistance after hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
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
                We're Here for You
              </h2>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
                Parenting is a journey, and you don't have to do it alone. Our team of experts and fellow parents are here to support you every step of the way.
              </p>
              <Button
                onClick={handleLiveChat}
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Chatting Now
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
