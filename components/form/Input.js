const Input = (props) => {
  const htmlFor = props.label.split(" ").join("");

  return (
    <div className={props.classWrapper ? props.classWrapper : "mb-4"}>
      <label className="mb-2 block" htmlFor={htmlFor}>
        {`${props.label} :`}
      </label>
      <input
        ref={props.forwardRef}
        className="w-full py-2 px-3 text-black rounded"
        type={props.type}
        id={htmlFor}
        name={htmlFor}
        required
      />
    </div>
  );
};

export default Input;
