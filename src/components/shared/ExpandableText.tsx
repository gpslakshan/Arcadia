import { useState } from "react";
import { Button } from "../ui/button";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const maxChars = 300;

  if (!children) return null;

  const isLongText = children.length > maxChars;
  const displayText = expanded ? children : children.slice(0, maxChars);

  return (
    <div>
      <p className="inline">
        {displayText}
        {!expanded && isLongText && "..."}
      </p>
      {isLongText && (
        <Button
          onClick={() => setExpanded(!expanded)}
          size="sm"
          className="ml-2"
        >
          {expanded ? "Show Less" : "Show More"}
        </Button>
      )}
    </div>
  );
};

export default ExpandableText;
