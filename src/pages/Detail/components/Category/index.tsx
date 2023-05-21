import { css } from '@emotion/css';

import { Text } from 'components';

import { CharacterCategory } from 'types/character';
import { capitalize } from 'utils';

interface CategoryProps {
  title: string;
  category?: CharacterCategory;
}

function Category({ title, category }: CategoryProps) {
  return (
    <section>
      <Text
        as="h3"
        typography="large"
        weight="bold"
        className={css`
          margin: 0 0 16px;
        `}
      >
        {capitalize(title)} ({category?.available}):
      </Text>
      <ul>
        {category?.items.map((item) => (
          <Text key={item.name} as="li">
            {item.name}
          </Text>
        ))}
      </ul>
    </section>
  );
}

export default Category;
