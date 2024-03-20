import { Billboard as BillboardType } from "@/types";

type BillboardProps = {
  billboard: BillboardType;
};

const Billboard: React.FC<BillboardProps> = ({ billboard }) => {
  return (
    <div className="oveflow-hidden rounded-xl p-4 sm:p-6 lg:p-8">
      <div
        className="h-48 rounded-xl sm:h-72 md:h-96"
        style={{ backgroundColor: billboard.backgroundColor }}
      >
        <div className="flex h-full w-full flex-col items-center justify-center gap-y-8 text-center">
          <div className="max-w-xs text-3xl font-bold sm:max-w-xl sm:text-5xl lg:text-6xl">
            {billboard.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
