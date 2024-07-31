// 기본정보
import React from 'react';
import Select from '@shared/Select';
import { 연소득옵션, 신용점수옵션, 결제일옵션 } from '@constants/apply';

const BasicInfo = () => {
  return (
    <div>
      <Select
        label="연소득"
        options={연소득옵션}
        placeholder={연소득옵션[0].label}
        value=""
      />
      <Select
        label="신용점수"
        options={신용점수옵션}
        placeholder={신용점수옵션[0].label}
        value=""
      />
      <Select
        label="결제일"
        options={결제일옵션}
        placeholder={결제일옵션[0].label}
        value=""
      />
    </div>
  );
};

export default BasicInfo;
