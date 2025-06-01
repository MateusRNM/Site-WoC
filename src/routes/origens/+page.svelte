<script>
	import { tabActive } from '$lib/siteData';
	tabActive.set(4);
</script>

<svelte:head>
	<title>Origens</title>
</svelte:head>

<div class="container mt-5">
	<h2 class="mb-3">Origens:</h2>

	<dl>
		<dt>Mágico:</dt>
		<dd>
			Você sempre teve interesse em magias. Ganha um bônus de +5 em Conjuração ou adquire
			treinamento caso não tenha.
		</dd>

		<dt>Viajante:</dt>
		<dd>
			Você passou boa parte de sua vida em longas aventuras e viagens pelo mundo e sabe se virar
			muito bem em várias situações. Ganha um bônus de +5 em Sobrevivência ou adquire treinamento
			caso não tenha.
		</dd>

		<dt>Médico:</dt>
		<dd>
			Você era um agente de saúde. Ganha um bônus de +5 em Medicina ou adquire treinamento caso não
			tenha.
		</dd>

		<dt>Monge:</dt>
		<dd>
			Você passava boa parte de sua vida meditando e estudando. Ganha um bônus de +5 em
			(Concentração ou Religião) ou adquire treinamento caso não tenha.
		</dd>

		<dt>Lutador:</dt>
		<dd>
			Você praticava um ou vários estilos de luta. Ganha um bônus de +5 em Luta ou adquire
			treinamento caso não tenha.
		</dd>

		<dt>Atirador:</dt>
		<dd>
			Você era um atirador profissional ou práticava muitos exercícios de pontaria. Ganha um bônus
			de +5 em Pontaria ou adquire treinamento caso não tenha.
		</dd>

		<dt>Professor:</dt>
		<dd>
			Você trabalhou na área da educação em algum momento de sua vida. Ganha um bônus de +5 em
			(Ciências ou Atualidades) ou adquire treinamento caso não tenha.
		</dd>
	</dl>

	<div class="alert alert-info mt-4" role="alert">
		Caso queira, você pode escolher uma origem personalizada para seu personagem, apenas fale com o
		Mestre. A origem deve ter um bônus de +5 em uma perícia e deve ter uma explicação que justifique
		o bônus.
	</div>
</div>

<style>
    dt {
        margin-top: 1rem;
    }
</style>
