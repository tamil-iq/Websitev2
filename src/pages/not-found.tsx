import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-bold text-gradient-radiologist">404</h1>
        <h2 className="text-2xl md:text-3xl font-medium text-foreground">
          Page Not Found
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button className="mt-4 bg-foreground text-secondary hover:bg-foreground/80">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
