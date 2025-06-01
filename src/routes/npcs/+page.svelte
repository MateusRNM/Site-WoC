<script>
	import { tabActive, NPCs, quartetoConhecido } from '$lib/siteData';
	import NPCCard from '$lib/components/NPCCard.svelte';
	tabActive.set(7);
</script>

<svelte:head>
	<title>NPCs</title>
</svelte:head>

<center><h3 class="mt-3">Quarteto conhecido:</h3></center>

<div class="container text-center mt-5">
	<div class="row justify-content-center">
		<div class="col">
			<div class="row">
				{#each quartetoConhecido as npc}
					<NPCCard img={npc.image} name={npc.name} desc={npc.desc}/>
				{/each}
			</div>
		</div>
	</div>
</div>

<center><h3 class="mt-5">NPCs:</h3></center>

<div class="container text-center mt-5">
	<div class="row justify-content-center">
		<div class="col">
			<div class="row">
				{#each NPCs as npc}
					<NPCCard img={npc.image} name={npc.name} desc={npc.desc}/>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	@media(max-height: 740px) {
        .container {
			position: relative;
			left: 50%;
			transform: translateX(-45%);
		}
    }
</style>