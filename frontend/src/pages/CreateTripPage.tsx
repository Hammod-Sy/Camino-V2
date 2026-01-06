import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateTripPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    startCity: '',
    travelMonth: '',
    duration: '',
    interests: [] as string[],
    pace: '',
    budget: '',
    accommodation: '',
  });

  const interestsOptions = ['Culture', 'Nature', 'Food', 'History', 'Art', 'Beaches', 'Mountains', 'Cities'];
  const paceOptions = ['Relaxed', 'Moderate', 'Active'];

  const handleInterestToggle = (interest: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(interest)
        ? formData.interests.filter((i) => i !== interest)
        : [...formData.interests, interest],
    });
  };

  const handleSubmit = () => {
    navigate('/create/results');
  };

  return (
    <div className="container mx-auto px-[6%] py-8 sm:py-16 max-w-4xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-camino-charcoal mb-6 sm:mb-12 text-center">
        Create a trip
      </h1>

      {/* Progress steps */}
      <div className="flex justify-center mb-6 sm:mb-12 overflow-x-auto">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold text-sm sm:text-base ${
                s <= step ? 'bg-camino-orange text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              {s}
            </div>
            {s < 4 && (
              <div
                className={`w-12 sm:w-20 h-1 ${s < step ? 'bg-camino-orange' : 'bg-gray-200'}`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="card p-4 sm:p-6 md:p-8">
        {step === 1 && (
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-camino-charcoal mb-4 sm:mb-6">
              Where would you like to start?
            </h2>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Start city
              </label>
              <input
                type="text"
                value={formData.startCity}
                onChange={(e) => setFormData({ ...formData, startCity: e.target.value })}
                placeholder="e.g., London, Paris, Berlin"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-camino-orange text-sm"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Travel month
              </label>
              <select
                value={formData.travelMonth}
                onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-camino-orange text-sm"
              >
                <option value="">Select month</option>
                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Duration
              </label>
              <select
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-camino-orange text-sm"
              >
                <option value="">Select duration</option>
                <option value="3-5">3-5 days</option>
                <option value="6-8">6-8 days</option>
                <option value="9-12">9-12 days</option>
                <option value="13+">13+ days</option>
              </select>
            </div>
            <button
              onClick={() => setStep(2)}
              disabled={!formData.startCity || !formData.travelMonth || !formData.duration}
              className="btn-primary w-full mt-4 sm:mt-6 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base py-2 sm:py-3"
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-camino-charcoal mb-4 sm:mb-6">
              What are you interested in?
            </h2>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-3 sm:mb-4">
                Interests (select all that apply)
              </label>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {interestsOptions.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => handleInterestToggle(interest)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border-2 transition-colors text-xs sm:text-sm ${
                      formData.interests.includes(interest)
                        ? 'bg-camino-orange text-white border-camino-orange'
                        : 'bg-white text-camino-charcoal border-gray-300 hover:border-camino-orange'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-3 sm:mb-4">
                Travel pace
              </label>
              <div className="space-y-2">
                {paceOptions.map((pace) => (
                  <button
                    key={pace}
                    onClick={() => setFormData({ ...formData, pace })}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 text-left transition-colors text-sm sm:text-base ${
                      formData.pace === pace
                        ? 'bg-camino-orange/10 border-camino-orange text-camino-charcoal'
                        : 'bg-white border-gray-300 text-camino-charcoal hover:border-camino-orange'
                    }`}
                  >
                    {pace}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <button
                onClick={() => setStep(1)}
                className="btn-secondary flex-1 text-sm sm:text-base py-2 sm:py-3"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                disabled={formData.interests.length === 0 || !formData.pace}
                className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base py-2 sm:py-3"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-camino-charcoal mb-4 sm:mb-6">
              Budget and preferences
            </h2>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Budget per person
              </label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-camino-orange text-sm"
              >
                <option value="">Select budget</option>
                <option value="300-500">€300-500</option>
                <option value="500-800">€500-800</option>
                <option value="800-1200">€800-1,200</option>
                <option value="1200+">€1,200+</option>
              </select>
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Accommodation style
              </label>
              <select
                value={formData.accommodation}
                onChange={(e) => setFormData({ ...formData, accommodation: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-camino-orange text-sm"
              >
                <option value="">Select style</option>
                <option value="boutique">Boutique hotels</option>
                <option value="guesthouse">Guesthouses</option>
                <option value="mixed">Mixed</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <button
                onClick={() => setStep(2)}
                className="btn-secondary flex-1 text-sm sm:text-base py-2 sm:py-3"
              >
                Back
              </button>
              <button
                onClick={() => setStep(4)}
                disabled={!formData.budget || !formData.accommodation}
                className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base py-2 sm:py-3"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-camino-charcoal mb-4 sm:mb-6">
              Review your preferences
            </h2>
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 space-y-3 sm:space-y-4 text-sm sm:text-base">
              <div>
                <strong>Start city:</strong> {formData.startCity}
              </div>
              <div>
                <strong>Travel month:</strong> {formData.travelMonth}
              </div>
              <div>
                <strong>Duration:</strong> {formData.duration} days
              </div>
              <div>
                <strong>Interests:</strong> {formData.interests.join(', ')}
              </div>
              <div>
                <strong>Pace:</strong> {formData.pace}
              </div>
              <div>
                <strong>Budget:</strong> €{formData.budget}
              </div>
              <div>
                <strong>Accommodation:</strong> {formData.accommodation}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <button
                onClick={() => setStep(3)}
                className="btn-secondary flex-1 text-sm sm:text-base py-2 sm:py-3"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="btn-primary flex-1 text-sm sm:text-base py-2 sm:py-3"
              >
                Generate itineraries
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

