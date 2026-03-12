import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useState,
} from "react";
import { FiFolder, FiFolderMinus, FiFile } from "react-icons/fi";
import { cn } from "../../lib/utils";
import "./file-tree.css";

const TreeContext = createContext(null);

const useTree = () => {
  const context = useContext(TreeContext);
  if (!context) {
    throw new Error("useTree must be used within a Tree");
  }
  return context;
};

export const Tree = forwardRef(
  (
    {
      className,
      elements,
      initialSelectedId,
      initialExpandedItems,
      children,
      indicator = true,
      ...props
    },
    ref
  ) => {
    const [selectedId, setSelectedId] = useState(initialSelectedId);
    const [expandedItems, setExpandedItems] = useState(initialExpandedItems ?? []);

    const selectItem = useCallback((id) => {
      setSelectedId(id);
    }, []);

    const handleExpand = useCallback((id) => {
      setExpandedItems((prev) => {
        if (prev.includes(id)) {
          return prev.filter((item) => item !== id);
        }
        return [...prev, id];
      });
    }, []);

    return (
      <TreeContext.Provider
        value={{
          selectedId,
          expandedItems,
          handleExpand,
          selectItem,
          setExpandedItems,
          indicator,
        }}
      >
        <div
          ref={ref}
          className={cn("file-tree-root", className)}
          {...props}
        >
          <div className="file-tree-scroll">
            <div className="file-tree-content">{children}</div>
          </div>
        </div>
      </TreeContext.Provider>
    );
  }
);
Tree.displayName = "Tree";

export const Folder = forwardRef(
  (
    {
      className,
      element,
      value,
      isSelectable = true,
      children,
      ...props
    },
    ref
  ) => {
    const {
      handleExpand,
      expandedItems,
      indicator,
    } = useTree();
    const isExpanded = expandedItems.includes(value);

    return (
      <div ref={ref} className="file-tree-folder" {...props}>
        <button
          type="button"
          className={cn(
            "file-tree-folder-trigger",
            isSelectable && "file-tree-selectable",
            className
          )}
          onClick={() => handleExpand(value)}
          disabled={!isSelectable}
        >
          <span className="file-tree-folder-icon">
            {isExpanded ? (
              <FiFolderMinus className="file-tree-icon" />
            ) : (
              <FiFolder className="file-tree-icon" />
            )}
          </span>
          <span>{element}</span>
        </button>
        {isExpanded && (
          <div className={cn("file-tree-folder-content", indicator && "file-tree-indicator")}>
            {children}
          </div>
        )}
      </div>
    );
  }
);
Folder.displayName = "Folder";

export const File = forwardRef(
  (
    {
      value,
      className,
      isSelectable = true,
      children,
      ...props
    },
    ref
  ) => {
    const { selectedId, selectItem } = useTree();
    const isSelected = selectedId === value;

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "file-tree-file",
          isSelected && isSelectable && "file-tree-file-selected",
          isSelectable && "file-tree-selectable",
          className
        )}
        onClick={() => selectItem(value)}
        disabled={!isSelectable}
        {...props}
      >
        <FiFile className="file-tree-icon" />
        {children}
      </button>
    );
  }
);
File.displayName = "File";
