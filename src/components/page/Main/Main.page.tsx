"use client";

import { Tag } from "src/components/ui/Tag";

/**
 * @package
 */
export const Main: React.FC = () => {
  return (
    <div>
      <Tag type="chip" filled onClick={() => console.log()} />
      <Tag type="frontend" filled onClick={() => console.log()} />
      <Tag type="backend" filled />
      <Tag type="mobile" filled />
      <Tag type="infrastructure" filled />
      <Tag type="design" filled />
      <Tag type="us" filled />
    </div>
  );
};
