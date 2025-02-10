import * as React from "react";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const CustomTreeItem = ({ item, onContextMenu }) => {
  return (
    <TreeItem
      itemId={item.nodeId}
      label={item.label}
      onContextMenu={(event) => onContextMenu(event, item)}
    >
      {item.children &&
        item.children.map((child) => (
          <CustomTreeItem
            key={child.nodeId}
            item={child}
            onContextMenu={onContextMenu}
          />
        ))}
    </TreeItem>
  );
};

const CustomTreeView = ({ data }) => {
  const [menuPosition, setMenuPosition] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleContextMenu = (event, item) => {
    event.preventDefault();
    event.stopPropagation();

    // Only apply behavior to leaf nodes (nodes without children)
    if (!item.children || item.children.length === 0) {
      // Ctrl+Right Click (Cmd+Right Click on Mac) opens link in new tab
      if ((event.ctrlKey || event.metaKey) && event.button === 2 && item?.url) {
        window.open(item.url, "_blank");
      } else {
        // Regular right-click opens the custom menu
        setMenuPosition({ mouseX: event.clientX, mouseY: event.clientY });
        setSelectedItem(item);
      }
    }
  };

  const handleClose = () => {
    setMenuPosition(null);
    setSelectedItem(null);
  };

  const handleOpen = (event) => {
    if (selectedItem?.url) {
      window.open(selectedItem.url, "_blank"); // Open in a new tab
    }
    handleClose();
  };

  return (
    <>
      <SimpleTreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {data?.map((item) => (
          <CustomTreeItem
            key={item.nodeId}
            item={item}
            onContextMenu={handleContextMenu}
          />
        ))}
      </SimpleTreeView>

      {/* This is our open menu */}
      <Menu
        open={!!menuPosition}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          menuPosition !== null
            ? { top: menuPosition.mouseY, left: menuPosition.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={handleOpen}>Open</MenuItem>
      </Menu>
    </>
  );
};

export default CustomTreeView;
