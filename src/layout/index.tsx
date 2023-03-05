import { CircularProgress } from '@mui/material';
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const Layout = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
    </>
  );
};
