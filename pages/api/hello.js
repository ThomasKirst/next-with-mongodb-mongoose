import { NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default function handler(request) {
  return NextResponse.json({ text: 'Hello' });
}
