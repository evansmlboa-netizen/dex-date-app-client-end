import { Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="flex items-center justify-between px-4 h-14 max-w-lg mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl gradient-primary flex items-center justify-center">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <span className="text-lg font-bold text-foreground">VioletConnect</span>
        </Link>

        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-muted transition-colors duration-200">
            <Search className="w-5 h-5 text-muted-foreground" />
          </button>
          <Link
            to="/account"
            className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-muted transition-colors duration-200"
          >
            <User className="w-5 h-5 text-muted-foreground" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
