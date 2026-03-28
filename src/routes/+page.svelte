<script lang="ts">
    let number = $state(1);

    function increment() {
        number++;
    }
</script>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<button onclick={increment}>Zahl: {number}</button>
