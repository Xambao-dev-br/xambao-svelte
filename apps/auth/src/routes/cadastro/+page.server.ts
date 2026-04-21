import { supabase } from "$lib/supabase.server";
import { fail } from "@sveltejs/kit";
import bcrypt from 'bcrypt';
import { redirect } from "@sveltejs/kit";
export const actions = {
    'default': async function ({ request, cookies }) {
        const form = await request.formData();
        const username = form.get('username');
        const password = form.get('password') as string;
        const rePassword = form.get('rePassword') as string;
        const email = form.get('email');

        if (password !== rePassword) {
            return fail(400, { message: "As senhas não coincidem" })
        } else {
            const { error } = await supabase.from('User').insert({
                username: username,
                password: await bcrypt.hash(password, 10),
                email: email
            })
            if (error) {
                console.log(error)
                return fail(500, { message: error.message })
            } else {
                redirect(303, '/')
            }
        }
    }
}