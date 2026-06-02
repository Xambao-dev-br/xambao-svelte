<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchPost, type PostFull } from '../script';
	import { page } from '$app/state';
	import { Card } from 'm3-svelte';

	let data: PostFull[] = $state([]);
	let x: PostFull | undefined = $state();

	onMount(async () => {
		data = await fetchPost(page.params.id as string);
		x = data[0];
	});
</script>

{#if x}
	<div class="content">
		<header>
			<Card variant="filled">
				<h1 class="title">{x.post_title}</h1>
				<p class="description">{x.post_description}</p>
				<h2 class="author">Escrito por {x.post_author}</h2>
			</Card>
		</header>
		<main>
			<Card variant="filled">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html x.post_content}
			</Card>
		</main>
	</div>
{/if}

<style>
	* {
		border: 0;
		margin: 0;
		padding: 0;
		text-align: center;
		color: var(--m3c-primary);
	}
	.content {
		display: flex;
		flex-direction: column;
		gap: 4px;
		font-size: 24px;
		@media (width < 840px) {
			font-size: 14px;
		}
	}
	.title {
		font-size: 2rem;
	}
	.description {
		font-size: 1.5rem;
		font-weight: 500;
		margin-bottom: 8px;
	}
	.author {
		font-size: 1rem;
		font-weight: 300;
	}
</style>
