import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

useRouter.mockImplementation(() => ({
  pathname: "/",
  query: {},
  asPath: "/",
}));
