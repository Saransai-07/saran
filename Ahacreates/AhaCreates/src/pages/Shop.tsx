import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterBar, { type SortOption } from "../components/FilterBar";
import ProductCard from "../components/ProductCard";
import ScrollSection from "../components/ScrollSection";
import { products, type Category } from "../data/mockProducts";

export default function Shop() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") as Category | null;

  const [selectedCategory, setSelectedCategory] = useState<Category | "All">(
    categoryParam && ["Earrings", "Necklaces", "Rings", "Bracelets"].includes(categoryParam)
      ? categoryParam
      : "All",
  );
  const [sortOption, setSortOption] = useState<SortOption>("low-high");

  const filteredProducts = useMemo(() => {
    let result =
      selectedCategory === "All"
        ? [...products]
        : selectedCategory === "Rings"
          ? products.filter(
              (p) => p.category === "Rings" || p.category === "Bracelets",
            )
          : products.filter((p) => p.category === selectedCategory);

    result.sort((a, b) =>
      sortOption === "low-high" ? a.price - b.price : b.price - a.price,
    );

    return result;
  }, [selectedCategory, sortOption]);

  return (
    <div className="section-padding">
      <div className="container-narrow">
        <ScrollSection>
          <div className="mb-10">
            <h1 className="font-serif text-4xl text-charcoal sm:text-5xl">
              Shop all jewellery
            </h1>
            <p className="mt-3 max-w-lg text-warm-gray">
              Discover handcrafted pieces made in small batches. Each one is
              designed to become part of your everyday story.
            </p>
          </div>
        </ScrollSection>

        <ScrollSection delay={100}>
          <FilterBar
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortOption={sortOption}
            onSortChange={setSortOption}
          />
        </ScrollSection>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <ScrollSection key={product.id} delay={(index % 4) * 80}>
              <ProductCard product={product} />
            </ScrollSection>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="mt-12 text-center text-warm-gray">
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
}
