<script>
	import '../styles/global.scss';
	import { onMount } from 'svelte';
	// @ts-ignore
	import { pwaInfo } from 'virtual:pwa-info';
	import LoadingPage from '$lib/Loading_page.svelte';

	/**
	 * @type {typeof import("$lib/ReloadPrompt.svelte").default}
	 */
	let ReloadPrompt;
	let loading_page = true;

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
					// uncomment following code if you want check for updates
					// r && setInterval(() => {
					//    console.log('Checking for sw update')
					//    r.update()
					// }, 20000 /* 20s for testing purposes */)
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
		loading_page = false;
	});

	onMount(async () => {
		pwaInfo && (ReloadPrompt = (await import('$lib/ReloadPrompt.svelte')).default);
	});

	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : '';
</script>

<svelte:head>
	{@html webManifest}
</svelte:head>

{#if ReloadPrompt}
	<svelte:component this={ReloadPrompt} />
{/if}

{#if loading_page}
	<LoadingPage />
{/if}
{#if !loading_page}
	<slot />
{/if}
