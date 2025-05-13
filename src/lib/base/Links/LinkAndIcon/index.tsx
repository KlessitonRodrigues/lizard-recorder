import Icons from '../../Icons';
import { OutlineBtn } from '../../StyledComponents/Buttons';
import Text from '../../Text';

const LinkAndIcon = (props: Props.LinkAndIcon) => {
  const { url, icon, label, path } = props;

  return (
    <a href={url} target="_blank">
      <OutlineBtn>
        <Icons size={9} type={icon || 'link'} />
        <small>{label}</small>
        {path && <Text tag="p" path={path} />}
      </OutlineBtn>
    </a>
  );
};

export default LinkAndIcon;
