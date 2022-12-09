import { Tag } from "src/components/ui/Tag";

/**
 * @package
 */
export const Main: React.FC = () => {
  return (
    <div>
      <Tag type="chip" outline />
      <Tag type="frontend" outline />
      <Tag type="backend" outline />
      <Tag type="mobile" outline />
      <Tag type="infrastructure" outline />
      <Tag type="design" outline />
      <Tag type="us" outline />
    </div>
  );
};
