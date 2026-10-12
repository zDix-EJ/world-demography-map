import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ListScreen } from './screens/ListScreen/ListScreen';
import { MapScreen } from './screens/MapScreen/MapScreen';

export default function App() {
  const [year, setYear] = useState<number>(2019);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MapScreen
                year={year}
                setYear={setYear}
              />
            }
          />
          <Route
            path="/list"
            element={
              <ListScreen
                year={year}
                setYear={setYear}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
