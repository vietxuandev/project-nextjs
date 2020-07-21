import * as React from 'react';
import { Flex, Box } from 'rebass/styled-components';

interface item {
  id: string;
  name: string;
  value: string;
}

type Props = {
  items: Array<item>;
};

const index: React.SFC<Props> = ({ items }: Props) => {
  const [selected, setSelected] = React.useState(items[0] ? items[0].id : '');
  const handleClick = (index: string) => setSelected(index);
  return (
    <Flex variant="selection">
      {items.map((item) => (
        <Box
          key={item.id}
          id={item.id}
          name={item.name}
          value={item.value}
          variant="badge"
          width={1}
          color={selected === item.id ? 'selectedText' : null}
          bg={selected === item.id ? 'primary' : null}
          onClick={() => handleClick(item.id)}
        >
          {item.value}
        </Box>
      ))}
    </Flex>
  );
};
export default index;
