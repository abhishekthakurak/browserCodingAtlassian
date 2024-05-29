import { useState } from "react";
import { PageTree } from "./PageTree";

export const PageNode = ({ page, level }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div
      style={{
        paddingLeft: level * 8,
        paddingTop: 4,
        paddingBottom: 4,
      }}
    >
      {page.children ? (
        <div
          style={{
            display: "flex",
            cursor: "pointer",
            gap: 4,
          }}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? "▼" : "▶"}
          <div>{page.name}</div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            gap: 4,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
            }}
          >
            •
          </div>
          {page.name}
        </div>
      )}
      {page.children && isExpanded ? (
        <PageTree pages={page.children} level={level + 1} />
      ) : null}
    </div>
  );
};
