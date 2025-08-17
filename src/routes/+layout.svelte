<script>
  import Header from "$components/Header.svelte";
  import Footer from "$components/Footer.svelte";
</script>

<Header />
<main>
  <slot />
</main>
<Footer />

<style>
  :global(html, body) {
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial,
      Apple Color Emoji, Segoe UI Emoji;
    color: #0a1f33;
    background: #f8fbff;
  }

  main {
    min-height: calc(100dvh - 140px);
  }
</style>


