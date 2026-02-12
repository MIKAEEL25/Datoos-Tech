import HomeTabel from './HomeTabel';

const Moon: React.FC = () => {
  return (
    <div
      className={`relative w-full overflow-hidden bg-black`}
      style={{ minHeight: '600px', aspectRatio: '1080 / 550' }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[200%] h-[55%] top-30 opacity-100"
          style={{
            background:
              'radial-gradient(ellipse at center bottom, rgba(40,25,90,0.35) 0%, #fff 35%, #fff 40% , transparent 58%)',
            filter: 'blur(50px)',
          }}
        />
        <div
          className="absolute top-[-6%] left-1/2 -translate-x-1/2 w-[70%] h-[40%] opacity-80"
          style={{
            background:
              'radial-gradient(ellipse at center bottom, rgba(100,190,230,0.9) 0%, rgba(80,160,215,0.9) 15%, rgba(60,120,190,0.9) 32%, rgba(40,80,150,0.5) 50%, transparent 68%)',
            filter: 'blur(18px)',
          }}
        />
      </div>
      <div
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70%] h-[40%] opacity-80"
        style={{
          background:
            'radial-gradient(ellipse at center bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 15%, rgba(255,255,255,0.9) 25%, rgba(40,80,150,0.5) 50%, transparent 68%)',
          filter: 'blur(18px)',
        }}
      />
      <div
        className="absolute top-[10%] left-2/8 -translate-x-1/2 w-[70%] h-[40%] opacity-80"
        style={{
          background:
            'radial-gradient(ellipse at center bottom, rgba(92, 1, 109, 0.8) 30%, transparent 68%)',
          filter: 'blur(18px)',
        }}
      />
      <div
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[40%] h-[40%] opacity-80"
        style={{
          background:
            'radial-gradient(ellipse at center bottom, #fff 30%, transparent 58%)',
          filter: 'blur(18px)',
        }}
      />
      <div
        className="absolute top-[10%] left-[70%] -translate-x-1/2 w-[40%] h-[40%] opacity-80"
        style={{
          background:
            'radial-gradient(ellipse at center bottom,rgba(182, 2, 143, 0.8) 30%, transparent 50%)',
          filter: 'blur(38px)',
        }}
      />

      <div
        className="absolute bottom-[-10%] z-0 left-1/2 -translate-x-1/2 w-[150%] h-[80%] rounded-[100%]"
        style={{
          background:
            'radial-gradient(ellipse at center top, #1a1333 0%, #110D1E 15%, #000 100%)',
          boxShadow: '0 -10px 50px rgba(100,180,220,0.3)',
        }}
      />

      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center p-4 md:p-10">
        <div className="w-full max-w-6xl mt-20 overflow-x-auto">
          <HomeTabel />
        </div>
      </div>
    </div>
  );
};

export default Moon;
