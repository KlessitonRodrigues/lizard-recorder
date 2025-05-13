import { PropsWithChildren, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { urls } from 'src/constants/urls';
import useTheme from 'src/hooks/useTheme';
import Icons from 'src/lib/base/Icons';
import If from 'src/lib/base/If';
import { Column } from 'src/lib/base/StyledComponents/Flex';
import Text from 'src/lib/base/Text';
import { lang, toggleLang } from 'src/utils/i18n';

import { Container, Content, MenuBtn, SidebarBox, SidebarItem } from './styled';

const SideBar = (props: PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const [hidable, setHidable] = useState(false);
  const themeCtx = useTheme();
  const location = useLocation();
  const path = location.pathname;
  const closeSidebar = () => setOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidable(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <SidebarBox active={open} hide={hidable}>
        <Column top left gap={0}>
          <Link to="/" onClick={closeSidebar}>
            <SidebarItem active={hidable && path === '/'}>
              <Icons type="website" size={8} />
              <Text tag="p" path="sidebar_link_profile" />
            </SidebarItem>
          </Link>
          <Link to="/resume" onClick={closeSidebar}>
            <SidebarItem active={hidable && path === '/resume'}>
              <Icons type="textDocument" size={8} />
              <Text tag="p" path="sidebar_link_cv" />
            </SidebarItem>
          </Link>
          <Link to="/certification" onClick={closeSidebar}>
            <SidebarItem active={hidable && path === '/certification'}>
              <Icons type="certificates" size={8} />
              <Text tag="p" path="sidebar_link_ct" />
            </SidebarItem>
          </Link>
          <Link to="/projects" onClick={closeSidebar}>
            <SidebarItem active={hidable && path === '/projects'}>
              <Icons type="projects" size={8} />
              <Text tag="p" path="sidebar_link_projects" />
            </SidebarItem>
          </Link>
        </Column>

        <Column bottom left gap={0}>
          <SidebarItem onClick={() => toggleLang()} top>
            <strong>{lang}</strong>
            <Text tag="p" path={lang} />
          </SidebarItem>
          <SidebarItem onClick={() => themeCtx.setDark(!themeCtx.isDark)}>
            <If check={!themeCtx.isDark}>
              <Icons type="sun" size={8} />
              <Text tag="p" path="sidebar_theme_light" />
            </If>
            <If check={themeCtx.isDark}>
              <Icons type="moon" size={8} />
              <Text tag="p" path="sidebar_theme_dark" />
            </If>
          </SidebarItem>
          <SidebarItem onClick={themeCtx.toggleColor}>
            <Icons type="theme" size={8} />
            <p>{themeCtx.color}</p>
          </SidebarItem>
          <a href={urls.personalPageRep} target="_blank">
            <SidebarItem>
              <Icons type="github" size={8} />
              <p>Github</p>
            </SidebarItem>
          </a>
        </Column>
      </SidebarBox>

      <MenuBtn active={open} onClick={() => setOpen(!open)}>
        <If
          check={!open}
          true={<Icons key="0" size={11} type="menu" />}
          false={<Icons key="1" size={11} type="close" />}
        />
      </MenuBtn>

      <Content active={open}>{props.children}</Content>
    </Container>
  );
};

export default SideBar;
