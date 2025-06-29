
const FlyingAirplanes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {/* Continuous flying airplanes */}
      <div className="absolute top-1/5 left-0 text-3xl airplane-animation-1 opacity-70">✈️</div>
      <div className="absolute top-2/5 left-0 text-2xl airplane-animation-2 opacity-60">🛩️</div>
      <div className="absolute top-3/5 left-0 text-3xl airplane-animation-3 opacity-70">✈️</div>
      <div className="absolute top-4/5 left-0 text-2xl airplane-animation-1 opacity-50" style={{ animationDelay: '10s' }}>🛩️</div>
    </div>
  );
};

export default FlyingAirplanes;
