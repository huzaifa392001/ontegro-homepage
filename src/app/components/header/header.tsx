import StickyHeader from "./StickyHeader";

const Header = (props: { isShortLogo?: boolean, color: any }) => {
  return (
    <div>
      {/* <div></div> */}
      <StickyHeader color={props.color}/>
    </div>
  );
};

export default Header;
