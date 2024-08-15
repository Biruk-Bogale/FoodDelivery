import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

type Props = {
  onChange: (value: string) => void;
  sortOption: string;
};
const SORT_OPTION = [
  {
    lable: "Best match",
    value: "bestMatch",
  },
  {
    lable: "Delivery price",
    value: "deliveryPrice",
  },
  {
    lable: "Estimated delivery time",
    value: "estimatedDeliveryTime",
  },
];

function SortOptionDropdowm({ onChange, sortOption }: Props) {
  const selectedSortLable =
    SORT_OPTION.find((option) => option.value === sortOption)?.lable ||
    SORT_OPTION[0].lable;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <Button variant={"outline"} className="w-full">
          Sort by: {selectedSortLable}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {SORT_OPTION.map((option) => (
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => onChange(option.value)}
          >
            {option.lable}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default SortOptionDropdowm;
