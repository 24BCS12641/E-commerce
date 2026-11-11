export default function Sidebar({
  categories,
  setCategory
}) {
  return (
    <div style={{
      width:"200px",
      padding:"10px",
      borderRight:"1px solid #ddd"
    }}>
      <h3>Categories</h3>

      <p
        style={{cursor:"pointer"}}
        onClick={() =>
          setCategory("")
        }
      >
        All
      </p>

      {categories.map((item,index)=>(
        <p
          key={index}
          style={{cursor:"pointer"}}
          onClick={() =>
            setCategory(item)
          }
        >
          {item}
        </p>
      ))}
    </div>
  );
}