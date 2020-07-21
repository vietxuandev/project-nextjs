import * as React from 'react';
import { Flex, Card, Image, Text, Box } from 'rebass/styled-components';

type Props = {
  image: string;
  title: string;
  decription: string;
  discussionNumber: number;
};

const index: React.SFC<Props> = ({
  image,
  title,
  decription,
  discussionNumber,
}: Props) => (
  <Flex>
    <Card variant="card">
      <Flex>
        <Image variant="image" src={image} />
        <Box variant="cardContent">
          <Text fontWeight="bold" fontSize={2}>
            {title}
          </Text>
          <Text py={2} fontSize={1} color="secondary">
            {decription}
          </Text>
          <Text fontWeight="bold" color="textPrimary" fontSize={1}>
            {discussionNumber} Discussions &#8594;
          </Text>
        </Box>
      </Flex>
    </Card>
  </Flex>
);

export default index;
