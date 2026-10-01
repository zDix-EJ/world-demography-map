export type TIndicator =
	| 'population'
	| 'fertility'
	| 'deathRate'
	| 'lifeExpectancy';

export interface IPopulationData {
	years: number[];
	data: IDataCountry[];
}
export interface IDataCountry {
	id: string;
	name: string;
	values: Record<number, number | null>;
}
