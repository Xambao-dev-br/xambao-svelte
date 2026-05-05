import bcrypt from 'bcrypt'
import { supabase } from '$lib/supabase.server';
import { fail } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types.js';
import type {RequestEvent} from '@sveltejs/kit';
export const load: PageServerLoad = async ({ url }) => {
    const token = url.searchParams.get('token')
    return { token }
}

export const actions = {
    'default': async function ({ request }: RequestEvent) {
        const form = await request.formData();
        const pass = form.get('pass') as string;
        const token = form.get('token')
        const rePass = form.get('rePass') as string
        if (pass !== rePass) {
            return fail(400, { message: "Senhas não coincidem." })
        }
        const { data } = await supabase.from('PasswordReset').select().eq('token', token).single()
        if (!data || new Date(data.expires_at) < new Date()) {
            return fail(400, { message: 'Token inválido ou expirado' })
        }
        console.log(token)
        const hashedPass = await bcrypt.hash(pass, 10) as string;
        const email = await supabase.from('User').update({ 'password': hashedPass }).eq('email', data.email).select()
        const tok = await supabase.from('PasswordReset').delete().eq('token', token)
        console.log(token)
        console.log(email)
        console.log(tok)
    }
}