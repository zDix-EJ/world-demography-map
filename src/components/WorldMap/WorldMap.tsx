import { ICountry, ICurrentCountry } from '@/types/country';
import { IPopulationData, TIndicator } from '@/types/data';
import { getDataInYearById } from '@/utils/getDataInYearById';
import { getIndicatorColor } from '@/utils/getIndicatorColor';
import { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import geography from 'world-atlas/countries-110m.json';
import { NoteCountryModal } from '../NoteCountryModal/NoteCountryModal';
import styles from './WorldMap.module.scss';

interface Props {
  fetchData: Record<TIndicator, IPopulationData>;
  sellectYear: number;
  indicator: TIndicator;
  selectCountry: ICountry | null;
  setSelectCountry: (country: ICountry) => void;
}

export function WorldMap({
  fetchData,
  sellectYear,
  indicator,
  selectCountry,
  setSelectCountry
}: Props) {
  const [isHover, setIsHover] = useState<ICountry | null>(null);

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
              .map((geo: ICurrentCountry) => {
                const focus = geo.id === selectCountry?.id;

                return (
                  <Geography
                    className={styles.country}
                    key={geo.rsmKey}
                    geography={geo}
                    fill={getIndicatorColor(
                      getDataInYearById(fetchData[indicator], geo, sellectYear),
                      indicator
                    )}
                    stroke="#abe4ff"
                    strokeLinejoin="round"
                    tabIndex={-1}
                    cursor={'pointer'}
                    style={{
                      default: {
                        strokeWidth: focus ? 1.4 : 0.5,
                        transform: focus
                          ? 'translate(0, -2px)'
                          : 'translate(0, 0)'
                      },
                      hover: {
                        transform: 'translate(0, -2px)',
                        strokeWidth: 1.4
                      },
                      pressed: {
                        outline: 'none'
                      }
                    }}
                    onMouseEnter={() => {
                      setIsHover({ id: geo.id, name: geo.properties.name });
                    }}
                    onMouseLeave={() => setIsHover(null)}
                    onClick={() => {
                      setSelectCountry({
                        id: geo.id,
                        name: geo.properties.name
                      });
                    }}
                    onFocus={() => {}}
                  />
                );
              })
          }
        </Geographies>
      </ComposableMap>
      {isHover ? (
        <NoteCountryModal
          fetchData={fetchData}
          indicator={indicator}
          isHoverCountry={isHover}
          sellectYear={sellectYear}
        />
      ) : null}
    </div>
  );
}
