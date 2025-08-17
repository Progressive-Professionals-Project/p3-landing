<script>
  import { page } from "$app/stores";
  import { base, assets } from "$app/paths";
  import { activeModal } from "$lib/ui";
  let menuOpen = false;
  $: pathname = $page.url.pathname;
  $: current = pathname.replace(base, "") || "/";
  function closeMenu() { menuOpen = false; }
  function toggleMenu() { menuOpen = !menuOpen; }
</script>

<header class="site-header">
  <a href={`${base}/`} class="brand" aria-label="Progressive Professionals Project home">
    <img src={`${assets}/logo.png`} alt="Progressive Professionals Project logo" />
  </a>
  <button class="menu-btn" aria-label="Menu" aria-controls="primary-nav" aria-expanded={menuOpen} on:click={toggleMenu}>
    ☰
  </button>
  <nav id="primary-nav" data-open={menuOpen}
    on:click={closeMenu}
  >
    <a href={`${base}/`} aria-current={current === "/" ? "page" : undefined}>Home</a>
    <button class="linklike" on:click={() => activeModal.set("volunteer")}>Volunteer</button>
    <button class="linklike" on:click={() => activeModal.set("campaign")}>Get Help</button>
    <button class="linklike" on:click={() => activeModal.set("contact")}>Contact</button>
  </nav>
</header>

<style>
  .site-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 16px 20px;
    background: var(--color-primary);
    color: var(--color-primary-contrast);
    position: sticky;
    top: 0;
    z-index: 10;
  }
  .brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: inherit;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.2px;
  }
  .brand img {
    height: 48px;
    width: auto;
    display: block;
  }
  @media (max-width: 640px) {
    .brand img {
      height: 40px;
    }
  }
  nav {
    display: inline-flex;
    gap: 16px;
  }
  .menu-btn {
    display: none;
    background: transparent;
    border: 1px solid var(--color-link-on-primary);
    color: var(--color-link-on-primary);
    padding: 6px 10px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 18px;
  }
  nav a {
    color: var(--color-link-on-primary);
    text-decoration: none;
    padding: 6px 10px;
    border-radius: 6px;
  }
  .linklike {
    color: var(--color-link-on-primary);
    background: transparent;
    border: none;
    padding: 6px 10px;
    border-radius: 6px;
    cursor: pointer;
    font: inherit;
  }
  nav a[aria-current="page"] {
    color: var(--color-primary);
    background: var(--color-surface);
  }

  @media (max-width: 768px) {
    .menu-btn { display: inline-flex; align-items: center; justify-content: center; }
    nav {
      position: absolute;
      left: 0;
      right: 0;
      top: 100%;
      background: var(--color-primary);
      padding: 8px 12px 12px;
      display: none;
      flex-direction: column;
      gap: 8px;
      border-bottom: 1px solid color-mix(in oklab, var(--color-link-on-primary), transparent 70%);
    }
    nav[data-open="true"] { display: flex; }
  }
</style>


