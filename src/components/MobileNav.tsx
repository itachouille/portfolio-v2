"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileNavLink from "./MobileNavLink";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { title: "home", href: "/" },
  { title: "work", href: "/work" },
  { title: "contact", href: "/contact" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <>
      <div className="w-full md:hidden flex items-center justify-between px-10">
        <div className="flex items-center h-20">logo</div>
        <div className="flex items-center h-full pl-10 border-l border-border">
          <button type="button" onClick={toggleMenu}>
            <Menu className="h-10 w-10" aria-hidden="true" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed z-50 left-0 top-0 w-full h-full bg-yellow-400 origin-top"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-end h-[12vh] px-10">
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="relative end-1 inline-flex items-center justify-center rounded-md text-black"
                >
                  <X className="h-10 w-10" aria-hidden="true" />
                </button>
              </div>
              <motion.div
                variants={containerVariants}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center items-center gap-16 -mt-[8rem]"
              >
                {navLinks.map((link, index) => (
                  <div key={index} className="overflow-hidden">
                    <MobileNavLink title={link.title} href={link.href} />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
