import { useQuery } from 'react-query';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { useCallback } from 'react';

import { getCard } from '@remote/card';
import Top from '@components/shared/Top';
import ListRow from '@components/shared/ListRow';
import Icon from '@components/shared/Icon';
import FixedBottomButton from '@components/shared/FixedBottomButton';
import Flex from '@components/shared/Flex';
import Text from '@components/shared/Text';
import useUser from '@hooks/auth/useUser';
import { useAlertContext } from '@contexts/AlertContext';

function CardPage() {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const user = useUser();
  const { open } = useAlertContext();
  const location = useLocation();

  const { data } = useQuery(['card', id], () => getCard(id), {
    enabled: id !== '',
  });

  const str = `<div><div direction="column" class="css-jydh1a-Flex-containerStyles e12mv0y90"><span class="css-z2hfjb-Text-t4 e1pz71z40">롯데카드 Easy all 티타늄카드</span><span class="css-la5sx5-Text-t7 e1pz71z40">신규회원 연회비 100% 캐시백</span></div><ul><li style="opacity: 1; will-change: auto; transform: none;"><div class="css-qe9h7h-Flex-listRowContainerStyles e12mv0y90"><div class="css-15a59c1-Flex-listRowLeftStyles e12mv0y90"><svg fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px;"><rect fill="white" fill-opacity="0.01" height="48" width="48"></rect><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="#2F88FF" stroke="black" stroke-linejoin="round" stroke-width="4"></path><path d="M16 24L22 30L34 18" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path></svg></div><div class="css-y2tux4-Flex-listRowContentStyles e12mv0y90"><div direction="column" class="css-1acpyf4-Flex e12mv0y90"><span class="css-1j4cdf-Text-t5 e1pz71z40">혜택 1</span><span class="css-la5sx5-Text-t7 e1pz71z40">스타벅스 10% 할인</span></div></div><div class="css-jg9o52-Flex e12mv0y90"></div></div></li><li style="opacity: 1; will-change: auto; transform: none;"><div class="css-qe9h7h-Flex-listRowContainerStyles e12mv0y90"><div class="css-15a59c1-Flex-listRowLeftStyles e12mv0y90"><svg fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px;"><rect fill="white" fill-opacity="0.01" height="48" width="48"></rect><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="#2F88FF" stroke="black" stroke-linejoin="round" stroke-width="4"></path><path d="M16 24L22 30L34 18" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path></svg></div><div class="css-y2tux4-Flex-listRowContentStyles e12mv0y90"><div direction="column" class="css-1acpyf4-Flex e12mv0y90"><span class="css-1j4cdf-Text-t5 e1pz71z40">혜택 2</span><span class="css-la5sx5-Text-t7 e1pz71z40">대형마트 10% 할인</span></div></div><div class="css-jg9o52-Flex e12mv0y90"></div></div></li><li style="opacity: 1; will-change: auto; transform: none;"><div class="css-qe9h7h-Flex-listRowContainerStyles e12mv0y90"><div class="css-15a59c1-Flex-listRowLeftStyles e12mv0y90"><svg fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px;"><rect fill="white" fill-opacity="0.01" height="48" width="48"></rect><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="#2F88FF" stroke="black" stroke-linejoin="round" stroke-width="4"></path><path d="M16 24L22 30L34 18" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path></svg></div><div class="css-y2tux4-Flex-listRowContentStyles e12mv0y90"><div direction="column" class="css-1acpyf4-Flex e12mv0y90"><span class="css-1j4cdf-Text-t5 e1pz71z40">혜택 3</span><span class="css-la5sx5-Text-t7 e1pz71z40">온라인쇼핑, 롯데시네마 5,000원 할인</span></div></div><div class="css-jg9o52-Flex e12mv0y90"></div></div></li><li style="opacity: 1; will-change: auto; transform: none;"><div class="css-qe9h7h-Flex-listRowContainerStyles e12mv0y90"><div class="css-15a59c1-Flex-listRowLeftStyles e12mv0y90"><svg fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px;"><rect fill="white" fill-opacity="0.01" height="48" width="48"></rect><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="#2F88FF" stroke="black" stroke-linejoin="round" stroke-width="4"></path><path d="M16 24L22 30L34 18" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path></svg></div><div class="css-y2tux4-Flex-listRowContentStyles e12mv0y90"><div direction="column" class="css-1acpyf4-Flex e12mv0y90"><span class="css-1j4cdf-Text-t5 e1pz71z40">혜택 4</span><span class="css-la5sx5-Text-t7 e1pz71z40">소셜커머스 2,000원 할인</span></div></div><div class="css-jg9o52-Flex e12mv0y90"></div></div></li><li style="opacity: 1; will-change: auto; transform: none;"><div class="css-qe9h7h-Flex-listRowContainerStyles e12mv0y90"><div class="css-15a59c1-Flex-listRowLeftStyles e12mv0y90"><svg fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px;"><rect fill="white" fill-opacity="0.01" height="48" width="48"></rect><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="#2F88FF" stroke="black" stroke-linejoin="round" stroke-width="4"></path><path d="M16 24L22 30L34 18" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path></svg></div><div class="css-y2tux4-Flex-listRowContentStyles e12mv0y90"><div direction="column" class="css-1acpyf4-Flex e12mv0y90"><span class="css-1j4cdf-Text-t5 e1pz71z40">혜택 5</span><span class="css-la5sx5-Text-t7 e1pz71z40">피트니스 4,000원 할인</span></div></div><div class="css-jg9o52-Flex e12mv0y90"></div></div></li></ul><div direction="column" class="css-gsfyi-Flex-termsContainerStyles e12mv0y90"><span class="css-1j4cdf-Text-t5 e1pz71z40">유의사항</span><span class="css-la5sx5-Text-t7 e1pz71z40">체크카드 온라인 신규 발급 혜택을 Check!기간발급 : 2023.8.1(화) ~ 2023.8.31(목)이용 : 2023.8.1(화) ~ 2023.9.10(일)대상KB국민 체크카드 온라인 신규 발급 고객 (KB국민 기업, 기업, 선불카드 제외)[신규회원] 아래 중 한가지 충족하고 신규 발급 시점 체크카드 미보유 시 대상 인정① KB국민 개인체크카드 최초 신규 발급 회원② 보유 체크카드 전체의 유효기간 만료 후 신규 발급 회원③ 2022년 12월 31일 이전 체크카드 탈회 후 이벤트 기간 중 신규 발급 회원내용대상 고객 응모 후 아래 조건 충족하면 혜택 제공![혜택1] 스타벅스 아메리카노 1잔!합산 5천원 이상 이용 시 스타벅스 아메리카노 tall size 1잔 모바일 쿠폰 1매 제공[혜택2] 1만원 캐시백!마케팅 동의 시 1만원[개인(신용)정보 동의(선택)] 선택항목 전체 동의 &amp;amp; 이용채널 전체 동의[혜택3] 2만원 캐시백!KB Pay 2만원 이상 이용 시 2만원 캐시백응모하러 가기혜택 제공2023.9.27(수) 이내 고객 휴대폰으로 모바일쿠폰 발송(유효기간 60일), 최근 이용 체크카드 출금계좌로 캐시백이용 전 확인해주세요연회비 없음응모 필수, 응모 및 이용 선후는 관계 없음혜택1, 혜택2는 중복적용 가능, 체크카드 신규회원 대상인 다른 이벤트와는 혜택 중복 적용이 불가*중복 참여 시 발급월 기준 가장 앞선 신청 건 자동 적용*체크카드 신규회원 이벤트 통합 본인 회원 기준 1인 1회 한하여 제공이용금액은 이용기간 종료 후 3영업일까지 정상 매입된 금액에 한함(매출취소, 당사 포인트리 충전금액 제외)기존 체크카드 회원의 추가/교체 발급, 유효기간 미경과 해지 회원의 재발급시 대상 제외혜택 제공 전 대상카드 해지 또는 교체, 체크카드 탈회하면 대상에서 제외계약을 체결하기 전에 상품설명서와 약관을 확인하시기 바랍니다.연체이자율: 회원별/이용상품별 정상이자율 +3%p, 최고 연 20% 이내 ※단, 연체발생시점에 정상이자율이 없는 경우 아래와 같이 적용함일시불 거래 연체시 : 거래발생시점의 최소기간(2개월) 유이자 할부 수수료율 적용무이자할부 거래 연체시 : 거래발생시점의 동일한 할부 계약 기간의 유이자 할부수수료율 적용그 외의 경우: 정상이자율은 상법상 상사법정이율과 상호금융가계자금대출금리 중 높은 금리 적용*한국은행에서 매월 발표하는 가장 최근의 비은행금융기관 가중평균대출금리중 상호금융 가계자금 대출 금리(신규대출 기준)상환능력에 비해 신용카드 사용액이 과도할 경우, 귀하의 개인신용평점이 하락할 수 있습니다.개인신용평점 하락시 금융거래와 관련된 불이익이 발생할 수 있습니다.일정기간 원리금을 연체할 경우, 모든 원리금을 변제할 의무가 발생할 수 있습니다.이 행사는 KB국민카드 영업정책 및 제휴업체의 사정으로 변경 또는 중단될 수 있습니다.문의 : KB국민카드 고객센터 (1588-1688)준법감시인 심의필 230725-02795-HPM (2023.07.25)</span></div></div><div><div direction="column" class="css-jydh1a-Flex-containerStyles e12mv0y90"><span class="css-z2hfjb-Text-t4 e1pz71z40">롯데카드 Easy all 티타늄카드</span><span class="css-la5sx5-Text-t7 e1pz71z40">신규회원 연회비 100% 캐시백</span></div><ul><li style="opacity: 1; will-change: auto; transform: none;"><div class="css-qe9h7h-Flex-listRowContainerStyles e12mv0y90"><div class="css-15a59c1-Flex-listRowLeftStyles e12mv0y90"><svg fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px;"><rect fill="white" fill-opacity="0.01" height="48" width="48"></rect><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="#2F88FF" stroke="black" stroke-linejoin="round" stroke-width="4"></path><path d="M16 24L22 30L34 18" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path></svg></div><div class="css-y2tux4-Flex-listRowContentStyles e12mv0y90"><div direction="column" class="css-1acpyf4-Flex e12mv0y90"><span class="css-1j4cdf-Text-t5 e1pz71z40">혜택 1</span><span class="css-la5sx5-Text-t7 e1pz71z40">스타벅스 10% 할인</span></div></div><div class="css-jg9o52-Flex e12mv0y90"></div></div></li><li style="opacity: 1; will-change: auto; transform: none;"><div class="css-qe9h7h-Flex-listRowContainerStyles e12mv0y90"><div class="css-15a59c1-Flex-listRowLeftStyles e12mv0y90"><svg fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px;"><rect fill="white" fill-opacity="0.01" height="48" width="48"></rect><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="#2F88FF" stroke="black" stroke-linejoin="round" stroke-width="4"></path><path d="M16 24L22 30L34 18" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path></svg></div><div class="css-y2tux4-Flex-listRowContentStyles e12mv0y90"><div direction="column" class="css-1acpyf4-Flex e12mv0y90"><span class="css-1j4cdf-Text-t5 e1pz71z40">혜택 2</span><span class="css-la5sx5-Text-t7 e1pz71z40">대형마트 10% 할인</span></div></div><div class="css-jg9o52-Flex e12mv0y90"></div></div></li><li style="opacity: 1; will-change: auto; transform: none;"><div class="css-qe9h7h-Flex-listRowContainerStyles e12mv0y90"><div class="css-15a59c1-Flex-listRowLeftStyles e12mv0y90"><svg fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px;"><rect fill="white" fill-opacity="0.01" height="48" width="48"></rect><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="#2F88FF" stroke="black" stroke-linejoin="round" stroke-width="4"></path><path d="M16 24L22 30L34 18" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path></svg></div><div class="css-y2tux4-Flex-listRowContentStyles e12mv0y90"><div direction="column" class="css-1acpyf4-Flex e12mv0y90"><span class="css-1j4cdf-Text-t5 e1pz71z40">혜택 3</span><span class="css-la5sx5-Text-t7 e1pz71z40">온라인쇼핑, 롯데시네마 5,000원 할인</span></div></div><div class="css-jg9o52-Flex e12mv0y90"></div></div></li><li style="opacity: 1; will-change: auto; transform: none;"><div class="css-qe9h7h-Flex-listRowContainerStyles e12mv0y90"><div class="css-15a59c1-Flex-listRowLeftStyles e12mv0y90"><svg fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px;"><rect fill="white" fill-opacity="0.01" height="48" width="48"></rect><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="#2F88FF" stroke="black" stroke-linejoin="round" stroke-width="4"></path><path d="M16 24L22 30L34 18" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path></svg></div><div class="css-y2tux4-Flex-listRowContentStyles e12mv0y90"><div direction="column" class="css-1acpyf4-Flex e12mv0y90"><span class="css-1j4cdf-Text-t5 e1pz71z40">혜택 4</span><span class="css-la5sx5-Text-t7 e1pz71z40">소셜커머스 2,000원 할인</span></div></div><div class="css-jg9o52-Flex e12mv0y90"></div></div></li><li style="opacity: 1; will-change: auto; transform: none;"><div class="css-qe9h7h-Flex-listRowContainerStyles e12mv0y90"><div class="css-15a59c1-Flex-listRowLeftStyles e12mv0y90"><svg fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px;"><rect fill="white" fill-opacity="0.01" height="48" width="48"></rect><path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="#2F88FF" stroke="black" stroke-linejoin="round" stroke-width="4"></path><path d="M16 24L22 30L34 18" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path></svg></div><div class="css-y2tux4-Flex-listRowContentStyles e12mv0y90"><div direction="column" class="css-1acpyf4-Flex e12mv0y90"><span class="css-1j4cdf-Text-t5 e1pz71z40">혜택 5</span><span class="css-la5sx5-Text-t7 e1pz71z40">피트니스 4,000원 할인</span></div></div><div class="css-jg9o52-Flex e12mv0y90"></div></div></li></ul><div direction="column" class="css-gsfyi-Flex-termsContainerStyles e12mv0y90"><span class="css-1j4cdf-Text-t5 e1pz71z40">유의사항</span><span class="css-la5sx5-Text-t7 e1pz71z40">체크카드 온라인 신규 발급 혜택을 Check!기간발급 : 2023.8.1(화) ~ 2023.8.31(목)이용 : 2023.8.1(화) ~ 2023.9.10(일)대상KB국민 체크카드 온라인 신규 발급 고객 (KB국민 기업, 기업, 선불카드 제외)[신규회원] 아래 중 한가지 충족하고 신규 발급 시점 체크카드 미보유 시 대상 인정① KB국민 개인체크카드 최초 신규 발급 회원② 보유 체크카드 전체의 유효기간 만료 후 신규 발급 회원③ 2022년 12월 31일 이전 체크카드 탈회 후 이벤트 기간 중 신규 발급 회원내용대상 고객 응모 후 아래 조건 충족하면 혜택 제공![혜택1] 스타벅스 아메리카노 1잔!합산 5천원 이상 이용 시 스타벅스 아메리카노 tall size 1잔 모바일 쿠폰 1매 제공[혜택2] 1만원 캐시백!마케팅 동의 시 1만원[개인(신용)정보 동의(선택)] 선택항목 전체 동의 &amp;amp; 이용채널 전체 동의[혜택3] 2만원 캐시백!KB Pay 2만원 이상 이용 시 2만원 캐시백응모하러 가기혜택 제공2023.9.27(수) 이내 고객 휴대폰으로 모바일쿠폰 발송(유효기간 60일), 최근 이용 체크카드 출금계좌로 캐시백이용 전 확인해주세요연회비 없음응모 필수, 응모 및 이용 선후는 관계 없음혜택1, 혜택2는 중복적용 가능, 체크카드 신규회원 대상인 다른 이벤트와는 혜택 중복 적용이 불가*중복 참여 시 발급월 기준 가장 앞선 신청 건 자동 적용*체크카드 신규회원 이벤트 통합 본인 회원 기준 1인 1회 한하여 제공이용금액은 이용기간 종료 후 3영업일까지 정상 매입된 금액에 한함(매출취소, 당사 포인트리 충전금액 제외)기존 체크카드 회원의 추가/교체 발급, 유효기간 미경과 해지 회원의 재발급시 대상 제외혜택 제공 전 대상카드 해지 또는 교체, 체크카드 탈회하면 대상에서 제외계약을 체결하기 전에 상품설명서와 약관을 확인하시기 바랍니다.연체이자율: 회원별/이용상품별 정상이자율 +3%p, 최고 연 20% 이내 ※단, 연체발생시점에 정상이자율이 없는 경우 아래와 같이 적용함일시불 거래 연체시 : 거래발생시점의 최소기간(2개월) 유이자 할부 수수료율 적용무이자할부 거래 연체시 : 거래발생시점의 동일한 할부 계약 기간의 유이자 할부수수료율 적용그 외의 경우: 정상이자율은 상법상 상사법정이율과 상호금융가계자금대출금리 중 높은 금리 적용*한국은행에서 매월 발표하는 가장 최근의 비은행금융기관 가중평균대출금리중 상호금융 가계자금 대출 금리(신규대출 기준)상환능력에 비해 신용카드 사용액이 과도할 경우, 귀하의 개인신용평점이 하락할 수 있습니다.개인신용평점 하락시 금융거래와 관련된 불이익이 발생할 수 있습니다.일정기간 원리금을 연체할 경우, 모든 원리금을 변제할 의무가 발생할 수 있습니다.이 행사는 KB국민카드 영업정책 및 제휴업체의 사정으로 변경 또는 중단될 수 있습니다.문의 : KB국민카드 고객센터 (1588-1688)준법감시인 심의필 230725-02795-HPM (2023.07.25)</span></div></div> `;

  const moveToApply = useCallback(() => {
    if (user == null) {
      open({
        title: '로그인이 필요한 기능입니다',
        onButtonClick: () => {
          // navigate('/signin');
          navigate('/signin', { state: { from: location } });
        },
      });

      return;
    }

    navigate(`/apply/${id}`);
  }, [user, id, open, navigate]);

  if (data == null) {
    return null;
  }

  const { name, corpName, tags, promotion, benefit } = data;

  const subTitle =
    promotion != null ? removeHtmlTags(promotion?.title) : tags?.join(', ');

  return (
    <div>
      <Top title={`${corpName} ${name}`} subTitle={subTitle} />

      <ul>
        {benefit.map((text, index) => {
          return (
            <motion.li
              key={text}
              initial={{
                opacity: 0,
                translateX: -90,
              }}
              // whileInView={{
              //   opacity: 1,
              //   translateX: 0,
              // }}
              transition={{
                duration: 0.7,
                // ease: [0.25, 0.1, 0.25, 0.1],
                ease: 'easeInOut',
                delay: index * 0.1,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
            >
              <ListRow
                as="div"
                left={<Icon name="IconCheck" size={20} />}
                contents={
                  <ListRow.Texts title={`혜택 ${index + 1}`} subTitle={text} />
                }
              />
            </motion.li>
          );
        })}
      </ul>

      {promotion != null ? (
        <Flex direction="column" css={termsContainerStyles}>
          <Text bold={true}>유의사항</Text>
          <Text typography="t7">{removeHtmlTags(promotion.terms)}</Text>
          {/* <Text typography="t7">{removeHtmlTags(str.repeat(100))}</Text> */}
        </Flex>
      ) : null}

      <FixedBottomButton label="신청하기" onClick={moveToApply} />
    </div>
  );
}

function removeHtmlTags(text: string) {
  return text.replace(/<\/?[^>]+(>|$)/g, '');
}

const termsContainerStyles = css`
  margin-top: 80px;
  padding: 0 24px 80px;
`;

export default CardPage;
