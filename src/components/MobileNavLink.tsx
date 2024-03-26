import Link from "next/link";
import { motion } from "framer-motion";

interface MobileNavLinkProps {
    title: string
    href: string
}

const MobileNavLink = ({title, href}: MobileNavLinkProps) => {

  const linkVariants = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [ 0.37, 0, 0.63, 1]
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [ 0, 0.55, 0.45, 1],
        duration: 0.7
      },
    }
  }

  return (
    <motion.div variants={linkVariants} className="text-4xl uppercase text-white-smoke">
        <Link href={href}>
            {title}
        </Link>
    </motion.div>
  )
}

export default MobileNavLink