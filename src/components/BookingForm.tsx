'use client';

import React, { useState } from 'react';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { isValidIndianPhone, isNotEmpty } from '@/lib/validation';

const serviceOptions = [
  'Interior & Exterior Detailing',
  'Ceramic Coating',
  'Graphene Coating',
  'Paint Protection Film (PPF)',
  'Sun films / tint',
  'Bike accessories & fitting',
  'Crash guards & bash plates',
  'Not sure (Consultation)',
];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicleType: 'Car',
    makeModel: '',
    service: serviceOptions[0],
    preferredDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!isNotEmpty(formData.name)) {
      newErrors.name = 'Please enter your full name.';
    }

    if (!isNotEmpty(formData.phone)) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (!isValidIndianPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number.';
    }

    if (!isNotEmpty(formData.makeModel)) {
      newErrors.makeModel = 'Please specify vehicle make and model (e.g. Royal Enfield Hunter / Creta).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Format WhatsApp message as clean bulleted text lines
    const lines = [
      'Hi, I’d like to book an appointment with Auto Alchemy:',
      `• Name: ${formData.name.trim()}`,
      `• Phone: ${formData.phone.trim()}`,
      `• Vehicle: ${formData.vehicleType} — ${formData.makeModel.trim()}`,
      `• Requested Service: ${formData.service}`,
    ];

    if (formData.preferredDate) {
      lines.push(`• Preferred Date: ${formData.preferredDate}`);
    }

    if (formData.message.trim()) {
      lines.push(`• Additional Notes: ${formData.message.trim()}`);
    }

    const fullMessage = lines.join('\n');
    const waUrl = getWhatsAppUrl(fullMessage);

    setSubmitted(true);

    // Open WhatsApp in new tab
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-panel border border-line p-6 sm:p-10 rounded-[2px] max-w-2xl mx-auto">
      {submitted && (
        <div
          role="status"
          className="mb-8 p-4 bg-[#14110A] border border-gold text-gold text-[15px] rounded-[2px] leading-[1.6]"
        >
          <strong>Notice:</strong> Opening WhatsApp. Your request isn’t confirmed until the studio replies.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-[14px] uppercase font-semibold text-text mb-2 tracking-[0.05em]">
            Your Name <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            className="w-full h-12 bg-bg border border-line focus:border-gold px-4 text-text text-[15px] rounded-[2px] outline-none transition-colors"
          />
          {errors.name && <p className="text-red text-[13px] mt-1.5">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-[14px] uppercase font-semibold text-text mb-2 tracking-[0.05em]">
            Phone Number (10 digits) <span className="text-gold">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 9876543210"
            className="w-full h-12 bg-bg border border-line focus:border-gold px-4 text-text text-[15px] rounded-[2px] outline-none transition-colors"
          />
          {errors.phone && <p className="text-red text-[13px] mt-1.5">{errors.phone}</p>}
        </div>

        {/* Vehicle Type Radio Group */}
        <div>
          <span className="block text-[14px] uppercase font-semibold text-text mb-2 tracking-[0.05em]">
            Vehicle Type <span className="text-gold">*</span>
          </span>
          <div className="flex gap-6 mt-1">
            <label className="flex items-center gap-2.5 cursor-pointer text-[15px] text-text">
              <input
                type="radio"
                name="vehicleType"
                value="Car"
                checked={formData.vehicleType === 'Car'}
                onChange={handleChange}
                className="accent-gold w-4 h-4 cursor-pointer"
              />
              Car
            </label>
            <label className="flex items-center gap-2.5 cursor-pointer text-[15px] text-text">
              <input
                type="radio"
                name="vehicleType"
                value="Bike"
                checked={formData.vehicleType === 'Bike'}
                onChange={handleChange}
                className="accent-gold w-4 h-4 cursor-pointer"
              />
              Bike / Motorcycle
            </label>
          </div>
        </div>

        {/* Make and Model */}
        <div>
          <label htmlFor="makeModel" className="block text-[14px] uppercase font-semibold text-text mb-2 tracking-[0.05em]">
            Make & Model <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            id="makeModel"
            name="makeModel"
            value={formData.makeModel}
            onChange={handleChange}
            placeholder="e.g. Royal Enfield Hunter 350 or Hyundai Creta"
            className="w-full h-12 bg-bg border border-line focus:border-gold px-4 text-text text-[15px] rounded-[2px] outline-none transition-colors"
          />
          {errors.makeModel && <p className="text-red text-[13px] mt-1.5">{errors.makeModel}</p>}
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="block text-[14px] uppercase font-semibold text-text mb-2 tracking-[0.05em]">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full h-12 bg-bg border border-line focus:border-gold px-4 text-text text-[15px] rounded-[2px] outline-none cursor-pointer transition-colors"
          >
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-panel text-text">
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Preferred Date */}
        <div>
          <label htmlFor="preferredDate" className="block text-[14px] uppercase font-semibold text-text mb-2 tracking-[0.05em]">
            Preferred Date (Optional)
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            className="w-full h-12 bg-bg border border-line focus:border-gold px-4 text-text text-[15px] rounded-[2px] outline-none transition-colors"
          />
        </div>

        {/* Additional Message */}
        <div>
          <label htmlFor="message" className="block text-[14px] uppercase font-semibold text-text mb-2 tracking-[0.05em]">
            Additional Notes / Questions (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Mention any specific paint issues, fitting requirements, or questions..."
            className="w-full bg-bg border border-line focus:border-gold p-4 text-text text-[15px] rounded-[2px] outline-none transition-colors"
          />
        </div>

        <button
          type="submit"
          className="btn btn-gold w-full text-[15px] font-semibold mt-4"
        >
          Send Request via WhatsApp
        </button>

        <p className="text-muted text-[13px] text-center mt-3 m-0">
          This form formats your enquiry and opens WhatsApp directly to chat with the studio. No data is stored on external servers.
        </p>
      </form>
    </div>
  );
}

