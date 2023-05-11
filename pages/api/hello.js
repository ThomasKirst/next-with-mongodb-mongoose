import { NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  // Add a delay of 2000ms to the response
  const delay = 20000;

  // Return a response with a delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(NextResponse.json({ text: 'Hello' }));
    }, delay);
  });
}
