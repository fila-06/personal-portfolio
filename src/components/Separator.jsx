/* eslint-disable react/prop-types */
const Separator = ({ text }) => {
  return (
    <div className="flex self-center items-center gap-2 py-4 w-full max-w-[960px]">
      <span className="flex text-3xl text-secondary uppercase">{text}</span>
      <span className="w-full h-[2px] bg-secondary-400/50"></span>
    </div>
  );
};

export default Separator;
