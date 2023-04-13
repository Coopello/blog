import renderer from "react-test-renderer";

import { ExceptionContent } from "./";

describe("ui/ExceptionContent", () => {
  it("Snap Shot", () => {
    const component = renderer.create(
      <ExceptionContent
        message={"テスト"}
        buttonComponent={<button>テスト</button>}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
