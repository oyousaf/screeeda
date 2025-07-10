import clsx from "clsx";

const Button = ({
  id,
  title = "",
  rightIcon = null,
  leftIcon = null,
  containerClass = "",
  type = "button",
}) => {
  return (
    <button
      id={id}
      type={type}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
        containerClass
      )}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <span className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[160%] group-hover:skew-y-12">
          {title}
        </span>
        <span className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </span>
      </span>

      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
