import React, { useState } from "react";
import { Scissors, Gift, X, Copy, Check } from "lucide-react";

const DiscountCoupon = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const couponCode = "SITE3EURO";

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleMinimize = () => {
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Version compacte */}
      {!isExpanded && (
        <div
          className="bg-red-500 text-white rounded-full p-4 shadow-lg cursor-pointer hover:bg-red-600 transition-all duration-300 animate-pulse"
          onClick={() => setIsExpanded(true)}
        >
          <div className="flex items-center space-x-2">
            <Gift className="h-5 w-5" />
            <span className="text-sm font-medium">-3€</span>
          </div>
        </div>
      )}

      {/* Version étendue */}
      {isExpanded && (
        <div className="bg-white rounded-lg shadow-2xl border-2 border-red-500 max-w-xs">
          {/* Header */}
          <div className="bg-red-500 text-white px-4 py-2 flex items-center justify-between rounded-t-lg">
            <div className="flex items-center space-x-2">
              <Scissors className="h-4 w-4" />
              <span className="text-sm font-medium">OFFRE SITE WEB</span>
            </div>
            <button
              onClick={handleClose}
              className="text-white/80 hover:text-white transition-colors"
              title="Fermer définitivement"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Contenu */}
          <div className="p-4">
            <div className="text-center mb-3">
              <h3 className="text-lg font-bold text-red-600 mb-1">
                3€ DE RÉDUCTION
              </h3>
              <p className="text-gray-600 text-xs">
                Dites que vous avez vu notre site !
              </p>
            </div>

            {/* Code */}
            <div className="bg-gray-50 rounded-lg p-3 mb-3">
              <div className="flex items-center justify-between">
                <span className="text-red-600 font-bold text-sm tracking-wider">
                  {couponCode}
                </span>
                <button
                  onClick={handleCopy}
                  className="text-red-600 hover:text-red-700 transition-colors"
                  title="Copier le code"
                >
                  {isCopied ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <a
                href="tel:0187902203"
                className="block w-full bg-red-500 text-white text-center py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
              >
                📞 RÉSERVER
              </a>
              <button
                onClick={handleMinimize}
                className="w-full text-gray-500 text-xs hover:text-gray-700 transition-colors"
              >
                Réduire
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscountCoupon;
