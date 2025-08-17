import { writable } from "svelte/store";

export type ActiveModal = null | "contact" | "volunteer" | "campaign";

export const activeModal = writable<ActiveModal>(null);


