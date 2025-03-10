import "./pressable.css";

const Pressable = ({ onPress, children, padd, width, selector }) => {
  return (
    <div
      onClick={onPress}
      className={`${selector ? "press1 colorchange1" : "press2 colorchange2"}`}
      style={{ padding: padd, width: width }}
    >
      {children}
    </div>
  );
};

export default Pressable;
