import { useContext, useEffect, useState } from "react";
import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import NewsletterBox from "../components/NewsletterBox";
import OurPolicy from "../components/OurPolicy";
import ProductItem from "../components/ProductItem";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

const Home = () => {
  const { products, search, showSearch, setSearch } = useContext(ShopContext);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (showSearch && search) {
      const results = products.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.category.toLowerCase().includes(search.toLowerCase()) ||
          item.subCategory.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [search, showSearch, products]);

  // If search is active and there are search terms, show search results
  if (showSearch && search) {
    return (
      <div>
        <div className="my-10">
          <div className="text-center py-8 text-3xl">
            <Title text1={"SEARCH"} text2={"RESULTS"} />
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
              Found {searchResults.length} result
              {searchResults.length !== 1 ? "s" : ""} for &quot;{search}&quot;
            </p>
          </div>
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
              {searchResults.map((item, index) => (
                <ProductItem
                  key={index}
                  name={item.name}
                  id={item._id}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">
                No products found matching your search.
              </p>
              <button
                onClick={() => setSearch("")}
                className="mt-4 bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  );
};

export default Home;
