import bullsEye from "@/assets/bulls-eye.webp";
import thumbsUp from "@/assets/thumbs-up.webp";
import meh from "@/assets/meh.webp";

const emojiMap: {
  [key: number]: { src: string; alt: string; className: string };
} = {
  3: { src: meh, alt: "meh", className: "size-5" },
  4: { src: thumbsUp, alt: "recommended", className: "size-5" },
  5: { src: bullsEye, alt: "exceptional", className: "size-7 mb-1" },
};

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  return <img {...emojiMap[rating]} />;
};

export default Emoji;
