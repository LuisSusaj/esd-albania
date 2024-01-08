import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";

type ItemProps = {
  setTrackIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
  activeItem: number;
  constraint: number;
  itemWidth: number;
  positions: number[];
  children: React.ReactNode;
  index: number;
  gap: number;
};

const Item: React.FC<ItemProps> = ({
  setTrackIsActive,
  setActiveItem,
  activeItem,
  constraint,
  itemWidth,
  positions,
  children,
  index,
  gap,
}) => {
  const [userDidTab, setUserDidTab] = useState(false);

  const handleFocus = () => setTrackIsActive(true);

  const handleBlur = () => {
    userDidTab && index + 1 === positions.length && setTrackIsActive(false);
    setUserDidTab(false);
  };

  const handleKeyUp = (event: React.KeyboardEvent) =>
    event.key === "Tab" &&
    !(activeItem === positions.length - constraint) &&
    setActiveItem(index);

  const handleKeyDown = (event: React.KeyboardEvent) =>
    event.key === "Tab" && setUserDidTab(true);
  return (
    <Flex
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      w={`${itemWidth}px`}
      _notLast={{
        mr: `${gap}px`,
      }}
      py="4px"
    >
      {children}
    </Flex>
  );
};

export default Item;