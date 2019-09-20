import React from 'react';
import { MDBRow } from 'mdbreact';
/*
import AdminCardSection1 from './sections/AdminCardSection1';
import AdminCardSection2 from './sections/AdminCardSection2';
import TableSection from './sections/TableSection';
import BreadcrumSection from './sections/BreadcrumSection';
import ChartSection1 from './sections/ChartSection1';
import ChartSection2 from './sections/ChartSection2';
import MapSection from './sections/MapSection';
import ModalSection from './sections/ModalSection';
import ChartSection3 from './sections/ChartSection3';

import CityCard from './sections/CityCard';
import WeatherCard from './sections/WeatherCard';
*/
import DarkSkyCard from './sections/DarkSkyCard';

import WeatherCard from './sections/WeatherCard';

const DashboardPage =  () => {
  return (
    <React.Fragment>
      {/*
      <BreadcrumSection />
      <AdminCardSection1 />
      <ChartSection1 />
      <TableSection />
      <ChartSection2 />
      <MDBRow className="mb-4">
          <MapSection />
          <WeatherCard />
          <ModalSection />
      </MDBRow>
      <AdminCardSection2 />
      <ChartSection3 />
      <ChartSection3 />
      <CityCard />
      */}
      <MDBRow className="mb-4">
      <WeatherCard />
      </MDBRow>
      <MDBRow className="mb-4">
      <DarkSkyCard />
      </MDBRow>
    </React.Fragment>
  )
}

export default DashboardPage;
