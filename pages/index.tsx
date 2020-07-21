import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import withApollo from '../lib/withApollo';
import Background from '../src/components/Background';
import Selection from '../src/components/Selection';
import Card from '../src/components/Card';

const QUERY = gql`
  {
    topics {
      _id
      value
    }
  }
`;

const Index = () => {
  const { loading, data } = useQuery(QUERY);
  const items =
    data && data.topics
      ? data.topics.map((item: any) => ({
          id: item._id,
          name: 'topic',
          value: item.value,
        }))
      : [];
  return (
    <Background>
      {!loading ? <Selection items={items} /> : <h1>loading...</h1>}
      <br />
      <Card
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png"
        title="Wear a facemask"
        decription="You should wear facemask when you are around other people"
        discussionNumber={153}
      />
    </Background>
  );
};

export default withApollo(Index);
