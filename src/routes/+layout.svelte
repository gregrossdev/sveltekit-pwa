<script>
	import '../styles/global.scss';
	import { onMount } from 'svelte';
	// @ts-ignore
	import { pwaInfo } from 'virtual:pwa-info';

	/**
	 * @type {typeof import("$lib/ReloadPrompt.svelte").default}
	 */
	let ReloadPrompt;

	onMount(async () => {
		if (pwaInfo) {
			// @ts-ignore
			const { registerSW } = await import('virtual:pwa-register');
			registerSW({
				immediate: true,
				/**
				 * @param {any} r
				 */
				onRegistered(r) {
					console.log(`SW Registered: ${r}`);
				},
				/**
				 * @param {any} error
				 */
				onRegisterError(error) {
					console.log('SW registration error', error);
				}
			});
		}
	});

	onMount(async () => {
		pwaInfo && (ReloadPrompt = (await import('$lib/ReloadPrompt.svelte')).default);
	});

	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : '';
</script>

<svelte:head>
	{@html webManifest}
</svelte:head>

<div class="container mx-auto max-w-prose p-4 font-comic">
	<nav class="rounded-lg mb-4">
		<a class="normal-case text-xl pr-4" href="/">Home</a>
	</nav>

	<main class="bg-primary-content">
		<slot />
	</main>
</div>

{#if ReloadPrompt}
	<svelte:component this={ReloadPrompt} />
{/if}
