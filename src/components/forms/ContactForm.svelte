<script>
  const FORMSPREE = "https://formspree.io/f/mnnzyjzg";
  let name = $state("");
  let email = $state("");
  let message = $state("");
  let status = $state("idle"); // idle | sending | ok | error

  const EMAIL_RE = /^(?:[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*)@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;
  const emailValid = $derived(EMAIL_RE.test(email.trim()));

  async function submit(e) {
    e.preventDefault();
    status = "sending";
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });
      status = res.ok ? "ok" : "error";
    } catch {
      status = "error";
    }
  }
</script>

<form class="form" on:submit={submit}>
  <h3>Contact Us</h3>
  <div class="row">
    <div class="col col-12 col-6"><label> Name <input bind:value={name} required /></label></div>
    <div class="col col-12 col-6"><label> Email <input type="email" bind:value={email} class:invalid={!emailValid && email.length>0} aria-invalid={!emailValid && email.length>0} required /></label></div>
  </div>
  {#if !emailValid && email.length>0}
    <p class="err">Please enter a valid email address.</p>
  {/if}
  <label> Message <textarea rows="5" bind:value={message} required></textarea></label>
  <button class="btn" type="submit" disabled={status === 'sending' || !emailValid}>
    {status === 'sending' ? 'Sending…' : 'Send'}
  </button>
  {#if status === 'ok'}<p class="ok">Thanks! We’ll be in touch.</p>{/if}
  {#if status === 'error'}<p class="err">Something went wrong. Try again.</p>{/if}
  
</form>

<style>
  .form { display: grid; gap: 12px; padding: 12px; }
  .row { display: flex; flex-wrap: wrap; gap: 0; margin-left: -8px; margin-right: -8px; }
  .row .col { padding-left: 8px; padding-right: 8px; margin-bottom: 12px; }
  label { display: grid; gap: 6px; font-weight: 600; color: var(--color-primary); }
  input, textarea { padding: 10px 12px; border: 1px solid var(--color-border); border-radius: 8px; font: inherit; background: var(--color-surface); }
  input.invalid { border-color: #c53a2d; }
  .btn { background: var(--color-primary); color: var(--color-primary-contrast); padding: 10px 14px; border-radius: 10px; font-weight: 600; border: none; }
  .ok { color: #157347; }
  .err { color: #a30000; }
  @media (max-width: 640px) {
    .form { padding: 16px; }
  }
</style>


