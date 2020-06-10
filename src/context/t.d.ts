interface ContextProps {
  sidebarLeft: {
    state: StateSidebar;
    dispatch: React.Dispatch<ActionSidebar>;
  };
  flowchart: {
    state: StateFlowchart;
    dispatch: React.Dispatch<ActionFlowchart>;
  };
}
