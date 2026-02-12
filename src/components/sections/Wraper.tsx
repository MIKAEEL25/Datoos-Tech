const Wraper: React.FC<{ children: React.ReactNode; clasName?: string }> = ({
  children,
  clasName,
}) => {
  return (
    <>
      <section className="relative py-6 overflow-hidden bg-[#0c0a14]">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 100% 80% at 35% 50%, #182840 0%, #121828 25%, #0e1220 45%, #0c0a14 70%)',
            filter: 'blur(80px)',
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 70% at 75% 55%, #1a1228 0%, #140e1e 30%, transparent 60%)',
            filter: 'blur(50px)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, #000 0%, transparent 15%, transparent 85%, #000 100%),
        linear-gradient(to right, #000 0%, transparent 10%, transparent 90%, #000 100%)`,
          }}
        />
        <div className={clasName}>{children}</div>
      </section>
    </>
  );
};

export default Wraper;
