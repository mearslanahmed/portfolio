import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate incoming data
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields (name, email, message) are required." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address format." },
        { status: 400 }
      );
    }

    // Read secure server-side environment key
    const apiKey = process.env.WEB3FORMS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: "Form submission key is not configured on the server." },
        { status: 500 }
      );
    }

    const formData = new FormData();
    formData.append("access_key", apiKey);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("subject", `New message from ${name} via Portfolio`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: data.message || "Failed to submit message." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
