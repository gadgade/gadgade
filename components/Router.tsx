import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NavigationContextType {
  pathname: string;
  navigate: (to: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const Router: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pathname, setPathname] = useState('/');

  const navigate = (to: string) => {
    setPathname(to);
    window.scrollTo(0, 0);
  };

  return (
    <NavigationContext.Provider value={{ pathname, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(NavigationContext);
  if (!context) throw new Error('useLocation must be used within a Router');
  return { pathname: context.pathname };
};

export const useNavigate = () => {
  const context = useContext(NavigationContext);
  if (!context) throw new Error('useNavigate must be used within a Router');
  return context.navigate;
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
}

export const Link: React.FC<LinkProps> = ({ to, children, className, onClick, ...props }) => {
  const { navigate } = useContext(NavigationContext)!;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (onClick) onClick(e);
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};