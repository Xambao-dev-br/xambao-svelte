import crypto from 'crypto'
import { supabase } from '$lib/supabase.server';
import { Resend } from 'resend';
import { RESEND_API_KEY } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import type {RequestEvent} from '@sveltejs/kit';
const resend = new Resend(RESEND_API_KEY)
export const actions = {
    'default': async function ({ request}: RequestEvent) {
        const form = await request.formData()
        const token = crypto.randomUUID()
        const expiresAt = new Date(Date.now() + 1000 * 60 * 30)
        const email = form.get('email') as string;
        const { data: emaildb } = await supabase.from('User').select('email').eq('email', email).single();
        if (!emaildb) {
            return fail(400, { message: "email nao existe" })
        }
        await supabase.from('PasswordReset').insert({
            email: email,
            token: token,
            expires_at: expiresAt
        })
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Reinvindicar senha',
            html: `<a href="http://localhost:5175/reiniciar?token=${token}">Redefinir Senha</a>`
        })
    }
}