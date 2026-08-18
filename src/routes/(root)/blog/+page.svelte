<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchPosts, type PostSummary } from './script';
	import { resolve } from '$app/paths';
	import { Card } from 'm3-svelte';
	import { goto } from '$app/navigation';
	let x: PostSummary[] = $state([]);

	onMount(async () => {
		x = await fetchPosts();
		x.reverse();
	});
</script>

<main>
	{#each x as post (post.post_id)}
		<Card variant="filled" onclick={() => goto(resolve(`/blog/${post.post_id}/`))}>
			<a href={resolve(`/blog/${post.post_id}/`)} class="postTitle"><h1>{post.post_title}</h1></a>
			<h2 class="description">{post.post_description}</h2>
			<span>escrito por {post.post_author}</span>
		</Card>
	{/each}
</main>

<style>
	* {
		color: var(--m3c-primary);
	}
	main {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 10px;
	}
	h1,
	a {
		margin-bottom: 0;
		text-decoration: none;
	}
	h2 {
		margin-top: 0;
	}
	h1 {
		width: 100%;
	}
	span {
		font-weight: 300;
	}
</style>
