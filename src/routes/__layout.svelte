<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import '../style.css';
</script>

<Header />

<main class="max-w-7xl mx-auto">
  <slot />
</main>

<Footer />
