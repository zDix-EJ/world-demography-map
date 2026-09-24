import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import geography from 'world-atlas/countries-110m.json'; // Карта
import styles from './WorldMap.module.scss';

interface Props {}

export function WorldMap({}: Props) {
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
							.filter((geo) => geo.id !== '010')
							.map((geo) => (
								<Geography
									key={geo.rsmKey}
									geography={geo}
									fill="#26517b"
									stroke="#abe4ff"
									strokeWidth={0.5}
									strokeLinejoin="round"
									tabIndex={-1}
									style={{
										default: { outline: 'none' },
										hover: { outline: 'none' },
										pressed: { outline: 'none' }
									}}
								/>
							))
					}
				</Geographies>
			</ComposableMap>
		</div>
	);
}
