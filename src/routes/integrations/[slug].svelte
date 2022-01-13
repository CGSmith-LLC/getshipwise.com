<script>
  import { page } from '$app/stores';

  const name = $page.params.slug;

  const integrationFeatures = [
    { id: 1, title: 'RATE SHOPPING', description: 'Quickly compare rates across all carriers you\’re connected to' },
    { id: 2, title: 'ORDER IMPORT', description: 'Automatically import all of your PayPal orders and quickly process them for shipment' },
    { id: 3, title: 'PACKAGE TRACKING', description: 'Get real-time updates on the status of each shipment' },
    { id: 4, title: 'CUSTOMS DOCUMENTS', description: 'Generate the right customs documentation to ensure your international packages arrive without delay' },
    { id: 5, title: 'DISCOUNTED LABELS', description: 'Generate labels at deeply discounted rates' },
    { id: 6, title: 'ADDRESS VALIDATION', description: 'Ensure you have the correct address for every package that travels across the globe' },
    { id: 7, title: 'PACKAGE INSURANCE', description: 'Easily add package insurance through Shipsurance or your chosen shipping carrier' },
    { id: 8, title: 'ALWAYS ON SUPPORT', description: 'Connect with an API expert anytime you need to via Slack, email, or over the phone' },
  ];
</script>

<div class="flex my-32">
  <div class="w-2/5">
    <h1 class="text-5xl text-prussian-blue-800 font-bold">{name} API <br />Integration</h1>
  </div>
  <div class="w-1/2">
    <div class="flex justify-around items-center">
      <div>[icon]</div>
      <div>+</div>
      <div>
        <img src="/integrations/icon-shipwise-1.png" alt="Shipwise" class="h-32" />
      </div>
    </div>
  </div>
</div>

<div class="flex">
  <div class="w-3/5 pr-20">
    <h3>Professional Shipping Docs and Labels</h3>
    <p>Our Magento shipping extension fills out all necessary shipping labels and documents.</p>
    <ul>
      <li>Print shipping labels for 55+ carriers.</li>
      <li>Print Packing Slips</li>
    </ul>
    <h3>Connect to Multiple Stores</h3>
    <p>Integrate the orders from all of your e-commerce platforms and marketplaces in one place to streamline your shipping process.</p>
    <p>We integrate with Shopify, Weebly, Amazon, Etsy, eBay, WooCommerce, BigCommerce, Magento, Stripe, Spree Commerce, and many more.</p>
    <div class="mt-6">
      <button class="mr-6 px-9 py-3 rounded bg-lightning-yellow-400">Get Started</button>
      <button class="px-9 py-3 rounded bg-prussian-blue-800 text-white">Contact Us</button>
    </div>
  </div>
  <div class="w-2/3">
    <h4 class="text-3xl font-semibold mb-9 text-prussian-blue-800 mt-12">We Support</h4>
    <div class="grid grid-rows-4 grid-flow-col gap-3">
      {#each integrationFeatures as {id, title, description}}
         <div class="flex">
           <div>></div>
           <div>
             <h4 class="font-bold">{title}</h4>
             <p>{description}</p>
           </div>
         </div>
      {/each}
    </div>
  </div>
</div>


<style>
  h3 {
    @apply text-2xl font-normal mt-12 pr-12;
  }
  p {
    @apply py-3 text-gray-800;
  }
</style>
