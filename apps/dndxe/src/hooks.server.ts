import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';
import { supabase } from '$lib/supabase.server';
const AUTH_URL = 'http://localhost:5175'

export const handle: Handle = async ({ event, resolve }) => {
    const sessionId = event.cookies.get('sessionId')
    const { data: session } = await supabase.from('User').select('sessionid').eq('sessionid', sessionId)
    if (!session) {
        redirect(303, 'localhost:5174')
    }

    return resolve(event)
}