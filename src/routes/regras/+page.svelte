<script>
	import { tabActive } from '$lib/siteData';
	tabActive.set(1);
</script>

<svelte:head>
	<title>Regras</title>
</svelte:head>

<div class="container mt-3">
	<center><h3 class="mb-3 mt-3">Status:</h3></center>
	<dl>
		<dt>Vida (PV):</dt>
		<dd>Pontos de vida.</dd>

		<dt>Energia Divina (ED):</dt>
		<dd>Energia utilizada para usar poderes, transformações e etc.</dd>

		<dt>Vigor Celestial (VC):</dt>
		<dd>
			Pontos utilizados para definir qual o máximo de ED que você pode utilizar por rodada.&nbsp;
		</dd>

		<dt>Vigor Essencial (VE):</dt>
		<dd>Pontos que representam a integridade da essência (Alma) do indivíduo.</dd>
	</dl>
	<hr />
	<center><h3 class="mb-3 mt-3">Atributos:</h3></center>
	<p>
		Definem a quantidade de dados que você usará para rolar testes de perícias dos atributos.<br />
		Máximo de cada atributo: 5.
	</p>

	<dl>
		<dt>Força (FOR):</dt>
		<dd>Modifica o espaço que você tem para carregar itens = (5x FOR)</dd>

		<dt>Vitalidade (VIT):</dt>
		<dd>
			Modifica sua vida e a quantidade de rodadas que você terá no estado de morrendo.<br />
			com a Vitalidade máximizada sua quantidade de rodadas no estado de morrendo passa de 3 para 4.
		</dd>

		<dt>Intelecto (INT):</dt>
		<dd>
			Define quantas perícias poderá pegar.<br />
			Quando upar Intelecto você ganhará 1 ponto de perícia extra.
		</dd>

		<dt>Espírito (ESP):</dt>
		<dd>
			Vigor espiritual.<br />
			Define seu VE e ED.
		</dd>

		<dt>Agilidade (AGI):</dt>
		<dd>
			Define o deslocamento e a defesa do usuário.<br />
			Agilidade máximizada aumenta seu deslocamento de 9m para 12m
		</dd>
	</dl>
	<hr />
	<center><h3 class="mb-3 mt-3">Utilizar sua própria energia natural:</h3></center>
	<p>
		Você pode utilizar sua própria energia natural para "criar"/improvisar magias ou técnicas em
		combate ou fora dele. O seu nível de Domínio Mágico define o quão complexo e longe você pode ir
		com sua energia, enquanto seu nível de personagem define o quão forte será o efeito dessa magia
		(vale ressaltar que dependendo da complexidade da magia o efeito pode não ser tão efetivo).<br
		/>
		Magias mais específicas que tenham algo que seja considerado "poderes especiais" devem estar no estilo
		de manipulação de magia do seu personagem (resumidamente como o seu personagem costuma usar sua energia.
		Ele usa explosivamente para dar dano? usa para se fortificar? usa de forma estratégica com técnicas
		de suporte? e entre outros...).<br />
		O estilo de manipulação de magia de seu personagem deve ser discutido com o Mestre na criação de
		seu personagem e as magias que você improvisar durante as sessões também.
	</p>
	<hr />
	<center><h3 class="mb-3 mt-3">Expansão de energia:</h3></center>
	<p>
		Ao chegar no nível 25 o personagem desbloqueará uma técnica conhecida como "expansão de energia"
		onde você pode liberar uma grande quantidade de energia ao redor de você, fazendo com que você
		consiga utilizar seu poder em qualquer ponto dessa expansão de qualquer lugar que você esteja.
		Isso faz com que seja mais difícil de desviar ou defender sua habilidade e que ela também se
		torne um pouco mais forte, já que ela vai ser liberada em potência máxima. A proficiência com
		essa habilidade varia de acordo com o nível de domínio mágico do usuário.
	</p>
	<p>Nível Marcado:</p>
	<ul>
		<li>Tamanho: 4 metros de raio ao redor do usuário.</li>
		<li>Dano extra: +2d.</li>
		<li>
			Debuff de desvio / defesa de inimigos: O valor de **treinamento** da perícia de Conjuração do
			usuário.
		</li>
		<li>Custo: 10 EDs para ativar e 5 EDs por rodada para manter.</li>
	</ul>
	<p>Nível Divino:</p>
	<ul>
		<li>Tamanho: 6 metros de raio ao redor do usuário.</li>
		<li>Dano extra: +4d.</li>
		<li>
			Debuff de desvio / defesa de inimigos: 1.5x o valor de **treinamento** da perícia de
			Conjuração do usuário.
		</li>
		<li>Custo: 12 EDs para ativar e 7 EDs por rodada para manter.</li>
	</ul>
	<p>Nível Iluminado:</p>
	<ul>
		<li>Tamanho: 9 metros de raio ao redor do usuário.</li>
		<li>Dano extra: +6d.</li>
		<li>
			Debuff de desvio / defesa de inimigos: o dobro valor de **treinamento** da perícia de
			Conjuração do usuário.
		</li>
		<li>Custo: 15 EDs para ativar e 10 EDs por rodada para manter.</li>
	</ul>
	<p>Observações e regras gerais:</p>
	<ul>
		<li>
			O custo acima se refere apenas ao custo para manter a expansão ativa, o que significa que você
			ainda precisa gastar energia para realizar os ataques normalmente (porém eles terão os buffs
			citados acima);
		</li>
		<li>
			O usuário pode escolher usar qualquer um dos níveis da expansão que ele tem desbloqueado. Ou
			seja, um personagem que esteja no nível iluminado pode utilizar os níveis marcado e divino;
		</li>
		<li>
			Duas expansões podem coexistir no mesmo ambiente. Porém caso alguém que esteja expandindo no
			ambiente queira "expulsar" ou sobrepor a expansão de outro um teste de Conjuração deve ser
			realizado entre os dois, o maior valor prevalecerá. OBS: neste teste a regra do crítico
			garantido não vale. Ou seja, tirar um 20 no dado não te dá a vitória instantaneamente;
		</li>
		<li>
			Durante uma disputa de expansão você pode utilizar energia para aumentar seu bônus na disputa,
			seguindo a regra: 5 EDs para +2 no teste, com um limite de 25 EDs. Narrativamente é como se o
			personagem aumentasse momentaneamente a quantidade de energia da expansão para ganhar força na
			disputa.
		</li>
	</ul>
	<hr />
	<center><h3 class="mb-3 mt-3">Habilidade Inata Especial:</h3></center>
	<p>
		O personagem desbloqueia uma habilidade relacionada ao poder inato dele. Essa habilidade deve
		ser discutida com o mestre. OBS: é literalmente UMA habilidade, que será colocada diretamente na
		ficha, como se fosse um poder de classe ou de linhagem.
	</p>
	<hr />
	<center><h3 class="mb-3 mt-3">Descansos:</h3></center>
	<p>Curto:</p>
	<ul>
		<li>Recupera (seu valor de VIT)d6 de PVs e (seu valor de ESP)d6 de EDs.</li>
		<li>*NÃO* recupera VEs.</li>
	</ul>
	<p>Médio:</p>
	<ul>
		<li>Recupera 25% dos seus PV e ED máximos.</li>
		<li>*NÃO* recupera VEs.</li>
	</ul>
	<p>Longo:</p>
	<ul>
		<li>Recupera 50% dos seus PV e ED máximos.</li>
		<li>Recupera 25% dos seus VEs máximos.</li>
	</ul>
	<p>Pleno:</p>
	<ul>
		<li>Recupera totalmente seus PV e ED.</li>
		<li>Recupera 50% dos seus VEs máximos.</li>
	</ul>
	<hr />
	<center><h3 class="mb-3 mt-3">Armas, equipamentos e modificações:</h3></center>
	<p>
		Cada arma/equipamento só pode ter até no máximo 4 modificações. Para modificar uma arma você
		gasta 1 ponto de modificação (PMOD) por modificação. A quantidade de PMOD que você tem
		disponível para distribuir entre suas armas e equipamentos depende do nível do seu personagem,
		seguindo a seguinte relação:
	</p>
	<p>Nível de 1 a 10:</p>
	<ul>
		<li>2 PMODs</li>
	</ul>
	<p>Nível de 11 a 20:</p>
	<ul>
		<li>4 PMODs</li>
	</ul>
	<p>Nível de 21 a 30:</p>
	<ul>
		<li>6 PMODs</li>
	</ul>
	<p>Nível 31+:</p>
	<ul>
		<li>8 PMODs</li>
	</ul>
	<p>
		OBS: Modificações só podem ser feitas ou desfeitas enquanto o seu personagem estiver em uma base
		OU se ele tiver ferramentas e condições de realizar essa modificação durante a missão.
	</p>
</div>

<style>
	p,
	li {
		text-align: justify;
	}
</style>
