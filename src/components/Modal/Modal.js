export const Modal = ({ children }) => {
  return (
    <div className="w-full h-full flex items-center justify-center absolute z-10">
      <div
        id="defaultModal"
        className="section-newForm z-20"
        style={{ width: "700px" }}
      >
        {children}
      </div>
      <div
        className="w-full h-full bg-teal-light opacity-20 fixed left-0"
        style={{ zIndex: "15" }}
      ></div>
    </div>
  );
};
