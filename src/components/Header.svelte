<script>
  import { page } from "$app/stores";
  import { base, assets } from "$app/paths";
  $: pathname = $page.url.pathname;
  $: current = pathname.replace(base, "") || "/";
</script>

<header class="site-header">
  <a href={`${base}/`} class="brand">
    <span class="logo-badge">
      <img src={`${assets}/logo.png`} alt="Progressive Professionals Project" />
    </span>
    <span>Progressive Professionals Project</span>
  </a>
  <nav>
    <a href={`${base}/`} aria-current={current === "/" ? "page" : undefined}>Home</a>
    <a href={`${base}/info`} aria-current={current === "/info" ? "page" : undefined}
      >About</a
    >
    <a
      href={`${base}/volunteer`}
      aria-current={current === "/volunteer" ? "page" : undefined}
      >Volunteer</a
    >
    <a
      href={`${base}/get-help`}
      aria-current={current === "/get-help" ? "page" : undefined}
      >Get Help</a
    >
  </nav>
</header>

<style>
  .site-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 16px 20px;
    background: #0a3d62;
    color: #ffffff;
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
  .logo-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 6px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 1px 0 rgba(0,0,0,0.05);
  }
  img { width: 100%; height: 100%; object-fit: contain; }
  nav {
    display: inline-flex;
    gap: 16px;
  }
  nav a {
    color: #d9ecff;
    text-decoration: none;
    padding: 6px 10px;
    border-radius: 6px;
  }
  nav a[aria-current="page"] {
    color: #0a3d62;
    background: #ffffff;
  }
</style>


