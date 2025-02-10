import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CustomTreeItem from "./customMenuItem";

function App() {
  const treeData = [
    {
      nodeId: "1",
      label: "Data Grid",
      url: "https://www.google.com",
      children: [
        {
          nodeId: "1-1",
          label: "@mui/x-data-grid",
          url: "https://mui.com/x/react-data-grid/",
          children: [
            {
              nodeId: "1-1-1",
              label: "@mui/x-data-grid-pro",
              url: "https://mui.com/x/react-data-grid-pro/",
            },
          ],
        },
        {
          nodeId: "1-2",
          label: "@mui/x-data-grid-pro",
          url: "https://mui.com/x/react-data-grid-pro/",
        },
        {
          nodeId: "1-3",
          label: "@mui/x-data-grid-premium",
          url: "https://mui.com/x/react-data-grid-premium/",
        },
      ],
    },
    {
      nodeId: "2",
      label: "Date and Time Pickers",
      url: "https://www.youtube.com",
      children: [
        {
          nodeId: "2-1",
          label: "@mui/x-date-pickers",
          url: "https://mui.com/x/react-date-pickers/",
        },
        {
          nodeId: "2-2",
          label: "@mui/x-date-pickers-pro",
          url: "https://mui.com/x/react-date-pickers-pro/",
        },
      ],
    },
    {
      nodeId: "3",
      label: "Charts",
      url: "https://www.linkedin.com",
      children: [
        {
          nodeId: "3-1",
          label: "@mui/x-charts",
          url: "https://mui.com/x/react-charts/",
        },
      ],
    },
    {
      nodeId: "4",
      label: "Tree View",
      url: "https://www.twitter.com",
      children: [
        {
          nodeId: "4-1",
          label: "@mui/x-tree-view",
          url: "https://mui.com/x/react-tree-view/",
        },
      ],
    },
  ];

  return (
    <>
      <CustomTreeItem data={treeData} />
    </>
  );
}

export default App;
