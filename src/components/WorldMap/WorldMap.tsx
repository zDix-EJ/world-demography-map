import { ICountry } from '@/types/country';
import { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import geography from 'world-atlas/countries-110m.json'; // Карта
import { NoteCountryModal } from '../NoteCountryModal/NoteCountryModal';
import styles from './WorldMap.module.scss';
import { IPopulationData, mockPopulationData } from './country.data';

// дефолтненый цвет карты "#26517b"
interface Props {}

interface ICurrentCountry {
	id: string;
	properties: {
		name: string;
	};
	rsmKey: string;
}

export function WorldMap({}: Props) {
	const [isHover, setIsHover] = useState<ICountry | null>(null);

	const sellectYear = 2023;

	const colorSteps = [
		{ max: 1_000_000, color: '#16324a' },
		{ max: 10_000_000, color: '#1c4060' },
		{ max: 30_000_000, color: '#26517b' },
		{ max: 60_000_000, color: '#326896' },
		{ max: 100_000_000, color: '#4784bf' },
		{ max: 300_000_000, color: '#7eb6e0' }
	];

	const getPopulationInYearById = (
		countryesData: IPopulationData,
		geo: ICurrentCountry
	) => {
		const selectedCountry = countryesData.data.find(
			(countryesData) => countryesData.id === geo.id
		);
		const populationOnYear = selectedCountry?.values[sellectYear];
		return populationOnYear;
	};

	const colorByPopulation = (population: number | null | undefined) => {
		if (population == undefined || null) return '#0c1b28';
		const needStap = colorSteps.find((color) => population < color.max);
		const color = needStap?.color ?? '#d7f1ff';
		return color;
	};

	return (
		<div className={styles.mapLayout}>
			<ComposableMap
				projection="geoNaturalEarth1"
				projectionConfig={{
					scale: 170,
					center: [0, 0]
				}}
				style={{ width: '100%', height: '100%' }}
			>
				<Geographies geography={geography}>
					{({ geographies }) =>
						geographies
							.filter((geo: ICurrentCountry) => geo.id !== '010')
							.map((geo: ICurrentCountry) => (
								<Geography
									className={styles.country}
									key={geo.rsmKey}
									geography={geo}
									fill={colorByPopulation(
										getPopulationInYearById(mockPopulationData, geo)
									)}
									stroke="#abe4ff"
									strokeWidth={0.5}
									strokeLinejoin="round"
									tabIndex={-1}
									cursor={'pointer'}
									style={{
										default: { outline: 'none' },
										hover: {
											fill: '#4784bf',
											transform: 'translate(0, -2px)',
											strokeWidth: 1.2
										},
										pressed: { outline: 'none' }
									}}
									onMouseEnter={() => {
										setIsHover({ id: geo.id, name: geo.properties.name });
									}}
									onMouseLeave={() => setIsHover(null)}
								/>
							))
					}
				</Geographies>
			</ComposableMap>
			{isHover ? <NoteCountryModal isHoverCountry={isHover} /> : null}
		</div>
	);
}
