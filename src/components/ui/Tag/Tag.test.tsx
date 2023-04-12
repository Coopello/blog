import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";

import { Tag } from "./";

describe("ui/Tag", () => {
  const onClick = jest.fn();

  it("Snap Shot Chip", () => {
    const component = renderer.create(
      <Tag color="#E10718" text="front-end" filled />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Snap Shot outline Chip", () => {
    const component = renderer.create(<Tag color="#E10718" text="front-end" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Snap Shot button Chip", () => {
    const component = renderer.create(
      <Tag color="#E10718" text="front-end" onClick={onClick} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("ボタンとしてレンダリングされた場合に、", () => {
    it("filled=false のホバー時のインタラクションが適切に動作している。", async () => {
      const { getByRole } = render(
        <Tag color="#E10718" text="front-end" onClick={onClick} />
      );

      const tagButton = getByRole("button");
      expect(tagButton.style.backgroundColor).toBe("transparent");

      userEvent.hover(tagButton);
      await waitFor(() => {
        expect(tagButton.style.backgroundColor).toBe("rgba(0, 0, 0, 0.1)");
      });

      userEvent.unhover(tagButton);
      await waitFor(() => {
        expect(tagButton.style.backgroundColor).toBe("transparent");
      });
    });

    it("filled=true のホバー時のインタラクションが適切に動作している。", async () => {
      const { getByRole } = render(
        <Tag color="#E10718" text="front-end" onClick={onClick} filled />
      );

      const tagButton = getByRole("button");
      expect(tagButton.style.opacity).toBe("1");

      userEvent.hover(tagButton);
      await waitFor(() => {
        expect(tagButton.style.opacity).toBe("0.7");
      });

      userEvent.unhover(tagButton);
      await waitFor(() => {
        expect(tagButton.style.opacity).toBe("1");
      });
    });
  });
});
