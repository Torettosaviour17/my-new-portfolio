import emailjs from '@emailjs/browser'

// Vite uses import.meta.env instead of process.env
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

interface FormDetails {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

interface SendEmailResult {
  success: boolean
  message: string
}

// Changing 'data' to 'formDetails' cleans up the linter instantly!
const sendEmail = async (formDetails: FormDetails): Promise<SendEmailResult> => {
  const templateParams = {
    name: `${formDetails.firstName} ${formDetails.lastName}`.trim(),
    email: formDetails.email,
    phone: formDetails.phone,
    message: formDetails.message,
  }

  try {
    const result = await emailjs.send(serviceId, templateId, templateParams, publicKey)
    console.log('✅ Email sent:', result.status)
    return { success: true, message: 'Message sent successfully!' }
  } catch (error) {
    console.error('❌ EmailJS ERROR:', error)
    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
    }
  }
}

export default sendEmail
