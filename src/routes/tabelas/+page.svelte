<script>
	import { tabActive } from '$lib/siteData';
	import { niveisTable, magiaDamageTable, magiaBuffTable } from '$lib/siteData';
	tabActive.set(0);
	const tables = ['Tabela de níveis:', 'Tabela de magias (DANO):', 'Tabela de magias (BUFFS):'];
	let tableSelected = $state(0);
</script>

<svelte:head>
    <title>Tabelas</title>
</svelte:head>

<center>
	<div class="btn-group mt-3" role="group" aria-label="Basic radio toggle button group">
		<input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked onclick={() => tableSelected = 0} />
		<label class="btn btn-outline-primary" for="btnradio1">Níveis</label>

		<input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" onclick={() => tableSelected = 1} />
		<label class="btn btn-outline-primary" for="btnradio2">Magia (DANO)</label>

		<input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" onclick={() => tableSelected = 2} />
		<label class="btn btn-outline-primary" for="btnradio3">Magia (BUFF)</label>
	</div>
</center>

<center><h4 class="mt-3">{tables[tableSelected]}</h4></center>

<div class="container mt-5">
	<table class="table table-bordered">
		{#if tableSelected == 0}
			<thead>
				<tr>
					<th scope="col">Nível</th>
					<th scope="col">Upgrade</th>
				</tr>
			</thead>
			<tbody>
				{#each niveisTable as item}
					<tr>
						<th scope="row">{item.nivel}</th>
						<td>{item.upgrade}</td>
					</tr>
				{/each}
			</tbody>
		{:else if tableSelected == 1}
			<thead>
				<tr>
					<th scope="col">Classe</th>
					<th scope="col" colspan="2">Divino</th>
					<th scope="col" colspan="2">Guerreiro</th>
					<th scope="col" colspan="2">Aprendiz</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>Nível de Domínio Mágico</th>
					<th>DANO</th>
					<th>ALCANCE</th>
					<th>DANO</th>
					<th>ALCANCE</th>
					<th>DANO</th>
					<th>ALCANCE</th>
				</tr>
				{#each magiaDamageTable as item}
					<tr>
						<th scope="row">{item.nivelProficiencia}</th>
						<td>
							{@html `Dado base: ${item.DIVINO.DANO.dadoBase}<br>
                        Custo por dado: ${item.DIVINO.DANO.custoPorDado}<br>
                        Quantidade máxima de dados em um único ataque: ${item.DIVINO.DANO.maxDadosAtaqueUnico}`}
						</td>
						<td>
							{`Custo para aumentar em 1 a categoria de alcance da sua magia: ${item.DIVINO.ALCANCE.custoAumentoCategoriaMagia}`}
						</td>

						<td>
							{@html `Dado base: ${item.GUERREIRO.DANO.dadoBase}<br>
                        Custo por dado: ${item.GUERREIRO.DANO.custoPorDado}<br>
                        Quantidade máxima de dados em um único ataque: ${item.GUERREIRO.DANO.maxDadosAtaqueUnico}`}
						</td>
						<td>
							{`Custo para aumentar em 1 a categoria de alcance da sua magia: ${item.GUERREIRO.ALCANCE.custoAumentoCategoriaMagia}`}
						</td>

						<td>
							{@html `Dado base: ${item.APRENDIZ.DANO.dadoBase}<br>
                        Custo por dado: ${item.APRENDIZ.DANO.custoPorDado}<br>
                        Quantidade máxima de dados em um único ataque: ${item.APRENDIZ.DANO.maxDadosAtaqueUnico}`}
						</td>
						<td>
							{`Custo para aumentar em 1 a categoria de alcance da sua magia: ${item.APRENDIZ.ALCANCE.custoAumentoCategoriaMagia}`}
						</td>
					</tr>
				{/each}
			</tbody>
		{:else}
			<thead>
				<tr>
					<th scope="col">Classe</th>
					<th scope="col" colspan="3">Divino</th>
					<th scope="col" colspan="3">Guerreiro</th>
					<th scope="col" colspan="3">Aprendiz</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>TIPO DE BUFF</th>
					<th>BÔNUS</th>
					<th>DEFESA</th>
					<th>MOVIMENTO</th>
					<th>BÔNUS</th>
					<th>DEFESA</th>
					<th>MOVIMENTO</th>
					<th>BÔNUS</th>
					<th>DEFESA</th>
					<th>MOVIMENTO</th>
				</tr>
				{#each magiaBuffTable as item}
					<tr>
						<th scope="row">{item.nivelProficiencia}</th>
						<td>
							{@html `${item.DIVINO.BONUS.custoEfeito}<br> ${item.DIVINO.BONUS.maximo}`}
						</td>
						<td>
							{@html `${item.DIVINO.DEFESA.custoEfeito}<br> ${item.DIVINO.DEFESA.maximo}`}
						</td>
						<td>
							{@html `${item.DIVINO.MOVIMENTO.custoEfeito}<br> ${item.DIVINO.MOVIMENTO.maximo}`}
						</td>
						<td>
							{@html `${item.GUERREIRO.BONUS.custoEfeito}<br> ${item.GUERREIRO.BONUS.maximo}`}
						</td>
						<td>
							{@html `${item.GUERREIRO.DEFESA.custoEfeito}<br> ${item.GUERREIRO.DEFESA.maximo}`}
						</td>
						<td>
							{@html `${item.GUERREIRO.MOVIMENTO.custoEfeito}<br> ${item.GUERREIRO.MOVIMENTO.maximo}`}
						</td>
						<td>
							{@html `${item.APRENDIZ.BONUS.custoEfeito}<br> ${item.APRENDIZ.BONUS.maximo}`}
						</td>
						<td>
							{@html `${item.APRENDIZ.DEFESA.custoEfeito}<br> ${item.APRENDIZ.DEFESA.maximo}`}
						</td>
						<td>
							{@html `${item.APRENDIZ.MOVIMENTO.custoEfeito}<br> ${item.APRENDIZ.MOVIMENTO.maximo}`}
						</td>
					</tr>
				{/each}
			</tbody>
		{/if}
	</table>
</div>
