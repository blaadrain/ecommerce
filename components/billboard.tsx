import { Billboard as BillboardType } from '@/types';

type BillboardProps = {
  billboard: BillboardType;
};

const Billboard: React.FC<BillboardProps> = ({ billboard }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl oveflow-hidden">
      <div
        className="rounded-xl h-48 sm:h-72 md:h-96"
        style={{ backgroundColor: billboard.backgroundColor }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {billboard.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
