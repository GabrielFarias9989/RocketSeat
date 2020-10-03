function habilidades(usuario){
	return "O " + usuario[0].nome + 
	"Possui as seguintes habilidades: " +
	usuario[0].habilidades.join(', ') + "\n" +
	"O " + usuario[1].nome +
	"possui as seguintes habilidades: " +
	usuario[1].habilidades.join(', ');
}

var usuarios = [
	{
		nome: "Diego",
		habilidades: ["JavaScript", "ReactJS", "Redux"]
	},
	{
		nome: "Gabriel",
		habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
	}
];

console.log(habilidades(usuarios));
