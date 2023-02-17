<script>
	import { fade, fly } from 'svelte/transition';
	export let data;
	const {api} = data;
	const {date, title, content} = api
</script>

<svelte:head>
	<title>Linux</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


<article class="prose" in:fly={{ y: 200, duration: 2000 }} out:fade>
    <h2>{date.slice(5)}</h2>
    <h3>{title}</h3>
    <section>{@html content}</section>
</article>