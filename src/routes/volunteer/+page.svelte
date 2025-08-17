<script>
  const FORMSPREE_VOLUNTEER = "https://formspree.io/f/your-volunteer-id";
</script>

<section class="wrap">
  <h2>Volunteer with P3</h2>
  <p>
    Share your skills to help progressive local and state campaigns. Tell us
    about your experience and availability. We’ll reach out when there’s a good
    match.
  </p>

  <form class="form" method="post" action={FORMSPREE_VOLUNTEER}>
    <div class="row">
      <label>
        Full Name
        <input name="name" type="text" required />
      </label>
      <label>
        Email
        <input name="email" type="email" required />
      </label>
    </div>
    <div class="row">
      <label>
        Location (City, State)
        <input name="location" type="text" />
      </label>
      <label>
        LinkedIn or Website
        <input name="profile" type="url" />
      </label>
    </div>
    <label>
      Skills (select all that apply)
      <select name="skills" multiple size="6">
        <option>Cybersecurity</option>
        <option>Web Development</option>
        <option>IT / Sysadmin</option>
        <option>Marketing</option>
        <option>Advertising</option>
        <option>Data / Analytics</option>
      </select>
    </label>
    <label>
      Availability and notes
      <textarea name="notes" rows="5" placeholder="Availability, constraints, areas of interest"></textarea>
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


