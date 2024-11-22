import Search from '@mui/icons-material/Search'; // CUSTOM COMPONENT

import FancyText from '@/components/fancy-text'; // STYLED COMPONENTS

import { ContentWrapper, StyledTextField } from './styles';
export default function Section1() {
  return <ContentWrapper>
      <div className="content">
        <h1 className="title">
          How can we <FancyText>help</FancyText> you?
        </h1>

        <StyledTextField placeholder="Search Questions" slotProps={{
        input: {
          startAdornment: <Search />
        }
      }} />
      </div>

      <div className="img-wrapper">
        <img src="/static/pages/faq-banner.png" alt="faq" />
      </div>
    </ContentWrapper>;
}