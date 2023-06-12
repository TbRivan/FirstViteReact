import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

function Header(props) {
  const { image, id } = props;
  return (
    <Link to={`/product/${id}`}>
      <img
        src={image}
        alt="product"
        className="p-1 rounded-lg h-40 w-full object-cover"
      />
    </Link>
  );
}

function Body(props) {
  const { children, title } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white pt-2">
          {title}
        </h5>
        <p className="text-sm text-white">{children.substring(0, 100)}...</p>
      </a>
    </div>
  );
}

function Footer(props) {
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        ${" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}
      </span>
      <Button
        classname="bg-blue-500 font-bold"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      >
        Add to Cart
      </Button>
    </div>
  );
}

export default function CardProduct(props) {
  const { children } = props;
  return (
    <div className="w-full max-w-[285px] bg-gray-800 border border-gray-200 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

CardProduct.propTypes = {
  children: PropTypes.any,
};

Header.propTypes = {
  image: PropTypes.string,
  id: PropTypes.number,
};

Body.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string,
};

Footer.propTypes = {
  price: PropTypes.number,
  id: PropTypes.number,
  handleAddToCart: PropTypes.func,
};
