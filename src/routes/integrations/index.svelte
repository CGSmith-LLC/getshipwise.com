<script>
  import { slugify } from '$lib/utils/slugify';

  const integrations = [
    { name: 'Magento', slug: 'magento', logo: '/integrations/integrations-magento-logo.jpg', description: 'Magento empowers thousands of retailers and brands with the best eCommerce platforms and flexible cloud solutions to rapidly innovate and grow.' },
    { name: 'WooCommerce', slug: 'woocommerce', logo: '/integrations/integrations-woocommerce-logo.jpg', description: 'WooCommerce is an easy to use, highly customizable, open-source e-commerce plugin for WordPress.' },
    { name: 'UPS', slug: 'ups', logo: '/integrations/integrations-ups-logo.jpg', description: 'United Parcel Service (UPS) is a multi-billion-dollar, world renowned, American multinational package delivery and supply chain management company.' },
    { name: 'Joomla!', slug: 'Joomla', logo: '/integrations/integrations-joomla-logo.jpg', description: 'Joomla! is one of the most popular free and open-source content management systems (CMS) for publishing web content.' },
    { name: 'Amazon', slug: 'amazon', logo: '/integrations/integrations-amazon-logo.jpg', description: 'One of the Big Four tech companies, Amazon is an American multinational technology company that focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.' },
    { name: 'Shipstation', slug: 'shipstation', logo: '/integrations/integrations-shipstation-logo.jpg', description: 'ShipStation creates web-based software designed to make e-commerce retailers exceptionally efficient at processing, fulfilling, and shipping their orders from all the most popular marketplaces and shopping carts using all the top carriers.' },
    { name: 'FedEx', slug: 'fedex', logo: '/integrations/integrations-fedex-logo.jpg', description: 'FedEx Corporation is a multi-billion dollar, world renown, American multinational courier delivery services company.' },
    { name: 'QuickBooks', slug: 'quickbooks', logo: '/integrations/integrations-quickbooks-logo.jpg', description: 'QuickBooks is an accounting software package that offers on-premises accounting applications as well as cloud-based versions that accept business payments, manage and pay bills, and payroll functions.' },
    { name: 'OpenCart', slug: 'opencart', logo: '/integrations/integrations-opencart-logo.jpg', description: 'Opencart is an easy to-use Open Source online store management program that can manage multiple online stores from a single back-end.' },
    { name: 'Shopify', slug: 'shopify', logo: '/integrations/integrations-shopify-logo.jpg', description: 'Shopify Inc. is a Canadian multinational e-commerce company that offers online retailers a suite of services including payments, marketing, shipping and customer engagement tools to simplify the process of running an online store for small merchants.' },
    { name: 'PrestaShop', slug: 'prestashop', logo: '/integrations/integrations-prestashop-logo.jpg', description: 'PrestaShop is an open source e-commerce software with support for the MySQL database management system.' },
    { name: 'Squarespace', slug: 'squarespace', logo: '/integrations/integrations-squarespace-logo.jpg', description: 'Squarespace is a software service for website building and hosting using pre-built website templates and drag and drop elements to create webpages.' },
    { name: 'BigCommerce', slug: 'bigcommerce', logo: '/integrations/integrations-bigcommerce-logo.jpg', description: 'BigCommerce provides a SaaS ecommerce platform with features that include customer groups and segmentation, search engine optimization, and web hosting.' },
    { name: 'Coldco Logistics', slug: 'coldco-logistics', logo: '/integrations/integrations-coldco-logistics-logo.jpg', description: 'Coldco Logistics provides temperature-controlled warehousing (freezer, refrigerated, and dry/ambient storage), transportation, and 3rd party logistics (3PL) solutions to customers in the food & beverage, agricultural, pharmaceutical, food service, and retail industries.' },
    { name: 'Neesvigs', slug: 'neesvigs', logo: '/integrations/integrations-neesvigs-logo.jpg', description: 'Neesvig\’s Food Service, in partnership with Empire Fish Company, provides responsibly sourced premium meat, poultry, seafood, and dairy products to top tier restaurants, country clubs, and hotels across the Midwest.' },
    { name: 'DHL', slug: 'dhl', logo: '/integrations/integrations-dhl-logo.jpg', description: 'DHL (Dalsey, Hillblom and Lynn) International GmbH is an international courier, parcel, and express mail service which is a division of the German logistics company Deutsche Post DHL, the world\'s largest logistics company, now in over 220 countries and territories worldwide.' },
    { name: 'Salesforce', slug: 'salesforce', logo: '/integrations/integrations-salesforce-logo.jpg', description: 'Salesforce is a cloud based customer relationship management solution that brings companies and customers together within all your departments - including marketing, sales, commerce, and service.' },
    { name: 'Zoho', slug: 'zoho', logo: '/integrations/integrations-zoho-logo.jpg', description: 'Zoho is an Indian web-based online office suite containing word processing, spreadsheets, presentations, databases, note-taking, wikis, web conferencing, customer relationship management, project management, invoicing, and other applications developed by Zoho Corporation, a California-based company.' },
    { name: 'NetSuite', slug: 'netsuite', logo: '/integrations/integrations-netsuite-logo.jpg', description: 'NetSuite Inc. is an American cloud computing company that provides software and services to manage business finances, operations, and customer relations.' },
  ];
</script>

<div class="px-20 text-center flex flex-col items-center py-28">
  <h1 class="mb-6 text-5xl leading-tight text-prussian-blue-800">Connect ShipWise and <br />Get All These Integrations</h1>
  <p class="text-gray-700">Stop building marketplace integrations from scratch and spend more time on your core business.</p>
</div>

<div class="grid grid-rows-5 grid-flow-col gap-6">
  {#each integrations as {name, logo, description}}
    <div class="border border-gray-100 rounded shadow px-6 py-3">
      <div class="w-full mx-auto text-center py-3">
        <a href={`/integrations/${slugify(name)}`}><img src={logo} alt={name} class="text-center mx-auto" /></a>
      </div>
      <p class="text-sm leading-relaxed text-gray-700">{description}</p>
    </div>
  {/each}
</div>
