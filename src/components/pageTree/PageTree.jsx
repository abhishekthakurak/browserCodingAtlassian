import { PageNode } from "./PageNode";

export const PageTree = ({ pages, level }) => {
  return <div>{pages.map((page) => <PageNode key={page.id} page={page} level={level} />)}</div>
};
