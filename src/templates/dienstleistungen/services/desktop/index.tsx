import * as S from "../styles";
import C from "../constants";
import { ResponsiveElement } from "@/utils/responsive-element";
import { useEffect, useMemo, useState } from "react";
import Animation from "@/components/atoms/animation";
import { useSearchParams } from "next/navigation";

export const ServicesDesktop = () => {
  const { sectionRef } = Animation();
  const searchParams = useSearchParams();
  const [activeService, setActiveService] = useState(1);

  useEffect(() => {
    const search = searchParams.get("id");

    if (Number(search) > 6) return;

    setActiveService(search ? parseInt(search) : 1);
  }, [searchParams]);

  const RenderService = useMemo(() => {
    return (
      <S.ServicesList>
        {C.content.items.map(({ id, title, list }) => (
          <S.Service key={id} $active={id === activeService}>
            <S.TitleService>{title}</S.TitleService>
            <S.ListService>
              {list.map((text, index) => (
                <S.ItemService key={index}>{text}</S.ItemService>
              ))}
            </S.ListService>
          </S.Service>
        ))}
      </S.ServicesList>
    );
  }, [activeService]);

  return (
    <S.Services ref={sectionRef}>
      <S.Wrapper>
        <S.Sidebar>
          <S.Menu>
            <S.TitleMenu>{C.menu.title}</S.TitleMenu>
            <S.ItemsMenu>
              {C.menu.items.map(({ text, id }) => (
                <S.ItemMenu key={id}>
                  <S.ButtonMenu onClick={() => setActiveService(id)} $active={id === activeService}>
                    {text}
                    <S.ArrowMenu />
                  </S.ButtonMenu>
                </S.ItemMenu>
              ))}
            </S.ItemsMenu>
          </S.Menu>
          <S.Contact>
            <S.TitleContact>{C.contact.title}</S.TitleContact>
            <S.DescriptionContact>{C.contact.description}</S.DescriptionContact>
            <S.ListContact>
              <S.ItemContact>
                <S.IconPhone />
                <S.Call>
                  <S.TitleCall>{C.contact.call.title}</S.TitleCall>
                  <S.TextCall>{C.contact.call.text}</S.TextCall>
                </S.Call>
              </S.ItemContact>
              <S.ItemContact>
                <S.IconMail />
                <S.MailContainer>
                  <S.TitleCall>{C.contact.mail.title}</S.TitleCall>
                  <S.TextCall>{C.contact.mail.text}</S.TextCall>
                </S.MailContainer>
              </S.ItemContact>
              <S.ItemContact>
                <S.Link {...C.contact.link}>
                  {C.contact.link.title}
                  <S.ShowIcon>
                    <S.IconLink />
                  </S.ShowIcon>
                </S.Link>
              </S.ItemContact>
            </S.ListContact>
          </S.Contact>
        </S.Sidebar>
        <S.Content>
          <ResponsiveElement
            breakpoints={{ mobile: <S.ServiceImg {...C.content.img.mobile} /> }}
            content={<S.ServiceImg {...C.content.img.desktop} />}
          />
          {RenderService}

          <S.Line />

          <S.DescriptionService>
            {C.content.services.map((content, index) => (
              <S.Details key={index} {...content} />
            ))}
          </S.DescriptionService>
        </S.Content>
      </S.Wrapper>
    </S.Services>
  );
};
