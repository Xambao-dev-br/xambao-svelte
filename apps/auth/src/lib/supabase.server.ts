import { createSupabaseClient } from '@xambao/database'
import { SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } from '$env/static/private'
export const supabase = createSupabaseClient(
    SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY
)