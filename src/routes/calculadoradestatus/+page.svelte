<script>
	import { tabActive } from '$lib/siteData';
	tabActive.set(5);
	let forca = $state(1);
	let vitalidade = $state(1);
	let intelecto = $state(1);
	let espirito = $state(1);
	let agilidade = $state(1);
	let pvB = $state(0);
	let edB = $state(0);
	let vcB = $state(0);
	let veB = $state(0);
	let classeSelected = $state(0); // 0 = g; 1 = d ; 2 = a;
	let nivel = $state(1);
    let resultado = $state([0, 0, 0, 0]) // pv, ed, vc, ve

    function calcularResultado(){
		if ( 
			forca === "" || vitalidade === "" || intelecto === "" || espirito === "" || agilidade === "" || pvB === "" || edB === "" || vcB === "" || veB === ""
			|| classeSelected === "" || nivel === ""
		) return
        forca = Number.parseInt(forca) 
        vitalidade = Number.parseInt(vitalidade)
        intelecto = Number.parseInt(intelecto) 
        espirito = Number.parseInt(espirito) 
        agilidade = Number.parseInt(agilidade) 
        pvB = Number.parseInt(pvB) 
        edB = Number.parseInt(edB) 
        vcB = Number.parseInt(vcB) 
        veB = Number.parseInt(veB) 
        classeSelected = Number.parseInt(classeSelected) 
        nivel = Number.parseInt(nivel) 
        let pv, ed, vc, ve
        let nFinal = nivel-1
        if(classeSelected == 0){
            pv = 20 + vitalidade + pvB
            ed = 10 + espirito + edB
            vc = 10 + vcB
            ve = 60 + espirito + veB
            if(nivel >= 36){
                pv += (6 + vitalidade + pvB) * 34
                ed += (3 + espirito + edB) * 34
                vc += (2 + vcB) * 34
                ve += (6 + espirito + pvB) * 34
                pv *= 2
                ed *= 2
                vc *= 2
                ve *= 2
                pv += (6 + vitalidade + pvB) * (nFinal - 35) + pvB
                ed += (3 + espirito + edB) * (nFinal - 35) + edB
                vc += (2 + vcB) * (nFinal - 35) + vcB
                ve += (6 + espirito + pvB) * (nFinal - 35) + veB
            } else {
                pv += (6 + vitalidade + pvB) * nFinal
                ed += (3 + espirito + edB) * nFinal
                vc += (2 + vcB) * nFinal
                ve += (6 + espirito + pvB) * nFinal
            }
        } else if (classeSelected == 1){
            pv = 10 + vitalidade + pvB
            ed = 20 + espirito + edB
            vc = 20 + vcB
            ve = 40 + espirito + veB
            if(nivel >= 36){
                pv += (3 + vitalidade + pvB) * 34
                ed += (6 + espirito + edB) * 34
                vc += (4 + vcB) * 34
                ve += (3 + espirito + pvB) * 34
                pv *= 2
                ed *= 2
                vc *= 2
                ve *= 2
                pv += (3 + vitalidade + pvB) * (nFinal - 35) + pvB
                ed += (6 + espirito + edB) * (nFinal - 35) + edB
                vc += (4 + vcB) * (nFinal - 35) + vcB
                ve += (3 + espirito + pvB) * (nFinal - 35) + veB
            } else {
                pv += (3 + vitalidade + pvB) * nFinal
                ed += (6 + espirito + edB) * nFinal
                vc += (4 + vcB) * nFinal
                ve += (3 + espirito + pvB) * nFinal
            }
        } else {
            pv = 15 + vitalidade + pvB
            ed = 15 + espirito + edB
            vc = 15 + vcB
            ve = 50 + espirito + veB
            if(nivel >= 36){
                pv += (4 + vitalidade + pvB) * 34
                ed += (4 + espirito + edB) * 34
                vc += (3 + vcB) * 34
                ve += (4 + espirito + pvB) * 34
                pv *= 2
                ed *= 2
                vc *= 2
                ve *= 2
                pv += (4 + vitalidade + pvB) * (nFinal - 35) + pvB
                ed += (4 + espirito + edB) * (nFinal - 35) + edB
                vc += (3 + vcB) * (nFinal - 35) + vcB
                ve += (4 + espirito + pvB) * (nFinal - 35) + veB
            } else {
                pv += (4 + vitalidade + pvB) * nFinal
                ed += (4 + espirito + edB) * nFinal
                vc += (3 + vcB) * nFinal
                ve += (4 + espirito + pvB) * nFinal
            }
        }
        resultado = [pv, ed, vc, ve]
    }
	calcularResultado()
</script>

<svelte:head>
	<title>Calculadora de Status</title>
</svelte:head>

<form oninput={calcularResultado}>
	<div class="container mt-5">
		<center>
			<h4 class="mb-3">Classe:</h4>
			<div class="btn-group mt-3 mb-3" role="group" aria-label="Basic radio toggle button group">
				<input
					type="radio"
					class="btn-check"
					name="btnradio"
					id="btnradio1"
					autocomplete="off"
					checked
					onclick={() => (classeSelected = 0)}
				/>
				<label class="btn btn-outline-primary" for="btnradio1">Guerreiro</label>

				<input
					type="radio"
					class="btn-check"
					name="btnradio"
					id="btnradio2"
					autocomplete="off"
					onclick={() => (classeSelected = 1)}
				/>
				<label class="btn btn-outline-primary" for="btnradio2">Divino</label>

				<input
					type="radio"
					class="btn-check"
					name="btnradio"
					id="btnradio3"
					autocomplete="off"
					onclick={() => (classeSelected = 2)}
				/>
				<label class="btn btn-outline-primary" for="btnradio3">Aprendiz</label>
			</div>
			<div class="input-group flex-nowrap mt-3 mb-3">
				<span class="input-group-text" id="addon-wrapping">Nível</span>
				<input
					type="numeric"
					class="form-control"
					placeholder=""
					aria-describedby="addon-wrapping"
					bind:value={nivel}
				/>
			</div>
			<h4 class="mb-3">Atributos:</h4>
			<div class="input-group flex-nowrap mb-3">
				<span class="input-group-text" id="addon-wrapping">Força</span>
				<input
					type="numeric"
					class="form-control"
					placeholder=""
					aria-describedby="addon-wrapping"
					bind:value={forca}
				/>
			</div>
			<div class="input-group flex-nowrap mb-3">
				<span class="input-group-text" id="addon-wrapping">Vitalidade</span>
				<input
					type="numeric"
					class="form-control"
					placeholder=""
					aria-describedby="addon-wrapping"
					bind:value={vitalidade}
				/>
			</div>
			<div class="input-group flex-nowrap mb-3">
				<span class="input-group-text" id="addon-wrapping">Intelecto</span>
				<input
					type="numeric"
					class="form-control"
					placeholder=""
					aria-describedby="addon-wrapping"
					bind:value={intelecto}
				/>
			</div>
			<div class="input-group flex-nowrap mb-3">
				<span class="input-group-text" id="addon-wrapping">Espírito</span>
				<input
					type="numeric"
					class="form-control"
					placeholder=""
					aria-describedby="addon-wrapping"
					bind:value={espirito}
				/>
			</div>
			<div class="input-group flex-nowrap mb-3">
				<span class="input-group-text" id="addon-wrapping">Agilidade</span>
				<input
					type="numeric"
					class="form-control"
					placeholder=""
					aria-describedby="addon-wrapping"
					bind:value={agilidade}
				/>
			</div>
			<h4 class="mb-3">Bônus:</h4>
			<div class="input-group flex-nowrap mb-3">
				<span class="input-group-text" id="addon-wrapping">PV</span>
				<input
					type="numeric"
					class="form-control"
					placeholder=""
					aria-describedby="addon-wrapping"
					bind:value={pvB}
				/>
			</div>
			<div class="input-group flex-nowrap mb-3">
				<span class="input-group-text" id="addon-wrapping">ED</span>
				<input
					type="numeric"
					class="form-control"
					placeholder=""
					aria-describedby="addon-wrapping"
					bind:value={edB}
				/>
			</div>
			<div class="input-group flex-nowrap mb-3">
				<span class="input-group-text" id="addon-wrapping">VC</span>
				<input
					type="numeric"
					class="form-control"
					placeholder=""
					aria-describedby="addon-wrapping"
					bind:value={vcB}
				/>
			</div>
			<div class="input-group flex-nowrap mb-3">
				<span class="input-group-text" id="addon-wrapping">VE</span>
				<input
					type="numeric"
					class="form-control"
					placeholder=""
					aria-describedby="addon-wrapping"
					bind:value={veB}
				/>
			</div>
            <hr>
            <h4 class="mb-3 mt-3">RESULTADO:</h4>
            <div class="input-group flex-nowrap mb-3">
				<span class="input-group-text" id="addon-wrapping">PV</span>
				<input
                    disabled={true}
					type="numeric"
					class="form-control"
					placeholder=""
					aria-describedby="addon-wrapping"
					bind:value={resultado[0]}
				/>
			</div>
			<div class="input-group flex-nowrap mb-3">
				<span class="input-group-text" id="addon-wrapping">ED</span>
				<input
                    disabled={true}
					type="numeric"
					class="form-control"
					placeholder=""
					aria-describedby="addon-wrapping"
					bind:value={resultado[1]}
				/>
			</div>
			<div class="input-group flex-nowrap mb-3">
				<span class="input-group-text" id="addon-wrapping">VC</span>
				<input
                    disabled={true}
					type="numeric"
					class="form-control"
					placeholder=""
					aria-describedby="addon-wrapping"
					bind:value={resultado[2]}
				/>
			</div>
			<div class="input-group flex-nowrap mb-3">
				<span class="input-group-text" id="addon-wrapping">VE</span>
				<input
                    disabled={true}
					type="numeric"
					class="form-control"
					placeholder=""
					aria-describedby="addon-wrapping"
					bind:value={resultado[3]}
				/>
			</div>
		</center>
	</div>
</form>

<style>
	span {
		width: 32%;
	}
</style>
