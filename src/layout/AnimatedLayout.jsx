import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageLoader from "../components/pageLoader/PageLoader";

const AnimatedLayout = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);

    return () => clearTimeout(timer);
  }, [location]);

  return <>{loading ? <PageLoader /> : children}</>;
};

export default AnimatedLayout;
