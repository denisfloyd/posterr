import { Container } from './styles';

interface LoaderProps {
  isActive: boolean;
  size?: 'sm' | 'lg';
  type?: 'primary' | 'secondary';
}

export const Loader: React.FC<LoaderProps> = ({ isActive, size = 'lg', type = 'primary' }) => {
  return <Container isSpinning={isActive} type={type} size={size} />;
};
