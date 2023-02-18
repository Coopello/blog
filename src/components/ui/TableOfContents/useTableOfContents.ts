import { useEffect } from "react";

const FOCUS_CLASS_NAMES = ["border-l-4", "border-custom-sky"];

/**
 * @package
 */
export const useTableOfContents = (contentId: string) => {
  const targetTocDataVal = "toc";

  useEffect(() => {
    if (!document) return;

    const anchorsArray = Array.from(
      document.querySelectorAll(`#${contentId} h1`)
    );
    const tocArray = Array.from(
      document.querySelectorAll(`[data-val=${targetTocDataVal}]`)
    );
    const options = {
      root: null,
      rootMargin: "0% 0px -95% 0px",
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const entry = entries.find(
        (entry: IntersectionObserverEntry) => entry.isIntersecting
      );
      if (!entry) return;

      const index = anchorsArray.indexOf(entry.target);

      // 高速で行き来した時に、クラスの処理が間に合わない場合がある
      // なので、setTimeoutでタスクキューに積むことで順番に処理が動くようにする
      setTimeout(() => {
        tocArray.forEach((item, i) => {
          i === index
            ? FOCUS_CLASS_NAMES.forEach((className) => {
                item.classList.add(className);
              })
            : FOCUS_CLASS_NAMES.forEach((className) => {
                item.classList.remove(className);
              });
        });
      }, 0);
    };

    const observer = new IntersectionObserver(observerCallback, options);

    anchorsArray.forEach((item: Element) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [contentId]);

  return {
    targetTocDataVal,
  };
};
