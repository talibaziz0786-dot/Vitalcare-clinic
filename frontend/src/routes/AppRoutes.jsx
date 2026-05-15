import { lazy, Suspense } from "react";

import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import MainLayout from "../layouts/MainLayout";

import NotFoundPage from "../pages/not-found/NotFoundPage";

import PageLoader from "../components/loaders/PageLoader";

import PageTransition from "../components/loaders/PageTransition";

const HomePage = lazy(() =>
  import("../pages/home/HomePage")
);

const AboutPage = lazy(() =>
  import("../pages/about/AboutPage")
);

const ServicesPage = lazy(() =>
  import("../pages/services/ServicesPage")
);

const DoctorsPage = lazy(() =>
  import("../pages/doctors/DoctorsPage")
);

const ContactPage = lazy(() =>
  import("../pages/contact/ContactPage")
);

const AppointmentPage = lazy(() =>
  import(
    "../pages/appointment/AppointmentPage"
  )
);

export default function AppRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait">
        <Routes
          location={location}
          key={location.pathname}
        >
          <Route element={<MainLayout />}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <HomePage />
                </PageTransition>
              }
            />

            <Route
              path="/about"
              element={
                <PageTransition>
                  <AboutPage />
                </PageTransition>
              }
            />

            <Route
              path="/services"
              element={
                <PageTransition>
                  <ServicesPage />
                </PageTransition>
              }
            />

            <Route
              path="/doctors"
              element={
                <PageTransition>
                  <DoctorsPage />
                </PageTransition>
              }
            />

            <Route
              path="/contact"
              element={
                <PageTransition>
                  <ContactPage />
                </PageTransition>
              }
            />

            <Route
              path="/appointment"
              element={
                <PageTransition>
                  <AppointmentPage />
                </PageTransition>
              }
            />
          </Route>

          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}