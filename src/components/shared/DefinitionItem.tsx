import type { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <div>
      <dt className="text-muted-foreground font-bold">{term}</dt>
      <dd>{children}</dd>
    </div>
  );
};

export default DefinitionItem;
