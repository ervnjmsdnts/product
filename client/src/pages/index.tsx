import axios from "axios";

import { Product } from "../types";
import { Header } from "../components/Header";
import { Table } from "../components/Tables/Table";

const Home = ({ products }: { products: Product[] }) => {
  return (
    <main className="mx-auto w-full md:w-3/4 p-4">
      <Header />
      <Table products={products} />
    </main>
  );
};

export const getServerSideProps = async () => {
  const response = await axios.get("http://localhost:8000/api/products/");
  const products = await response.data;
  return {
    props: { products },
  };
};

export default Home;
