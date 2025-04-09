
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const team = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      bio: "Automotive industry veteran with 15+ years of experience in parts identification and supply chain management.",
      image: "photo-1581092795360-fd1ca04f0952"
    },
    {
      name: "Michael Chen",
      position: "Chief Technology Officer",
      bio: "Software engineer with expertise in AI and machine learning applications for part recognition systems.",
      image: "photo-1506744038136-46273834b3fb"
    },
    {
      name: "Robert Williams",
      position: "Head of Operations",
      bio: "Supply chain expert ensuring seamless delivery of auto parts to customers worldwide.",
      image: "photo-1460925895917-afdab827c52f"
    },
    {
      name: "Emily Rodriguez",
      position: "Customer Success Director",
      bio: "Dedicated to providing exceptional customer service and technical support to our valued clients.",
      image: "photo-1519389950473-47ba0277781c"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://source.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="About us banner" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-autoparts-blue/90 to-autoparts-blue/70"></div>
            </div>
            <div className="relative px-6 py-16 md:py-24 md:px-12">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">About AutoPartsFinder</h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-6">
                We're on a mission to simplify the process of identifying and finding the right auto parts 
                through innovative technology and exceptional customer service.
              </p>
              <Button asChild size="lg" className="bg-white text-autoparts-blue hover:bg-gray-100">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="mb-4">
                Founded in 2015, AutoPartsFinder began with a simple idea: make it easier for people to identify 
                and find the right auto parts for their vehicles. Our founder, Sarah Johnson, experienced 
                firsthand the frustration of trying to identify and source the correct parts for her classic car restoration project.
              </p>
              <p className="mb-4">
                What started as a small database of parts identification resources has grown into a comprehensive 
                platform powered by advanced AI technology that can recognize thousands of auto parts from images 
                and connect users with the right replacement parts quickly and accurately.
              </p>
              <p>
                Today, we serve millions of car owners, mechanics, and automotive enthusiasts worldwide, 
                helping them save time and money by quickly identifying the exact parts they need.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://source.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Our company history" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              At AutoPartsFinder, we're driven by a simple mission: make finding the right auto parts as easy as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="h-16 w-16 rounded-full bg-autoparts-blue/10 text-autoparts-blue flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Innovation</h3>
                <p className="text-gray-600 text-center">
                  We continuously develop cutting-edge technology to improve part identification accuracy and user experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="h-16 w-16 rounded-full bg-autoparts-blue/10 text-autoparts-blue flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Customer First</h3>
                <p className="text-gray-600 text-center">
                  We put our customers at the center of everything we do, ensuring they have the best possible experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="h-16 w-16 rounded-full bg-autoparts-blue/10 text-autoparts-blue flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Quality & Accuracy</h3>
                <p className="text-gray-600 text-center">
                  We are committed to providing accurate part identification and high-quality replacement options.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Our diverse team of automotive experts, engineers, and customer service specialists 
              are united by a passion for simplifying auto parts identification and procurement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index}>
                <div className="h-64 overflow-hidden">
                  <img 
                    src={`https://source.unsplash.com/${member.image}`} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-autoparts-blue mb-2">{member.position}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16 bg-autoparts-blue text-white rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5M+</div>
              <p>Parts Identified</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">250K+</div>
              <p>Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <p>Identification Accuracy</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p>Customer Support</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section>
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Have Questions or Need Assistance?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team of automotive experts is ready to help you with part identification, 
              compatibility questions, or any other inquiries.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="bg-autoparts-blue hover:bg-autoparts-lightblue">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/faq">View FAQ</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
