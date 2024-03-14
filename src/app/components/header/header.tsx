import StickyHeader from "./StickyHeader";

const Header = (props: { isShortLogo?: boolean, color: any }) => {
  return (
    <StickyHeader color={props.color}/>
  );
};

export default Header;
