import { types } from "react-bricks/frontend";

const pageTypes: types.IPageType[] = [
  {
    name: "page",
    pluralName: "pages",
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => [],
  },
  {
    name: "email",
    pluralName: "email",
    defaultLocked: false,
    defaultStatus: types.PageStatus.Published,
    getDefaultContent: () => ["title", "paragraph"],
  },
];

export default pageTypes;
