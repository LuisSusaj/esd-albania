import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { MenuItemProps } from "../../interfaces/MenuItemInterfaces";
const MenuItem = ({ children, isLast, to = "/", ...rest }: MenuItemProps) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};
export default MenuItem;
