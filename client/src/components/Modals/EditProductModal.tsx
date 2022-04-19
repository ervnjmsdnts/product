import { Dialog } from "@headlessui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import { Product, ProductInput } from "../../types";

interface Props {
  showDialog: boolean;
  setShowDialog: (showDialog: boolean) => void;
  product: Product;
}

export const EditProductModal = ({
  showDialog,
  setShowDialog,
  product,
}: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProductInput>();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const isFieldError =
    errors.name || errors.retail_price || errors.sale_price || errors.quantity;

  useEffect(() => {
    if (product) {
      setValue("name", product.name);
      setValue("retail_price", product.retail_price);
      setValue("sale_price", product.sale_price);
      setValue("quantity", product.quantity);
    }
  }, [product, setValue]);

  const onSubmitForm: SubmitHandler<ProductInput> = async (data) => {
    try {
      setIsLoading(true);
      const response = await axios.put(
        `http://www.localhost:8000/api/products/${product.id}/`,
        data
      );

      if (response.status === 200) {
        setIsLoading(false);
        router.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog
      open={showDialog}
      onClose={() => setShowDialog(false)}
      className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex justify-center mt-10 max-w-2xl mx-auto">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="relative bg-white rounded w-full p-6">
          {isFieldError && (
            <p className="text-red-500 italic text-sm">
              *All fields are required
            </p>
          )}
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <div className="flex">
              <input
                type="text"
                className="w-1/2 bg-gray-100 text-gray-900 rounded-md pl-2 h-12 mt-2"
                placeholder="Enter product name"
                {...register("name", { required: true })}
              />
              <div className="px-2"></div>
              <input
                type="number"
                step="0.01"
                className="w-1/2 bg-gray-100 text-gray-900 rounded-md pl-2 h-12 mt-2"
                placeholder="Enter retail price"
                {...register("retail_price", { required: true })}
              />
            </div>
            <div className="flex">
              <input
                type="number"
                step="0.01"
                className="w-1/2 bg-gray-100 text-gray-900 rounded-md pl-2 h-12 mt-2"
                placeholder="Enter sale price"
                {...register("sale_price", { required: true })}
              />
              <div className="px-2"></div>
              <input
                type="number"
                className="w-1/2 bg-gray-100 text-gray-900 rounded-md pl-2 h-12 mt-2"
                placeholder="Enter quantity"
                {...register("quantity", { required: true })}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-indigo-400 rounded-md px-4 py-2 mt-4 disabled:opacity-25 disabled:cursor-wait">
              Edit Product
            </button>
          </form>
        </div>
      </div>
    </Dialog>
  );
};
