<script>
  import { base, assets } from "$app/paths";
  const actions = [
    { href: `${base}/info`, label: "More Information" },
    { href: `${base}/volunteer`, label: "Join as a Volunteer" },
    { href: `${base}/get-help`, label: "Get Help for Your Campaign" },
  ];
</script>

<section class="hero">
  <div class="content">
    <span class="logo-badge"><img class="logo" src={`${assets}/logo.png`} alt="P3 logo" /></span>
    <h1>Progressive Professionals Project</h1>
    <p class="tagline">
      Connecting volunteer professionals in cybersecurity, web development, IT,
      marketing, and more with local and state campaigns that need expert help.
      Based in Chicago, helping campaigns everywhere.
    </p>

    <div class="cta">
      {#each actions as a}
        <a class="btn" href={a.href}>{a.label}</a>
      {/each}
    </div>
  </div>
</section>

<style>
  .hero {
    display: grid;
    place-items: center;
    padding: 64px 20px;
    background: radial-gradient(1200px 600px at 10% 0%, #e6f2ff 0%, #f8fbff 60%, #ffffff 100%);
  }
  .content {
    max-width: 900px;
    text-align: center;
  }
  .logo-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 96px;
    height: 96px;
    padding: 10px;
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0 2px 0 rgba(0,0,0,0.05);
  }
  .logo { width: 100%; height: 100%; object-fit: contain; }
  h1 {
    margin: 16px 0 10px;
    font-size: 2rem;
    color: #0a3d62;
  }
  .tagline {
    margin: 0 auto 24px;
    color: #24496f;
    line-height: 1.6;
    max-width: 720px;
  }
  .cta {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .btn {
    background: #0a3d62;
    color: #ffffff;
    padding: 10px 14px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 600;
  }
</style>


