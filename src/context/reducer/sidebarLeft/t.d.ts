interface dataSidebarDrop {
  type: string;
  ports: {
    [s: string]: {
      id: string;
      type: string;
      properties: {
        custom: string;
      };
    };
  };
  properties: {
    custom: string;
  };
}

interface dropSidebarItem {
  type: 'sidebarDrop';
  data: dataSidebarDrop;
}

declare type StateSidebar = dataSidebarDrop;
declare type ActionSidebar = dropSidebarItem;
