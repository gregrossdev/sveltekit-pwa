<script>
	import Loading from '$lib/Loading.svelte';
	import { fade } from 'svelte/transition';

	let isLoading = true;
</script>

<section transition:fade>
	<Loading {isLoading} />
	<h3>Loading...</h3>
</section>

<style lang="scss">
	section {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: var(--padding);
		& h3 {
			font-size: var(--fs-h3);
			color: rgb(var(--color));
		}
	}
</style>
