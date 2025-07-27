import { Link } from "react-router-dom";
import { sideBarLinks } from "../constants/constants";
import { useState } from "react";
import { AnimatePresence, motion } from 'motion/react';

export const SideBar: React.FC = () => {
    const [hovered, setHovered] = useState<any>(null);

    return (
        <div className="sticky bg-neutral-800 p-4 min-h-screen w-64 shadow-intense border-r border-neutral-900">
            <div className="flex flex-col gap-6">
                {sideBarLinks.map((it, idx) => {
                    return (
                        <Link
                            to={it.route}
                            key={it.route}
                            className="font-medium relative text-neutral-100 p-2"
                            onMouseEnter={() => setHovered(idx)}
                            onMouseLeave={() => setHovered(null)}
                        >
                             <AnimatePresence>
                                {hovered === idx && (
                                    <motion.span
                                        layoutId="hovered-highlight"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 30,
                                            duration: 0.2,
                                        }}
                                        className="absolute inset-0 bg-neutral-900 rounded-md z-0"
                                    />
                                )}
                            </AnimatePresence>
                            <span className="relative z-10">{it.label}</span>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};
