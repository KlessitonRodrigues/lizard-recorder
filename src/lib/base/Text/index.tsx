import { cssSize } from "src/styles/utils";
import { getText } from "src/utils/i18n";

const Text = (props: Props.Text) => {
  const { path, tag, size, className, children } = props;
  const text = path ? getText(path) : children;
  const style = { ...(size && { fontSize: cssSize(size) }) };
  const textProps = { className, style };

  if (tag === "p") return <p {...textProps}>{text}</p>;
  if (tag === "b") return <b {...textProps}>{text}</b>;
  if (tag === "h1") return <h1 {...textProps}>{text}</h1>;
  if (tag === "h2") return <h2 {...textProps}>{text}</h2>;
  if (tag === "h3") return <h3 {...textProps}>{text}</h3>;
  if (tag === "h4") return <h4 {...textProps}>{text}</h4>;
  if (tag === "h5") return <h5 {...textProps}>{text}</h5>;
  if (tag === "h6") return <h6 {...textProps}>{text}</h6>;
  if (tag === "span") return <span {...textProps}>{text}</span>;
  if (tag === "small") return <small {...textProps}>{text}</small>;
  if (tag === "strong") return <strong {...textProps}>{text}</strong>;
  if (tag === "mark") return <mark {...textProps}>{text}</mark>;
  if (tag === "em") return <em {...textProps}>{text}</em>;
  return <>{text}</>;
};

export default Text;
