// auth-app/src/hooks.server.ts
import { redirect, type Handle } from '@sveltejs/kit';
import { supabase } from '$lib/supabase.server';
const HOME_URL = 'http://localhost:5173'

export const handle: Handle = async ({ event, resolve }) => {
    const sessionId = event.cookies.get('sessionId')
    const { data: session } = await supabase.from('User').select('sessionid').eq('sessionid', sessionId)

    if (session) {
        redirect(303, 'localhost:5173')
    }

    return resolve(event)
}

/*import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';
import { supabase } from '$lib/supabase.server';
const AUTH_URL = 'http://localhost:5176'

export const handle: Handle = async ({ event, resolve }) => {
    const sessionId = event.cookies.get('sessionId')
    const { data: session } = await supabase.from('User').select('sId').eq('sId', sessionId)
    if (!session) {
        redirect(303, AUTH_URL)
    }
    console.log(session)
    return resolve(event)
}*/ 