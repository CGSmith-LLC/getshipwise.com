<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../style.css';
</script>

<div class="max-w-7xl mx-auto bg-white">
  <Header />
  <main class="px-6">
    <slot />
  </main>
  <Footer />
</div>
