import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  FaBuilding,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(),
  topic: z.string({ required_error: 'Please select a topic.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactUs = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      topic: '',
      message: '',
    },
  });

  const [topicValue, setTopicValue] = React.useState("");

  // Add an effect to handle the topic value
  useEffect(() => {
    form.watch((data) => {
      if (data.topic) {
        setTopicValue(data.topic as string);
      }
    });
  }, [form]);

  const onSubmit = (data: FormValues) => {
    // Prevent the default form handling - we'll let the native HTML form submission work
    console.log("Form data:", data);
    
    // Netlify will handle the form submission through the native HTML form submit
    // No need for fetch() - just let the form do its job
    
    // If you want to do something after submission, you can add a redirect or other logic
    // in your netlify.toml file or in the Netlify dashboard
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Aaryati Technologies</title>
        <meta name="description" content="Get in touch with our team for any questions about our Mulesoft to Spring Boot conversion services or to request a demo." />
      </Helmet>
      
      <section className="pt-16 pb-24 relative overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950 z-0"></div>
        <div className="absolute -top-64 -left-64 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-64 -right-64 w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Have questions about our Mulesoft to Spring Boot conversion platform? We're here to help.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Contact Information */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-slate-900/80 backdrop-blur-sm border border-accent/20 rounded-xl p-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full p-3 text-primary">
                      <FaMapMarkerAlt className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Office Location</h3>
                      <p className="text-gray-400 mt-1">
                        Kharadi, Pune<br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full p-3 text-primary">
                      <FaEnvelope className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Email Us</h3>
                      <p className="text-gray-400 mt-1">
                        <a href="mailto:contact@aaryati.com" className="hover:text-primary transition-colors">
                          contact@aaryati.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full p-3 text-primary">
                      <FaPhone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Call Us</h3>
                      <p className="text-gray-400 mt-1">
                        <a href="tel:020-79667193" className="hover:text-primary transition-colors">
                          020-79667193
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full p-3 text-primary">
                      <FaBuilding className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Working Hours</h3>
                      <p className="text-gray-400 mt-1">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-accent/20">
                  <h3 className="text-white font-medium mb-4">Connect With Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="#linkedin"
                      className="bg-slate-800 hover:bg-primary/20 transition-colors p-3 rounded-full text-gray-400 hover:text-primary"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#twitter"
                      className="bg-slate-800 hover:bg-primary/20 transition-colors p-3 rounded-full text-gray-400 hover:text-primary"
                    >
                      <SiX className="w-5 h-5" />
                    </a>
                    <a
                      href="#github"
                      className="bg-slate-800 hover:bg-primary/20 transition-colors p-3 rounded-full text-gray-400 hover:text-primary"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-slate-900/80 backdrop-blur-sm border border-accent/20 rounded-xl p-8">
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                
                <Form {...form}>
                  <form 
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={(e) => {
                      e.preventDefault();
                      form.handleSubmit((data) => {
                        console.log("Form submitted:", data);
                        
                        // Create a traditional form element from scratch for submission
                        const formElement = document.createElement('form');
                        
                        // Set the form's attributes
                        formElement.method = 'POST';
                        formElement.action = '/'; // Submit to current page
                        formElement.setAttribute('data-netlify', 'true');
                        formElement.style.display = 'none'; // Hide the form
                        
                        // Add required Netlify input
                        let formHTML = `<input type="hidden" name="form-name" value="contact" />`;
                        
                        // Add all validated form fields as hidden inputs
                        Object.entries(data).forEach(([key, value]) => {
                          // Safely escape the value to prevent XSS
                          const safeValue = value?.toString()
                            .replace(/&/g, '&amp;')
                            .replace(/</g, '&lt;')
                            .replace(/>/g, '&gt;')
                            .replace(/"/g, '&quot;')
                            .replace(/'/g, '&#039;') || '';
                            
                          formHTML += `<input type="hidden" name="${key}" value="${safeValue}" />`;
                        });
                        
                        formElement.innerHTML = formHTML;
                        
                        // Add to the document, submit the form, then clean up
                        document.body.append(formElement);
                        
                        try {
                          formElement.submit();
                          
                          // Show success message on a short delay to let Netlify process
                          setTimeout(() => {
                            alert('Thank you for your message! We will get back to you shortly.');
                            form.reset();
                          }, 500);
                        } catch (error) {
                          console.error('Form submission error:', error);
                          alert('Oops! There was a problem submitting your form. Please try again.');
                        } finally {
                          // Clean up the form element
                          setTimeout(() => {
                            if (document.body.contains(formElement)) {
                              document.body.removeChild(formElement);
                            }
                          }, 1000);
                        }
                      })(e);
                    }}
                    className="space-y-6"
                  >
                    {/* Hidden fields for Netlify form handling */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div style={{ display: 'none' }}>
                      <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                      </label>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input
                                className="bg-slate-800/50 border-accent/30 focus:border-primary/70"
                                {...field}
                                name="name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input
                                className="bg-slate-800/50 border-accent/30 focus:border-primary/70"
                                {...field}
                                name="email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company (Optional)</FormLabel>
                            <FormControl>
                              <Input
                                className="bg-slate-800/50 border-accent/30 focus:border-primary/70"
                                {...field}
                                name="company"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="topic"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Topic</FormLabel>
                            <Select 
                              onValueChange={(value) => {
                                field.onChange(value);
                                setTopicValue(value);
                              }} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="bg-slate-800/50 border-accent/30 focus:border-primary/70">
                                  <SelectValue placeholder="Select a topic" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-slate-800 border-accent/30">
                                <SelectItem value="general">General Inquiry</SelectItem>
                                <SelectItem value="demo">Request a Demo</SelectItem>
                                <SelectItem value="support">Technical Support</SelectItem>
                                <SelectItem value="pricing">Pricing Information</SelectItem>
                                <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                              </SelectContent>
                            </Select>
                            {/* Hidden input to capture the selected value for Netlify */}
                            <input type="hidden" name="topic" value={topicValue} />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              className="min-h-[150px] bg-slate-800/50 border-accent/30 focus:border-primary/70"
                              {...field}
                              name="message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="pt-2">
                      <Button 
                        type="submit" 
                        className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white"
                        size="lg"
                      >
                        Submit Message
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
          
          {/* Map Section */}
          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-xl overflow-hidden border border-accent/20"
            >
              <div className="bg-slate-800 text-center py-12 px-4">
                <div className="max-w-md mx-auto">
                  <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                  <p className="text-gray-400 mb-4">
                    Our headquarters is located in the heart of India.
                  </p>
                  <div className="inline-flex items-center text-primary">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>Kharadi, Pune, Maharashtra, IN</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;