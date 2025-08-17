<script>
  const FORMSPREE_HELP = "https://formspree.io/f/your-help-id";
</script>

<section class="wrap">
  <h2>Request Help for Your Campaign</h2>
  <p>
    Tell us about your campaign and what you need. We’ll connect you with a
    volunteer professional who can help.
  </p>

  <form class="form" method="post" action={FORMSPREE_HELP}>
    <div class="row">
      <label>
        Your Name
        <input name="name" type="text" required />
      </label>
      <label>
        Email
        <input name="email" type="email" required />
      </label>
    </div>
    <div class="row">
      <label>
        Campaign / Organization
        <input name="campaign" type="text" required />
      </label>
      <label>
        City, State
        <input name="location" type="text" />
      </label>
    </div>
    <label>
      What do you need help with?
      <select name="needs" multiple size="6">
        <option>Cybersecurity</option>
        <option>Website (new or updates)</option>
        <option>IT / Email / Accounts</option>
        <option>Digital marketing</option>
        <option>Advertising</option>
        <option>Data / Analytics</option>
      </select>
    </label>
    <label>
      Describe your request
      <textarea name="details" rows="6" placeholder="Briefly describe goals, timeline, constraints"></textarea>
    </label>
    <button class="btn" type="submit">Submit</button>
  </form>
</section>

<style>
  .wrap {
    max-width: 840px;
    margin: 40px auto;
    padding: 0 20px;
  }
  .form {
    display: grid;
    gap: 16px;
    margin-top: 12px;
  }
  .row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 12px;
  }
  label {
    display: grid;
    gap: 6px;
    font-weight: 600;
    color: #0a3d62;
  }
  input, textarea, select {
    padding: 10px 12px;
    border: 1px solid #c8daee;
    border-radius: 8px;
    font: inherit;
    background: #ffffff;
  }
  .btn {
    background: #0a3d62;
    color: #ffffff;
    padding: 10px 14px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 600;
    border: none;
  }
</style>


