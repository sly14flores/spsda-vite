import Avatar from '@mui/material/Avatar';
import DoneAll from '@mui/icons-material/DoneAll';
import { formatDistanceToNowStrict } from 'date-fns'; // CUSTOM COMPONENTS

import FlexBetween from '@/components/flexbox/FlexBetween';
import { Paragraph, Small, Span } from '@/components/typography'; // STYLED COMPONENT

import { UnseenMsgWrapper, Wrapper } from './styles'; // ===============================================================

// ===============================================================
export default function ChatItem(props) {
  const {
    name,
    time,
    image,
    lastMsg,
    unseenMsg,
    lastMsgSeen,
    isLastMsgIncoming
  } = props;
  return <Wrapper>
      <Avatar src={image} />

      <div className="chat-info">
        <FlexBetween>
          <Paragraph fontWeight={500}>{name}</Paragraph>
          <Paragraph fontSize={12} color="text.secondary">
            {formatDistanceToNowStrict(new Date(time))} ago
          </Paragraph>
        </FlexBetween>

        <FlexBetween mt={0.5}>
          <Paragraph fontSize={12} color="text.secondary">
            {!isLastMsgIncoming ? <Span color="text.primary">You: </Span> : null}
            {lastMsg}
          </Paragraph>

          {unseenMsg ? <UnseenMsgWrapper>
              <Small fontWeight={500}>{unseenMsg}</Small>
            </UnseenMsgWrapper> : <DoneAll sx={{
          fontSize: 18,
          color: lastMsgSeen ? 'primary.main' : 'grey.400'
        }} />}
        </FlexBetween>
      </div>
    </Wrapper>;
}