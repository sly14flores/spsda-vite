import Search from '@mui/icons-material/Search'; // CUSTOM COMPONENT

import FancyText from '@/components/fancy-text'; // STYLED COMPONENTS

import { ContentWrapper, StyledTextField } from './styles';
export default function Section1() {
  return <ContentWrapper>
      <div className="content">
        <h1 className="title">
          Find Your <FancyText>Dream Job!</FancyText>
        </h1>

        <StyledTextField placeholder="Search Job" slotProps={{
        input: {
          startAdornment: <Search />
        }
      }} />
      </div>

      <div className="img-wrapper">
        <img src="/static/pages/career.png" alt="career" />
      </div>
    </ContentWrapper>;
}