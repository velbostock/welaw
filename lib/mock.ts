export const dashboard = {
  stats: [
    { label: "프로필 조회 수", value: 311 },
    { label: "전화 문의", value: 9 },
    { label: "빠른문의", value: 10 },
    { label: "유료상담 예약", value: 16 },
    { label: "상담 답변 수", value: 0 },
    { label: "상담후기", value: 0 },
  ],
  quickInquiries: [
    { name: "송지연", status: "상담 종료", date: "11월 2일", text: "상담이 자동 종료 되었습니다." },
    { name: "류선혜", status: "상담 종료", date: "10월 28일", text: "상담이 자동 종료 되었습니다." },
    { name: "박건태", status: "상담 종료", date: "10월 28일", text: "상담이 자동 종료 되었습니다." },
  ],
  letters: [
    { label: "신규 의뢰", count: 0 },
    { label: "작성", count: 0 },
    { label: "발송 대기", count: 0 },
  ],
  questions: [
    { title: "사건 사이에 낀거 같습니다", views: 6, answers: 0 },
    { title: "중고 거래를 하였는데 하자로 인한 반품 거부시 대응 가능할까요?", views: 5, answers: 0 },
    { title: "중고 시계 거래 후 환불 문제", views: 15, answers: 0 },
    { title: "피고의 인적사항 알아내는 방법", views: 13, answers: 0 },
    { title: "해고예고 수당 받을수있는지 여부", views: 12, answers: 0 },
    { title: "회사 건보료 미납으로 인한 불이익", views: 6, answers: 0 },
    { title: "임대차 계약 만료 후 보증금 반환", views: 9, answers: 0 },
  ],
  adStatus: [
    { label: "승인대기", value: 0 },
    { label: "승인완료", value: 0 },
    { label: "활성화", value: 1 },
    { label: "종료", value: 62 },
  ],
  notices: [
    "[안내] 매니저 비밀번호 규칙 변경 및 재설정 안내",
    "[안내] 해외상담 수신 여부를 직접 설정할 수 있습니다.",
    "[신규 기능] 로이어스원에서 부동산 공적장부를 바로 조회하세요",
    "[안내] '내용증명 작성 및 발송' 서비스 오픈 안내",
    "[안내] 빠른문의 의뢰인 연락처 확인 기능 오픈 안내",
  ],
};

export const counsels = {
  total: 2269,
  waiting: 0,
  done: 1837,
  canceled: 432,
  rows: [
    { kind: "15분 전화상담", status: "예약취소", at: "11월 3일 (화) 14:30", client: "김○○", field: "기타", booked: "2026-11-03 13:15", result: "취소된 상담", review: "N" },
    { kind: "15분 전화상담", status: "상담 완료", at: "11월 3일 (화) 12:00", client: "이○○", field: "기타", booked: "2026-11-03 10:40", result: "작성 안됨", review: "N" },
    { kind: "15분 전화상담", status: "상담 완료", at: "11월 3일 (화) 11:00", client: "박○○", field: "기타", booked: "2026-11-02 23:11", result: "작성 안됨", review: "N" },
    { kind: "15분 전화상담", status: "상담 완료", at: "11월 1일 (일) 13:00", client: "최○○", field: "기타", booked: "2026-11-01 11:49", result: "작성 안됨", review: "N" },
    { kind: "15분 전화상담", status: "예약취소", at: "10월 30일 (금) 14:30", client: "정○○", field: "기타", booked: "2026-10-30 13:19", result: "취소된 상담", review: "N" },
    { kind: "15분 전화상담", status: "상담 완료", at: "10월 29일 (목) 17:00", client: "강○○", field: "기타", booked: "2026-10-29 15:44", result: "작성 안됨", review: "N" },
    { kind: "15분 전화상담", status: "상담 완료", at: "10월 28일 (수) 22:00", client: "조○○", field: "기타", booked: "2026-10-28 21:06", result: "작성 안됨", review: "N" },
    { kind: "15분 전화상담", status: "상담 완료", at: "10월 27일 (화) 15:00", client: "윤○○", field: "기타", booked: "2026-10-27 13:50", result: "작성 안됨", review: "N" },
    { kind: "15분 전화상담", status: "상담 완료", at: "10월 27일 (화) 14:30", client: "장○○", field: "기타", booked: "2026-10-27 13:18", result: "작성 안됨", review: "N" },
    { kind: "15분 전화상담", status: "예약취소", at: "10월 27일 (화) 10:00", client: "임○○", field: "기타", booked: "2026-10-26 08:36", result: "취소된 상담", review: "N" },
  ],
};

export type Post = { rep: boolean; category: "해결사례" | "법률가이드"; title: string; date: string; tags: string[]; published: boolean };

export const posts: { total: number; cases: number; guides: number; rep: Post[]; rows: Post[] } = {
  total: 80,
  cases: 37,
  guides: 43,
  rep: [
    { rep: true, category: "해결사례", title: "[혐의없음] 전 연인 전남친 전여친 억울한 스토킹 사건", date: "24-01-30\n14:26", tags: ["고소/소송절차", "디지털 성범죄", "폭행/협박/상해 일반"], published: true },
    { rep: true, category: "법률가이드", title: "유책배우자 이혼,무조건 불리할까요? 유책배우자 이혼소송 유의사항", date: "23-09-04\n14:33", tags: ["가사 일반", "고소/소송절차", "이혼"], published: true },
    { rep: true, category: "법률가이드", title: "[사이버명예훼손]단체카톡,오픈채팅,네이버카페 허위사실 고소", date: "23-08-29\n19:44", tags: ["고소/소송절차", "명예훼손/모욕 일반", "사이버 명예훼손/모욕"], published: true },
    { rep: true, category: "법률가이드", title: "[가정보호사건] 가정폭력사건에 대한 임시조치 및 보호처분", date: "23-06-19\n18:56", tags: ["가사 일반", "이혼", "폭행/협박/상해 일반"], published: true },
  ],
  rows: [
    { rep: false, category: "법률가이드", title: "[가정폭력]피해자주소 노출차단, '주민등록등본 열람제한' 신청", date: "26-04-06\n15:20", tags: ["성폭력/강제추행 등", "폭행/협박/상해 일반", "이혼"], published: true },
    { rep: false, category: "법률가이드", title: "[징계무효] 사내 중징계, 승소로 가는 불복 절차의 핵심", date: "26-04-02\n18:54", tags: ["폭행/협박/상해 일반", "소송/집행절차", "노동/인사"], published: true },
    { rep: false, category: "법률가이드", title: "[직장내성희롱]\"애기야\",\"돼지야\"..친근함의표현? 성희롱일까?", date: "26-02-20\n16:37", tags: ["이혼", "상속", "가사 일반"], published: true },
    { rep: false, category: "법률가이드", title: "국민연금 재산분할, '이것' 모르면 공단에서 거절당합니다!", date: "26-02-20\n16:35", tags: ["이혼", "상속", "가사 일반"], published: true },
    { rep: false, category: "법률가이드", title: "'구하라법'도입, 유류분위헌 결정으로 패륜상속인 퇴출(헌재결정)", date: "26-02-20\n16:33", tags: ["이혼", "상속", "가사 일반"], published: true },
    { rep: false, category: "해결사례", title: "전남친 협박죄, 벌금 100만 원 처분", date: "26-02-20\n16:30", tags: ["성폭력/강제추행 등", "폭행/협박/상해 일반", "손해배상"], published: true },
    { rep: false, category: "해결사례", title: "연인 상해 재물손괴, 벌금 500만원 처분", date: "26-02-20\n16:26", tags: ["성폭력/강제추행 등", "기타 재산범죄", "폭행/협박/상해 일반"], published: true },
    { rep: false, category: "법률가이드", title: "\"동거만 했는데 재산분할이 된다고요?\" 약혼 사실혼 한 끗 차이", date: "26-02-20\n16:21", tags: ["손해배상", "이혼", "가사 일반"], published: true },
    { rep: false, category: "해결사례", title: "끈질긴 전남친스토킹, 벌금형 300만원 고소 성공사례 살펴봅니다", date: "25-04-23\n15:10", tags: ["성폭력/강제추행 등", "고소/소송절차", "폭행/협박/상해 일반"], published: true },
    { rep: false, category: "법률가이드", title: "협의이혼 필수서류, 신청방법, 조정이혼 장점 알려드립니다.", date: "25-03-02\n17:09", tags: ["소송/집행절차", "이혼", "가사 일반"], published: true },
    { rep: false, category: "법률가이드", title: "양육비직접지급명령이란?", date: "25-03-02\n17:06", tags: ["소송/집행절차", "이혼", "가사 일반"], published: true },
    { rep: false, category: "법률가이드", title: "양육비 담보제공 및 일시금지급명령이란?", date: "25-03-02\n17:04", tags: ["소송/집행절차", "이혼", "가사 일반"], published: true },
    { rep: false, category: "법률가이드", title: "양육비 미지급, 이행명령이란?", date: "25-03-02\n17:00", tags: ["고소/소송절차", "이혼", "가사 일반"], published: true },
    { rep: false, category: "법률가이드", title: "다가구 전세사기 피해, 초기대응 방안", date: "25-02-11\n10:53", tags: ["사기/공갈", "임대차", "계약일반/매매"], published: true },
    { rep: false, category: "해결사례", title: "혼인빙자사기, 연인 대여금 사기 징역3년 6월 성공사례", date: "25-01-03\n22:06", tags: ["사기/공갈", "고소/소송절차", "대여금/채권추심"], published: true },
    { rep: false, category: "해결사례", title: "준강간 강제추행 피해, 성범죄 불송치 이의신청 성공사례", date: "25-01-03\n22:01", tags: ["성폭력/강제추행 등", "디지털 성범죄", "고소/소송절차"], published: false },
    { rep: false, category: "해결사례", title: "직장내명예훼손, 성범죄 피해도 억울한데 소문까지? 고소 성공사례", date: "24-11-20\n10:30", tags: ["성폭력/강제추행 등", "고소/소송절차", "명예훼손/모욕 일반"], published: true },
    { rep: false, category: "법률가이드", title: "협의이혼 관할, 협의이혼 법원은 어디로 정해야 할까?", date: "24-11-20\n10:10", tags: ["고소/소송절차", "이혼", "가사 일반"], published: true },
    { rep: false, category: "해결사례", title: "임대인 가족과 체결한 계약, 임대차보증금 반환청구 성공사례", date: "24-11-14\n18:08", tags: ["건축/부동산 일반", "임대차"], published: true },
    { rep: false, category: "해결사례", title: "황혼이혼 조정, 70대 부부의 신속한 이혼 성공사례", date: "24-11-14\n18:05", tags: ["고소/소송절차", "이혼", "가사 일반"], published: true },
  ],
};

export type Video = { no: number; rep: boolean; category: "법률 가이드" | "법률 상담"; title: string; date: string; published: boolean };

export const videos: { rep: Video[]; rows: Video[] } = {
  rep: [
    { no: 0, rep: true, category: "법률 가이드", title: "유명인 불륜 10년에 출산… 본처는 어떤 법적 대응을 할 수 있을까?", date: "25-09-02 13:09", published: true },
    { no: 0, rep: true, category: "법률 상담", title: "연애 예능 출연자 준강간 사건으로 본 성범죄 피해 직후 대처법", date: "25-09-02 13:15", published: true },
    { no: 0, rep: true, category: "법률 상담", title: "\"나는 초혼, 상대는 돌싱\" 반드시 체크해야할 사항들!", date: "25-09-02 13:18", published: true },
  ],
  rows: [
    { no: 19, rep: false, category: "법률 상담", title: "양육비 안주면 아이 못만날까? - 고지용·허양임 소송 분석", date: "26-10-06 17:25", published: true },
    { no: 18, rep: false, category: "법률 상담", title: "연프 출연한 상간자, 소송에서 증거가 될까?", date: "26-10-06 17:24", published: true },
    { no: 17, rep: false, category: "법률 상담", title: "이혼소송 중 형사 고소, 자칫하면 이혼까지 망칩니다!", date: "26-09-01 23:09", published: true },
    { no: 16, rep: false, category: "법률 상담", title: "유명인 스토킹 사건으로 본 스토킹피해자 매뉴얼", date: "26-09-01 23:08", published: true },
    { no: 15, rep: false, category: "법률 상담", title: "회피형배우자 이혼, 반면 무심형 배우자도 유책사유?", date: "26-09-01 23:07", published: true },
    { no: 14, rep: false, category: "법률 상담", title: "비양육자는 유책배우자? 편견일까 진실일까", date: "26-09-01 23:05", published: true },
    { no: 13, rep: false, category: "법률 상담", title: "조정이혼, 유명인들이 많이 택하는 이유는?", date: "25-09-15 14:08", published: true },
    { no: 12, rep: false, category: "법률 상담", title: "협의이혼vs조정이혼 이혼 결심했다면 반드시 알아야할 사항들", date: "25-09-15 14:08", published: true },
    { no: 11, rep: false, category: "법률 상담", title: "\"확실한 증거 수집\" 스토킹 피해 대처방법", date: "25-09-02 13:18", published: true },
    { no: 10, rep: false, category: "법률 상담", title: "\"믿어줄거라 생각했는데..\" 오히려 갈등키운 위치추적어플", date: "25-09-02 13:18", published: true },
  ],
};
