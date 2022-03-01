function Button({ text, onClick, className }) {
  return (
    <button onClick={onClick} className={`bg-teal-dark text-white ${className}`}>
      {text}
    </button>
  );
}

export default Button;
