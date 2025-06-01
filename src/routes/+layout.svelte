<script>
    import 'bootstrap/dist/css/bootstrap.css';
    import 'bootstrap-icons/font/bootstrap-icons.css';
    import * as bootstrap from 'bootstrap';
    let { children } = $props();
    import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar/>

<main>
    {@render children()}
</main>

<style>
    @font-face {
        font-family: 'font';
        src: url('../lib/assets/font.otf');
    }
    * {
        font-family: 'font';
    }
</style>