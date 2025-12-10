import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();
    
    // Log the message to console (you can see this in your terminal)
    console.log('📧 New Contact Form Submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Time:', new Date().toLocaleString());
    console.log('-------------------');
    
    // Here you can add email sending logic later
    // For now, we'll just return success
    
    return NextResponse.json({ 
      success: true, 
      message: 'Message received successfully' 
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}