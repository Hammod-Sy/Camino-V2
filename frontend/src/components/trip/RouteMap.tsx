import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Trip } from '../../types';

interface RouteMapProps {
  trip: Trip;
}

// Fix for default markers in react-leaflet
delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

export default function RouteMap({ trip }: RouteMapProps) {
  const stops = trip.stops || [];
  const coordinates = stops.map((stop) => [stop.coordinates.lat, stop.coordinates.lng] as [number, number]);

  if (coordinates.length === 0) {
    return null;
  }

  const centerLat = coordinates.reduce((sum, [lat]) => sum + lat, 0) / coordinates.length;
  const centerLng = coordinates.reduce((sum, [, lng]) => sum + lng, 0) / coordinates.length;

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-serif font-bold text-camino-charcoal mb-8">Your route</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="rounded-card-lg overflow-hidden h-[500px] relative">
            <MapContainer
              center={[centerLat, centerLng]}
              zoom={6}
              style={{ height: '100%', width: '100%' }}
              className="z-0"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {coordinates.map((coord, index) => (
                <Marker key={index} position={coord}>
                  <Popup>
                    <div>
                      <strong>{stops[index].city}</strong>
                      {stops[index].nights > 0 && (
                        <p className="text-sm">{stops[index].nights} nights</p>
                      )}
                    </div>
                  </Popup>
                </Marker>
              ))}
              {coordinates.length > 1 && (
                <Polyline positions={coordinates} color="#FF6B35" weight={3} />
              )}
            </MapContainer>
            {/* Zoom controls overlay */}
            <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg flex flex-col z-[1000]">
              <button className="p-2 hover:bg-gray-100 border-b">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
            </div>
            {/* Search button */}
            <button className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 z-[1000] hover:bg-gray-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="card p-6 sticky top-32">
            <h3 className="text-xl font-semibold text-camino-charcoal mb-6">Trip overview</h3>
            <div className="space-y-6">
              {stops.map((stop, index) => (
                <div key={stop.id} className="flex">
                  <div className="flex flex-col items-center mr-4">
                    {index === 0 && (
                      <div className="w-4 h-4 rounded-full bg-camino-orange" />
                    )}
                    {index > 0 && index < stops.length - 1 && (
                      <>
                        <div className="w-1 h-4 bg-gray-300" />
                        <div className="w-4 h-4 rounded-full bg-camino-orange border-2 border-white ring-2 ring-camino-orange" />
                        <div className="w-1 h-4 bg-gray-300" />
                      </>
                    )}
                    {index === stops.length - 1 && (
                      <>
                        <div className="w-1 h-4 bg-gray-300" />
                        <div className="w-4 h-4 rounded-full bg-camino-orange" />
                      </>
                    )}
                  </div>
                  <div className="flex-1 pb-6 last:pb-0">
                    <div className="font-semibold text-camino-charcoal">{stop.city}</div>
                    {stop.country && (
                      <div className="text-sm text-gray-600">{stop.country}</div>
                    )}
                    {stop.nights > 0 && (
                      <div className="text-sm text-gray-500 mt-1">{stop.nights} nights</div>
                    )}
                    {stop.date && (
                      <div className="text-sm text-gray-500">{stop.date}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

