import { useMemo } from 'react';

import { iconMap } from './iconMap';
import { Container } from './styled';

const Icons = (props: Props.Icons) => {
  const { type, size, style, onPress } = props;
  const Icon = useMemo(() => iconMap[type], [type]);

  return (
    <Container className={'icon icon-' + type} size={size} style={style} onClick={onPress}>
      {Icon}
    </Container>
  );
};

export default Icons;
