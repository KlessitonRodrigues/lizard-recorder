import { useState } from 'react';

import {
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
} from 'src/lib/base/StyledComponents/Accordion';
import { Hr } from 'src/lib/base/StyledComponents/Divisors';

import Icons from '../Icons';
import If from '../If';

const Accordion = (props: Props.Accordion) => {
  const { title, content, delayLoad } = props;
  const [active, setActive] = useState(false);
  const [delay, setDelay] = useState(!!delayLoad);

  return (
    <AccordionContainer
      active={active}
      onClick={() => setActive(!active)}
      onMouseEnter={() => delay && setDelay(false)}
    >
      <AccordionHeader>
        {title}
        <Icons type="caretLeft" size={8} />
      </AccordionHeader>
      <AccordionContent>
        <Hr />
        <If check={!delay}>{content}</If>
      </AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
