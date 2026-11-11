export default function SearchBar({
  search,
  setSearch
}) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e)=>
        setSearch(e.target.value)
      }
      style={{
        width:"100%",
        padding:"10px",
        marginBottom:"20px"
      }}
    />
  );
}