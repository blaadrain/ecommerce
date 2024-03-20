import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import { cn } from "@/lib/utils";

type GalleryTabProps = {
  image: ImageType;
};

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md">
      {({ selected }) => (
        <div>
          <span className="absolute inset-0 aspect-square h-full w-full overflow-hidden rounded-md">
            <div className="aspect-square rounded-xl bg-gray-100" />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent",
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
