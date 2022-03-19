import "./ItemsCard.css";
const ItemsCard = ({ title, image, width }) => {
  return (
    <div className="item-card">
      <div className="item-title">{title}</div>
      <div className="item-img">
        <img src={image} alt="Avatar" width={width ? width : "100%"} />
      </div>
      <div className="item-btn">
        <button> More {">>"} </button>
      </div>
    </div>
  );
};

export default ItemsCard;
