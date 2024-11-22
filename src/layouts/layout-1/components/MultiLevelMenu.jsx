import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom'; // CUSTOM DEFINED HOOK

import useAuth from '@/hooks/useAuth'; // LAYOUT BASED HOOK

import useLayout from '@/layouts/layout-1/context/useLayout'; // CUSTOM COMPONENTS

import SidebarAccordion from './SidebarAccordion';
import { navigations } from '@/layouts/layout-parts/navigation'; // CUSTOM STYLED COMPONENTS

import { ItemText, ListLabel, BulletIcon, ICON_STYLE, ExternalLink, NavItemButton } from '@/layouts/layout-1/styles'; // ===========================================================================

// ===========================================================================
export default function MultiLevelMenu({
  sidebarCompact
}) {
  const {
    user
  } = useAuth();
  const {
    t
  } = useTranslation();
  const navigate = useNavigate();
  const {
    pathname
  } = useLocation();
  const {
    handleCloseMobileSidebar
  } = useLayout(); // HANDLE ACTIVE CURRENT PAGE

  const activeRoute = path => pathname === path ? 1 : 0; // HANDLE NAVIGATE TO ANOTHER PAGE


  const handleNavigation = path => {
    navigate(path);
    handleCloseMobileSidebar?.();
  }; // ACTIVATE SIDEBAR COMPACT


  const COMPACT = sidebarCompact ? 1 : 0; // RECURSIVE FUNCTION TO RENDER MULTI LEVEL MENU

  const renderLevels = data => {
    return data.map((item, index) => {
      // MENU LABEL DESIGN
      if (item.type === 'label') {
        return <ListLabel key={index} compact={COMPACT}>
            {t(item.label)}
          </ListLabel>;
      } // MENU LIST WITH CHILDREN


      if (item.children) {
        return <SidebarAccordion key={index} item={item} sidebarCompact={COMPACT}>
            {renderLevels(item.children)}
          </SidebarAccordion>;
      } // MENU ITEM WITH EXTERNAL LINK


      if (item.type === 'extLink') {
        return <ExternalLink key={index} href={item.path} rel="noopener noreferrer" target="_blank">
            <NavItemButton key={item.name} name="child" active={0}>
              {item.icon ? <item.icon sx={ICON_STYLE(0)} /> : <span className="item-icon icon-text">{item.iconText}</span>}

              <ItemText compact={COMPACT} active={activeRoute(item.path)}>
                {item.name}
              </ItemText>
            </NavItemButton>
          </ExternalLink>;
      }

      return <NavItemButton key={index} disabled={item.disabled} active={activeRoute(item.path)} onClick={() => handleNavigation(item.path)}>
          {item?.icon ? <item.icon sx={ICON_STYLE(activeRoute(item.path))} /> : <BulletIcon active={activeRoute(item.path)} />}

          <ItemText compact={COMPACT} active={activeRoute(item.path)}>
            {t(item.name)}
          </ItemText>
        </NavItemButton>;
    });
  }; // USER ROLE BASED ON FILTER NAVIGATION


  const filterNavigation = useMemo(() => {
    return navigations.filter(navigation => {
      if (!navigation.access) return true;else if (navigation.access === user?.role) return true;else return false;
    });
  }, [user?.role]);
  return <>{renderLevels(filterNavigation)}</>;
}