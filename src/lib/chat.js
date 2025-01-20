import { browser } from "$app/environment";
import { writable } from "svelte/store";


/* initialize the users to "" if the users has not already been stored */
const chats = browser ? window?.localStorage.getItem('chat') ?? "" : ""


export const chats_store = writable(chats)

if (browser) {
        /* https://svelte.dev/tutorial/auto-subscriptions */
        chats_store.subscribe((value) => {
                /* on changes to the users_store, update the localStorage in the browser. */
                window?.localStorage.setItem('chat', value);
        })
}