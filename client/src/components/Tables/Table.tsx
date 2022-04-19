import React, { useState } from "react";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import axios from "axios";

import { SearchConsumer } from "../../context/searchContext";
import { ButtonAction, Product } from "../../types";
import { TableData, TableDataButton } from "./TableData";
import { TableHead, TableHeadButton } from "./TableHead";
import { EditProductModal } from "../Modals/EditProductModal";
import TableLayout from "./TableLayout";

export const Table = ({ products }: { products: Product[] }) => {
  const { search } = SearchConsumer();
  const [showDialog, setShowDialog] = useState(false);
  const [product, setProduct] = useState<Product>();

  const router = useRouter();

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });

  const deleteProduct = async (id: number) => {
    const response = await axios.delete(
      `http://localhost:8000/api/products/${id}/`
    );

    if (response.status === 204) {
      router.reload();
    }
  };

  return (
    <>
      {filteredProducts.length === 0 ? (
        <h1 className="text-center font-medium text-2xl">Product Not Found</h1>
      ) : (
        <TableLayout>
          <thead>
            <tr>
              <TableHead>Product Name</TableHead>
              <TableHead>Retail Price</TableHead>
              <TableHead>Sale Price</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Date Added</TableHead>
              <TableHead>Date Modified</TableHead>
              <TableHeadButton>Edit</TableHeadButton>
              <TableHeadButton>Delete</TableHeadButton>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <TableData isBold>{product.name}</TableData>
                <TableData>&#x20B1;{product.retail_price}</TableData>
                <TableData>&#x20B1;{product.sale_price}</TableData>
                <TableData>{product.quantity}</TableData>
                <TableData>
                  {dayjs(product.date_added).format("MMMM DD, YYYY")}
                </TableData>
                <TableData>
                  {dayjs(product.date_modified).format("MMMM DD, YYYY")}
                </TableData>
                <TableDataButton
                  action={ButtonAction.EDIT}
                  onClick={() => {
                    setProduct(product);
                    setShowDialog(true);
                  }}>
                  Edit
                </TableDataButton>
                <TableDataButton
                  action={ButtonAction.DELETE}
                  onClick={() => deleteProduct(product.id)}>
                  Delete
                </TableDataButton>
              </tr>
            ))}
          </tbody>
        </TableLayout>
      )}
      <EditProductModal
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        product={product!}
      />
    </>
  );
};
