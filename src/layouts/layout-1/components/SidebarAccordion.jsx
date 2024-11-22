import { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // MUI

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse'; // REACT TRANSLATION

import { useTranslation } from 'react-i18next'; // CUSTOM STYLED COMPONENTS

import { ItemText, ICON_STYLE, BulletIcon, AccordionButton, ChevronRightStyled, AccordionExpandPanel } from '@/layouts/layout-1/styles'; // NAVIGATION ITEM TYPE

// ==============================================================
export default function SidebarAccordion(props) {
  const {
    item,
    children,
    sidebarCompact
  } = props;
  const {
    t
  } = useTranslation();
  const {
    pathname
  } = useLocation();
  const [hasActive, setHasActive] = useState(0);
  const [collapsed, setCollapsed] = useState(false);

  const handleClick = () => setCollapsed(state => !state);

  const find = item?.children?.find(li => li.path === pathname);
  useEffect(() => {
    if (find) {
      setCollapsed(true);
      setHasActive(1);
    }

    return () => {
      setCollapsed(false);
      setHasActive(0);
    };
  }, [find]);
  return <Fragment>
      <AccordionButton onClick={handleClick} active={sidebarCompact && hasActive}>
        <Box pl="7px" display="flex" alignItems="center">
          {
          /* ICON SHOW IF EXIST */
        }
          {item.icon ? <item.icon sx={ICON_STYLE(hasActive)} /> : null}

          {
          /* BULLET ICON SHOW IF ANY TEXT EXIST  */
        }
          {item.iconText ? <BulletIcon active={hasActive} /> : null}

          <ItemText compact={sidebarCompact} active={hasActive}>
            {t(item.name)}
          </ItemText>
        </Box>

        <ChevronRightStyled active={hasActive} compact={sidebarCompact} className="accordionArrow" collapsed={collapsed ? 1 : 0} />
      </AccordionButton>

      {!sidebarCompact ? <Collapse in={collapsed} unmountOnExit>
          <AccordionExpandPanel className="expand">{children}</AccordionExpandPanel>
        </Collapse> : null}
    </Fragment>;
}