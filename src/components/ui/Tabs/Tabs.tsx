import "react-tabs/style/react-tabs.css";

import type { FC, ReactNode } from "react";
import { Tab, TabList, TabPanel, Tabs as ReactTabs } from "react-tabs";

type Props = {
  className?: string;
  tabs: {
    label: string;
    content: ReactNode;
  }[];
  activeTabIndex: number;
  onTabChange?: (index: number) => void;
};

/**
 * @package
 */
export const Tabs: FC<Props> = ({
  activeTabIndex,
  className,
  onTabChange,
  tabs,
}) => {
  return (
    <ReactTabs
      className={`${className}`}
      selectedIndex={activeTabIndex}
      onSelect={onTabChange}
    >
      <TabList className="mb-6 flex gap-4 border-none">
        {tabs.map(({ label }, index) => (
          <Tab
            key={label}
            tabIndex={index.toString()}
            className="flex-1 cursor-pointer bg-transparent text-center text-xl hover:bg-gray-200"
            selectedClassName="border-b-2 border-solid border-custom-primary pb-1"
          >
            {label}
          </Tab>
        ))}
      </TabList>
      {tabs.map(({ content, label }) => (
        <TabPanel key={label}>{content}</TabPanel>
      ))}
    </ReactTabs>
  );
};
