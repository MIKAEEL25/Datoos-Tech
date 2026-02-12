import React from 'react';

interface TableRow {
  label: string;
  value1: string;
  value2: string;
}

interface SpecTableProps {
  headers: [string, string, string];
  data: TableRow[];
}

const StudioTabel: React.FC<SpecTableProps> = ({ headers, data }) => {
  return (
    <div className="w-fit m-auto max-w-5xl bg-transparent">
      <table className="w-full text-white border-collapse">
        <thead>
          <tr className="border-b-[3px] border-whitetext-2xl tracking-tight">
            <th className="py-3 text-left w-1/3  sm:text-3xl">{headers[0]}</th>
            <th className="py-3 text-center w-1/3 sm:text-3xl">{headers[1]}</th>
            <th className="py-3 text-right w-1/3 sm:text-3xl">{headers[2]}</th>
          </tr>
        </thead>
        <tbody className="text-l md:text-xl font-bold">
          {data.map((item, idx) => (
            <tr key={idx} className="border-b border-white">
              <td className="py-5 text-left text-white/90">{item.label}</td>
              <td className="py-5 text-center text-white/90">{item.value1}</td>
              <td className="py-5 text-right text-white/90">{item.value2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudioTabel;