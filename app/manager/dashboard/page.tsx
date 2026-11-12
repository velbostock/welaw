import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Chevron, Plus, ArrowRight, LongArrow } from "@/components/Icons";
import { dashboard as d } from "@/lib/mock";

const More = () => (
  <a href="#" className="flex items-center text-[14px] font-semibold text-ink leading-none">
    더보기 <Chevron className="ml-[6px] text-[13px]" />
  </a>
);

export default function DashboardPage() {
  return (
    <>
      <PageHeader title="홈" />

      {/* ───── grey top area (60 → 989) ───── */}
      <section className="bg-page pt-[53px] pb-[29px] border-b border-[#e8eaeb]">
        <div className="w-[944px] mx-auto">
          {/* banner 968×128 */}
          <div className="h-[128px] w-[968px] -ml-[4px] bg-[#111214] relative overflow-hidden flex items-center px-12 text-white">
            <div>
              <p className="text-[22px] font-bold leading-7 tracking-tight">변호사님, 이번 달 프로필 조회가 늘었어요</p>
              <p className="text-[14px] text-[#9aa0a6] mt-[6px]">상담 가능 시간을 등록하면 예약 전환율이 더 올라갑니다.</p>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-[300px] bg-gradient-to-l from-[#2a2d31] to-transparent" />
            <div className="absolute right-8 bottom-4 flex gap-[5px]">
              {[0, 1, 2].map((i) => (
                <span key={i} className={`h-[4px] rounded-full ${i === 0 ? "w-5 bg-brand" : "w-[7px] bg-[#55595e]"}`} />
              ))}
            </div>
          </div>

          {/* stats */}
          <div className="mt-[35px] flex items-center">
            <h2 className="text-[16px] font-semibold text-body leading-none">최근 1개월 주요 활동수치</h2>
            <p className="ml-[90px] text-[12px] text-light leading-none">* 각 수치를 클릭해서 활동 상세 내역을 확인하세요.</p>
          </div>
          <ul className="mt-[20px] grid grid-cols-6">
            {d.stats.map((s) => (
              <li key={s.label}>
                <button className="text-left">
                  <p className="text-[48px] leading-[48px] font-bold text-body tracking-tight">{s.value}</p>
                  <p className="text-[13px] text-light leading-none mt-[2px]">{s.label}</p>
                </button>
              </li>
            ))}
          </ul>

          <hr className="mt-[61px] border-0 h-px bg-[#e2e0df]" />

          {/* quick inquiries: title top 480, cards 524→608 */}
          <div className="mt-[37px] flex items-end justify-between">
            <h2 className="text-[24px] font-bold text-ink tracking-tight leading-none">새로운 빠른문의</h2>
            <More />
          </div>
          <ul className="mt-[22px] w-[956px] grid grid-cols-3 gap-[17px]">
            {d.quickInquiries.map((q) => (
              <li key={q.name} className="h-[84px] bg-white rounded-[6px] card-shadow px-4 pt-[19px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[16px] font-bold text-ink leading-none">{q.name}</span>
                    <span className="text-[10px] font-semibold text-body bg-[#eef0f2] rounded-[2px] px-[6px] leading-[18px]">{q.status}</span>
                  </div>
                  <span className="text-[12px] text-light leading-none">{q.date}</span>
                </div>
                <p className="mt-[14px] text-[14px] text-light leading-none">{q.text}</p>
              </li>
            ))}
          </ul>

          {/* certified letter: title 668, cards 713→777 */}
          <div className="mt-[58px] flex items-end justify-between">
            <h2 className="text-[24px] font-bold text-ink tracking-tight leading-none">내용증명 의뢰</h2>
            <More />
          </div>
          <ul className="mt-[23px] w-[956px] grid grid-cols-3 gap-[17px]">
            {d.letters.map((l, i) => (
              <li key={l.label} className="h-[64px] bg-white rounded-[6px] card-shadow px-6 flex items-center justify-between">
                <span className="text-[14px] text-body">{l.label}</span>
                <span className="text-[14px] text-body">
                  <b className={`text-[24px] font-bold mr-[6px] ${i === 0 ? "text-brand" : "text-ink"}`}>{l.count}</b>건
                </span>
              </li>
            ))}
          </ul>

          {/* schedule: 873 / 902 / 935 */}
          <div className="mt-[94px]">
            <p className="text-[20px] font-semibold text-body leading-none">상담 가능한 시간을 등록해 주세요.</p>
            <p className="text-[14px] text-light leading-none mt-[14px]">등록한 시간만큼 더 많이 예약됩니다.</p>
            <a href="#" className="inline-flex items-center mt-[20px] text-[14px] font-semibold text-brand leading-none">
              시간등록하기 <Plus className="ml-[10px] text-[15px]" />
            </a>
          </div>
        </div>
      </section>

      {/* ───── white carousel section (989 → 1520) ───── */}
      <section className="bg-white pt-[80px] pb-[65px] overflow-hidden">
        <div className="w-[944px] mx-auto flex items-end">
          <h2 className="text-[28px] font-bold text-ink tracking-tight leading-none">변호사님이 관심있어 할 상담글</h2>
          <a href="#" className="ml-[2px] text-[14px] text-light leading-none mb-[1px]">전체보기</a>
        </div>
        <div className="relative mt-[55px] h-[303px]">
          <div className="absolute left-0 top-0 flex gap-[11px] pl-px">
            {d.questions.map((q) => (
              <article key={q.title} className="shrink-0 w-[303px] h-[303px] bg-white border border-[#eceff2] rounded-[2px] px-[22px] pt-[19px] flex flex-col">
                <p className="text-right text-[12px] text-light leading-none">나중에 답변</p>
                <p className="flex-1 flex items-center justify-center text-center text-[20px] leading-[32px] text-ink px-1 break-keep">{q.title}</p>
                <div className="h-px bg-[#eceff2]" />
                <div className="h-[50px] flex items-center text-[14px] text-light">
                  <span>조회수 <b className="text-body font-semibold">{q.views}</b></span>
                  <span className="ml-4">답변 <b className="text-body font-semibold">{q.answers}</b></span>
                  <a href="#" className="ml-auto flex items-center text-[14px] font-bold text-brand">
                    답변하기 <Chevron className="ml-[2px] text-[12px]" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <button className="absolute left-[32px] top-[113px] w-[76px] h-[76px] rounded-full bg-white/95 card-shadow-lg flex items-center justify-center text-body">
            <LongArrow dir="left" />
          </button>
          <button className="absolute right-[32px] top-[113px] w-[76px] h-[76px] rounded-full bg-white/95 card-shadow-lg flex items-center justify-center text-body">
            <LongArrow dir="right" />
          </button>
        </div>
      </section>

      {/* ───── ranking strip (1520 → 1632) ───── */}
      <section className="bg-page border-b border-[#dadddf] h-[112px] flex items-center">
        <div className="w-[944px] mx-auto flex items-center justify-end">
          <span className="text-faint text-[14px] mr-[14px]">—</span>
          <span className="w-[38px] h-[38px] rounded-full bg-[#dfe3e7] overflow-hidden flex items-end justify-center">
            <span className="w-6 h-6 rounded-full bg-[#b9c0c7] -mb-1" />
          </span>
          <div className="ml-[16px] w-[200px]">
            <p className="text-[16px] font-bold text-ink leading-none">내 주간 답변 랭킹</p>
            <p className="text-[14px] text-faint leading-none mt-[6px]">0 건</p>
          </div>
          <Chevron className="text-[16px] text-faint mr-[2px]" />
        </div>
      </section>

      {/* ───── ad status + banner (1632 → 2429) ───── */}
      <section className="bg-page pt-[68px]">
        <div className="w-[944px] mx-auto">
          <div className="bg-white px-20 pt-[64px] pb-[98px]">
            <a href="#" className="inline-flex items-center text-[28px] font-bold text-ink tracking-tight leading-none">
              나의 광고상태 <Chevron className="ml-3 text-[20px] text-light" />
            </a>
            <div className="mt-[24px] h-[2px] bg-side" />
            <ul className="grid grid-cols-4 pt-[48px] pb-[42px] border-b border-line">
              {d.adStatus.map((a) => (
                <li key={a.label} className="text-center">
                  <p className="text-[14px] text-light leading-none">{a.label}</p>
                  <p className="text-[32px] font-bold text-body leading-none mt-[14px]">{a.value}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-[72px] flex">
            <div className="w-[630px] h-[206px] bg-banner flex">
              <div className="w-[383px] pl-[30px] pt-[38px] text-white">
                <p className="text-[24px] font-bold leading-[30px] tracking-tight">
                  변호사님의 주요분야를
                  <br />
                  광고해보세요<span className="text-brand">.</span>
                </p>
                <p className="text-[14px] text-[#cfd2d5] leading-none mt-[22px]">잠재고객이 다니는 옥외에도 효과적으로 광고하세요.</p>
                <a href="#" className="inline-flex items-center mt-[22px] text-[14px] font-semibold text-brand leading-none">
                  자세히보기 <ArrowRight className="ml-[10px]" />
                </a>
              </div>
              <div className="w-[247px] h-full bg-[#eef1f4] relative overflow-hidden">
                <div className="absolute left-0 right-0 top-[22px] text-center text-[12px] text-body">로톡에서 활동하는</div>
                <div className="absolute left-0 right-0 top-[42px] text-center text-[22px] font-extrabold leading-[26px] text-ink">
                  상속
                  <br />
                  전문 변호사
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] w-[120px] h-[120px] rounded-full bg-[#c9cfd5]" />
              </div>
            </div>
            <div className="ml-[28px] w-[286px] pt-[8px]">
              <div className="flex items-center justify-between">
                <h3 className="text-[16px] font-bold text-ink leading-none">공지사항</h3>
                <a href="#" className="text-[14px] text-light leading-none">전체보기</a>
              </div>
              <ul className="mt-[26px]">
                {d.notices.map((n) => (
                  <li key={n} className="h-[30px] leading-[30px] text-[14px] text-body truncate">
                    <a href="#">{n}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Footer className="pt-[47px] pb-[20px]" />
      </section>
    </>
  );
}
