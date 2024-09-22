import axios from "axios";
import { NextResponse } from "next/server";

export async function OPTIONS() {
  const response = NextResponse.json({});
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return response;
}

export async function POST(request) {
  const reqBody = await request.json();
  const secret_key = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;

  try {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${reqBody.token}`;
    const res = await axios.post(url);
    
    const response = res.data.success
      ? { message: "Captcha verification success!!", success: true }
      : { error: "Captcha verification failed!", success: false };

    const nextResponse = NextResponse.json(response);
    nextResponse.headers.set('Access-Control-Allow-Origin', '*');
    nextResponse.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    nextResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type');

    return nextResponse;
  } catch (error) {
    const nextResponse = NextResponse.json({
      error: "Captcha verification failed!",
      success: false,
    }, { status: 500 });
    
    nextResponse.headers.set('Access-Control-Allow-Origin', '*');
    return nextResponse;
  }
}
