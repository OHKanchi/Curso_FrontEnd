const fetchPokemon = () => {
	const Pokename = document.getElementById("Pokename");
	let pokeInput = Pokename.value.toLowerCase().replace(" ","-");
	const url= `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
	fetch(url).then((res) => {
		if(res.status != 200){
			console.log(res);
			pokeImage("img/quien.gif")
			pokeNombres(`${pokeInput} no existe`)
		}
		else {
			return res.json();
		}
	}).then((data) =>{
		console.log(data);
		let pokeImg = data.sprites.front_default;
		let pokeNombre = [`Nombre: ${data.species.name}`];
		let pokeTipo = [`Tipo: ${data.types[0].type.name}`];
		let estadistica = [`Estadística: ${data.stats[0].base_stat}`, ` Esfuerzo: ${data.stats[0].effort}`];
		let objs = data.moves;
		let movimientor = [`Movimientos: ${data.moves[0].move.name} , ${data.moves[1].move.name} , ${data.moves[2].move.name}`];
		/* const largoObjs = (obj) => {
			var large = 0;
			for(let key in obj){
    		large++;
  			}
  		let resultado = large;
  		}
  		const aumentos =(i) =>{
  			let movimiento = []
			for (let i = 0; i <= resultado; i++) {
   				let agregar = data.moves[i];
   				movimiento.push(agregar);
		}
		let agregado = movimiento;
		console.log(movimiento);
  		agregados(movimiento);
  		return large;
		aumentos(large); */
		movimientos(movimientor);
		console.log(movimientor);

  		pokeImage(pokeImg);	
		pokeNombres(pokeNombre);
		pokeTipos(pokeTipo);
		estadisticas(estadistica);
		// largoObjs(objs);


		
	



	})
}

//fetchPokemon();

const pokeImage = (url) => {
	const pokeImg = document.getElementById("pokeImg");
	pokeImg.src = url;
}
const pokeNombres =(url) =>{
	const pokeNombre  = document.getElementById("pokeNombre");
	pokeNombre.textContent = url;

}
const pokeTipos =(url) =>{
	const pokeTipo = document.getElementById("pokeTipo");
	pokeTipo.textContent = url;
}
const estadisticas =(url) =>{
	const estadistica = document.getElementById("estadistica");
	estadistica.innerHTML = JSON.stringify(url).replace('["','').replace('"]','').replace('" ','\n').replace('"','');
}

const movimientos = (url) =>{
	const movimientor = document.getElementById("movimientor");
	movimientor.innerHTML = JSON.stringify(url).replace('["' , '').replace('"]').replace(" " , "<br>ㅤㅤ ").replace("," , "<br>ㅤㅤ").replace("," , "<br>ㅤㅤ").replace("undefined","");
}

/* const agregados =(url) => {
	const agregado = document.getElementById("agregado")
	agregado.textContent = JSON.stringify(url).replace('[{"Move":]',' ');
} */