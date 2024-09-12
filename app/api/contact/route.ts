import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // Here you would typically save the data to a database.
  // Example: await saveToDatabase({ name, email, message });

  console.log('Form Data Received:', { name, email, message });

  return NextResponse.json({ message: 'Form submitted successfully!' });
}
