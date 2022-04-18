const Button = (props) => {
  return (
    <div className={props.classWrapper ? props.classWrapper : "mb-4 text-center"}>
      <button className={`bg-indigo-500 px-6 py-2 rounded-sm text-lg font-medium ${props.btnClass}`}>{props.text}</button>
    </div>
  );
};

export default Button;
