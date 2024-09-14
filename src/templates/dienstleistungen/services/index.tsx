import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ResponsiveElement } from "@/utils/responsive-element";
import * as S from "./styles";
import C from "./constants";
import useAnimation from "./animations";

export default () => {
  const { sectionRef } = useAnimation();
  const searchParams = useSearchParams();
  const [activeService, setActiveService] = useState(1);
  const servicesListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const search = searchParams.get("id");

    if (Number(search) > 6) return;

    setActiveService(search ? parseInt(search) : 1);
  }, [searchParams]);

  return (
    <S.Services ref={sectionRef}>
      <S.Wrapper>
        <S.Sidebar>
          <S.Menu data-timeline="menu">
            <S.TitleMenu>{C.menu.title}</S.TitleMenu>
            <S.ItemsMenu>
              {C.menu.items.map(({ text, id }) => (
                <S.ItemMenu key={id}>
                  <S.ButtonMenu
                    onClick={() => {
                      setActiveService(id);
                      servicesListRef.current?.scrollIntoView({ behavior: "smooth" });
                    }}
                    $active={id === activeService}
                  >
                    {text}
                    <S.ArrowMenu />
                  </S.ButtonMenu>
                </S.ItemMenu>
              ))}
            </S.ItemsMenu>
          </S.Menu>
          <ResponsiveElement
            breakpoints={{
              mobile: (
                <S.Content ref={servicesListRef}>
                  <S.ServicesList data-timeline="services-mobile">
                    {C.content.items.map(({ id, title, list, img }) => (
                      <S.Service key={id} $active={id === activeService}>
                        <S.ServiceImg key={id} {...img} />
                        <S.TitleService>{title}</S.TitleService>
                        <S.ListService>
                          {list.map((text, index) => (
                            <S.ItemService key={index}>{text}</S.ItemService>
                          ))}
                        </S.ListService>
                      </S.Service>
                    ))}
                  </S.ServicesList>

                  <S.Line />

                  <S.DescriptionService>
                    {C.content.services.map((content, index) => (
                      <S.Details key={index} {...content} />
                    ))}
                  </S.DescriptionService>
                </S.Content>
              ),
            }}
            content={<></>}
          />
          <S.Contact data-timeline="contact">
            <S.TitleContact>{C.contact.title}</S.TitleContact>
            <S.DescriptionContact>{C.contact.description}</S.DescriptionContact>
            <S.ListContact>
              <S.ItemContact>
                <S.IconPhone />
                <S.Call>
                  <S.TitleCall>{C.contact.call.title}</S.TitleCall>
                  <S.TextCall>
                    <S.PhoneLink />
                  </S.TextCall>
                </S.Call>
              </S.ItemContact>
              <S.ItemContact>
                <S.IconMail />
                <S.MailContainer>
                  <S.TitleCall>{C.contact.mail.title}</S.TitleCall>
                  <S.TextCall>
                    <S.MailLink />
                  </S.TextCall>
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
        <ResponsiveElement
          breakpoints={{ mobile: <></> }}
          content={
            <S.Content ref={servicesListRef}>
              <S.ServicesList data-timeline="services">
                {C.content.items.map(({ id, title, list, img }) => (
                  <S.Service key={id} $active={id === activeService}>
                    <S.ServiceImg key={id} {...img} />
                    <S.TitleService>{title}</S.TitleService>
                    <S.ListService>
                      {list.map((text, index) => (
                        <S.ItemService key={index}>{text}</S.ItemService>
                      ))}
                    </S.ListService>
                  </S.Service>
                ))}
              </S.ServicesList>

              <S.Line />

              <S.DescriptionService data-timeline="details-service">
                {C.content.services.map((content, index) => (
                  <S.Details key={index} {...content} />
                ))}
              </S.DescriptionService>
            </S.Content>
          }
        />
      </S.Wrapper>
    </S.Services>
  );
};
