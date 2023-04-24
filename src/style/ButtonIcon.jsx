import PropTypes from "prop-types";

const ButtonIcon = ({srcForImage, onClickFunction, ...otherProps}) => {
  return (
    <>
      <button onClick={() => onClickFunction()}>
        <img src={srcForImage} {...otherProps}/>
      </button>
    </>
  );
};

ButtonIcon.propTypes = {
  srcForImage: PropTypes.string,
  onClickFunction: PropTypes.func,
};

export default ButtonIcon;
