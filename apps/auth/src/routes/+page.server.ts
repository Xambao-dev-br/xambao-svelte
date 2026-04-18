import { supabase } from "$lib/supabase.server";
import bcrypt from 'bcrypt'
import { redirect } from "@sveltejs/kit";
import { randomUUID } from "crypto";
import { strict } from "assert";
export const actions = {
    'default': async function ({ request, cookies }) {
        const form = await request.formData();
        const userf = form.get('user');
        const passwordf = form.get('password');
        const { data: userData, error } = await supabase.from('User').select('email, password, username').eq('username', userf).single();
        if (error || !userData || !userData.password) {
            return { success: false, message: "Deu errado, dados errados." }
        }



        const isValid = await bcrypt.compare(passwordf as string, userData.password)
        if (isValid) {
            const sessionId = randomUUID();
            const { data, error } = await supabase.from('User').update({ sessionid: sessionId }).eq('username', userf).select()
            console.log(error)
            console.log(data)
            cookies.set('sessionId', sessionId, {
                path: '/',
                httpOnly: true,
                maxAge: 60 * 60 * 24,
                secure: true,
                sameSite: 'strict'
            })

            redirect(303, 'http://localhost:5175/')
        } else {
            return { success: false, message: 'Ta errado dog' }
        }
    }

}

