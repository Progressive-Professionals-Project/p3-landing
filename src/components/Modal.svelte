<script>
  export let open = false;
  export let onClose = () => {};
</script>

{#if open}
  <div class="overlay" tabindex="0" on:click={onClose} on:keydown={(e) => e.key === 'Escape' && onClose()}>
    <div class="modal" role="dialog" aria-modal="true" tabindex="0" on:click|stopPropagation>
      <button class="close" on:click={onClose} aria-label="Close">×</button>
      <slot />
    </div>
  </div>
{/if}

<style>
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.38);
    display: grid;
    place-items: center;
    padding: 8px;
    z-index: 50;
  }
  .modal {
    width: min(820px, 100%);
    background: var(--color-surface);
    color: var(--color-text);
    border-radius: 14px;
    border: 1px solid var(--color-border);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    padding: 16px 16px 8px;
    max-height: 90vh;
    overflow: auto;
  }
  .close {
    position: absolute;
    right: 10px;
    top: 10px;
    border: none;
    background: transparent;
    font-size: 24px;
    cursor: pointer;
    color: var(--color-muted);
  }

  @media (max-width: 640px) {
    .overlay {
      padding: 0;
    }
    .modal {
      width: 100%;
      height: 100%;
      max-height: none;
      border-radius: 0;
      border: none;
      padding: 14px 14px 8px;
    }
    .close {
      right: 8px;
      top: 8px;
      font-size: 28px;
    }
  }
</style>


