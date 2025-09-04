import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

interface MobileMenuProps {
  logoSrc: string;
  navLinks: { name: string; href: string }[];
  getStartedButton: React.ReactNode;
}

export function MobileMenu({ logoSrc, navLinks, getStartedButton }: MobileMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="h-10 w-10" />
          <span className="sr-only">Toggle mobile menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-black border-r border-gray-800">
        <div className="flex flex-col space-y-6 p-4">
          <div className="flex items-center mb-4">
            <img
              src={logoSrc}
              alt="RRV International"
              className="w-12 h-14"
            />
          </div>
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-archivo text-white hover:text-blue-400 transition-colors text-lg py-2"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-6">
            {getStartedButton}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
