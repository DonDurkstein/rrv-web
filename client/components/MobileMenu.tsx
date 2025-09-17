'use client';

import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

interface MobileMenuProps {
  logoSrc: string;
  navLinks: { name: string; href: string }[];
  getStartedButton: React.ReactNode;
}

function isInPageAnchor(href: string) {
  // '#about' or '/#about' or full-url with hash targeting current path
  try {
    const url = new URL(href, window.location.href);
    const samePath = url.pathname === window.location.pathname;
    return Boolean(url.hash) && samePath;
  } catch {
    return href.startsWith('#');
  }
}

export function MobileMenu({ logoSrc, navLinks, getStartedButton: baseGetStartedButton }: MobileMenuProps) {
  const [open, setOpen] = React.useState(false);

  // Wrap the getStartedButton with the mobile sheet closing behavior
  const getStartedButton = React.cloneElement(baseGetStartedButton as React.ReactElement, {
    onClick: (e: React.MouseEvent) => {
      // Close the sheet
      setOpen(false);
      // Call the original onClick if it exists
      if ((baseGetStartedButton as React.ReactElement).props.onClick) {
        (baseGetStartedButton as React.ReactElement).props.onClick(e);
      }
    }
  });

  return (
    <Sheet open={open} onOpenChange={setOpen} modal={false}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="h-10 w-10" />
          <span className="sr-only">Toggle mobile menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        onCloseAutoFocus={(e) => {
          e.preventDefault();
        }}
        className="w-[300px] sm:w-[400px] bg-black border-r border-gray-800"
      >
        <div className="flex flex-col space-y-6 p-4">
          <div className="flex items-center mb-4">
            <img src={logoSrc} alt="RRV International" className="w-12 h-14" />
          </div>

          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const inPage = isInPageAnchor(link.href);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-archivo text-white hover:text-blue-400 transition-colors text-lg py-2"
                  onClick={(e) => {
                    if (inPage) {
                      // Let the browser scroll to #id natively; just close the sheet.
                      // No preventDefault() => no timing race with scroll lock.
                      setOpen(false);
                    } else {
                      // Other routes / external links: allow navigation and close.
                      setOpen(false);
                    }
                  }}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="mt-6">{getStartedButton}</div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
