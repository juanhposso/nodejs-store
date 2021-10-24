const objecto = [
	{
		nombre: 'juan',
		apellido: 'hernandez',
		edad: 28,
	},
	{
		nombre: 'fabian',
		apellido: 'hernandez',
		edad: 27,
	},
	{
		nombre: 'juan',
		apellido: 'hernandez',
		edad: 26,
	},
	{
		nombre: 'fabian',
		apellido: 'hernandez',
		edad: 25,
	},
];

const edad = 30;

const test = objecto.findIndex((item) => {
	if (item.edad == edad) {
		return item;
	}
});

console.log(test);
