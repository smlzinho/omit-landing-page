import { NextRequest, NextResponse } from 'next/server';
import { sendFacebookEvent } from '@/lib/facebook';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { eventName, customData } = body;

        const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
        const userAgent = req.headers.get('user-agent') || '';

        const userData = {
            ip,
            userAgent,
        };

        const result = await sendFacebookEvent(eventName, userData, customData);

        return NextResponse.json({ success: true, result });
    } catch (error: any) {
        console.error('CAPI Route Error:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
