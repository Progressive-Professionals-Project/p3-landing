<script>
  import Header from "$components/Header.svelte";
  import Footer from "$components/Footer.svelte";
  // Static theme; no runtime color derivation
  import Modal from "$components/Modal.svelte";
  import ContactForm from "$components/forms/ContactForm.svelte";
  import VolunteerWizard from "$components/forms/VolunteerWizard.svelte";
  import CampaignWizard from "$components/forms/CampaignWizard.svelte";
  import { activeModal } from "$lib/ui";

  
</script>

<svelte:head>
  <meta name="description" content="We connect volunteer professionals in cybersecurity, web, IT, data and marketing with local and state campaigns. Fast, secure, expert help for progressive campaigns—everywhere." />
</svelte:head>

<Header />
<main>
  <slot />
</main>

<Modal open={$activeModal === 'contact'} onClose={() => activeModal.set(null)}>
  <ContactForm />
 </Modal>
<Modal open={$activeModal === 'volunteer'} onClose={() => activeModal.set(null)}>
  <VolunteerWizard />
 </Modal>
<Modal open={$activeModal === 'campaign'} onClose={() => activeModal.set(null)}>
  <CampaignWizard />
 </Modal>

<Footer />

<style>
  :root {
    --color-primary: #0a3d62;
    --color-primary-700: #255e8b;
    --color-primary-contrast: #ffffff;
    --color-bg: #f8fbff;
    --color-surface: #ffffff;
    --color-text: #0a1f33;
    --color-muted: #24496f;
    --color-link-on-primary: #d9ecff;
    --color-border: #c8daee;
    --color-fineprint: #b9dcff;
  }
  :global(html, body) {
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial,
      Apple Color Emoji, Segoe UI Emoji;
    color: var(--color-text);
    background: var(--color-bg);
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }
  :global(.container) { width: 100%; max-width: 1140px; margin-inline: auto; padding-inline: 16px; }
  :global(.container-sm) { max-width: 720px; }
  :global(.row) { display: flex; flex-wrap: wrap; margin-left: -8px; margin-right: -8px; }
  :global(.col) { padding-left: 8px; padding-right: 8px; }
  :global(.col-12) { width: 100%; }
  :global(.col-6) { width: 50%; }
  @media (max-width: 768px) {
    :global(.col-6) { width: 100%; }
  }

  main {
    flex: 1 0 auto;
    overflow-x: hidden;
    background:
      radial-gradient(1200px 600px at 10% -10%, hsl(210 100% 96%) 0%, transparent 60%),
      radial-gradient(900px 500px at 90% -10%, hsl(215 100% 94%) 0%, transparent 50%),
      radial-gradient(800px 500px at 10% 110%, hsl(210 100% 95%) 0%, transparent 55%),
      linear-gradient(180deg, hsl(210 100% 99%), hsl(210 100% 97%));
  }
</style>


