import { motion, } from "framer-motion";
import { type FC } from "react";
interface AnimatedSectionProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}
const AnimatedSection: FC<AnimatedSectionProps> = ({ children, delay = 0, className = '' }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay }}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
export default AnimatedSection;