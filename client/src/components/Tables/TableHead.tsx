interface TableHeadProps {
  children: React.ReactNode;
}

export const TableHead = ({ children }: TableHeadProps) => {
  return (
    <th scope="col" className="table-head">
      {children}
    </th>
  );
};

export const TableHeadButton = ({ children }: TableHeadProps) => {
  return (
    <th scope="col" className="relative px-6 py-3">
      <span className="sr-only">{children}</span>
    </th>
  );
};
