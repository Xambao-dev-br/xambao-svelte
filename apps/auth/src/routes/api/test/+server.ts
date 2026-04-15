import { supabase } from '$lib/supabase'
import { json } from '@sveltejs/kit'

export async function GET() {
    const { data, error } = await supabase
        .from('User')
        
        .select('*')

    if (error) return json({ error })
    return json(data)
}