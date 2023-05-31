import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from '../Components/Layout';


const Dashboard = lazy(() => import('../Components/Dashboard'));
const Employe = lazy(() => import('../Pages/Master/Employe'));
const DriverM = lazy(() => import('../Pages/Master/DriverM'));
const Larry = lazy(() => import('../Pages/Master/Larry'));
const AddBill = lazy(() => import('../Pages/Bill/AddBill'));
const AddPod = lazy(() => import('../Pages/Bill/AddPod'));
const Report = lazy(() => import('../Pages/Bill/Report'));
const ViewAnnex = lazy(() => import('../Pages/Bill/ViewAnnex'));
const ViewBill = lazy(() => import('../Pages/Bill/ViewBill'));
const ViewPrtyBill = lazy(() => import('../Pages/Bill/ViewPrtyBill'));
const ViewRecepit = lazy(() => import('../Pages/Receipt/ViewReceipt'));
const AddRecepit = lazy(() => import('../Pages/Receipt/AddRecepit'));
const Vechicle = lazy(() => import('../Pages/Maintainence/Vechicle'));
const MainType = lazy(() => import('../Pages/Maintainence/MainType'));
const Tyre = lazy(() => import('../Pages/Maintainence/Tyre'));
const TyreFit = lazy(() => import('../Pages/Maintainence/TyreFit'));
const AddCon = lazy(() => import('../Pages/Booking/AddCon'));
const ConsgNote = lazy(() => import('../Pages/Booking/ConsgNote'));
const PodList = lazy(() => import('../Pages/Booking/PodList'));
const ReportBok = lazy(() => import('../Pages/Booking/ReportBok'));

const Main = () => {
  return (
    <Router>
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employee" element={<Employe />} />
          <Route path="/drive" element={<DriverM />} />
          <Route path="/larry" element={<Larry />} />
          <Route path="/addbill" element={<AddBill />} />
          <Route path="/addpod" element={<AddPod />} />
          <Route path="/report" element={<Report />} />
          <Route path="/viewann" element={<ViewAnnex />} />
          <Route path="/viewbill" element={<ViewBill />} />
          <Route path="/viewpartybill" element={<ViewPrtyBill />} />
          <Route path="/addrecip" element={<AddRecepit />} />
          <Route path="/viewrecip" element={<ViewRecepit />} />
          <Route path="/vechicle" element={<Vechicle />} />
          <Route path="/maintype" element={<MainType />} />
          <Route path="/tyre" element={<Tyre />} />
          <Route path="/tyrefit" element={<TyreFit />} />
          <Route path="/addcon" element={<AddCon />} />
          <Route path="/consgnote" element={<ConsgNote />} />
          <Route path="/podlist" element={<PodList />} />
          <Route path="/reportbok" element={<ReportBok />} />
        </Routes>
      </Suspense>
      </Layout>
    </Router>
  );
};

export default Main;
