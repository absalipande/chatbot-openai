'use client';

import { MessagesContext } from '@/context/messages';
import { cn } from '@/lib/utils';
import { FC, HTMLAttributes, useContext } from 'react';

interface ChatMessagesProps extends HTMLAttributes<HTMLDivElement> {}

const ChatMessages: FC<ChatMessagesProps> = ({ className, ...props }) => {
  return <div>div</div>;
};

export default ChatMessages;
