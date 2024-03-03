"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileNavLink from "./MobileNavLink";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { title: "about", href: "/about" },
  { title: "work", href: "/work" },
  { title: "social", href: "/" },
  { title: "get in touch", href: "/get_in_touch" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  /*  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      setIsOpen(false);
    }
  }; */

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
        staggerDirection: -1
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1
      },
    },
  };

  if (!isOpen)
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="lg:hidden relative -m-2 inline-flex items-center justify-center rounded-md p-2"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>
    );

  return (
    <AnimatePresence>
      <motion.div
        variants={menuVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed left-0 top-0 w-full h-screen text-white bg-black p-10 origin-top"
      >
        <div className="flex h-full flex-col">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="relative end-1 inline-flex items-center justify-center rounded-md p-2 text-white"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="open"
            exit="initial"
            className="flex flex-col h-full justify-center items-center gap-6"
          >
            {navLinks.map((link, index) => {
              return (
                <div className=" overflow-hidden">
                  <MobileNavLink
                    title={link.title}
                    href={link.href}
                    key={index}
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileNav;
