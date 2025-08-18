'use client'

import { useState } from 'react'
import { FileText, Mail, MessageSquare, Phone, Send, User, CheckCircle, AlertCircle } from 'lucide-react'
import { apiService } from '@/lib/apiService'
import PhoneInput from 'react-phone-input-2';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.phoneNumber.trim()) {
      setSubmitStatus('error');
      setStatusMessage('Phone number is required.');
      return;
    }
    
    if (!formData.message.trim()) {
      setSubmitStatus('error');
      setStatusMessage('Message is required.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    const contactData = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      phoneNumber: formData.phoneNumber,
    };

    try {
      const result = await apiService.submitContactForm(contactData);

      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage(result.message || 'Message sent successfully! We\'ll get back to you soon.');
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error: any) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
      setStatusMessage(error.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-50 to-transparent rounded-full -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-emerald-50 to-transparent rounded-full -ml-12 -mb-12"></div>
      
      {/* Header */}
      <div className="relative z-10 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-primary from-secondary to-primary rounded-lg flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Get In Touch</h3>
        </div>
        <p className="text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      <div className="relative z-10 space-y-6">
        {/* Status Message */}
        {submitStatus !== 'idle' && (
          <div className={`p-4 rounded-xl flex items-center gap-3 ${
            submitStatus === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {submitStatus === 'success' ? (
              <CheckCircle className="h-5 w-5 flex-shrink-0" />
            ) : (
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
            )}
            <span className="text-sm font-medium">{statusMessage}</span>
          </div>
        )}

        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-cyan-500 transition-colors" />
              <input
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-300 bg-gray-50 focus:bg-white placeholder-gray-400"
              />
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-cyan-500 transition-colors" />
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-300 bg-gray-50 focus:bg-white placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Phone and Subject Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <PhoneInput
  country={'us'}
  value={formData.phoneNumber}
  onChange={(phone) =>
    setFormData({ ...formData, phoneNumber: phone })
  }
  placeholder="+1 (555) 000-0000"
  inputStyle={{
    width: '100%',
    height: '56px', // same as py-4 roughly
    border: '2px solid #e5e7eb', // border-gray-200
    borderRadius: '0.75rem', // rounded-xl
    paddingLeft: '3rem', // space for icon if you add it
    backgroundColor: '#f9fafb', // bg-gray-50
    fontSize: '1rem',
  }}
  containerStyle={{
    width: '100%',
  }}
/>

          </div>

          <div className="group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Subject <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-cyan-500 transition-colors" />
              <input
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this regarding?"
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-300 bg-gray-50 focus:bg-white placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Message Field */}
        <div className="group">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400 group-focus-within:text-cyan-500 transition-colors" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your inquiry..."
              rows={3}
              required
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-300 bg-gray-50 focus:bg-white placeholder-gray-400 resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full md:w-auto px-8 py-4 bg-primary from-secondary to-primary text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 focus:ring-4 focus:ring-cyan-500/25 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            <span className="flex items-center justify-center gap-3">
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </>
              )}
            </span>
          </button>
        </div>

        {/* Additional Info */}
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>We typically respond within 24 hours</span>
          </div>
        </div>
      </div>
    </div>
    </form>
  )
} 