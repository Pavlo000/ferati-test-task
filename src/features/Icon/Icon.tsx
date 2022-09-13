import './Icon.scss';

type Props = {
  name: string;
};

export const Icon: React.FC<Props> = ({ name }) => {
  return (
    <div className={`Icon Icon--${name}`} />
  );
};
