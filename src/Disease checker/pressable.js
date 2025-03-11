import "./pressable.css";

const Pressable = ({ onPress, children, padd, width, selector, pressed }) => {
  return (
    <div
      onClick={onPress}
      className={`${selector ? "press1" : "press2"} ${
        !pressed & selector ? "colorchange1" : null
      } ${!pressed & !selector ? "colorchange2" : null}`}
      style={{ padding: padd, width: width }}
    >
      {children}
    </div>
  );
};

export default Pressable;
