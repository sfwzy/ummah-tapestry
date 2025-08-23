import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="text-8xl font-grotesk font-bold text-accent mb-4">
          404
        </div>
        <h1 className="text-large font-grotesk font-semibold text-foreground mb-4">
          Page not found
        </h1>
        <p className="text-body text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
