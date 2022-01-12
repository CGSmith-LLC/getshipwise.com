<script>
  import { page } from '$app/stores';

	const menu = [
		{ label: 'Home', path: '/' },
		{ label: 'Integrations', path: '/integrations' },
		{ label: 'Pricing', path: '/pricing' },
		{ label: 'About', path: '/about' },
		{ label: 'Support', path: '/support' },
		{ label: 'Contact', path: '/contact' }
	];
</script>

<header class="max-w-7xl mx-auto flex justify-between py-6 select-none px-3">
  <ul >
    <li class="flex items-center">
      <img src="/media/shipwise-logo-owl.svg" alt="🦉" class="h-16" />
      <img src="/media/shipwise-logo-text.svg" alt="Shipwise" class="h-5 ml-3" />
    </li>

		{#each menu as { label, path }}
			<li>
				<a href={path} class:active={$page.url.pathname == path}>
					{label}
				</a>
			</li>
		{/each}
	</ul>
  <div class="items-center flex justify-evenly">
    <div><a href="/signin" class="text-prussian-blue-800 bg-gray-100 rounded-sm py-2 font-medium">Sign In</a></div>
    <div><span class="block px-3 text-gray-500">or</span></div>
    <div><a href="/get-started" class="rounded-sm py-2 text-prussian-blue-800 bg-lightning-yellow-400 font-medium">Get Started</a></div>
  </div>
</header>

<style>
  img {
    @apply flex-grow-0;
  }
  ul {
    font-family: "Montserrat";
    @apply flex items-center flex-grow-0 font-normal;
  }
  li:first-child {
    @apply mr-9;
  }
  a {
    @apply px-2 mx-2 text-gray-700 transition-all duration-75;
  }
  a:hover {
    @apply text-prussian-blue-800;
  }
  a.active {
    @apply text-blue-400;
  }
</style>
