import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/Logo';
import { FiSearch, FiChevronDown, FiMenu, FiX, FiChevronRight } from 'react-icons/fi';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const navItems = [
  {
    label: 'Platform',
    items: [
      { label: 'Mulesoft Conversion', href: '#mulesoft-conversion' },
      { label: 'Code Migration', href: '#code-migration' },
      { label: 'Integration', href: '#integration' },
    ],
  },
  {
    label: 'Solutions',
    items: [
      { label: 'Enterprise', href: '#enterprise' },
      { label: 'Startups', href: '#startups' },
      { label: 'Financial Services', href: '#financial-services' },
    ],
  },
  {
    label: 'Customers',
    href: '#customers'
  },
  {
    label: 'Resources',
    items: [
      { label: 'Blog', href: '#blog' },
      { label: 'Documentation', href: '#documentation' },
      { label: 'Case Studies', href: '#case-studies' },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About Us', href: '#about-us' },
      { label: 'Team', href: '#team' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    label: 'Pricing',
    href: '#pricing'
  },
];

const DesktopNavItem: React.FC<{ item: any }> = ({ item }) => {
  if (item.items) {
    return (
      <div className="dropdown group">
        <button className="flex items-center px-4 py-2 text-white hover:text-secondary">
          {item.label}
          <FiChevronDown className="ml-2 text-xs" />
        </button>
        <div className="dropdown-content mt-1 p-4">
          <div className="grid grid-cols-1 gap-2">
            {item.items.map((subItem: any, idx: number) => (
              <Link key={idx} href={subItem.href}>
                <a className="block px-3 py-2 hover:bg-accent rounded-lg text-white hover:text-secondary transition-colors">
                  {subItem.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link href={item.href || '#'}>
      <a className="text-white px-4 py-2 hover:text-secondary">
        {item.label}
      </a>
    </Link>
  );
};

const Header = () => {
  const [location] = useLocation();

  return (
    <header className="border-b border-accent sticky top-0 bg-background z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <a className="block mr-8">
                <Logo variant="full" />
              </a>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex">
              {navItems.map((item, idx) => (
                <DesktopNavItem key={idx} item={item} />
              ))}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hidden lg:flex hover:text-secondary">
              <FiSearch className="h-5 w-5" />
            </Button>
            <Link href="#login">
              <a className="text-white hidden lg:inline-block hover:text-secondary">Login</a>
            </Link>
            <Button variant="outline" className="hidden lg:inline-flex" asChild>
              <Link href="#demo">Get a Demo</Link>
            </Button>
            <Button variant="default" asChild>
              <Link href="#free">Start for Free</Link>
            </Button>
            
            {/* Mobile menu button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <FiMenu className="h-6 w-6 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-accent w-[300px] sm:w-[350px] overflow-y-auto">
                <div className="flex flex-col space-y-2 mt-6">
                  <div className="mb-6">
                    <Logo variant="full" className="mx-auto" />
                  </div>
                
                  <Accordion type="single" collapsible className="w-full">
                    {navItems.map((item, idx) => (
                      item.items ? (
                        <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-accent">
                          <AccordionTrigger className="px-2 py-3 text-white hover:text-secondary">
                            {item.label}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="pl-4 space-y-2 mb-2">
                              {item.items.map((subItem: any, subIdx: number) => (
                                <SheetClose asChild key={subIdx}>
                                  <Link href={subItem.href}>
                                    <a className="flex px-4 py-2 text-gray-300 hover:text-secondary rounded-lg">
                                      {subItem.label}
                                    </a>
                                  </Link>
                                </SheetClose>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <div key={idx} className="border-b border-accent">
                          <SheetClose asChild>
                            <Link href={item.href || '#'}>
                              <a className="flex px-4 py-3 text-white hover:text-secondary w-full">
                                {item.label}
                                <FiChevronRight className="ml-auto" />
                              </a>
                            </Link>
                          </SheetClose>
                        </div>
                      )
                    ))}
                  </Accordion>
                  
                  <div className="pt-4 space-y-4 border-t border-accent mt-4">
                    <SheetClose asChild>
                      <Link href="#login">
                        <a className="flex px-4 py-2 text-white hover:text-secondary">
                          Login
                        </a>
                      </Link>
                    </SheetClose>
                    
                    <div className="px-4">
                      <SheetClose asChild>
                        <Button className="w-full" asChild>
                          <Link href="#demo">Get a Demo</Link>
                        </Button>
                      </SheetClose>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
