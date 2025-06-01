<script>
	import { tabActive } from '$lib/siteData';
	tabActive.set(2);
</script>

<svelte:head>
	<title>Classes</title>
</svelte:head>

<center><h2 class="mb-5 mt-3">Classes:</h2></center>

<div class="container mt-3">
	<dl>
		<dt><strong>Guerreiro:</strong></dt>
		<dd>Classe focada em combate corpo a corpo. Ganha mais vida e Vigor Essencial que o normal.</dd>

		<dt><strong>Divino:</strong></dt>
		<dd>
			Classe focada em combate Divino, utilizando poderes. Ganha mais Energia Divina e Vigor
			Celestial que o normal.
		</dd>

		<dt><strong>Aprendiz:</strong></dt>
		<dd>Classe focada em versatilidade e perícias. Ganha mais perícias.</dd>
	</dl>
	<hr />
	<h3>Poderes iniciais de classes:</h3>
	<p>O player pode escolher UM poder inicial de acordo com a classe:</p>

	<h4><strong>Guerreiro:</strong></h4>
	<dl>
		<dt><strong>Pele de Aço:</strong></dt>
		<dd>Ganha 2 de RD físico e defesa.</dd>

		<dt><strong>Incansável:</strong></dt>
		<dd>Ganha +2 de de PV e VE por nível.</dd>
	</dl>

	<h4><strong>Divino:</strong></h4>
	<dl>
		<dt><strong>Fortificação Divina:</strong></dt>
		<dd>Ganha 2 de RD Divino e 2 de bônus em "Conjuração"</dd>

		<dt><strong>Vigor Divino:</strong></dt>
		<dd>Ganha +2 de ED e VC por nível.</dd>
	</dl>

	<h4><strong>Aprendiz:</strong></h4>
	<dl>
		<dt><strong>Mente Versátil:</strong></dt>
		<dd>Ganha 2 perícias bônus.</dd>

		<dt><strong>Mente Incansável:</strong></dt>
		<dd>
			Pode gastar 2 ED para ter +5 em bônus de qualquer teste envolvendo INT como atributo-chave ou
			4 ED para +10.<br />
			Só pode ser usado uma vez por cena.
		</dd>
	</dl>
	<hr />
	<h3><strong>Geral (De todas as classes):</strong></h3>
	<p><strong>Defesa Inicial</strong> = 10 + AGI</p>
	<p>
		4 pontos de atributos iniciais para distribuir, sendo que nenhum pode passar de 3 no início.
	</p>

	<h2><strong>Guerreiro:</strong></h2>
	<h4><strong>Status iniciais:</strong></h4>
	<p>PV = 20 + VIT</p>
	<p>ED = 10 + ESP</p>
	<p>VC = 10</p>
	<p>VE = 60 + ESP</p>

	<h4><strong>Após (Por nível):</strong></h4>
	<p>PV = 6 + VIT</p>
	<p>ED = 3 + ESP</p>
	<p>VC = 2</p>
	<p>VE = 6 + ESP</p>

	<p>
		<strong>Perícias Iniciais</strong> = Perícias treinadas: Fortitude ou Reflexos // Luta e 2 + INT
	</p>

	<h2><strong>Divino:</strong></h2>
	<h4><strong>Status iniciais:</strong></h4>
	<p>PV = 10 + VIT</p>
	<p>ED = 20 + ESP</p>
	<p>VC = 20</p>
	<p>VE = 40 + ESP</p>

	<h4><strong>Após (Por nível):</strong></h4>
	<p>PV = 3 + VIT</p>
	<p>ED = 6 + ESP</p>
	<p>VC = 4</p>
	<p>VE = 3 + ESP</p>

	<p><strong>Perícias Iniciais</strong> = Conjuração e Vontade // 3 + INT</p>

	<h2><strong>Aprendiz:</strong></h2>
	<h4><strong>Status iniciais:</strong></h4>
	<p>PV = 15 + VIT</p>
	<p>ED = 15 + ESP</p>
	<p>VC = 15</p>
	<p>VE = 50 + ESP</p>

	<h4><strong>Após (Por nível):</strong></h4>
	<p>PV = 4 + VIT</p>
	<p>ED = 4 + ESP</p>
	<p>VC = 3</p>
	<p>VE = 4 + ESP</p>

	<p><strong>Perícias Iniciais</strong> = 5 + INT</p>
</div>

<style>
    h2 {
        margin-top: 5%;
    }
</style>