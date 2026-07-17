/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleWhatsAppRedirect = () => {
    const message = "Olá Weskley! Estava navegando no site da Aegis Tech e gostaria de saber mais sobre as soluções de sites e sistemas de elite para o meu negócio.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5561996507712?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 10 }}
            className="relative flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0c0c0c]/90 p-3.5 pr-10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md max-w-[260px]"
            id="whatsapp-tooltip"
          >
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="absolute top-2.5 right-2.5 rounded-full p-0.5 text-gray-500 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Fechar aviso"
              id="btn-close-whatsapp-tooltip"
            >
              <X className="h-3 w-3" />
            </button>

            {/* Avatar indicator */}
            <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neon-green/10 text-neon-green border border-neon-green/30">
              <span className="font-mono text-xs font-bold">W</span>
              <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-500 border border-black animate-pulse" />
            </div>

            {/* Content text */}
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-bold text-white tracking-tight">Weskley Gomez</span>
              <span className="text-[10px] text-gray-400 mt-0.5 leading-tight">Olá! Como posso acelerar o seu negócio hoje?</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        onClick={handleWhatsAppRedirect}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300"
        id="btn-whatsapp-floating"
        aria-label="Falar no WhatsApp"
      >
        {/* Glow effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 group-hover:scale-125 transition-transform duration-500 animate-ping pointer-events-none" />

        {/* WhatsApp Vector Icon */}
        <svg
          className="h-7 w-7 fill-current transition-transform duration-300 group-hover:rotate-12"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.053.953 11.427.953c-5.44 0-9.865 4.371-9.87 9.801-.002 1.764.482 3.42 1.398 4.904l-.993 3.627 3.693-.981zM15.97 12.525c-.239-.12-1.417-.699-1.637-.779-.22-.079-.38-.12-.54.12-.16.24-.619.78-.759.94-.14.16-.28.18-.52.06-.24-.12-.992-.367-1.89-1.168-.7-.623-1.173-1.393-1.31-1.633-.139-.24-.015-.369.106-.488.11-.108.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.195-.47-.393-.407-.54-.415-.137-.007-.296-.008-.455-.008-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.581 4.1 3.62.572.247 1.02.394 1.368.505.576.183 1.1.157 1.513.097.46-.067 1.417-.58 1.617-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
        </svg>
      </motion.button>
    </div>
  );
}
