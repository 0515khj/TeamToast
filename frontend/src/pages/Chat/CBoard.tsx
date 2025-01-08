import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChatContainer from './ChatContainer';
import TapMenu from './TapMenu';
import { connectSocket, disconnectSocket, onMessage, sendMessage, Message } from '../../socketClient';
import { HashLoader } from 'react-spinners';
import { requestNotificationPermission, showNotification } from '../../socketClient';

const BoardContainer = styled.div`
  position: relative; /* 스프린트 완료 버튼 위치를 위한 설정 */
  display: flex;
  flex-direction: row;
  /* border-right: 1px solid #ddd; */
  padding-left: 15px; /* 사이드 메뉴와 간격 조정 */
  /* padding-right: 15px; */
  overflow: hidden; 
  width:1400px;
  /* background:pink; */
  flex-shrink:0;
  /* height: 600px; */
`;

const CBoard: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [messages, setMessages] = useState<Message[]>([]);
  // const receivedMessageIds = new Set(); // 메시지 ID를 추적

  // 2초 후 로딩 상태 종료 (추가)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
  }, []);

  // 로딩 상태에 따른 조건부 렌더링
  if (loading) {
    return (
      <BoardContainer style={{ display: 'flex',alignItems: 'center' , justifyContent:'center' , height:'95vh' }}>
       {/* <BoardContainer style={{ width:'100%', margin:'0 auto' }}> */}
        <HashLoader color="#36d7b7" />
      </BoardContainer>
    );
  }

  return (
    <BoardContainer style={{width:'100%'}}>
      <TapMenu />
      <ChatContainer />
    </BoardContainer>
  );
};

export default CBoard;

