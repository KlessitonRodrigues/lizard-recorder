declare namespace Props {
  type CssProps = {
    active?: boolean;
    size?: number;
    gap?: number;
    w?: string;
    h?: string;
    maxw?: number;
    maxh?: number;
    p?: number;
    m?: number;
    mb?: number;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    wrap?: boolean;
    stretch?: boolean;
    rows?: number;
    cols?: number;
    responsive?: boolean;
    reverse?: boolean;
    half?: boolean;
    src?: string;
    hidden?: boolean;
    full?: boolean;
    fit?: boolean;
    color?: string;
    zIndex?: number;
  };

  type Icons = {
    size?: number;
    onPress?: () => void;
    style?: React.CSSProperties;
    type: Utils.IconTypes;
  };

  type Text = {
    path?: string;
    className?: string;
    tag?: Utils.TextTags;
    size?: number;
    children?: React.ReactNode;
  };

  type Loading = {
    show: boolean;
    type: "fullScreen" | "icon" | "line";
    title?: string;
    description?: string;
  };

  type If = {
    check: boolean;
    true?: React.ReactElement;
    false?: React.ReactElement;
    children?: React.ReactNode;
  };

  type Accordion = {
    title: React.ReactElement;
    content: React.ReactElement;
    delayLoad?: boolean;
  };

  type LinkAndIcon = {
    url?: string;
    icon?: Utils.IconTypes;
    label?: string;
    path?: string;
  };
}
