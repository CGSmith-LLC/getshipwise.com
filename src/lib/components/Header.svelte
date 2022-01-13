<script>
  import { page } from '$app/stores';

	const menu = [
		{ label: 'Home', path: '/', classList: 'hidden md:block' },
		{ label: 'Integrations', path: '/integrations' },
		{ label: 'Pricing', path: '/pricing' },
		{ label: 'About', path: '/about' },
		{ label: 'Support', path: '/support' },
		{ label: 'Contact', path: '/contact' }
	];
</script>

<header class="max-w-7xl mx-auto flex justify-between py-6 select-none px-3">
  <ul class="flex flex-wrap items-center font-normal">
    <li class="block" style="min-width: 180px;">
      <a href="/" class="flex items-center">
        <img src="/media/shipwise-logo-owl.svg" alt="🦉" class="h-16" />
        <img src="/media/shipwise-logo-text.svg" alt="Shipwise" class="h-5 ml-3" />
      </a>
    </li>

		{#each menu as { label, path, classList }}
			<li class={`${classList} flex-grow`}>
				<a href={path} class:active={$page.url.pathname == path} class="md:mx-2">
					{label}
				</a>
			</li>
		{/each}
	</ul>
  <div class="items-center md:flex justify-evenly hidden">
    <div class="hidden lg:block"><a href="/signin" class="text-prussian-blue-800 bg-gray-100 rounded-sm py-2 font-medium">Sign In</a></div>
    <div class="hidden lg:block"><span class="block px-3 text-gray-500">or</span></div>
    <div><a href="/get-started" class="rounded-sm py-2 text-prussian-blue-800 bg-lightning-yellow-400 font-medium">Get Started</a></div>
  </div>
</header>

<style>
  header {
        font-family: "Montserrat";
  }

  li:first-child {
    @apply mr-9;
  }
  a {
    @apply px-2 text-gray-700 transition-all duration-75;
  }
  a:hover {
    @apply text-prussian-blue-800;
  }
  a.active {
    @apply text-blue-400;
  }
</style>
