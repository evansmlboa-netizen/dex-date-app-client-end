import { Mail, Phone, Moon, ShieldCheck, LogOut, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Account = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="px-4 py-6 max-w-lg mx-auto relative z-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Account</h1>
      </div>

      {/* User info */}
      <div className="glass-card p-5 mb-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center">
            <span className="text-2xl font-bold text-white">J</span>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">James K.</h2>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
              <Mail className="w-3 h-3" />
              james@example.com
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
              <Phone className="w-3 h-3" />
              +254 712 345 678
            </div>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="glass-card overflow-hidden mb-4">
        <button
          onClick={toggleDark}
          className="w-full flex items-center justify-between px-5 py-4 hover:bg-muted/50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Moon className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">Dark Mode</span>
          </div>
          <div
            className={`w-11 h-6 rounded-full transition-colors duration-200 flex items-center px-0.5 ${
              darkMode ? 'bg-primary' : 'bg-border'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                darkMode ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </div>
        </button>
      </div>

      <div className="glass-card overflow-hidden">
        <button className="w-full flex items-center justify-between px-5 py-4 hover:bg-muted/50 transition-colors border-b border-border">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">Help & Safety</span>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </button>

        <button className="w-full flex items-center justify-between px-5 py-4 hover:bg-muted/50 transition-colors">
          <div className="flex items-center gap-3">
            <LogOut className="w-5 h-5 text-destructive" />
            <span className="text-sm font-medium text-destructive">Logout</span>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export default Account;
