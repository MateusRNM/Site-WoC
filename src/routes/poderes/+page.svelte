<script>
	import { tabActive } from '$lib/siteData';
	tabActive.set(3);
</script>

<svelte:head>
	<title>Poderes</title>
</svelte:head>

<div class="container mt-5">
	<h1 class="mb-4 text-center">Poderes</h1>

	<div class="accordion" id="mainAccordion">
		<div class="accordion-item">
			<h2 class="accordion-header" id="headingMainClasses">
				<button
					class="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseMainClasses"
					aria-expanded="false"
					aria-controls="collapseMainClasses"
				>
					Poderes de Classes
				</button>
			</h2>
			<div
				id="collapseMainClasses"
				class="accordion-collapse collapse"
				aria-labelledby="headingMainClasses"
				data-bs-parent="#mainAccordion"
			>
				<div class="accordion-body">
					<div class="accordion sub-accordion" id="classesAccordion">
						<div class="accordion-item">
							<h3 class="accordion-header" id="headingGuerreiro">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseGuerreiro"
									aria-expanded="false"
									aria-controls="collapseGuerreiro"
								>
									Guerreiro
								</button>
							</h3>
							<div
								id="collapseGuerreiro"
								class="accordion-collapse collapse"
								aria-labelledby="headingGuerreiro"
								data-bs-parent="#classesAccordion"
							>
								<div class="accordion-body">
									<div class="accordion power-accordion" id="guerreiroPowersAccordion">
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingAuxilioDivino">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseAuxilioDivino"
													aria-expanded="false"
													aria-controls="collapseAuxilioDivino"
												>
													Auxílio Divino
												</button>
											</h4>
											<div
												id="collapseAuxilioDivino"
												class="accordion-collapse collapse"
												aria-labelledby="headingAuxilioDivino"
												data-bs-parent="#guerreiroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>Você pode gastar 2 ED para ter +5 em testes de Luta.</p>
													<p>
														Você pode gastar&nbsp; +2 ED para ter mais um bônus de +5, conforme a
														tabela:
													</p>
													<ul class="list-unstyled">
														<li>Nível 6 ou mais: 4 ED para +10</li>
														<li>Nível 11 ou mais: 8 ED para +15</li>
														<li>Nível 16 ou mais: 12 ED para +20</li>
														<li>Nível 21 ou mais: 16 ED para +25</li>
														<li>Nível 26 ou mais: 20 ED para +30</li>
														<li>Nível 31 ou mais: 24 ED para +35</li>
														<li>Nível 36 até 40: 28 ED para +40</li>
													</ul>
													<p><strong>Requisitos:</strong> Classe Guerreiro.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingPunhosLetaisGuerreiro">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapsePunhosLetaisGuerreiro"
													aria-expanded="false"
													aria-controls="collapsePunhosLetaisGuerreiro"
												>
													Punhos Letais
												</button>
											</h4>
											<div
												id="collapsePunhosLetaisGuerreiro"
												class="accordion-collapse collapse"
												aria-labelledby="headingPunhosLetaisGuerreiro"
												data-bs-parent="#guerreiroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Seus ataques desarmados causam 1d6 de dano. No nível 10 o dano passa
														para 1d8 e no nível 18 passa para 1d10.
													</p>
													<p><strong>Requisitos:</strong> FOR 3.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingCombaterDuplamente">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseCombaterDuplamente"
													aria-expanded="false"
													aria-controls="collapseCombaterDuplamente"
												>
													Combater Duplamente
												</button>
											</h4>
											<div
												id="collapseCombaterDuplamente"
												class="accordion-collapse collapse"
												aria-labelledby="headingCombaterDuplamente"
												data-bs-parent="#guerreiroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode fazer um ataque com duas armas, realizando um golpe com cada
														uma. Se fizer isso, recebe -10 no teste de acerto.
													</p>
													<p><strong>Requisitos:</strong> AGI 2.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingGolpeOportunidade">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseGolpeOportunidade"
													aria-expanded="false"
													aria-controls="collapseGolpeOportunidade"
												>
													Golpe de Oportunidade
												</button>
											</h4>
											<div
												id="collapseGolpeOportunidade"
												class="accordion-collapse collapse"
												aria-labelledby="headingGolpeOportunidade"
												data-bs-parent="#guerreiroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Sempre que um ser sair voluntariamente de um espaço adjacente ao seu,
														você pode gastar uma reação e 5 EDs para fazer um ataque corpo a corpo
														contra ele.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingTremBala">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseTremBala"
													aria-expanded="false"
													aria-controls="collapseTremBala"
												>
													Trem-Bala
												</button>
											</h4>
											<div
												id="collapseTremBala"
												class="accordion-collapse collapse"
												aria-labelledby="headingTremBala"
												data-bs-parent="#guerreiroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Sempre que acertar um ataque corpo a corpo você pode gastar 12 EDs para
														dar um golpe extra. Só pode ser usado uma vez por rodada.
													</p>
													<p><strong>Requisitos:</strong> Nivel 5 e FOR 4.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingEspiritoCombate">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseEspiritoCombate"
													aria-expanded="false"
													aria-controls="collapseEspiritoCombate"
												>
													Espírito de Combate
												</button>
											</h4>
											<div
												id="collapseEspiritoCombate"
												class="accordion-collapse collapse"
												aria-labelledby="headingEspiritoCombate"
												data-bs-parent="#guerreiroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você ganha PV extra igual ao dobro de sua Força no início de cada
														combate.
													</p>
													<p><strong>Requisitos:</strong> Nivel 6.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingAtordoar">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseAtordoar"
													aria-expanded="false"
													aria-controls="collapseAtordoar"
												>
													Atordoar
												</button>
											</h4>
											<div
												id="collapseAtordoar"
												class="accordion-collapse collapse"
												aria-labelledby="headingAtordoar"
												data-bs-parent="#guerreiroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Sempre que acertar um ataque corpo a corpo você pode gastar 8 EDs para
														deixar o alvo atordoado por uma rodada. O alvo pode resistir rolando um
														teste de Fortitude (DT = valor do teste de luta do ataque). Um alvo só
														pode receber os efeitos dessa habilidade uma única vez.
													</p>
													<p><strong>Requisitos:</strong> Classe Guerreiro.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingSurtoAcao">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseSurtoAcao"
													aria-expanded="false"
													aria-controls="collapseSurtoAcao"
												>
													Surto de Ação
												</button>
											</h4>
											<div
												id="collapseSurtoAcao"
												class="accordion-collapse collapse"
												aria-labelledby="headingSurtoAcao"
												data-bs-parent="#guerreiroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>Você ganha uma ação padrão extra durante um combate.</p>
													<p>
														<strong>Requisitos:</strong> AGI 4 e Iniciativa 10. Requisitos: Classe Guerreiro.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingSextoSentido">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseSextoSentido"
													aria-expanded="false"
													aria-controls="collapseSextoSentido"
												>
													Sexto Sentido
												</button>
											</h4>
											<div
												id="collapseSextoSentido"
												class="accordion-collapse collapse"
												aria-labelledby="headingSextoSentido"
												data-bs-parent="#guerreiroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>Você não pode ser pego desprevinido.</p>
													<p><strong>Requisitos:</strong> Percepção 10.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingArmaDivinaGuerreiro">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseArmaDivinaGuerreiro"
													aria-expanded="false"
													aria-controls="collapseArmaDivinaGuerreiro"
												>
													Arma Divina
												</button>
											</h4>
											<div
												id="collapseArmaDivinaGuerreiro"
												class="accordion-collapse collapse"
												aria-labelledby="headingArmaDivinaGuerreiro"
												data-bs-parent="#guerreiroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 6 EDs para criar uma arma simples com energia divina
														que causa 1d10 de dano mágico. Esse poder é uma magia, ou seja, pode ser
														fortificado.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingAtaquePesado">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseAtaquePesado"
													aria-expanded="false"
													aria-controls="collapseAtaquePesado"
												>
													Ataque Pesado
												</button>
											</h4>
											<div
												id="collapseAtaquePesado"
												class="accordion-collapse collapse"
												aria-labelledby="headingAtaquePesado"
												data-bs-parent="#guerreiroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você passar a somar seu atributo de Força em danos de ataques corpo a
														corpo.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingGolpesGiratorios">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseGolpesGiratorios"
													aria-expanded="false"
													aria-controls="collapseGolpesGiratorios"
												>
													Golpes Giratórios
												</button>
											</h4>
											<div
												id="collapseGolpesGiratorios"
												class="accordion-collapse collapse"
												aria-labelledby="headingGolpesGiratorios"
												data-bs-parent="#guerreiroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar uma ação padrão e de movimento e 14 EDs para realizar
														um golpe giratório com uma arma corpo a corpo, causando dano em todos os
														seres adjacentes a você.
													</p>
													<p><strong>Requisitos:</strong> Classe Guerreiro.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingNaturalmenteArmadurado">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseNaturalmenteArmadurado"
													aria-expanded="false"
													aria-controls="collapseNaturalmenteArmadurado"
												>
													Naturalmente Armadurado
												</button>
											</h4>
											<div
												id="collapseNaturalmenteArmadurado"
												class="accordion-collapse collapse"
												aria-labelledby="headingNaturalmenteArmadurado"
												data-bs-parent="#guerreiroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Sua pele se tornou mais resistente, servindo quase como uma armadura.
														Você passa a somar sua Vitalidade (VIT) em sua defesa base.
													</p>
													<p>
														<strong>Requisitos:</strong> Fortitude 10, VIT 4. Requisitos: Classe Guerreiro.&nbsp;
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingEmpunhaduraPerfeita">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseEmpunhaduraPerfeita"
													aria-expanded="false"
													aria-controls="collapseEmpunhaduraPerfeita"
												>
													Empunhadura Perfeita
												</button>
											</h4>
											<div
												id="collapseEmpunhaduraPerfeita"
												class="accordion-collapse collapse"
												aria-labelledby="headingEmpunhaduraPerfeita"
												data-bs-parent="#guerreiroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você sabe muito bem como empunhar armas corpo a corpo. Qualquer arma
														corpo a corpo que você utilizar terá +1d de dano extra passivamente.
													</p>
													<p><strong>Requisitos:</strong> Luta 10.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingDominacaoGuerreiro">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseDominacaoGuerreiro"
													aria-expanded="false"
													aria-controls="collapseDominacaoGuerreiro"
												>
													Dominação
												</button>
											</h4>
											<div
												id="collapseDominacaoGuerreiro"
												class="accordion-collapse collapse"
												aria-labelledby="headingDominacaoGuerreiro"
												data-bs-parent="#guerreiroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode fazer manobras como ação bônus, usar qualquer arma corpo a
														corpo com uma mão. Se você conseguir agarrar ou derrubar o alvo com esta
														habilidade a defesa do alvo diminiui em 10 enquanto ele estiver
														agarrado/derrubado.
													</p>
													<p>
														<strong>Requisitos:</strong> Nível 15, Força 5. Requisitos: Classe Guerreiro.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingImbuirEnergiaGuerreiro">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseImbuirEnergiaGuerreiro"
													aria-expanded="false"
													aria-controls="collapseImbuirEnergiaGuerreiro"
												>
													Imbuir Energia
												</button>
											</h4>
											<div
												id="collapseImbuirEnergiaGuerreiro"
												class="accordion-collapse collapse"
												aria-labelledby="headingImbuirEnergiaGuerreiro"
												data-bs-parent="#guerreiroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode imbuir energia em uma arma corpo a corpo para conceder +1d10
														de dano divino, caótico ou mágico (depende de sua linhagem) extra no
														golpe. Custo 5 EDs. Esse poder é uma magia, ou seja, pode ser
														fortificado.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingGolpearPontoFraco">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseGolpearPontoFraco"
													aria-expanded="false"
													aria-controls="collapseGolpearPontoFraco"
												>
													Golpear Ponto Fraco
												</button>
											</h4>
											<div
												id="collapseGolpearPontoFraco"
												class="accordion-collapse collapse"
												aria-labelledby="headingGolpearPontoFraco"
												data-bs-parent="#guerreiroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você sabe atacar da maneira certa e no ponto certo. Seus ataques corpo a
														corpo tem a margem de ameaça aumentada em +1.
													</p>
													<p><strong>Requisitos:</strong> Classe Guerreiro.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingReflexosEntidadeGuerreiro">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseReflexosEntidadeGuerreiro"
													aria-expanded="false"
													aria-controls="collapseReflexosEntidadeGuerreiro"
												>
													Reflexos da Entidade
												</button>
											</h4>
											<div
												id="collapseReflexosEntidadeGuerreiro"
												class="accordion-collapse collapse"
												aria-labelledby="headingReflexosEntidadeGuerreiro"
												data-bs-parent="#guerreiroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Se for sofrer algum golpe corpo a corpo você pode gastar 8 EDs para ter
														um bônus de +5 para esquivar do golpe.
													</p>
													<p><strong>Requisitos:</strong> Classe Guerreiro.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingTransformarArma">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseTransformarArma"
													aria-expanded="false"
													aria-controls="collapseTransformarArma"
												>
													Transformar Arma
												</button>
											</h4>
											<div
												id="collapseTransformarArma"
												class="accordion-collapse collapse"
												aria-labelledby="headingTransformarArma"
												data-bs-parent="#guerreiroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 10 EDs para transformar sua arma com energia divina,
														aumentando o tipo de dado de dano (d4 --&gt; d6 --&gt; d8 --&gt; d10
														--&gt; d12 --&gt; +1d12 extra no dano da arma).&nbsp;
													</p>
													<p>
														Além disso, todo o dano da arma é convertido de físico para divino,
														caótico ou mágico (depende de sua linhagem). Você gasta 3 EDs por rodada
														para manter essa magia ativa.
													</p>
													<p><strong>Requisitos:</strong> Nível 10, Conjuração 10.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingProtecaoPesada">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseProtecaoPesada"
													aria-expanded="false"
													aria-controls="collapseProtecaoPesada"
												>
													Proteção Pesada
												</button>
											</h4>
											<div
												id="collapseProtecaoPesada"
												class="accordion-collapse collapse"
												aria-labelledby="headingProtecaoPesada"
												data-bs-parent="#guerreiroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>Você ganha proficiência com proteções pesadas.</p>
													<p><strong>Requisitos:</strong> Força 3.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingMestreArmadurado">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseMestreArmadurado"
													aria-expanded="false"
													aria-controls="collapseMestreArmadurado"
												>
													Mestre Armadurado
												</button>
											</h4>
											<div
												id="collapseMestreArmadurado"
												class="accordion-collapse collapse"
												aria-labelledby="headingMestreArmadurado"
												data-bs-parent="#guerreiroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você não sofre penalidades ao utilizar proteções pesadas além de ganhar
														um bônus de +2 na defesa e RDs que ela concede.
													</p>
													<p>
														<strong>Requisitos:</strong> Habilidade "Proteção Pesada", Força 4 e Nível
														12.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="accordion-item">
							<h3 class="accordion-header" id="headingAprendiz">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseAprendiz"
									aria-expanded="false"
									aria-controls="collapseAprendiz"
								>
									Aprendiz
								</button>
							</h3>
							<div
								id="collapseAprendiz"
								class="accordion-collapse collapse"
								aria-labelledby="headingAprendiz"
								data-bs-parent="#classesAccordion"
							>
								<div class="accordion-body">
									<div class="accordion power-accordion" id="aprendizPowersAccordion">
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingCalibreRapido">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseCalibreRapido"
													aria-expanded="false"
													aria-controls="collapseCalibreRapido"
												>
													Calibre Rápido
												</button>
											</h4>
											<div
												id="collapseCalibreRapido"
												class="accordion-collapse collapse"
												aria-labelledby="headingCalibreRapido"
												data-bs-parent="#aprendizPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Sempre que acertar um tiro você pode gastar 4 EDs para dar um tiro
														extra. Só pode ser usado uma vez por rodada.
													</p>
													<p><strong>Requisitos:</strong> Nivel 5 e AGI 3.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingPunhosLetaisAprendiz">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapsePunhosLetaisAprendiz"
													aria-expanded="false"
													aria-controls="collapsePunhosLetaisAprendiz"
												>
													Punhos Letais
												</button>
											</h4>
											<div
												id="collapsePunhosLetaisAprendiz"
												class="accordion-collapse collapse"
												aria-labelledby="headingPunhosLetaisAprendiz"
												data-bs-parent="#aprendizPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Seus ataques desarmados causam 1d6 de dano. No nível 10 o dano passa
														para 1d8 e no nível 18 passa para 1d10.
													</p>
													<p><strong>Requisitos:</strong> FOR 3.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingPontoCerto">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapsePontoCerto"
													aria-expanded="false"
													aria-controls="collapsePontoCerto"
												>
													Ponto Certo
												</button>
											</h4>
											<div
												id="collapsePontoCerto"
												class="accordion-collapse collapse"
												aria-labelledby="headingPontoCerto"
												data-bs-parent="#aprendizPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você recebe o dobro de sua Agilidade (AGI) em dano com armas de fogo.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingTecnologico">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseTecnologico"
													aria-expanded="false"
													aria-controls="collapseTecnologico"
												>
													Tecnológico
												</button>
											</h4>
											<div
												id="collapseTecnologico"
												class="accordion-collapse collapse"
												aria-labelledby="headingTecnologico"
												data-bs-parent="#aprendizPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>Você recebe um bônus de +5 em testes de Tecnologia.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingUsarMente">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseUsarMente"
													aria-expanded="false"
													aria-controls="collapseUsarMente"
												>
													Usar a mente
												</button>
											</h4>
											<div
												id="collapseUsarMente"
												class="accordion-collapse collapse"
												aria-labelledby="headingUsarMente"
												data-bs-parent="#aprendizPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 4 EDs para trocar o atributo-chave de qualquer teste
														(exceto luta, pontaria, fortitude e reflexos) para Intelecto (INT). Você
														só pode utilizar isso um total de vezes igual ao seu INT por descanso
														longo.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingAnalisarInimigo">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseAnalisarInimigo"
													aria-expanded="false"
													aria-controls="collapseAnalisarInimigo"
												>
													Analisar Inimigo
												</button>
											</h4>
											<div
												id="collapseAnalisarInimigo"
												class="accordion-collapse collapse"
												aria-labelledby="headingAnalisarInimigo"
												data-bs-parent="#aprendizPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar uma ação de movimento e 4 EDs para analisar um alvo e
														ter +2 em testes de acerto e dano contra ele pelo resto da cena.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingLiderEquipe">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseLiderEquipe"
													aria-expanded="false"
													aria-controls="collapseLiderEquipe"
												>
													Líder de Equipe
												</button>
											</h4>
											<div
												id="collapseLiderEquipe"
												class="accordion-collapse collapse"
												aria-labelledby="headingLiderEquipe"
												data-bs-parent="#aprendizPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 6 EDs para motivar todos os seus aliados durante uma
														cena de combate, concedendo vantagem para rolar testes de perícias. Se
														quiser, você pode gastar 10 EDs e uma ação de reação para dar +1d de
														dano em qualquer ataque seu ou de seus aliados durante a cena. Para
														manter essa habilidade ativa você gasta 4 EDs por rodada, e além disso,
														você não pode realizar ações de movimento (apenas de ataque, reação e
														livre).
													</p>
													<p><strong>Requisitos:</strong> Classe Aprendiz.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingArmaDivinaAprendiz">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseArmaDivinaAprendiz"
													aria-expanded="false"
													aria-controls="collapseArmaDivinaAprendiz"
												>
													Arma Divina
												</button>
											</h4>
											<div
												id="collapseArmaDivinaAprendiz"
												class="accordion-collapse collapse"
												aria-labelledby="headingArmaDivinaAprendiz"
												data-bs-parent="#aprendizPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 6 EDs para criar uma arma simples com energia divina
														que causa 1d10 de dano mágico. Esse poder é uma magia, ou seja, pode ser
														fortificado.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingPreparadoTudo">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapsePreparadoTudo"
													aria-expanded="false"
													aria-controls="collapsePreparadoTudo"
												>
													Preparado para tudo
												</button>
											</h4>
											<div
												id="collapsePreparadoTudo"
												class="accordion-collapse collapse"
												aria-labelledby="headingPreparadoTudo"
												data-bs-parent="#aprendizPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 5 EDs para ter qualquer item (exceto armas e itens de
														combate) em sua mochila.
													</p>
													<p><strong>Requisitos:</strong> Nível 15, INT 5 e Classe Aprendiz.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingLinguaPrata">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseLinguaPrata"
													aria-expanded="false"
													aria-controls="collapseLinguaPrata"
												>
													Língua de Prata
												</button>
											</h4>
											<div
												id="collapseLinguaPrata"
												class="accordion-collapse collapse"
												aria-labelledby="headingLinguaPrata"
												data-bs-parent="#aprendizPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você sabe se comunicar muito bem (e sabe jogar truco kkkk), +5 em testes
														sociais (diplomacia, enganação, religião, intimidação). <strong
															>Você ganha +5 ao jogar truco</strong
														>.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingEmpunhaduraDupla">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseEmpunhaduraDupla"
													aria-expanded="false"
													aria-controls="collapseEmpunhaduraDupla"
												>
													Empunhadura Dupla
												</button>
											</h4>
											<div
												id="collapseEmpunhaduraDupla"
												class="accordion-collapse collapse"
												aria-labelledby="headingEmpunhaduraDupla"
												data-bs-parent="#aprendizPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode utilizar duas armas de fogo de uma mão ao mesmo tempo e dar 1
														tiro com cada uma. Se fizer isso, você tem uma penalidade de -10 no
														teste de pontaria.
													</p>
													<p><strong>Requisitos:</strong> AGI 4 e Pontaria 10 e Classe Aprendiz.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingMedicoBatalha">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseMedicoBatalha"
													aria-expanded="false"
													aria-controls="collapseMedicoBatalha"
												>
													Médico de Batalha
												</button>
											</h4>
											<div
												id="collapseMedicoBatalha"
												class="accordion-collapse collapse"
												aria-labelledby="headingMedicoBatalha"
												data-bs-parent="#aprendizPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você ganha +5 de bônus em testes de medicina e +1d de cura ao usar
														medicina em alguém.
													</p>
													<p><strong>Requisitos:</strong> INT 2, Medicina 10.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingDeNovo">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseDeNovo"
													aria-expanded="false"
													aria-controls="collapseDeNovo"
												>
													De novo
												</button>
											</h4>
											<div
												id="collapseDeNovo"
												class="accordion-collapse collapse"
												aria-labelledby="headingDeNovo"
												data-bs-parent="#aprendizPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Quando um inimigo errar um ataque contra você, você recebe 1 ED
														temporário.
													</p>
													<p><strong>Requisitos:</strong> Nível 6.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingInvestigadorNato">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseInvestigadorNato"
													aria-expanded="false"
													aria-controls="collapseInvestigadorNato"
												>
													Investigador nato
												</button>
											</h4>
											<div
												id="collapseInvestigadorNato"
												class="accordion-collapse collapse"
												aria-labelledby="headingInvestigadorNato"
												data-bs-parent="#aprendizPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Ao encontrar uma pista em uma investigação você pode gastar 3 EDs para
														receber uma informação extra.
													</p>
													<p><strong>Requisitos:</strong> Classe Aprendiz.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingPensarDuasVezes">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapsePensarDuasVezes"
													aria-expanded="false"
													aria-controls="collapsePensarDuasVezes"
												>
													Pensar duas vezes
												</button>
											</h4>
											<div
												id="collapsePensarDuasVezes"
												class="accordion-collapse collapse"
												aria-labelledby="headingPensarDuasVezes"
												data-bs-parent="#aprendizPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Se tirar 1 no dado em um teste de INT você pode rolar o teste novamente
														gastando 2 EDs. Você só pode fazer isso uma vez por teste.
													</p>
													<p><strong>Requisitos:</strong> Classe Aprendiz.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingMirar">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseMirar"
													aria-expanded="false"
													aria-controls="collapseMirar"
												>
													Mirar
												</button>
											</h4>
											<div
												id="collapseMirar"
												class="accordion-collapse collapse"
												aria-labelledby="headingMirar"
												data-bs-parent="#aprendizPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar uma ação padrão para mirar em um alvo recebendo +5 em
														testes de pontaria contra ele.
													</p>
													<p><strong>Requisitos:</strong> Agilidade 2.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingPensarDefender">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapsePensarDefender"
													aria-expanded="false"
													aria-controls="collapsePensarDefender"
												>
													Pensar e defender
												</button>
											</h4>
											<div
												id="collapsePensarDefender"
												class="accordion-collapse collapse"
												aria-labelledby="headingPensarDefender"
												data-bs-parent="#aprendizPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você sabe como se portar em uma batalha, ficando em posições favoráveis.
														Você troca o atributo de soma da defesa de Agilidade para Intelecto.
													</p>
													<p><strong>Requisitos:</strong> Classe Aprendiz, Nível 10 e INT 4.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingFurtivo">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseFurtivo"
													aria-expanded="false"
													aria-controls="collapseFurtivo"
												>
													Furtivo
												</button>
											</h4>
											<div
												id="collapseFurtivo"
												class="accordion-collapse collapse"
												aria-labelledby="headingFurtivo"
												data-bs-parent="#aprendizPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você é extremamente cauteloso e sabe bem como passar despercebido. Você
														tem +5 em testes de furtividade.
													</p>
													<p><strong>Requisitos:</strong> AGI 3 e Furtividade 10.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingTiroMagico">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseTiroMagico"
													aria-expanded="false"
													aria-controls="collapseTiroMagico"
												>
													Tiro Mágico
												</button>
											</h4>
											<div
												id="collapseTiroMagico"
												class="accordion-collapse collapse"
												aria-labelledby="headingTiroMagico"
												data-bs-parent="#aprendizPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 6 EDs ao atirar com uma arma de fogo para disparar
														tiros mágicos extras. Você causa o dano padrão da sua arma + 1d8 de dano
														mágico. Esse poder é uma magia, ou seja, pode ser fortificado.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingCuraCelestialAprendiz">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseCuraCelestialAprendiz"
													aria-expanded="false"
													aria-controls="collapseCuraCelestialAprendiz"
												>
													Cura Celestial
												</button>
											</h4>
											<div
												id="collapseCuraCelestialAprendiz"
												class="accordion-collapse collapse"
												aria-labelledby="headingCuraCelestialAprendiz"
												data-bs-parent="#aprendizPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 3 EDs para curar alguém ou você mesmo em 1d10 + 2. Caso
														use esse poder em alguém que está no estado de morrendo a pessoa sairá
														do estado de morrendo porém ficará com 1 PV, ou seja, não receberá a
														cura de 1d10 + 2.
													</p>
													<p>Esse poder não necessita de teste de Conjuração.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingPrecisaoCelestial">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapsePrecisaoCelestial"
													aria-expanded="false"
													aria-controls="collapsePrecisaoCelestial"
												>
													Precisão Celestial
												</button>
											</h4>
											<div
												id="collapsePrecisaoCelestial"
												class="accordion-collapse collapse"
												aria-labelledby="headingPrecisaoCelestial"
												data-bs-parent="#aprendizPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode imbuir energia em uma arma (corpo a corpo ou a distância) para
														ter +5 de acerto ao atacar com ela gastando 8 EDs. Essa habilidade dura
														uma cena completa. Esse poder não pode ser fortificado, porém ao chegar
														no nível 15 você pode gastar 16 EDs para ter +10 de acerto.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="accordion-item">
							<h3 class="accordion-header" id="headingDivino">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseDivino"
									aria-expanded="false"
									aria-controls="collapseDivino"
								>
									Divino
								</button>
							</h3>
							<div
								id="collapseDivino"
								class="accordion-collapse collapse"
								aria-labelledby="headingDivino"
								data-bs-parent="#classesAccordion"
							>
								<div class="accordion-body">
									<div class="accordion power-accordion" id="divinoPowersAccordion">
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingArmaduraMagica">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseArmaduraMagica"
													aria-expanded="false"
													aria-controls="collapseArmaduraMagica"
												>
													Armadura Mágica
												</button>
											</h4>
											<div
												id="collapseArmaduraMagica"
												class="accordion-collapse collapse"
												aria-labelledby="headingArmaduraMagica"
												data-bs-parent="#divinoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 4 ED para criar uma armadura mágica, concedendo
														+5&nbsp; de defesa durante uma cena. Você pode utilizar isso em outros
														players. OBS: Essa magia pode ser fortificada, porém o limite máximo de
														defesa que esse poder pode conceder é 10, custando 10 EDs. A cada ataque
														que você sofrer com essa Armadura Mágica a defesa que ela concede
														diminui em 2 e caso zere, a armadura quebra.
													</p>
													<p><strong>Requisitos:</strong> Nivel 3 ou mais.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingCuraCelestialDivino">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseCuraCelestialDivino"
													aria-expanded="false"
													aria-controls="collapseCuraCelestialDivino"
												>
													Cura Celestial
												</button>
											</h4>
											<div
												id="collapseCuraCelestialDivino"
												class="accordion-collapse collapse"
												aria-labelledby="headingCuraCelestialDivino"
												data-bs-parent="#divinoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 3 EDs para curar alguém ou você mesmo em 1d10 + 2. Caso
														use esse poder em alguém que está no estado de morrendo a pessoa sairá
														do estado de morrendo porém ficará com 1 PV, ou seja, não receberá a
														cura de 1d10 + 2.
													</p>
													<p>Esse poder não necessita de teste de Conjuração.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingEstacasInvisiveis">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseEstacasInvisiveis"
													aria-expanded="false"
													aria-controls="collapseEstacasInvisiveis"
												>
													Estacas Invisíveis
												</button>
											</h4>
											<div
												id="collapseEstacasInvisiveis"
												class="accordion-collapse collapse"
												aria-labelledby="headingEstacasInvisiveis"
												data-bs-parent="#divinoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 6 EDs para conjurar estacas mágicas embaixo do alvo,
														causando 2d8 + 2 de dano mágico.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingCorroer">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseCorroer"
													aria-expanded="false"
													aria-controls="collapseCorroer"
												>
													Corroer
												</button>
											</h4>
											<div
												id="collapseCorroer"
												class="accordion-collapse collapse"
												aria-labelledby="headingCorroer"
												data-bs-parent="#divinoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 8 EDs para lançar um líquido corrosivo feito de ED no
														alvo, causando 1d6 de dano mágico no alvo durante 1d4 turnos.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingParalisia">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseParalisia"
													aria-expanded="false"
													aria-controls="collapseParalisia"
												>
													Paralisia
												</button>
											</h4>
											<div
												id="collapseParalisia"
												class="accordion-collapse collapse"
												aria-labelledby="headingParalisia"
												data-bs-parent="#divinoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 8 EDs para lançar uma magia que força o alvo a realizar
														um teste de Fortitude (VIT) DT = teste de Conjuração (INT) do usuário.
														Caso o alvo passe no teste, nada acontece. Caso contrário, por uma
														rodada o alvo não pode agir, se mover e reagir a ataques. Um ser só pode
														sofrer os efeitos dessa habilidade uma vez por cena.
													</p>
													<p><strong>Requisitos:</strong> Classe Divino, Nível 6, Conjuração 10.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingFenix">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseFenix"
													aria-expanded="false"
													aria-controls="collapseFenix"
												>
													Fênix
												</button>
											</h4>
											<div
												id="collapseFenix"
												class="accordion-collapse collapse"
												aria-labelledby="headingFenix"
												data-bs-parent="#divinoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Invoca um pássaro feito de energia que atinge o alvo, causando 1d20 + 4
														de dano mágico. Custo: 6 EDs.
													</p>
													<p><strong>Requisitos:</strong> Nível 4.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingEnergizarMovimento">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseEnergizarMovimento"
													aria-expanded="false"
													aria-controls="collapseEnergizarMovimento"
												>
													Energizar movimento
												</button>
											</h4>
											<div
												id="collapseEnergizarMovimento"
												class="accordion-collapse collapse"
												aria-labelledby="headingEnergizarMovimento"
												data-bs-parent="#divinoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 10 EDs para ter uma ação padrão extra durante um
														combate.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingArmaDivinaDivino">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseArmaDivinaDivino"
													aria-expanded="false"
													aria-controls="collapseArmaDivinaDivino"
												>
													Arma Divina
												</button>
											</h4>
											<div
												id="collapseArmaDivinaDivino"
												class="accordion-collapse collapse"
												aria-labelledby="headingArmaDivinaDivino"
												data-bs-parent="#divinoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 6 EDs para criar uma arma simples com energia divina
														que causa 1d10 de dano mágico. Esse poder é uma magia, ou seja, pode ser
														fortificado.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingCompreensaoDivina">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseCompreensaoDivina"
													aria-expanded="false"
													aria-controls="collapseCompreensaoDivina"
												>
													Compreensão Divina
												</button>
											</h4>
											<div
												id="collapseCompreensaoDivina"
												class="accordion-collapse collapse"
												aria-labelledby="headingCompreensaoDivina"
												data-bs-parent="#divinoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você compreende muito bem sua própria energia, sendo assim, sabe como
														utilizá-la bem. Você ganha +5 em Conjuração.
													</p>
													<p><strong>Requisitos:</strong> Espírito 4.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingMeditacao">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseMeditacao"
													aria-expanded="false"
													aria-controls="collapseMeditacao"
												>
													Meditação
												</button>
											</h4>
											<div
												id="collapseMeditacao"
												class="accordion-collapse collapse"
												aria-labelledby="headingMeditacao"
												data-bs-parent="#divinoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode passar um tempo meditando para recuperar EDs. Em cenas de
														interlúdio, você gasta uma das 2 ações da cena para recuperar 1d8 + 4
														EDs. Em combate, você recupera 1d8 + 2 se ficar uma rodada completa
														meditando. Além disso, se fizer isso em combate você não pode reagir a
														ataques.
													</p>
													<p><strong>Requisitos:</strong> Concentração 10 e Nível 5.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingImbuirEnergiaDivino">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseImbuirEnergiaDivino"
													aria-expanded="false"
													aria-controls="collapseImbuirEnergiaDivino"
												>
													Imbuir Energia
												</button>
											</h4>
											<div
												id="collapseImbuirEnergiaDivino"
												class="accordion-collapse collapse"
												aria-labelledby="headingImbuirEnergiaDivino"
												data-bs-parent="#divinoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode imbuir energia em uma arma corpo a corpo para conceder +1d10
														de dano divino extra no golpe. Custo 5 EDs. Esse poder é uma magia, ou
														seja, pode ser fortificado.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingRegeneracaoCombate">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseRegeneracaoCombate"
													aria-expanded="false"
													aria-controls="collapseRegeneracaoCombate"
												>
													Regeneração de Combate
												</button>
											</h4>
											<div
												id="collapseRegeneracaoCombate"
												class="accordion-collapse collapse"
												aria-labelledby="headingRegeneracaoCombate"
												data-bs-parent="#divinoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Ao entrar em uma cena de combate você recebe o dobro do seu valor de
														Espírito (ESP) em EDs temporários. Você perde esses EDs no fim da cena.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingPlanoVerdade">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapsePlanoVerdade"
													aria-expanded="false"
													aria-controls="collapsePlanoVerdade"
												>
													Plano da Verdade
												</button>
											</h4>
											<div
												id="collapsePlanoVerdade"
												class="accordion-collapse collapse"
												aria-labelledby="headingPlanoVerdade"
												data-bs-parent="#divinoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você invade a mente do alvo, forçando ele a responder uma pergunta com
														"sim" ou "não", sempre dizendo a verdade. Você gasta 6 EDs para
														Conjuração este poder e o alvo pode resistir a ele rolando um teste de
														Vontade DT = Conjuração do usuário do poder. Esse poder não pode ser
														fortificado.
													</p>
													<p>
														<strong>Requisitos:</strong> Classe Divino ou Aprendiz, Nível 10 e Conjuração
														15.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingIntuicaoDivina">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseIntuicaoDivina"
													aria-expanded="false"
													aria-controls="collapseIntuicaoDivina"
												>
													Intuição Divina
												</button>
											</h4>
											<div
												id="collapseIntuicaoDivina"
												class="accordion-collapse collapse"
												aria-labelledby="headingIntuicaoDivina"
												data-bs-parent="#divinoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Sempre que fizer um teste de investigação você ganha um bônus
														equivalente a seu Espírito no teste.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingAindaNao">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseAindaNao"
													aria-expanded="false"
													aria-controls="collapseAindaNao"
												>
													Ainda não
												</button>
											</h4>
											<div
												id="collapseAindaNao"
												class="accordion-collapse collapse"
												aria-labelledby="headingAindaNao"
												data-bs-parent="#divinoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Uma vez a cada 3 cenas (não cumulativo), ao zerar seus PVs, você volta a
														vida com 1 PV através da energia de sua Linhagem.
													</p>
													<p><strong>Requisitos:</strong> Classe Divino, Nível 10 e VIT 3.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingMudarMemorias">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseMudarMemorias"
													aria-expanded="false"
													aria-controls="collapseMudarMemorias"
												>
													Mudar Memórias
												</button>
											</h4>
											<div
												id="collapseMudarMemorias"
												class="accordion-collapse collapse"
												aria-labelledby="headingMudarMemorias"
												data-bs-parent="#divinoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 8 EDs para tentar invadir a mente do alvo realizando um
														teste de Conjuração (DT = teste de vontade do alvo). Caso consiga, você
														pode alterar uma pequena parte da memória <strong>recente</strong> do alvo.
													</p>
													<p>
														<strong>Requisitos:</strong> Classe Divino, Nível 8 e Conjuração 10.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingCanhaoEnergia">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseCanhaoEnergia"
													aria-expanded="false"
													aria-controls="collapseCanhaoEnergia"
												>
													Canhão de Energia
												</button>
											</h4>
											<div
												id="collapseCanhaoEnergia"
												class="accordion-collapse collapse"
												aria-labelledby="headingCanhaoEnergia"
												data-bs-parent="#divinoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode concentrar energia e lançar no alvo, causando dano divino.
														Você gasta 8 EDs para dar 2d10 + 2 de dano. Esse poder é uma magia, ou
														seja, pode ser fortificado.
													</p>
													<p><strong>Requisitos:</strong> Nível 6, Conjurar 10.&nbsp;</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingSacrificioRevigorante">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseSacrificioRevigorante"
													aria-expanded="false"
													aria-controls="collapseSacrificioRevigorante"
												>
													Sacrifício Revigorante
												</button>
											</h4>
											<div
												id="collapseSacrificioRevigorante"
												class="accordion-collapse collapse"
												aria-labelledby="headingSacrificioRevigorante"
												data-bs-parent="#divinoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode, uma vez a cada 3 cenas, sacrificar PVs em troca de EDs. Você
														recebe uma quantidade de EDs igual ao dobro de PVs que você sacrificou,
														porém esses PVs perdidos só podem ser recuperados na cena seguinte. Ou
														seja, ao utilizar essa habilidade, você só poderá curar os PVs perdidos
														ao fim da cena atual. O limite de EDs que você pode ganhar com essa
														habilidade é igual ao seu VC (Vigor Celestial / Limite de EDs que você
														pode utilizar por rodada).
													</p>
													<p><strong>Requisitos:</strong> Nível 8, VIT 3.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingRefletirAtaques">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseRefletirAtaques"
													aria-expanded="false"
													aria-controls="collapseRefletirAtaques"
												>
													Refletir Ataques
												</button>
											</h4>
											<div
												id="collapseRefletirAtaques"
												class="accordion-collapse collapse"
												aria-labelledby="headingRefletirAtaques"
												data-bs-parent="#divinoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 12 EDs para refletir um ataque corpo a corpo com
														energia divina como ação de reação. Você rola um teste de Conjuração (DT
														= acerto do atacante), e caso passe você não toma o ataque e devolve 5%
														do dano para quem te atacou.
													</p>
													<p><strong>Requisitos:</strong> Nível 8.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="accordion-item">
			<h2 class="accordion-header" id="headingMainLinhagens">
				<button
					class="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseMainLinhagens"
					aria-expanded="false"
					aria-controls="collapseMainLinhagens"
				>
					Poderes das Linhagens
				</button>
			</h2>
			<div
				id="collapseMainLinhagens"
				class="accordion-collapse collapse"
				aria-labelledby="headingMainLinhagens"
				data-bs-parent="#mainAccordion"
			>
				<div class="accordion-body">
					<div class="accordion sub-accordion" id="linhagensAccordion">
						<div class="accordion-item">
							<h3 class="accordion-header" id="headingCaos">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseCaos"
									aria-expanded="false"
									aria-controls="collapseCaos"
								>
									Caos
								</button>
							</h3>
							<div
								id="collapseCaos"
								class="accordion-collapse collapse"
								aria-labelledby="headingCaos"
								data-bs-parent="#linhagensAccordion"
							>
								<div class="accordion-body">
									<div class="accordion power-accordion" id="caosPowersAccordion">
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingFluxoCaos">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseFluxoCaos"
													aria-expanded="false"
													aria-controls="collapseFluxoCaos"
												>
													Fluxo do Caos
												</button>
											</h4>
											<div
												id="collapseFluxoCaos"
												class="accordion-collapse collapse"
												aria-labelledby="headingFluxoCaos"
												data-bs-parent="#caosPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você deixa um pouco da energia do Caos fluir em você, concedendo +1d8 de
														dano Caótico em ataques corpo a corpo. Se acertar um golpe com essa
														habilidade ativa você ganha metade do dano caótico causado em PV. Custo:
														3 EDs.
													</p>
													<p>
														Quando for conectado com a Marca do Caos (Nível 20+), esse poder fica
														mais forte, concedendo 2d8 + 4 ao invés de 1d4, porém custando 6 EDs.
														OBS: Você pode escolher entre usar a forma do poder conectado com a
														Marca ou Não.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingQueimarAlma">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseQueimarAlma"
													aria-expanded="false"
													aria-controls="collapseQueimarAlma"
												>
													Queimar Alma
												</button>
											</h4>
											<div
												id="collapseQueimarAlma"
												class="accordion-collapse collapse"
												aria-labelledby="headingQueimarAlma"
												data-bs-parent="#caosPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 5 EDs para atacar a alma do Alvo com energia caótica,
														causando 1d10 de dano de VE no alvo. Você pode sustentar esse poder,
														porém o custo do poder aumenta em +1 EDs por rodada.
													</p>
													<p>
														Quando for conectado com a Marca do Caos (Nível 20+) o poder fica mais
														forte, causando 2d10 ao invés de 1d10, porém gastando 6 EDs para
														Conjuração e o custo aumenta em +2 por rodada sustentando.
													</p>
													<p>
														Você pode escolher entre a forma do poder conectada com a Marca ou não.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingObstrucaoCaotica">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseObstrucaoCaotica"
													aria-expanded="false"
													aria-controls="collapseObstrucaoCaotica"
												>
													Obstrução Caótica
												</button>
											</h4>
											<div
												id="collapseObstrucaoCaotica"
												class="accordion-collapse collapse"
												aria-labelledby="headingObstrucaoCaotica"
												data-bs-parent="#caosPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 3 EDs para causar 1d10 de dano caótico em objetos ou
														1d8 em pessoas/criaturas. Quando for conectado com a Marca do Caos
														(Nível 20+) o poder fica mais forte, concedendo 2d12 em objetos ou 2d10
														em pessoas/criaturas porém custando 5 EDs.
													</p>
													<p>
														Você pode escolher entre a forma do poder conectada com a Marca ou não.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingAtritoCaotico">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseAtritoCaotico"
													aria-expanded="false"
													aria-controls="collapseAtritoCaotico"
												>
													Atrito Caótico
												</button>
											</h4>
											<div
												id="collapseAtritoCaotico"
												class="accordion-collapse collapse"
												aria-labelledby="headingAtritoCaotico"
												data-bs-parent="#caosPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 6 EDs para cortar o deslocamento do alvo pela metade
														durante 1d4 rodadas. Quando for conectado com a Marca do Caos (Nível
														20+) você pode, além de cortar o deslocamento pela metade, diminuir a
														defesa do alvo em 5, porém gastando 10 EDs. Um alvo não pode receber
														esta habilidade mais de uma vez por combate.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingVisaoInfernal">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseVisaoInfernal"
													aria-expanded="false"
													aria-controls="collapseVisaoInfernal"
												>
													Visão Infernal
												</button>
											</h4>
											<div
												id="collapseVisaoInfernal"
												class="accordion-collapse collapse"
												aria-labelledby="headingVisaoInfernal"
												data-bs-parent="#caosPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você lança uma ilusão na mente do alvo que o faz ver um cenário
														horrível, mostrando seu pior pesadelo de forma estranha e caótica. O
														alvo deve fazer um teste de Vontade (ESP) DT = teste de Conjuração (INT)
														do usuário do poder. Se passar, o alvo recebe -5 em todos os testes
														pelas próximas 1d2 rodadas, e caso não passe no teste o alvo recebe -5
														em todos os testes por 1d3 + 1 rodadas e fica com a condição Pasmo por
														uma rodada. Um alvo não pode receber esta habilidade mais de uma vez por
														combate.
													</p>
													<p>Custo: 4 EDs.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingMantoCaotico">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseMantoCaotico"
													aria-expanded="false"
													aria-controls="collapseMantoCaotico"
												>
													Manto Caótico
												</button>
											</h4>
											<div
												id="collapseMantoCaotico"
												class="accordion-collapse collapse"
												aria-labelledby="headingMantoCaotico"
												data-bs-parent="#caosPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														O usuário ganha uma aura de energia caótica que concede cura acelerada
														além de aumentar o dano de magias. A cura acelerada que o usuário ganha
														nesta forma é igual ao dobro de seu valor de vitalidade e o dano extra
														nas magias é igual a 3 dados de dano extra. Além disso, todos os
														inimigos que estiverem em um raio de 3m de você recebem -5 em qualquer
														teste(OBS: Não cumulativo, o que significa que se duas pessoas ativarem
														esta forma a desvantagem concedida será de -5 e não -10).
													</p>
													<p>
														<strong>Requisitos:</strong> Ser conectado com a marca do Caos (Nível 20+).
													</p>
													<p>
														Custo: 10 EDs para ativar e 4 EDs por rodada para manter ativo, com o
														custo aumentando em 1 a cada rodada ativa. Exemplo: 10 EDs para ativar,
														4 EDs para manter por mais uma rodada, depois 5 EDs e etc...
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingSentirEnergiaCaos">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseSentirEnergiaCaos"
													aria-expanded="false"
													aria-controls="collapseSentirEnergiaCaos"
												>
													Sentir Energia
												</button>
											</h4>
											<div
												id="collapseSentirEnergiaCaos"
												class="accordion-collapse collapse"
												aria-labelledby="headingSentirEnergiaCaos"
												data-bs-parent="#caosPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 2 EDs para escanear a área ao redor de você em busca de
														Energia Divina.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="accordion-item">
							<h3 class="accordion-header" id="headingAnciao">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseAnciao"
									aria-expanded="false"
									aria-controls="collapseAnciao"
								>
									Ancião
								</button>
							</h3>
							<div
								id="collapseAnciao"
								class="accordion-collapse collapse"
								aria-labelledby="headingAnciao"
								data-bs-parent="#linhagensAccordion"
							>
								<div class="accordion-body">
									<div class="accordion power-accordion" id="anciaoPowersAccordion">
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingLaminaAnciao">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseLaminaAnciao"
													aria-expanded="false"
													aria-controls="collapseLaminaAnciao"
												>
													Lâmina do Ancião
												</button>
											</h4>
											<div
												id="collapseLaminaAnciao"
												class="accordion-collapse collapse"
												aria-labelledby="headingLaminaAnciao"
												data-bs-parent="#anciaoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Conjura uma lâmina mágica com coloração branca e azul, que pode ser
														utilizada para atacar um alvo adjacente, causando 2d10 de dano divino.
														Custo: 5 EDs
													</p>
													<p>
														Quando for conectado com a Marca do Ancião (Nível 20+), esse poder fica
														mais forte, causando 4d12 de dano divino custando 10 EDs. OBS: Você pode
														escolher entre usar a forma do poder conectado com a Marca ou Não.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingMenteCosmica">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseMenteCosmica"
													aria-expanded="false"
													aria-controls="collapseMenteCosmica"
												>
													Mente Cósmica
												</button>
											</h4>
											<div
												id="collapseMenteCosmica"
												class="accordion-collapse collapse"
												aria-labelledby="headingMenteCosmica"
												data-bs-parent="#anciaoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você se tornou mais calmo e frio devido a sua conexão com o Ancião. Você
														ganha um bônus de +5 em testes de "Concentração". Quando for conectado
														com a Marca do Ancião (Nível 20+), esse poder fica mais forte,
														concedendo +10 de bônus.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingSabedoriaAnciao">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseSabedoriaAnciao"
													aria-expanded="false"
													aria-controls="collapseSabedoriaAnciao"
												>
													Sabedoria
												</button>
											</h4>
											<div
												id="collapseSabedoriaAnciao"
												class="accordion-collapse collapse"
												aria-labelledby="headingSabedoriaAnciao"
												data-bs-parent="#anciaoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 4 EDs para analisar um objeto que esteja em seu campo
														de visão para saber mais sobre ele. OBS: Esse poder pode não funcionar
														muito bem com itens com <em>GRANDE</em> carga mágica ou itens especiais.
														Nestes casos você provavelmente não conseguiria reconhecer funções e/ou poderes
														relacionados a magias do objeto. Em objetos comuns ou objetos com carga mágica
														baixa o poder não é prejudicado.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingExplosaoCosmica">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseExplosaoCosmica"
													aria-expanded="false"
													aria-controls="collapseExplosaoCosmica"
												>
													Explosão Cósmica
												</button>
											</h4>
											<div
												id="collapseExplosaoCosmica"
												class="accordion-collapse collapse"
												aria-labelledby="headingExplosaoCosmica"
												data-bs-parent="#anciaoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 6 EDs para criar uma explosão de energia do Ancião em
														uma área de 2 metros, causando 2d8 de dano dano divino nessa área.
														Quando for conectado com a Marca do Ancião (Nível 20+), esse poder fica
														mais forte, concedendo 2d10 + 4 porém custando 8 EDs.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingResistenciaCosmica">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseResistenciaCosmica"
													aria-expanded="false"
													aria-controls="collapseResistenciaCosmica"
												>
													Resistência Cósmica
												</button>
											</h4>
											<div
												id="collapseResistenciaCosmica"
												class="accordion-collapse collapse"
												aria-labelledby="headingResistenciaCosmica"
												data-bs-parent="#anciaoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 6 EDs ao tomar um dano corpo a corpo (físico) para
														reduzir o dano recebido equivalente ao valor de treinamento de sua
														perícia de Conjuração. Quando for conectado com a Marca do Ancião (Nível
														20+), esse poder fica mais forte, concedendo o valor de treinamento de
														sua perícia de Conjuração + 5 porém custando 10 EDs.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingMantoCosmico">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseMantoCosmico"
													aria-expanded="false"
													aria-controls="collapseMantoCosmico"
												>
													Manto Cósmico
												</button>
											</h4>
											<div
												id="collapseMantoCosmico"
												class="accordion-collapse collapse"
												aria-labelledby="headingMantoCosmico"
												data-bs-parent="#anciaoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														O usuário ganha uma aura de energia cósmica que concede cura acelerada
														além de aumentar o dano de magias. A cura acelerada que o usuário ganha
														nesta forma é igual ao dobro de seu valor de vitalidade e o dano extra
														nas magias é igual a 3 dados de dano extra. Além disso, você e aliados
														que estiverem em um raio de 3m de você recebem +5 em qualquer teste
														(OBS: Não cumulativo, o que significa que se duas pessoas ativarem esta
														forma o bônus concedido será de +5 e não +10).
													</p>
													<p>
														<strong>Requisitos:</strong> Ser conectado com a marca do Ancião (Nível 20+).
													</p>
													<p>
														Custo: 10 EDs para ativar e 4 EDs por rodada para manter ativo, com o
														custo aumentando em 1 a cada rodada ativa. Exemplo: 10 EDs para ativar,
														4 EDs para manter por mais uma rodada, depois 5 EDs e etc...
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingSentirEnergiaAnciao">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseSentirEnergiaAnciao"
													aria-expanded="false"
													aria-controls="collapseSentirEnergiaAnciao"
												>
													Sentir Energia
												</button>
											</h4>
											<div
												id="collapseSentirEnergiaAnciao"
												class="accordion-collapse collapse"
												aria-labelledby="headingSentirEnergiaAnciao"
												data-bs-parent="#anciaoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 2 EDs para escanear a área ao redor de você em busca de
														Energia Divina.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="accordion-item">
							<h3 class="accordion-header" id="headingNeutro">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseNeutro"
									aria-expanded="false"
									aria-controls="collapseNeutro"
								>
									Neutro
								</button>
							</h3>
							<div
								id="collapseNeutro"
								class="accordion-collapse collapse"
								aria-labelledby="headingNeutro"
								data-bs-parent="#linhagensAccordion"
							>
								<div class="accordion-body">
									<div class="accordion power-accordion" id="neutroPowersAccordion">
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingAtaqueEntidade">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseAtaqueEntidade"
													aria-expanded="false"
													aria-controls="collapseAtaqueEntidade"
												>
													Ataque da Entidade
												</button>
											</h4>
											<div
												id="collapseAtaqueEntidade"
												class="accordion-collapse collapse"
												aria-labelledby="headingAtaqueEntidade"
												data-bs-parent="#neutroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 12 EDs para invocar a energia do neutro em algum
														ataque, causando +1d (do mesmo tipo de dado padrão da arma. Ex: 1d12
														---&gt; 2d12) de dano nesse golpe.&nbsp;
													</p>
													<p>
														Quando for conectado com a Marca do Neutro (Nível 20+), esse poder fica
														mais forte, aumentando +2d de dano no golpe gastando 20 EDs. OBS: Você
														pode escolher entre usar a forma do poder conectado com a Marca ou Não.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingVelocidadeNeutral">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseVelocidadeNeutral"
													aria-expanded="false"
													aria-controls="collapseVelocidadeNeutral"
												>
													Velocidade Neutral
												</button>
											</h4>
											<div
												id="collapseVelocidadeNeutral"
												class="accordion-collapse collapse"
												aria-labelledby="headingVelocidadeNeutral"
												data-bs-parent="#neutroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você utiliza da energia do Neutro para aumentar sua velocidade por um
														curto período de tempo. Por 1d4 rodadas seu deslocamento aumenta em 5m e
														ganha um bônus temporário de +5 em reflexo. Custo: 4 EDs.
													</p>
													<p>
														Quando for conectado com a Marca do Neutro (Nível 20+) o poder fica mais
														forte, concedendo 10m de deslocamento e +10 em reflexos durante a cena
														de combate inteiro custando 14 EDs. OBS: Esse poder só pode ser
														utilizado uma vez por combate.
													</p>
													<p>
														Você pode escolher entre a forma do poder conectada com a Marca ou não.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingVisaoOtimizada">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseVisaoOtimizada"
													aria-expanded="false"
													aria-controls="collapseVisaoOtimizada"
												>
													Visão Otimizada
												</button>
											</h4>
											<div
												id="collapseVisaoOtimizada"
												class="accordion-collapse collapse"
												aria-labelledby="headingVisaoOtimizada"
												data-bs-parent="#neutroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você se concentra apenas na batalha e nos inimigos que estão ao seu
														redor, te concedendo um bônus de +5 para acertar inimigos com um custo
														de 3 EDs por rodada. Quando for conectado com a Marca do Neutro (Nível
														20+) o bônus passa a ser de +10, porém custando 4 EDs por rodada.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingGolpesContundentes">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseGolpesContundentes"
													aria-expanded="false"
													aria-controls="collapseGolpesContundentes"
												>
													Golpes Contundentes
												</button>
											</h4>
											<div
												id="collapseGolpesContundentes"
												class="accordion-collapse collapse"
												aria-labelledby="headingGolpesContundentes"
												data-bs-parent="#neutroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 6 EDs para imbuir energia do neutro em alguma arma ou
														em seus própios punhos para que os golpes desferidos com essa arma ou
														punho afaste os alvos 3m para a direção do golpe (o alvo sofre dano ao
														bater em paredes/objetos a depender do material da parede/objeto).
														Quando for conectado com a Marca do Neutro (Nível 20+) você pode tentar
														derrubar o alvo com este golpe (Deixá-lo em condição de caído), forçando
														o alvo a fazer um teste de Fortitude contra o teste de Luta usado no
														golpe.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingCombatePreciso">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseCombatePreciso"
													aria-expanded="false"
													aria-controls="collapseCombatePreciso"
												>
													Combate Preciso
												</button>
											</h4>
											<div
												id="collapseCombatePreciso"
												class="accordion-collapse collapse"
												aria-labelledby="headingCombatePreciso"
												data-bs-parent="#neutroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Sempre que for fazer uma jogada ofensiva você terá um bônus equivalente
														a metade do valor de treinamento de sua perícia de Luta no acerto da
														jogada. Ao se conectar com a Marca do Neutro (Nível 20+) você poderá,
														uma vez por rodada, gastar 6 EDs para rolar novamente um dado menor ou
														igual a 5 no acerto de alguma jogada ofensiva.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingMantoNeutro">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseMantoNeutro"
													aria-expanded="false"
													aria-controls="collapseMantoNeutro"
												>
													Manto do Neutro
												</button>
											</h4>
											<div
												id="collapseMantoNeutro"
												class="accordion-collapse collapse"
												aria-labelledby="headingMantoNeutro"
												data-bs-parent="#neutroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														O usuário ganha uma aura de energia do neutro que concede cura acelerada
														além de aumentar o dano de golpes corpo a corpo. A cura acelerada que o
														usuário ganha nesta forma é igual ao triplo de seu valor de Vitalidade e
														o dano extra nos golpes corpo a corpo é de 1d + 1d8. Além disso, todos
														que te atacarem fisicamente receberão 1d8 de dano físico de volta.
													</p>
													<p>
														<strong>Requisitos:</strong> Ser conectado com a marca do Neutro (Nível 20+).
													</p>
													<p>
														Custo: 10 EDs para ativar e 4 EDs por rodada para manter ativo, com o
														custo aumentando em 1 a cada rodada ativa. Exemplo: 10 EDs para ativar,
														4 EDs para manter por mais uma rodada, depois 5 EDs e etc...
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingSentirEnergiaNeutro">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseSentirEnergiaNeutro"
													aria-expanded="false"
													aria-controls="collapseSentirEnergiaNeutro"
												>
													Sentir Energia
												</button>
											</h4>
											<div
												id="collapseSentirEnergiaNeutro"
												class="accordion-collapse collapse"
												aria-labelledby="headingSentirEnergiaNeutro"
												data-bs-parent="#neutroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 2 EDs para escanear a área ao redor de você em busca de
														Energia Divina.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="accordion-item">
			<h2 class="accordion-header" id="headingMainMarcas">
				<button
					class="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseMainMarcas"
					aria-expanded="false"
					aria-controls="collapseMainMarcas"
				>
					Poderes de Conexão com as Marcas
				</button>
			</h2>
			<div
				id="collapseMainMarcas"
				class="accordion-collapse collapse"
				aria-labelledby="headingMainMarcas"
				data-bs-parent="#mainAccordion"
			>
				<div class="accordion-body">
					<div class="accordion sub-accordion" id="marcasAccordion">
						<div class="accordion-item">
							<h3 class="accordion-header" id="headingMarcaAnciao">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseMarcaAnciao"
									aria-expanded="false"
									aria-controls="collapseMarcaAnciao"
								>
									Ancião
								</button>
							</h3>
							<div
								id="collapseMarcaAnciao"
								class="accordion-collapse collapse"
								aria-labelledby="headingMarcaAnciao"
								data-bs-parent="#marcasAccordion"
							>
								<div class="accordion-body">
									<div class="accordion power-accordion" id="marcaAnciaoPowersAccordion">
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingSuporteAnciao">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseSuporteAnciao"
													aria-expanded="false"
													aria-controls="collapseSuporteAnciao"
												>
													Suporte do Ancião
												</button>
											</h4>
											<div
												id="collapseSuporteAnciao"
												class="accordion-collapse collapse"
												aria-labelledby="headingSuporteAnciao"
												data-bs-parent="#marcaAnciaoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você e todos os seus aliados recebem uma cura acelerada igual ao dobro
														do seu bônus de "Conjuração" e 1d20 de dano divino (ancião) extra em
														qualquer tipo de ataque. Você gasta 15 EDs por rodada para manter essa
														magia ativa, além de precisar "sustentar a magia".&nbsp;
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingTransferirEnergia">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseTransferirEnergia"
													aria-expanded="false"
													aria-controls="collapseTransferirEnergia"
												>
													Transferir Energia
												</button>
											</h4>
											<div
												id="collapseTransferirEnergia"
												class="accordion-collapse collapse"
												aria-labelledby="headingTransferirEnergia"
												data-bs-parent="#marcaAnciaoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode transferir seus EDs para qualquer outra entidade/pessoa.
														Máximo de EDs que você pode transferir (por alvo) na cena: 30.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingCurarEssencia">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseCurarEssencia"
													aria-expanded="false"
													aria-controls="collapseCurarEssencia"
												>
													Curar Essência
												</button>
											</h4>
											<div
												id="collapseCurarEssencia"
												class="accordion-collapse collapse"
												aria-labelledby="headingCurarEssencia"
												data-bs-parent="#marcaAnciaoPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Sua conexão com o Ancião te permite curar sua Alma e a dos outros. Você
														pode curar até 30 de VEs a cada 3 cenas. Você gasta EDs equivalentes ao
														dobro de VEs que você quer curar do alvo para conjurar esta magia.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="accordion-item">
							<h3 class="accordion-header" id="headingMarcaCaos">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseMarcaCaos"
									aria-expanded="false"
									aria-controls="collapseMarcaCaos"
								>
									Caos
								</button>
							</h3>
							<div
								id="collapseMarcaCaos"
								class="accordion-collapse collapse"
								aria-labelledby="headingMarcaCaos"
								data-bs-parent="#marcasAccordion"
							>
								<div class="accordion-body">
									<div class="accordion power-accordion" id="marcaCaosPowersAccordion">
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingPersonificarCaos">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapsePersonificarCaos"
													aria-expanded="false"
													aria-controls="collapsePersonificarCaos"
												>
													Personificar o Caos
												</button>
											</h4>
											<div
												id="collapsePersonificarCaos"
												class="accordion-collapse collapse"
												aria-labelledby="headingPersonificarCaos"
												data-bs-parent="#marcaCaosPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														O usuário traz a energia do caos em uma área de 3 metros ao redor de si
														mesmo. Todos que estiverem nessa área terão -10 em qualquer teste.
													</p>
													<p>
														Você precisa sustentar essa magia todas as rodadas para mantê-la ativa.
														Você gasta 15 EDs para conjurar e manter a magia.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingGolpeCaotico">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseGolpeCaotico"
													aria-expanded="false"
													aria-controls="collapseGolpeCaotico"
												>
													Golpe Caótico
												</button>
											</h4>
											<div
												id="collapseGolpeCaotico"
												class="accordion-collapse collapse"
												aria-labelledby="headingGolpeCaotico"
												data-bs-parent="#marcaCaosPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode gastar 8 ED para adicionar 2d20 de dano divino (caótico) em um
														golpe corpo a corpo.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingRevigoramentoCaos">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseRevigoramentoCaos"
													aria-expanded="false"
													aria-controls="collapseRevigoramentoCaos"
												>
													Revigoramento do Caos
												</button>
											</h4>
											<div
												id="collapseRevigoramentoCaos"
												class="accordion-collapse collapse"
												aria-labelledby="headingRevigoramentoCaos"
												data-bs-parent="#marcaCaosPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Você pode converter seu Vigor Essencial (VE), ou seja, a integridade da
														sua alma em Energia Divina (ED). Você ganha EDs igual ao dobro dos VEs
														que você sacrificou. Você só pode usar essa habilidade uma vez a cada 3
														cenas.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="accordion-item">
							<h3 class="accordion-header" id="headingMarcaNeutro">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseMarcaNeutro"
									aria-expanded="false"
									aria-controls="collapseMarcaNeutro"
								>
									Neutro
								</button>
							</h3>
							<div
								id="collapseMarcaNeutro"
								class="accordion-collapse collapse"
								aria-labelledby="headingMarcaNeutro"
								data-bs-parent="#marcasAccordion"
							>
								<div class="accordion-body">
									<div class="accordion power-accordion" id="marcaNeutroPowersAccordion">
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingSabedoriaNeutro">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseSabedoriaNeutro"
													aria-expanded="false"
													aria-controls="collapseSabedoriaNeutro"
												>
													Sabedoria do Neutro
												</button>
											</h4>
											<div
												id="collapseSabedoriaNeutro"
												class="accordion-collapse collapse"
												aria-labelledby="headingSabedoriaNeutro"
												data-bs-parent="#marcaNeutroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>Sua conexão com o Neutro te deu uma sabedoria de Combate elevada.</p>
													<p>Você ganha +5 de bônus em Luta, Reflexos, Pontaria e Fortitude.</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingGolpeLacerante">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseGolpeLacerante"
													aria-expanded="false"
													aria-controls="collapseGolpeLacerante"
												>
													Golpe Lacerante
												</button>
											</h4>
											<div
												id="collapseGolpeLacerante"
												class="accordion-collapse collapse"
												aria-labelledby="headingGolpeLacerante"
												data-bs-parent="#marcaNeutroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Seus golpes são sobre-humanos graças a sua conexão com a entidade do
														Neutro.
													</p>
													<p>
														Você pode gastar 8 EDs para dar 2d20 de dano físico a mais. Se quiser,
														você pode gastar 6 EDs a mais para diminuir a RD física do alvo igual ao
														valor de bônus da sua perícia de Luta.
													</p>
												</div>
											</div>
										</div>
										<div class="accordion-item">
											<h4 class="accordion-header" id="headingDefesaAbsoluta">
												<button
													class="accordion-button collapsed"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target="#collapseDefesaAbsoluta"
													aria-expanded="false"
													aria-controls="collapseDefesaAbsoluta"
												>
													Defesa Absoluta
												</button>
											</h4>
											<div
												id="collapseDefesaAbsoluta"
												class="accordion-collapse collapse"
												aria-labelledby="headingDefesaAbsoluta"
												data-bs-parent="#marcaNeutroPowersAccordion"
											>
												<div class="accordion-body power-details">
													<p>
														Seu instinto ficou mais aguçado, você tem quase que um terceiro olho.
														Você recebe +5 em defesa.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
