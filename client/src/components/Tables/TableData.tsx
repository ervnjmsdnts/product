import React from "react";
import { ButtonAction } from "../../types";

interface TableDataProps extends React.HTMLAttributes<HTMLButtonElement> {
  isBold?: boolean;
  action?: ButtonAction;
  children: React.ReactNode;
}

export const TableData = ({ children, isBold }: TableDataProps) => {
  return (
    <td className="table-data">
      <div className={`text-sm text-gray-900 ${isBold ? "font-medium" : ""}`}>
        {children}
      </div>
    </td>
  );
};

export const TableDataButton = ({
  children,
  action,
  ...rest
}: TableDataProps) => {
  if (action === ButtonAction.EDIT) {
    return (
      <td className="table-data">
        <button className="text-indigo-600 hover:text-indigo-900" {...rest}>
          {children}
        </button>
      </td>
    );
  }
  if (action === ButtonAction.DELETE) {
    return (
      <td className="table-data">
        <button className="text-red-600 hover:text-red-900" {...rest}>
          {children}
        </button>
      </td>
    );
  }

  return null;
};
