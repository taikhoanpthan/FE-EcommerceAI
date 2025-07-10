// src/components/FilterBar.jsx
import "./FilterBar.scss";

const FilterBar = ({ searchQuery, onSearch, priceFilter, onFilter }) => {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Tìm kiếm khoá học..."
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
      />
      <select value={priceFilter} onChange={(e) => onFilter(e.target.value)}>
        <option value="">Tất cả</option>
        <option value="low">&lt; 500K</option>
        <option value="mid">500K – 1 triệu</option>
        <option value="high">&gt; 1 triệu</option>
      </select>
    </div>
  );
};

export default FilterBar;
