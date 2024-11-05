---
title: Make an enhanced form return an error in SvelteKit
pubDate: 2023-04-21
lastUpdated: 2023-07-24
id: 20230421160413-form-errors-sveltekit
---

```html
<!-- routes/whatever/+page.svelte -->
<script lang="ts">
  // this does the progressive enhancement thing
  import { enhance } from "$app/forms";
  import type { ActionData } from "./$types";
  // this guy is what you get back from +page.server.ts
  export let form: ActionData;
</script>

<form method="POST" use:enhance>
  <!-- send back the value from the server, so you can repopulate it for users without js -->
  <input id="email" name="email" type="email" value={form?.email ?? ''}
  required/><br />
  <input type="password" id="password" name="password" required /><br />
  <input type="submit" value="Continue" />
</form>

<!-- your form came back from the action with a message, display it -->
{#if form?.message }
<p>{form.message}</p>
{/if}
```

```ts
// routes/whatever/+page.server.ts
import { fail } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const form = await request.formData();
    const email = form.get("email");
    const password = form.get("password");
    if (typeof email !== "string" || typeof password !== "string")
      return fail(400, { email, message: "Missing email or password" });
    try {
      // log the user in or whatever
    } catch {
      // don't send the password back!
      return fail(400, { email, message: "Incorrect email or password" });
    }
  },
};
```

## Sources

- [SvelteKit docs about validation errors from form actions](https://kit.svelte.dev/docs/form-actions#anatomy-of-an-action-validation-errors)
- [SvelteKit docs about progressive enhancement in forms](https://kit.svelte.dev/docs/form-actions#progressive-enhancement)
