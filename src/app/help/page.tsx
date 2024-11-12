'use client'
import React, { useState } from 'react'
import axios from 'axios'
import Navbar from '@/components/Navbar/Navbar'

const NeedHelp: React.FC = () => {
  const [formData, setFormData] = useState({
    semester: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [responseMessage, setResponseMessage] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResponseMessage('')

    try {
      const response = await axios.post('/api/need-help', formData)
      if (response.status === 200) {
        setResponseMessage('Your request has been submitted successfully!')
      }
    } catch (error) {
      setResponseMessage('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='w-full h-screen bg-gradient-to-r from-[#f4f1e1] via-[#d8c9a3] to-[#bfa77e] animate-gradient'>
      <Navbar />
      <div className="w-full h-screen flex justify-center items-center">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">Request Notes</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="semester" className="block text-lg font-medium">Semester</label>
              <input
                type="text"
                id="semester"
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email address"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-lg font-medium">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              ></textarea>
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md mt-4 hover:bg-blue-600" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>

          {responseMessage && (
            <p className="mt-4 text-center text-lg font-medium">{responseMessage}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default NeedHelp
