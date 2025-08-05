import * as Slider from '@radix-ui/react-slider';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { formatCurrency } from '../../app/utils/formatCurrency';

interface PriceRangeFilterProps {
  onPriceRangeChange: (min: number, max: number) => void;
  maxPrice?: number;
  minPrice?: number;
}

export function PriceRangeFilter({ 
  onPriceRangeChange, 
  maxPrice = 1000, 
  minPrice = 0 
}: PriceRangeFilterProps) {
  const [values, setValues] = useState([minPrice, maxPrice]);

  // Atualizar valores quando maxPrice ou minPrice mudarem
  useEffect(() => {
    setValues([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  useEffect(() => {
    onPriceRangeChange(values[0], values[1]);
  }, [values, onPriceRangeChange]);

  return (
    <div className="w-full">
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Faixa de Preço</h3>
        <div className="flex justify-between text-xs text-gray-500">
          <span>{formatCurrency(values[0])}</span>
          <span>{formatCurrency(values[1])}</span>
        </div>
      </div>

      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        value={values}
        onValueChange={setValues}
        max={maxPrice}
        min={minPrice}
        step={10}
      >
        <Slider.Track className="bg-gray-200 relative grow rounded-full h-2">
          <Slider.Range className="absolute bg-blue-500 rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb className="block w-5 h-5 bg-white border-2 border-blue-500 rounded-full hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors" />
        <Slider.Thumb className="block w-5 h-5 bg-white border-2 border-blue-500 rounded-full hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors" />
      </Slider.Root>

      <div className="mt-3 flex gap-2">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setValues([minPrice, maxPrice])}
          className="text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          Limpar filtro
        </motion.button>
      </div>
    </div>
  );
} 