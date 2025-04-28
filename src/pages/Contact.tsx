
import { useState } from 'react';
import Layout from '../components/Layout';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const location = useLocation();
  const { toast } = useToast();
  const searchParams = new URLSearchParams(location.search);
  const isDemo = searchParams.get('demo') === 'true';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: isDemo ? 'Book a Demo Class' : '',
    message: isDemo ? 'I would like to book a free demo class.' : '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };
  
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-vmr-blue">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="mb-4">Contact Us</h1>
            <div className="w-24 h-1 bg-vmr-cyan mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-300 text-lg">
              Have questions about our programs? Ready to start your journey?
              Get in touch with us today!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-vmr-blue/40 border border-vmr-cyan/20 p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <ContactInfo 
                    icon={<MapPin size={24} />}
                    title="Our Location"
                    content="123 Tech Park, Silicon Valley, CA 94043"
                  />
                  <ContactInfo 
                    icon={<Phone size={24} />}
                    title="Phone Number"
                    content="+1 (555) 123-4567"
                    link="tel:+15551234567"
                  />
                  <ContactInfo 
                    icon={<Mail size={24} />}
                    title="Email Address"
                    content="info@vmrinfotech.com"
                    link="mailto:info@vmrinfotech.com"
                  />
                  <ContactInfo 
                    icon={<Clock size={24} />}
                    title="Working Hours"
                    content="Monday - Friday: 9AM - 6PM"
                  />
                </div>
              </div>
              
              <div className="bg-vmr-blue/40 border border-vmr-cyan/20 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
                <div className="flex space-x-4">
                  <SocialLink href="https://facebook.com" label="Facebook" />
                  <SocialLink href="https://instagram.com" label="Instagram" />
                  <SocialLink href="https://linkedin.com" label="LinkedIn" />
                  <SocialLink href="https://twitter.com" label="Twitter" />
                </div>
              </div>
            </div>
            
            <div className="bg-vmr-blue/40 border border-vmr-cyan/20 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">
                {isDemo ? 'Book a Free Demo Class' : 'Send Us a Message'}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-vmr-blue/70 border border-vmr-cyan/30 rounded-md focus:outline-none focus:ring-2 focus:ring-vmr-cyan/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium">
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-vmr-blue/70 border border-vmr-cyan/30 rounded-md focus:outline-none focus:ring-2 focus:ring-vmr-cyan/50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-vmr-blue/70 border border-vmr-cyan/30 rounded-md focus:outline-none focus:ring-2 focus:ring-vmr-cyan/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-vmr-blue/70 border border-vmr-cyan/30 rounded-md focus:outline-none focus:ring-2 focus:ring-vmr-cyan/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-vmr-blue/70 border border-vmr-cyan/30 rounded-md focus:outline-none focus:ring-2 focus:ring-vmr-cyan/50 resize-none"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        {isDemo ? 'Book Demo Class' : 'Send Message'}
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const ContactInfo = ({ 
  icon, 
  title, 
  content,
  link
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string;
  link?: string;
}) => (
  <div className="flex items-start">
    <div className="bg-vmr-cyan/10 p-3 rounded-full mr-4">
      <div className="text-vmr-cyan">{icon}</div>
    </div>
    <div>
      <h3 className="font-bold mb-1">{title}</h3>
      {link ? (
        <a href={link} className="text-gray-300 hover:text-vmr-cyan transition-colors">
          {content}
        </a>
      ) : (
        <p className="text-gray-300">{content}</p>
      )}
    </div>
  </div>
);

const SocialLink = ({ href, label }: { href: string; label: string }) => (
  <a 
    href={href}
    className="bg-vmr-blue/80 hover:bg-vmr-cyan/20 text-vmr-cyan p-3 rounded-full transition-colors"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
  >
    <div className="w-6 h-6 flex items-center justify-center">
      {label === 'Facebook' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>}
      {label === 'Instagram' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>}
      {label === 'LinkedIn' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>}
      {label === 'Twitter' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>}
    </div>
  </a>
);

export default Contact;
