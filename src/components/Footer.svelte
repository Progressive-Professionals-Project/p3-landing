<script>
  import { base, assets } from "$app/paths";
  import { activeModal } from "$lib/ui";
</script>

<footer class="site-footer">
  <div class="container">
    <button class="brand as-button" on:click={() => activeModal.set("contact") } aria-label="Contact">
      <img src={`${assets}/logo.png`} alt="Progressive Professionals Project logo" />
    </button>
    <nav>
      <a href={`${base}/terms`}>Terms</a>
      <a href={`${base}/privacy`}>Privacy</a>
      <button class="linklike" on:click={() => activeModal.set("contact")}>Contact</button>
    </nav>
  </div>
  <div class="fineprint">© {new Date().getFullYear()} Progressive Professionals Project</div>
</footer>

<style>
  .site-footer {
    padding: 24px 20px 12px;
    background: var(--color-primary);
    color: var(--color-link-on-primary);
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .brand {
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }
  .brand.as-button {
    background: transparent;
    color: inherit;
    border: none;
    padding: 0;
    cursor: pointer;
    font: inherit;
  }
  .brand img {
    height: 36px;
    width: auto;
    display: block;
  }
  @media (max-width: 640px) {
    .brand img { height: 30px; }
  }
  nav {
    display: inline-flex;
    gap: 16px;
  }
  nav a {
    color: var(--color-primary-contrast);
    text-decoration: none;
  }
  .linklike {
    color: var(--color-primary-contrast);
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    font: inherit;
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  .fineprint {
    margin-top: 12px;
    font-size: 12px;
    color: var(--color-fineprint);
    text-align: center;
  }
</style>


