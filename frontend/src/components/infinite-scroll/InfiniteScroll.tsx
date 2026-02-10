import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "../product-card/ProductCard";
import { getProducts } from "../../api/products";
import { IProduct } from "../../model/products";

import "./style.css";

const InfiniteProductScroll = () => {
  const [items, setItems] = useState<IProduct[]>([]);
  const [hasMore, setHasMore] = useState(true);
  // const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const newItems = await getProducts();
      setItems((prevItems) => [...prevItems, ...newItems]);
      if (newItems.length === 30) {
        setHasMore(false);
      }
      // setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  return (
    <InfiniteScroll
      className="infinite-scroll"
      dataLength={items.length}
      next={fetchItems}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No items to load</p>}
    >
      {items.map((item, index) => (
        <ProductCard key={item.id + index} product={item} />
      ))}
    </InfiniteScroll>
  );
};

export default InfiniteProductScroll;
