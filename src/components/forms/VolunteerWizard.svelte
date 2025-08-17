<script>
  import { US_STATES, SKILL_OPTIONS } from "$lib/constants";
  const FORMSPREE = "https://formspree.io/f/xblkedka";
  let name = $state("");
  let email = $state("");
  let profile = $state("");
  let skills = $state([]);
  let notes = $state("");
  let status = $state("idle"); // idle | sending | ok | error
  let state = $state("");
  let city = $state("");
  let zip = $state("");
  let locationPref = $state(new Set());
  let availability = $state(new Set());
  let weeklyHours = $state("");
  let filter = $state("");

  const EMAIL_RE = /^(?:[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*)@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;
  const emailValid = $derived(EMAIL_RE.test(email.trim()));

  function toggleSkill(s) {
    skills = skills.includes(s) ? skills.filter((x) => x !== s) : [...skills, s];
  }
  function toggleSet(set, v) {
    const next = new Set(set);
    if (next.has(v)) next.delete(v); else next.add(v);
    return next;
  }

  async function submit(e) {
    e.preventDefault();
    if (!emailValid) return;
    status = "sending";
    const payload = { name, email, state, city, zip, locationPref: Array.from(locationPref), profile, skills, availability: Array.from(availability), weeklyHours, notes, _subject: "Volunteer intake" };
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      status = res.ok ? "ok" : "error";
    } catch {
      status = "error";
    }
  }
</script>

<form class="form" on:submit={submit}>
  <h3>Join as a Volunteer</h3>
  <div class="row">
    <div class="col col-12 col-6"><label>Full Name <input bind:value={name} required /></label></div>
    <div class="col col-12 col-6"><label>Email <input type="email" bind:value={email} class:invalid={!emailValid && email.length>0} aria-invalid={!emailValid && email.length>0} required /></label></div>
  </div>
  {#if !emailValid && email.length>0}
    <p class="err">Enter a valid email address.</p>
  {/if}
  <div class="row">
    <div class="col col-12 col-6"><label>State
      <select bind:value={state}>
        <option value="" disabled selected>Select state</option>
        {#each US_STATES as st}
          <option value={st}>{st}</option>
        {/each}
      </select>
    </label></div>
    <div class="col col-12 col-6"><label>City <input bind:value={city} /></label></div>
  </div>
  <div class="row">
    <div class="col col-12 col-6"><label>Zip Code <input inputmode="numeric" pattern="\\d{5}" maxlength="5" bind:value={zip} /></label></div>
    <div class="col col-12 col-6"><label>LinkedIn or Website <input type="url" bind:value={profile} /></label></div>
  </div>

  <fieldset class="group">
    <legend>Location preference</legend>
    <div class="chips">
      {#each ["Remote","In person"] as opt}
        <button type="button" role="checkbox" aria-checked={locationPref.has(opt)} class:active={locationPref.has(opt)} on:click={() => locationPref = toggleSet(locationPref, opt)}>{opt}</button>
      {/each}
    </div>
  </fieldset>

  <fieldset class="group">
    <legend>Skills (select all that apply)</legend>
    <input class="search" type="search" placeholder="Search skills" on:input={(e) => filter = e.currentTarget.value.toLowerCase()} />
    {#if filter && SKILL_OPTIONS.filter(s => s.toLowerCase().includes(filter) && !skills.includes(s)).length}
      <div class="results">
        {#each SKILL_OPTIONS.filter(s => s.toLowerCase().includes(filter) && !skills.includes(s)) as s}
          <button type="button" class="result" on:click={() => { skills = [...skills, s]; filter = ""; }}>{s}</button>
        {/each}
      </div>
    {/if}
    {#if skills.length}
      <div class="bubbles">
        {#each skills as s}
          <button type="button" class="bubble" aria-label={`Remove ${s}`} on:click={() => skills = skills.filter(x => x !== s)}>{s} ×</button>
        {/each}
      </div>
    {/if}
  </fieldset>

  <fieldset class="group">
    <legend>Availability</legend>
    <div class="chips">
      {#each ["Morning","Lunch","Afternoon","Evening","Night"] as slot}
        <button type="button" role="checkbox" aria-checked={availability.has(slot)} class:active={availability.has(slot)} on:click={() => availability = toggleSet(availability, slot)}>{slot}</button>
      {/each}
    </div>
  </fieldset>

  <div class="row">
    <div class="col col-12 col-6"><label>Weekly hours available <input type="number" min="0" step="1" bind:value={weeklyHours} /></label></div>
  </div>

  <label>Availability and notes
    <textarea rows="5" bind:value={notes} placeholder="Availability, constraints, areas of interest"></textarea>
  </label>

  <div class="actions">
    <button class="btn" type="submit" disabled={status === 'sending' || !emailValid}>
      {status === 'sending' ? 'Submitting…' : 'Submit'}
    </button>
  </div>

  {#if status === 'ok'}<p class="ok">Thanks! We’ll follow up soon.</p>{/if}
  {#if status === 'error'}<p class="err">Submission failed. Please try again.</p>{/if}
</form>

<style>
  .form { display: grid; gap: 10px; padding: 12px; }
  .row { display: flex; flex-wrap: wrap; gap: 0; margin-left: -8px; margin-right: -8px; }
  .row .col { padding-left: 8px; padding-right: 8px; margin-bottom: 12px; }
  label { display: grid; gap: 6px; font-weight: 600; color: var(--color-primary); }
  input, textarea { padding: 8px 10px; border: 1px solid var(--color-border); border-radius: 8px; font: inherit; background: var(--color-surface); }
  select { padding: 8px 10px; border: 1px solid var(--color-border); border-radius: 8px; font: inherit; background: var(--color-surface); }
  input.invalid { border-color: #c53a2d; }
  fieldset.group { border: none; padding: 0; margin: 2px 0 0; }
  fieldset.group > legend { font-weight: 600; color: var(--color-primary); margin-bottom: 6px; }
  .search { margin-bottom: 8px; }
  .results { display: grid; gap: 6px; max-height: 180px; overflow: auto; border: 1px solid var(--color-border); border-radius: 8px; padding: 6px; background: var(--color-surface); }
  .result { text-align: left; border: 1px solid var(--color-border); background: var(--color-surface); color: var(--color-text); padding: 6px 10px; border-radius: 8px; cursor: pointer; }
  .result:hover { border-color: var(--color-primary); }
  .bubbles { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
  .bubble { background: color-mix(in oklab, var(--color-primary), white 80%); color: var(--color-text); padding: 4px 10px; border-radius: 999px; font-size: 12px; border: 1px solid var(--color-border); cursor: pointer; }
  .actions { display: flex; justify-content: flex-end; padding-top: 6px; }
  .btn { background: var(--color-primary); color: var(--color-primary-contrast); padding: 10px 14px; border-radius: 10px; font-weight: 600; border: none; }
  .ok { color: #157347; }
  .err { color: #a30000; }
  @media (max-width: 640px) {
    .form { padding: 16px; }
  }
</style>


