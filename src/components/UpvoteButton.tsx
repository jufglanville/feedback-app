import { BiChevronUp } from "react-icons/bi";
import { Pill } from "./Pill";

interface Props {
  selected: boolean;
  quantity: number;
}

const UpvoteButton = ({ selected, quantity }: Props) => {
  return (
    <Pill>
      <div className="flex flex-col justify-center items-center py-1">
        <BiChevronUp className="text-2xl" />
        <p className="text-black">{quantity}</p>
      </div>
    </Pill>
  );
};

export default UpvoteButton;
