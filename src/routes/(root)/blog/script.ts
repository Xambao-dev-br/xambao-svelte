export interface PostSummary {
	post_id: number;
	post_title: string;
	post_author: string;
	post_description: string;
}

export interface PostFull {
	post_id: number;
	post_title: string;
	post_author: string;
	post_description: string;
	post_language: string;
	post_content: string;
}

export async function fetchPosts(): Promise<PostSummary[]> {
	const response = await fetch(
		`https://xaqddwwrtgewblconrdw.supabase.co/rest/v1/blog-posts?select=post_id,post_title,post_author,post_description`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer sb_publishable_OJ-Cwu967wmlX12hzvWdHA_5bA-pUzL',
				apikey: 'sb_publishable_OJ-Cwu967wmlX12hzvWdHA_5bA-pUzL'
			}
		}
	);
	return response.json();
}

export async function fetchPost(id: string): Promise<PostFull[]> {
	const response = await fetch(
		`https://xaqddwwrtgewblconrdw.supabase.co/rest/v1/blog-posts?select=post_id,post_title,post_author,post_description,post_language,post_content&post_id=eq.${id}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer sb_publishable_OJ-Cwu967wmlX12hzvWdHA_5bA-pUzL',
				apikey: 'sb_publishable_OJ-Cwu967wmlX12hzvWdHA_5bA-pUzL'
			}
		}
	);
	return response.json();
}
