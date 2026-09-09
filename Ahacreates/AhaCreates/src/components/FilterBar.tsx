import { categories, type Category } from "../data/mockProducts";

export type SortOption = "low-high" | "high-low";

interface FilterBarProps {
  selectedCategory: Category | "All";
  onCategoryChange: (category: Category | "All") => void;
  sortOption: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const allCategories: (Category | "All")[] = ["All", ...categories];

export default function FilterBar({
  selectedCategory,
  onCategoryChange,
  sortOption,
  onSortChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-5">
      <div className="flex flex-wrap gap-2">
        <span className="mr-2 self-center text-xs font-semibold tracking-wider text-warm-gray uppercase">
          Category
        </span>
        {allCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => onCategoryChange(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
              selectedCategory === cat
                ? "bg-gold text-white shadow-sm"
                : "bg-cream text-charcoal-light hover:bg-cream-dark"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <label
          htmlFor="sort-select"
          className="text-xs font-semibold tracking-wider text-warm-gray uppercase"
        >
          Price
        </label>
        <select
          id="sort-select"
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="rounded-full border border-charcoal/10 bg-cream px-4 py-2 text-sm text-charcoal focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        >
          <option value="low-high">Low – High</option>
          <option value="high-low">High – Low</option>
        </select>
      </div>
    </div>
  );
}
