import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, service, msg } = await req.json();

    if (!name || !email || !msg) {
      return NextResponse.json(
        { error: 'Please provide all required fields (Name, Email, Message).' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Ant-Codex Studio <onboarding@resend.dev>',
      to: ['contact@antcodex.pro'],
      subject: `New Project Request from ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #c8ff00; background: #000; padding: 10px; border-radius: 5px; display: inline-block;">New Quote Request</h2>
          <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
          <p><strong>Proposed Service:</strong> ${service || 'Not specified'}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #c8ff00;">
            ${msg.replace(/\n/g, '<br />')}
          </div>
          <footer style="margin-top: 20px; font-size: 0.8em; color: #888;">
            Sent from Ant-Codex Web Design Studio
          </footer>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error('API Error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
