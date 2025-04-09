
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-xl mx-auto px-4">
          <h1 className="text-6xl font-bold text-autoparts-blue mb-4">404</h1>
          <p className="text-2xl font-semibold mb-4">Page Not Found</p>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been removed, 
            renamed, or didn't exist in the first place.
          </p>
          <div className="space-y-4">
            <Button asChild size="lg" className="bg-autoparts-blue hover:bg-autoparts-lightblue">
              <Link to="/">Return to Home</Link>
            </Button>
            <div className="block mt-4">
              <Link to="/identifier" className="text-autoparts-blue hover:underline">
                Try our Part Identifier
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
