import { HeaderProps } from "./props";
import * as S from "./styles";

export const Header = ({ title, description, modal, background, breadcrumb }: HeaderProps) => {
  return (
    <S.Header $modal={!!modal}>
      <S.Background {...background} />
      <S.Wrapper>
        <S.Content>
          <S.Breadcrumb>
            <S.Item>
              <S.Link href="/">Home</S.Link>
            </S.Item>
            <S.Item>{breadcrumb}</S.Item>
          </S.Breadcrumb>
          <S.Title>{title}</S.Title>
          {description && <S.Description>{description}</S.Description>}
          <S.Line />
        </S.Content>
        {modal?.content && (
          <S.Container>
            <S.Text>{modal.content}</S.Text>
          </S.Container>
        )}
      </S.Wrapper>
    </S.Header>
  );
};
