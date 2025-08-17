<script>
  import { US_STATES, SKILL_OPTIONS, PARTY_OPTIONS } from "$lib/constants";
  const FORMSPREE = "https://formspree.io/f/mvgqnzqa";
  let name = $state("");
  let email = $state("");
  let candidate = $state("");
  let state = $state("");
  let jurisdiction = $state("");
  let office = $state("");
  let party = $state("");
  let partyOther = $state("");
  let endorsements = $state("");
  let budget = $state("");
  let website = $state("");
  let phone = $state("");
  let needs = $state([]);
  let details = $state("");
  let status = $state("idle");
  let filter = $state("");
  let needsOpen = $state(false);
  const sortedSkills = $derived([...SKILL_OPTIONS].sort((a, b) => a.localeCompare(b)));
  const EMAIL_RE = /^(?:[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*)@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;
  const emailValid = $derived(EMAIL_RE.test(email.trim()));

  function toggleNeed(s) {
    needs = needs.includes(s) ? needs.filter((x) => x !== s) : [...needs, s];
  }

  async function submit(e) {
    e.preventDefault();
    if (!emailValid) return;
    status = "sending";
    const payload = { name, email, phone, candidate, state, jurisdiction, office, party, partyOther, endorsements, budget, website, needs, details, _subject: "Campaign intake" };
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
  <h3>Get Help for Your Campaign</h3>
  <div class="row">
    <div class="col col-12 col-6"><label>Your Name <input bind:value={name} required /></label></div>
    <div class="col col-12 col-6"><label>Email <input type="email" bind:value={email} class:invalid={!emailValid && email.length>0} aria-invalid={!emailValid && email.length>0} required /></label></div>
  </div>
  {#if !emailValid && email.length>0}
    <p class="err">Enter a valid email address.</p>
  {/if}
  <div class="row">
    <div class="col col-12 col-6"><label>Candidate name <input bind:value={candidate} required /></label></div>
    <div class="col col-12 col-6"><label>Campaign website <input type="url" bind:value={website} placeholder="https://..." /></label></div>
  </div>
  <div class="row">
    <div class="col col-12 col-6"><label>Phone <input type="tel" inputmode="tel" placeholder="(555) 555-5555" bind:value={phone} /></label></div>
  </div>
  <div class="row">
    <div class="col col-12 col-6"><label>Campaign state
      <select bind:value={state} required>
        <option value="" disabled selected>Select state</option>
        {#each US_STATES as st}
          <option value={st}>{st}</option>
        {/each}
      </select>
    </label></div>
    <div class="col col-12 col-6"><label>Jurisdiction <input bind:value={jurisdiction} placeholder="City, County, District" /></label></div>
  </div>
  <div class="row">
    <div class="col col-12 col-6"><label>Prospective office/title <input bind:value={office} placeholder="e.g., City Council, School Board" /></label></div>
    <div class="col col-12 col-6"><label>Estimated budget <input type="number" min="0" step="1" bind:value={budget} placeholder="USD" /></label></div>
  </div>
  <div class="row">
    <div class="col col-12 col-6"><label>Party / affiliation
      <select bind:value={party}>
        {#each PARTY_OPTIONS as opt}
          <option value={opt}>{opt}</option>
        {/each}
      </select>
    </label></div>
    {#if party === 'Other'}
      <div class="col col-12 col-6"><label>Other affiliation <input bind:value={partyOther} /></label></div>
    {/if}
  </div>
  <label>Candidate endorsements
    <textarea rows="3" bind:value={endorsements} placeholder="List notable endorsements"></textarea>
  </label>

  <fieldset class="group">
    <legend>What do you need help with?</legend>
    <div class="selector">
      <button type="button" class="toggle" on:click={() => needsOpen = !needsOpen} aria-expanded={needsOpen}>
        Select areas
        <span class="arrow" data-open={needsOpen}>▾</span>
      </button>
      <input class="search" type="search" placeholder="Search areas" on:input={(e) => filter = e.currentTarget.value.toLowerCase()} />
    </div>
    {#if (needsOpen || filter) && sortedSkills.filter(s => (!filter || s.toLowerCase().includes(filter)) && !needs.includes(s)).length}
      <div class="results">
        {#each sortedSkills.filter(s => (!filter || s.toLowerCase().includes(filter)) && !needs.includes(s)) as s}
          <button type="button" class="result" on:click={() => { needs = [...needs, s]; }}>
            {s}
          </button>
        {/each}
      </div>
    {/if}
    {#if needs.length}
      <div class="bubbles">
        {#each needs as s}
          <button type="button" class="bubble" aria-label={`Remove ${s}`} on:click={() => needs = needs.filter(x => x !== s)}>{s} ×</button>
        {/each}
      </div>
    {/if}
  </fieldset>

  <label>Describe your request
    <textarea rows="5" bind:value={details} placeholder="Briefly describe goals, timeline, constraints"></textarea>
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
  .selector { display: grid; grid-template-columns: 1fr auto; gap: 8px; align-items: center; }
  .toggle { justify-self: start; display: inline-flex; align-items: center; gap: 6px; border: 1px solid var(--color-border); background: var(--color-surface); color: var(--color-text); padding: 6px 10px; border-radius: 8px; cursor: pointer; }
  .arrow[data-open="true"] { transform: rotate(180deg); }
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


