import { Container } from './styles';

export default function Skeleton({type}) {
  return (
    <Container className={type}>
    </Container>
  );
}