
import React, { useEffect, useState } from "react";

import Navbar from "../components/LandingPage/Navbar";
import Hero from "../components/LandingPage/Hero";
import Services from "../components/LandingPage/Services";
import SupportedDevices from "../components/LandingPage/SupportedDevices";
import RepairTracking from "../components/LandingPage/RepairTracking";
import About from "../components/LandingPage/About";
import Contact from "../components/LandingPage/Contact";
import Footer from "../components/LandingPage/Footer";

import { getLandingPageData } from "../services/landingPageService";

function Home() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

  async function loadLandingPage() {
      try {
        const data = await getLandingPageData();

        if (isMounted) {
          setPageData(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(
            "Unable to load the homepage. Please try again later."
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadLandingPage();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="page-loading">
        <p>Loading homepage...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-error" role="alert">
        <h2>Something went wrong</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="page-error">
        <p>Homepage information is unavailable.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar shop={pageData.shop} />

      <main>
        <Hero hero={pageData.hero} />

        <Services services={pageData.services} />

        <SupportedDevices
          devices={pageData.supportedDevices}
          imageUrl={pageData.devicesImageUrl}
        />

        <RepairTracking />

        <About
          about={pageData.about}
          benefits={pageData.benefits}
        />

        <Contact contact={pageData.contact} />
      </main>

      <Footer
        shop={pageData.shop}
        contact={pageData.contact}
      />
    </>
  );
}

export default Home;
