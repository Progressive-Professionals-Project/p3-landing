<script>
  import { base, assets } from "$app/paths";
</script>

<footer class="site-footer">
  <div class="container">
    <div class="brand">
      <span class="logo-badge"><img src={`${assets}/icon.png`} alt="P3 icon" /></span>
      <span>Progressive Professionals Project</span>
    </div>
    <nav>
      <a href={`${base}/terms`}>Terms</a>
      <a href={`${base}/privacy`}>Privacy</a>
      <a href="mailto:progressiveprofessionalsproject@gmail.com">Contact</a>
    </nav>
  </div>
  <div class="fineprint">© {new Date().getFullYear()} Progressive Professionals Project</div>
</footer>

<style>
  .site-footer {
    padding: 24px 20px 12px;
    background: #0a3d62;
    color: #cfe6ff;
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
  .logo-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    padding: 6px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 1px 0 rgba(0,0,0,0.05);
  }
  img { width: 100%; height: 100%; object-fit: contain; }
  nav {
    display: inline-flex;
    gap: 16px;
  }
  nav a {
    color: #ffffff;
    text-decoration: none;
  }
  .fineprint {
    margin-top: 12px;
    font-size: 12px;
    color: #b9dcff;
    text-align: center;
  }
</style>


