import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function SearchModal({
  isVisible,
  onClose,
  children,
}: ModalProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.75 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-lg shadow-lg max-w-lg w-full p-6 z-10"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black hover:text-opacity-60"
        >
          <FontAwesomeIcon icon={faClose} className="w-6 h-6" />
        </button>
        {children}
      </motion.div>
    </div>
  );
}
