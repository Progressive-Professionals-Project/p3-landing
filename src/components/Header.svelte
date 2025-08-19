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
    <img src={`${assets}/logo.png`} alt="Progressive Professionals Project logo" width="934" height="306" decoding="async" fetchpriority="high" />
  </a>
  <button class="menu-btn" type="button" aria-label="Menu" aria-controls="primary-nav" aria-expanded={menuOpen} on:click|stopPropagation={toggleMenu} on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleMenu()}>
    ☰
  </button>
  <nav id="primary-nav" data-open={menuOpen} class:open={menuOpen} aria-hidden={!menuOpen}>
    <a href={`${base}/`} aria-current={current === "/" ? "page" : undefined} on:click={() => (menuOpen = false)}>Home</a>
    <button class="linklike" on:click={() => { activeModal.set("volunteer"); menuOpen = false; }}>Volunteer</button>
    <button class="linklike" on:click={() => { activeModal.set("campaign"); menuOpen = false; }}>Get Help</button>
    <button class="linklike" on:click={() => { activeModal.set("contact"); menuOpen = false; }}>Contact</button>
  </nav>
</header>

<style>
  .site-header {
    --header-height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 16px 20px;
    min-height: var(--header-height);
    background: var(--color-primary);
    color: var(--color-primary-contrast);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
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
    .site-header { --header-height: 72px; }
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
      position: fixed;
      left: 0;
      right: 0;
      top: var(--header-height);
      max-height: calc(100dvh - var(--header-height));
      z-index: 100;
      background: var(--color-primary);
      padding: 12px 16px 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 12px;
      overflow: auto;
      border-bottom: 1px solid color-mix(in oklab, var(--color-link-on-primary), transparent 70%);
      transform-origin: top;
      transform: translateY(-8px) scaleY(0.9);
      opacity: 0;
      pointer-events: none;
      transition: transform 180ms ease, opacity 180ms ease;
    }
    nav[data-open="true"], nav.open {
      display: block;
      transform: none;
      opacity: 1;
      pointer-events: auto;
    }
  }
</style>


