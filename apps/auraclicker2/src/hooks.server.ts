import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';
import { supabase } from '$lib/supabase.server';
const AUTH_URL = 'http://localhost:5176'

export const handle: Handle = async ({ event, resolve }) => {
    const sessionId = event.cookies.get('sessionId')
    const { data: session } = await supabase.from('User').select('sId').eq('username', 'Lilo')
    console.log(session)
    if (session) {
        redirect(303, AUTH_URL)
    }

    return resolve(event)
}