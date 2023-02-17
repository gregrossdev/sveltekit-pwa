<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	onMount(async () => {
		(await import('../webkit/btn-anim.js')).default;
	});
</script>

<svelte:head>
	<title>Linux</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section in:fly={{ y: 200, duration: 2000 }} out:fade>
	<div class="container">
		<h1 class="h1 container__title">Linux</h1>
	</div>
	<hr class="separator" />
	<div class="container">
		<p class="container__text fs-body">
			In short, it is an operating system like Windows or Mac, but it has a differential, as it is
			free source code, it allows modification for different uses, examples: Servers, Common
			operating systems for PCs and smartphones, it is also present in Smart TV, Refrigerators even
			in camera and gate systems, linux is the base of a system, that is, it is a kernel that makes
			it possible to add several drivers to adapt to any possible Hadrware.
		</p>
	</div>
	<div class="container">
		<h3 class="h3 container__subtitle">Main uses of the system</h3>
	</div>
	<div class="container responsive">
		<div class="card ubuntu-image wk-anim-btn">
			<div class="overlay">
				<h3 class="h3">Ubuntu Desktop</h3>
				<a class="fs-body" href="https://ubuntu.com/" target="_blank" rel="noreferrer">
					Visit page
					<i class="fa-solid fa-link" />
				</a>
			</div>
		</div>
		<div class="card redhat-image wk-anim-btn">
			<div class="overlay">
				<h3 class="h3">Red Hat Servers</h3>
				<a class="fs-body" href="https://www.redhat.com/" target="_blank" rel="noreferrer">
					Visit page
					<i class="fa-solid fa-link" />
				</a>
			</div>
		</div>
		<div class="card android-image wk-anim-btn">
			<div class="overlay">
				<h3 class="h3">Android Systems</h3>
				<a class="fs-body" href="https://www.android.com/" target="_blank" rel="noreferrer">
					Visit page
					<i class="fa-solid fa-link" />
				</a>
			</div>
		</div>
	</div>
	<div class="container">
		<h3 class="h3 container__subtitle">Why is it important to learn Linux?</h3>
	</div>
	<div class="container">
		<p class="container__text fs-body">
			Knowing linux is a differential in the job market, but just having knowledge of a simple "ls"
			or "cd" has become trivial in the linux world, currently companies are looking for
			professionals who really know how to use linux, that is, have experience with problems that
			only a linux user knows, but linux is a somewhat complicated system, especially for those who
			come from simple systems like Windows or even Mac, thinking about it some companies have been
			developing linux distributions a little simpler and more intuitive for some time so that users
			do not have Such a strong impression at first.
		</p>
	</div>
	<div class="container">
		<h3 class="h3 container__subtitle">More simplified linux systems for PCs</h3>
	</div>
	<div class="container responsive">
		<div class="card ubuntu-image wk-anim-btn">
			<div class="overlay">
				<h3 class="h3">Ubuntu Desktop</h3>
				<a class="fs-body" href="https://ubuntu.com/" target="_blank" rel="noreferrer">
					Visit page
					<i class="fa-solid fa-link" />
				</a>
			</div>
		</div>
		<div class="card zorin-image wk-anim-btn">
			<div class="overlay">
				<h3 class="h3">Zorin OS</h3>
				<a class="fs-body" href="https://zorin.com/" target="_blank" rel="noreferrer">
					Visit page
					<i class="fa-solid fa-link" />
				</a>
			</div>
		</div>
		<div class="card manjaro-image wk-anim-btn">
			<div class="overlay">
				<h3 class="h3">Majaro Games</h3>
				<a class="fs-body" href="https://manjaro.org/" target="_blank" rel="noreferrer">
					Visit page
					<i class="fa-solid fa-link" />
				</a>
			</div>
		</div>
	</div>
	<footer class="footer">
		<a
			class="footer__container youtube"
			href="https://www.youtube.com/@idevecore"
			target="_blank"
			rel="noreferrer"
		>
			<i class="fa-brands fa-youtube" />
			<h4 class="h4">Youtube</h4>
		</a>
		<div class="footer__container logo">
			<h3 class="h3">Ideve Core</h3>
			<svg
				width="100"
				height="100"
				viewBox="0 0 50 50"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect width="50" height="50" rx="25" fill="#FFD603" />
				<path
					d="M25 13V38M25 13H20M25 13H30M25 38H30M25 38H20"
					stroke="black"
					stroke-width="4"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
		<a
			class="footer__container github"
			href="https://github.com/idevecore"
			target="_blank"
			rel="noreferrer"
		>
			<i class="fa-brands fa-github" />
			<h4 class="h4">Git Hub</h4>
		</a>
	</footer>
</section>

<style lang="scss">
	section {
		width: 100%;
		height: 100%;
		display: block;
		overflow-y: auto;
		&::-webkit-scrollbar {
			width: 0.5em;
			border-radius: var(--border-radius);
			background-color: rgb(230, 230, 230);
		}
		&::-webkit-scrollbar-thumb {
			width: 0.5em;
			border-radius: var(--border-radius);
			background-color: rgb(100, 100, 100);
		}
	}
	.container {
		width: 60%;
		height: max-content;
		align-self: center;
		padding: var(--padding);
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--margin);
		margin: auto;
		&__title,
		&__subtitle {
			text-align: center;
			margin: auto;
		}
		@media (max-width: 600px) {
			justify-content: flex-start;
			width: 100%;
			overflow: auto;
		}
		& .card {
			width: 100%;
			max-width: 250px;
			min-width: 100px;
			height: 300px;
			border-radius: var(--border-radius);
			padding: var(--padding);
			transition: border-radius linear 200ms, box-shadow linear 200ms;
			position: relative;
			overflow: hidden;
			/* ANIMATED BUTTON VARIABLES */
			--wk-bsw-default: none;
			--wk-bsw-after: 0px 10px 15px -3px rgba(var(--box-shadow-color), 0.7);
			--wk-brd-radius-default: var(--brd-radius);
			--wk-brd-radius-after: 0.2em;
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			@media (max-width: 600px) {
				min-width: 300px;
			}
			&.ubuntu-image {
				background-image: url(../lib/images/ubuntu-image.png);
			}
			&.redhat-image {
				background-image: url(../lib/images/redhat-image.jpeg);
			}
			&.android-image {
				background-image: url(../lib/images/android-image.jpeg);
			}
			&.manjaro-image {
				background-image: url(../lib/images/manjaro-image.jpeg);
			}
			&.zorin-image {
				background-image: url(../lib/images/zorin-image.jpeg);
			}
			& .overlay {
				pointer-events: none;
				position: absolute;
				opacity: 0;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background-color: rgba(0, 0, 0, 0.7);
				display: flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				flex-direction: column;
				gap: var(--padding);
				transition: opacity linear 200ms;
				padding: var(--padding);
				& .h3 {
					color: rgb(255, 255, 255) !important;
				}
			}
			&:hover {
				& .overlay {
					pointer-events: all;
					opacity: 1;
				}
			}
		}
	}
	.footer {
		width: 100%;
		height: 250px;
		background-color: rgb(0, 0, 0);
		display: flex;
		align-items: center;
		justify-content: center;
		border-top-left-radius: var(--border-radius);
		border-top-right-radius: var(--border-radius);
		color: rgb(255, 255, 255) !important;
		margin-top: var(--margin);
		&__container {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			text-align: center;
			justify-content: center;
			flex-direction: column;
			gap: calc(var(--padding) + 2em);
			& i {
				font-size: var(--fs-h3);
			}
			& .h3,
			& .h4 {
				color: rgb(255, 255, 255) !important;
			}
			&.youtube,
			&.github {
				gap: var(--padding);
				color: rgb(255, 255, 255) !important;
				text-decoration: none;
			}
		}
	}
</style>
