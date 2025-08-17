<script>
  import { base } from "$app/paths";
</script>
<section class="wrap">
  <h2>Our Purpose</h2>
  <p>
    We connect volunteer professionals in technical fields with local and state
    campaigns that need expert help. From cybersecurity assessments and web
    development to IT setup and digital communications, we match skills with
    campaign needs.
  </p>

  <h3>How it works</h3>
  <ul>
    <li>Volunteers share their skills and availability.</li>
    <li>Campaigns submit requests describing their needs.</li>
    <li>We coordinate introductions and support lightweight scoping.</li>
  </ul>

  <p>
    We are based in Chicago and support campaigns everywhere. We are volunteer
    run and focused on pragmatic, secure, and professional help for progressive
    campaigns.
  </p>

  <div class="links">
    <a class="btn" href={`${base}/volunteer`}>Join as a Volunteer</a>
    <a class="btn alt" href={`${base}/get-help`}>Request Help</a>
  </div>
</section>

<style>
  .wrap {
    max-width: 840px;
    margin: 40px auto;
    padding: 0 20px;
  }
  h2 {
    color: #0a3d62;
  }
  .links {
    display: flex;
    gap: 12px;
    margin-top: 20px;
    flex-wrap: wrap;
  }
  .btn {
    background: #0a3d62;
    color: #ffffff;
    padding: 10px 14px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 600;
  }
  .btn.alt {
    background: #255e8b;
  }
</style>


