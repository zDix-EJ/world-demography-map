import { IPopulationData } from '@/types/data';

export const getDataInYearById = (
	countryesData: IPopulationData,
	geo: { id: string },
	sellectYear: number
) => {
	const selectedCountry = countryesData.data.find(
		(countryesData) => countryesData.id === geo.id
	);
	const dataOnYear = selectedCountry?.values[sellectYear];
	return dataOnYear;
};
