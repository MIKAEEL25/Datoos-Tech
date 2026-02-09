import Links from './Links';

import FooterLocation from './FooterLocation';

const Footer = () => {
  return (
    <footer className="bg-linear-to-t from-gray-900 to-black text-white py-12 px-8 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col space-y-6">
          <span className="text-2xl font-bold tracking-tight mb-5">
            Solid Company
          </span>
          <FooterLocation />
        </div>
        <Links
          title="Services"
          links={['Virtual Art Department', 'Previsualization', 'Production']}
          to="offer"
        />
        <Links
          title="Stages"
          links={['Large Scale Stages', 'Connected Stages']}
          to="studios"
        />
        <Links
          title="Company"
          links={['Casting Call', 'Contact']}
          to="contact"
        />
      </div>
    </footer>
  );
};

export default Footer;
