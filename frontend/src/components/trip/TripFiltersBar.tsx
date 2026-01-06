import { useState } from 'react';

interface TripFiltersBarProps {
  filters: {
    startDate: string;
    startFrom: string;
    people: number;
    rooms: number;
  };
  onFiltersChange: (filters: TripFiltersBarProps['filters']) => void;
}

export default function TripFiltersBar({ filters, onFiltersChange }: TripFiltersBarProps) {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleChange = (key: string, value: any) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  return (
    <div className="sm:sticky sm:top-20 bg-white border-b shadow-sm" style={{ zIndex: 999 }}>
      <div className="container mx-auto px-[6%] py-3 sm:py-4">
        <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">We found you the best date…</p>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          {/* Date picker */}
          <div className="flex items-center space-x-1 sm:space-x-2 border rounded-full px-2 sm:px-4 py-1.5 sm:py-2 bg-white text-xs sm:text-sm">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <input
              type="date"
              value={localFilters.startDate}
              onChange={(e) => handleChange('startDate', e.target.value)}
              className="border-none outline-none text-xs sm:text-sm w-24 sm:w-auto"
              placeholder="Start on..."
            />
          </div>

          {/* Start from */}
          <select
            value={localFilters.startFrom}
            onChange={(e) => handleChange('startFrom', e.target.value)}
            className="border rounded-full px-2 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-camino-orange"
          >
            <option>Start from London</option>
            <option>Start from Paris</option>
            <option>Start from Berlin</option>
            <option>Start from Amsterdam</option>
          </select>

          {/* People */}
          <div className="flex items-center space-x-1 sm:space-x-2 border rounded-full px-2 sm:px-4 py-1.5 sm:py-2 bg-white">
            <button
              onClick={() => handleChange('people', Math.max(1, localFilters.people - 1))}
              className="text-gray-400 hover:text-camino-charcoal text-sm sm:text-base"
            >
              −
            </button>
            <span className="text-xs sm:text-sm">{localFilters.people} people</span>
            <button
              onClick={() => handleChange('people', localFilters.people + 1)}
              className="text-gray-400 hover:text-camino-charcoal text-sm sm:text-base"
            >
              +
            </button>
          </div>

          {/* Rooms */}
          <div className="flex items-center space-x-1 sm:space-x-2 border rounded-full px-2 sm:px-4 py-1.5 sm:py-2 bg-white">
            <button
              onClick={() => handleChange('rooms', Math.max(1, localFilters.rooms - 1))}
              className="text-gray-400 hover:text-camino-charcoal text-sm sm:text-base"
            >
              −
            </button>
            <span className="text-xs sm:text-sm">{localFilters.rooms} room</span>
            <button
              onClick={() => handleChange('rooms', localFilters.rooms + 1)}
              className="text-gray-400 hover:text-camino-charcoal text-sm sm:text-base"
            >
              +
            </button>
          </div>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 sm:ml-auto">
            <a href="#customise" className="text-xs sm:text-sm text-camino-charcoal hover:text-camino-orange text-center sm:text-left">
              Enquire to customise
            </a>
            <button className="btn-primary text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

