// Email service that sends requests to Vercel serverless function
// In production, this will use the same domain
// In development, we need to use the full URL
const API_URL = process.env.NODE_ENV === 'production' 
  ? '/api/send-email' 
  : 'http://localhost:3000/api/send-email';

export const sendContactEmail = async ({ name, email, message }) => {
  console.log('Sending email via Vercel API:', { name, email, messageLength: message?.length || 0 });
  
  try {
    if (!name || !email || !message) {
      throw new Error('All fields are required');
    }

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    console.log('Server response status:', response.status);
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Server error response:', errorData);
      throw new Error(errorData.error || `Server error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Email sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Error in sendContactEmail:', error);
    throw error;
  }
};
