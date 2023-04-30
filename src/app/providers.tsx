"use client";

import type { FC, ReactNode } from "react";
import { microCmsApiFetcher } from "src/libs/apiClient";
import { SWRConfig } from "swr";

type Props = {
  children: ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        fetcher: microCmsApiFetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
};
