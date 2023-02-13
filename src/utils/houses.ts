import lannister from '../assets/houses/lannister.png';
import targaryen from '../assets/houses/targaryen.png';
import tarly from '../assets/houses/tarly.png';
import stark from '../assets/houses/stark.png';
import baratheon from '../assets/houses/baratheon.png';
import greyjoy from '../assets/houses/greyjoy.png';
import clegane from '../assets/houses/clegane.png';
import baelish from '../assets/houses/baelish.png';
import seaworth from '../assets/houses/seaworth.png';
import tyrell from '../assets/houses/tyrell.png';
import freefolk from '../assets/houses/freefolk.png';
import tarth from '../assets/houses/tarth.png';
import bolton from '../assets/houses/bolton.png';
import mormont from '../assets/houses/mormont.png';
import sparrow from '../assets/houses/sparrow.png';
import martell from '../assets/houses/martell.png';
import fallback from '../assets/houses/fallback.png';

interface House {
	imgPath: string;
	names: string[];
}

const houses: House[] = [
	{
		imgPath: lannister,
		names: ['House Lanister', 'Lannister', 'House Lannister'],
	},
	{
		imgPath: targaryen,
		names: ['House Targaryen', 'Targaryan'],
	},
	{
		imgPath: tarly,
		names: ['House Tarly'],
	},
	{
		imgPath: stark,
		names: ['House Stark', 'Stark'],
	},
	{
		imgPath: baratheon,
		names: ['House Baratheon', 'Baratheon'],
	},
	{
		imgPath: greyjoy,
		names: ['House Greyjoy', 'Greyjoy'],
	},
	{
		imgPath: clegane,
		names: ['House Clegane'],
	},
	{
		imgPath: baelish,
		names: ['House Baelish'],
	},
	{
		imgPath: seaworth,
		names: ['House Seaworth'],
	},
	{
		imgPath: tyrell,
		names: ['House Tyrell', 'Tyrell'],
	},
	{
		imgPath: freefolk,
		names: ['Free Folk'],
	},
	{
		imgPath: tarth,
		names: ['Tarth'],
	},
	{
		imgPath: bolton,
		names: ['Bolton'],
	},
	{
		imgPath: mormont,
		names: ['Mormont'],
	},
	{
		imgPath: sparrow,
		names: ['Sparrow'],
	},
	{
		imgPath: martell,
		names: ['Viper'],
	},
];

export function getHouseImgPath(houseName: string | null): string {
	let img = null;

	houses.forEach((house) => {
		house.names.forEach((name) => {
			if (name === houseName) {
				img = house.imgPath;
			}
		});
	});

	if (img) {
		return img;
	}

	return fallback;
}
