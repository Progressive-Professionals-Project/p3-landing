<script>
  import { assets } from "$app/paths";
  import { activeModal } from "$lib/ui";
</script>

<section class="hero">
  <div class="content">
    <img class="logo big" src={`${assets}/logo.png`} alt="Progressive Professionals Project logo" width="934" height="306" decoding="async" />
    <h1>Progressive Professionals Project</h1>
    <p class="tagline">
      We mobilize experienced volunteers in cybersecurity, web development, IT,
      data, marketing and more to support local and state campaigns. We scope
      needs quickly, make high-quality matches, and help campaigns ship secure,
      effective work—fast. Based in Chicago, partnering with campaigns
      everywhere.
    </p>

    <div class="cta">
      <button class="btn" on:click={() => activeModal.set("contact")}>More Information / Contact</button>
      <button class="btn" on:click={() => activeModal.set("volunteer")}>Join as a Volunteer</button>
      <button class="btn" on:click={() => activeModal.set("campaign")}>Get Help for Your Campaign</button>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <h2>Why volunteer with us</h2>
    <p>
      Your professional skills can make an immediate difference for candidates
      and causes that share your values. From securing email and websites to
      shipping campaign sites, optimizing ads and analytics, or untangling IT
      basics—experienced volunteers accelerate the essential work that wins
      close races.
    </p>
    <div class="grid">
      <div>
        <h3>High‑impact work</h3>
        <p>Small teams, tight timelines, clear outcomes. We help you do the most good with the time you have.</p>
      </div>
      <div>
        <h3>Right‑sized scoping</h3>
        <p>We scope engagements to be achievable and safe—protecting you and the campaign.</p>
      </div>
      <div>
        <h3>Support and templates</h3>
        <p>Lightweight playbooks, checklists, and examples so you never start from scratch.</p>
      </div>
    </div>
  </div>
  
</section>

<section class="section alt">
  <div class="wrap">
    <h2>Local campaigns matter</h2>
    <p>
      City, county, school board, and state races shape daily life and develop
      the next generation of leaders. These campaigns often run on heart and
      hustle—not big budgets. A few focused hours from you can level the field.
    </p>
    <ul class="bullets">
      <li>Protect communities with better cybersecurity hygiene and account safety</li>
      <li>Reach voters with accessible websites, clear content, and fast fixes</li>
      <li>Stretch resources through smarter analytics, targeting, and ops</li>
    </ul>
  </div>
  
</section>

<section class="section">
  <div class="wrap">
    <h2>How it works</h2>
    <ol class="steps">
      <li>Tell us about your skills or your campaign’s needs</li>
      <li>We scope a safe, achievable plan and make a tailored introduction</li>
      <li>You collaborate directly, with us available for light support</li>
    </ol>
  </div>
  
</section>

<style>
  .hero {
    display: grid;
    place-items: center;
    padding: 64px 20px;
    background: radial-gradient(1200px 600px at 10% 0%, #e6f2ff 0%, var(--color-bg) 60%, var(--color-surface) 100%);
  }
  .content {
    max-width: 900px;
    text-align: center;
  }
  .logo { width: 80px; height: 80px; }
  .logo.big { width: min(40vw, 240px); height: auto; }
  h1 {
    margin: 16px 0 10px;
    font-size: 2rem;
    color: var(--color-primary);
  }
  .tagline {
    margin: 0 auto 24px;
    color: var(--color-muted);
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
    background: var(--color-primary);
    color: var(--color-primary-contrast);
    padding: 10px 14px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 600;
  }

  .section {
    padding: 36px 20px;
  }
  .section.alt {
    background: linear-gradient(180deg, rgba(10,61,98,0.03), transparent 60%);
  }
  .wrap {
    max-width: 900px;
    margin: 0 auto;
  }
  h2 {
    color: var(--color-primary);
    margin: 0 0 10px;
  }
  h3 {
    color: var(--color-text);
    margin: 8px 0 6px;
    font-size: 1.05rem;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin-top: 10px;
  }
  .bullets {
    margin: 10px 0 0;
    padding-left: 18px;
    line-height: 1.6;
  }
  .steps {
    margin: 10px 0 0;
    padding-left: 20px;
    line-height: 1.6;
  }
</style>


