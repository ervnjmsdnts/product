import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { AddProductModal } from "./Modals/AddProductModal";
import SearchField from "./SearchField";

export const Header = () => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row md:justify-between">
        <button
          type="button"
          className="flex items-center bg-green-400 p-2.5 rounded m-4"
          onClick={() => setShowDialog(true)}>
          Add Product
          <AiOutlinePlus className="pl-2 text-2xl" />
        </button>
        <SearchField />
      </div>
      <AddProductModal showDialog={showDialog} setShowDialog={setShowDialog} />
    </>
  );
};
