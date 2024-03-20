import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

type IconButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  icon: React.ReactElement;
};

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  className,
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center rounded-full border bg-white p-2 shadow-md transition hover:scale-110",
        className,
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
