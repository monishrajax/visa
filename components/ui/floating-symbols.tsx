"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Wifi, DollarSign, PoundSterling, TrendingUp, Hash, CreditCard } from "lucide-react";

type AnimationValues = {
  x: number[];
  y: number[];
  rotate: number[];
  scale?: number[];
};

interface FloatingSymbol {
  id: string;
  symbol: React.ReactNode;
  x: number;
  y: number;
  duration: number;
  delay: number;
  opacity: number;
  type: "icon" | "currency" | "number";
  animation: AnimationValues;
}

interface CurrencyFloatSymbol {
  id: string;
  currency: string;
  x: number;
  y: number;
  opacity: number;
  animation: AnimationValues;
  duration: number;
  delay: number;
}

const symbolTypes = [
  { icon: DollarSign, label: "$" },
  { icon: PoundSterling, label: "£" },
  { icon: Wifi, label: "WiFi" },
  { icon: TrendingUp, label: "Trend" },
  { icon: Hash, label: "#" },
  { icon: CreditCard, label: "Card" },
];

const currencies = ["$", "£", "€", "¥", "₹"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export function FloatingSymbols() {
  const [symbols, setSymbols] = useState<FloatingSymbol[]>([]);
  const [currencyFloats, setCurrencyFloats] = useState<CurrencyFloatSymbol[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const createSymbols = () => {
      const newSymbols: FloatingSymbol[] = [];
      const symbolCount = 50;

      for (let i = 0; i < symbolCount; i++) {
        const typeRoll = Math.random();
        let symbol: React.ReactNode;
        let type: "icon" | "currency" | "number";
        
        // Pre-calculate animation values
        const animX = Math.random() * 40 - 20;
        const animY = typeRoll < 0.4 ? -60 : typeRoll < 0.7 ? -50 : -40;
        const animRotate = typeRoll < 0.4 
          ? Math.random() * 15 - 7.5 
          : typeRoll < 0.7 
          ? Math.random() * 360 
          : Math.random() * 20 - 10;
        const animScale = typeRoll < 0.4 ? [1, 1.1 + Math.random() * 0.2, 1] : undefined;

        if (typeRoll < 0.4) {
          // Currency symbols (40%)
          type = "currency";
          const currency = currencies[Math.floor(Math.random() * currencies.length)];
          symbol = (
            <span className="text-3xl sm:text-4xl font-bold text-primary/30 font-mono">
              {currency}
            </span>
          );
        } else if (typeRoll < 0.7) {
          // Numbers (30%)
          type = "number";
          const number = numbers[Math.floor(Math.random() * numbers.length)];
          symbol = (
            <span className="text-2xl sm:text-3xl font-mono font-bold text-primary/25">
              {number}
            </span>
          );
        } else {
          // Icons (30%)
          type = "icon";
          const symbolIndex = Math.floor(Math.random() * symbolTypes.length);
          const SymbolComponent = symbolTypes[symbolIndex].icon;
          symbol = <SymbolComponent className="h-6 w-6 sm:h-8 sm:w-8 text-primary/30" />;
        }

        const animation: AnimationValues = {
          y: [0, animY, 0],
          x: [0, animX, 0],
          rotate: [0, animRotate, 0],
        };

        if (animScale) {
          animation.scale = animScale;
        }

        newSymbols.push({
          id: `symbol-${i}`,
          symbol,
          x: Math.random() * 100,
          y: Math.random() * 100,
          duration: 18 + Math.random() * 25,
          delay: Math.random() * 6,
          opacity: 0.15 + Math.random() * 0.25,
          type,
          animation,
        });
      }

      setSymbols(newSymbols);
    };

    const createCurrencyFloats = () => {
      const newFloats: CurrencyFloatSymbol[] = [];
      
      for (let i = 0; i < 15; i++) {
        const currency = currencies[i % currencies.length];
        const animX = Math.random() * 50 - 25;
        const animRotate = Math.random() * 20 - 10;
        const duration = 25 + Math.random() * 20;
        const delay = Math.random() * 8;
        
        newFloats.push({
          id: `currency-float-${i}`,
          currency,
          x: 10 + (i * 5.5),
          y: 10 + Math.sin(i) * 25,
          opacity: 0.2 + (Math.random() * 0.15),
          animation: {
            y: [0, -80, 0],
            x: [0, animX, 0],
            scale: [0.8, 1.3, 0.8],
            rotate: [0, animRotate, 0],
          },
          duration,
          delay,
        });
      }

      setCurrencyFloats(newFloats);
    };

    createSymbols();
    createCurrencyFloats();
  }, []);

  // Don't render on server to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {symbols.map((symbol) => (
        <motion.div
          key={symbol.id}
          className="absolute"
          style={{
            left: `${symbol.x}%`,
            top: `${symbol.y}%`,
            opacity: symbol.opacity,
            willChange: "transform",
          }}
          animate={symbol.animation as any}
          transition={{
            duration: symbol.duration,
            delay: symbol.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {symbol.symbol}
        </motion.div>
      ))}

      {/* Additional layer of floating currency symbols for depth */}
      {currencyFloats.map((float) => (
        <motion.div
          key={float.id}
          className="absolute text-3xl sm:text-4xl font-bold text-primary/25 font-mono"
          style={{
            left: `${float.x}%`,
            top: `${float.y}%`,
            opacity: float.opacity,
            willChange: "transform",
          }}
          animate={float.animation as any}
          transition={{
            duration: float.duration,
            delay: float.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {float.currency}
        </motion.div>
      ))}
    </div>
  );
}
