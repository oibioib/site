import './logo-icon.scss';

interface LogoIconProps {
  icon: string;
  title: string;
}

export const LogoIcon = ({ icon, title }: LogoIconProps) => {
  return (
    <div className="stage-logo">
      <img src={icon} alt={title} />
    </div>
  );
};
