import { Users, MessageSquare, UserCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const tabs = [
  { name: 'Browse', href: '/', icon: Users },
  { name: 'Requests', href: '/requests', icon: MessageSquare },
  { name: 'Account', href: '/account', icon: UserCircle },
];

const BottomNav = () => {
  const { pathname } = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-t border-border md:hidden">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {tabs.map(({ name, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={name}
              to={href}
              className={`flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl transition-colors duration-200 ${
                active ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={active ? 2.5 : 1.5} />
              <span className="text-[10px] font-medium">{name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
