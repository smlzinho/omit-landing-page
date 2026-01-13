export const sendFacebookEvent = async (eventName: string, userData: any, customData: any = {}) => {
    const PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
    const ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN;

    if (!PIXEL_ID || !ACCESS_TOKEN) {
        console.error('Facebook Pixel ID or Access Token missing');
        return;
    }

    const url = `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

    const payload = {
        data: [
            {
                event_name: eventName,
                event_time: Math.floor(Date.now() / 1000),
                action_source: 'website',
                user_data: {
                    client_ip_address: userData.ip,
                    client_user_agent: userData.userAgent,
                    ...userData.additionalData,
                },
                custom_data: customData,
            },
        ],
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error sending Facebook CAPI event:', error);
        throw error;
    }
};

export const trackFBEvent = (eventName: string, customData: any = {}) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', eventName, customData);
    }

    fetch('/api/facebook/capi', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            eventName,
            customData,
        }),
    }).catch(err => console.error('Error sending CAPI event:', err));
};
