export const Pokedex: {[speciesid: string]: SpeciesData} = {
	drople: {
		num: -2022,
		name: "Drople",
		types: ["Water"],
		baseStats: {hp: 65, atk: 73, def: 58, spa: 53, spd: 44, spe: 200},
		abilities: {0: "Cursed Body"},
	},
	platypunk: {
		num: -2023,
		name: "Platypus",
		types: ["Poison", "Fighting"],
		baseStats: {hp: 95, atk: 98, def: 121, spa: 145, spd: 91, spe: 110},
		abilities: {0: "Infiltrator", H: "Storm Drain"},
	}
};
