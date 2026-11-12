import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Chevron, Calendar, Sort } from "@/components/Icons";
import { counsels as c } from "@/lib/mock";

const TABS = ["전체", "전화상담", "방문상담", "영상상담"];
const COLS = ["종류", "상태", "상담일시", "의뢰인", "분야", "예약일시", "상담결과", "후기", ""];
const WIDTHS = [92, 96, 108, 101, 109, 118, 95, 78, 143];

export default function CounselsPage() {
  return (
    <>
      <PageHeader
        title="유료 상담"
        right={<a href="#" className="text-[14px] text-ink leading-none">내 상담 설정</a>}
        tabs={
          <div className="w-[940px] mx-auto grid grid-cols-4 -mb-px">
            {TABS.map((t, i) => (
              <button key={t} className={`h-12 text-[14px] leading-none ${i === 0 ? "text-ink font-medium border-b-2 border-ink" : "text-faint"}`}>
                {t}
              </button>
            ))}
          </div>
        }
      />

      <section className="bg-page flex-1 pt-[25px] pb-[20px]">
        <div className="w-[940px] mx-auto">
          {/* total payment 135 → 302 */}
          <div className="bg-white rounded-[6px] card-shadow h-[168px] relative px-[29px] pt-[22px]">
            <h2 className="text-[16px] font-bold text-ink leading-none">누적 결제액</h2>
            <a href="#" className="absolute right-[29px] top-[24px] text-[12px] text-light leading-none">정산 안내</a>
            <p className="text-center text-[64px] font-bold text-ink tracking-tight leading-[64px] mt-[14px]">
              128,560,000<span>원</span>
            </p>
            <p className="text-center text-[14px] text-light leading-none mt-[10px]">카드 121,930,000원 · 쿠폰 6,630,000원</p>
          </div>

          {/* sub tabs 325 → 371 */}
          <div className="mt-[26px] grid grid-cols-2">
            <button className="h-[44px] text-[14px] font-semibold text-brand border border-line bg-white">상담 목록</button>
            <button className="h-[44px] text-[14px] text-body bg-white border border-l-0 border-line-soft">후기 목록</button>
          </div>

          {/* counts 408 */}
          <div className="mt-[30px] flex items-end gap-6 text-[16px] text-light leading-none">
            <span className="text-[18px] text-ink">전체 ({c.total})</span>
            <span>상담대기중 ({c.waiting})</span>
            <span>상담완료 ({c.done})</span>
            <span>취소내역 ({c.canceled})</span>
          </div>

          {/* filter 438 → 511 */}
          <div className="mt-[19px] h-[73px] bg-fill px-[7px] pt-[12px] flex items-start">
            <div>
              <label className="block text-[14px] text-body leading-none mb-[9px]">의뢰인</label>
              <input
                className="w-[139px] h-8 bg-white border border-[#e6e6e6] rounded-[3px] px-[10px] text-[12px] placeholder:text-faint outline-none"
                placeholder="의뢰인 이름을 입력하세요."
              />
            </div>
            <div className="ml-[10px]">
              <label className="block text-[14px] text-body leading-none mb-[9px]">분야</label>
              <div className="relative w-[213px]">
                <select className="appearance-none w-full h-8 bg-white border border-[#e6e6e6] rounded-[3px] pl-[10px] pr-8 text-[14px] text-ink outline-none">
                  <option>전체</option>
                </select>
                <Chevron dir="down" className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[13px] text-body pointer-events-none" />
              </div>
            </div>
            <div className="ml-[9px]">
              <label className="block text-[14px] text-body leading-none mb-[9px]">상담일시 선택</label>
              <div className="flex items-center">
                <div className="relative w-[133px]">
                  <input className="w-full h-8 bg-white border border-[#e6e6e6] rounded-[3px] px-[10px] text-[13px] outline-none" />
                  <Calendar className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[15px] text-faint" />
                </div>
                <span className="w-[33px] text-center text-[14px] text-body">–</span>
                <div className="relative w-[133px]">
                  <input className="w-full h-8 bg-white border border-[#e6e6e6] rounded-[3px] px-[10px] text-[13px] outline-none" />
                  <Calendar className="absolute right-[10px] top-1/2 -translate-y-1/2 text-[15px] text-faint" />
                </div>
              </div>
            </div>
            <div className="ml-auto mt-[33px] flex gap-1">
              <button className="h-8 w-[59px] rounded-[3px] bg-fill-btn text-[14px] text-ink">초기화</button>
              <button className="h-8 w-[42px] rounded-[3px] bg-search text-[14px] text-white">검색</button>
            </div>
          </div>

          {/* table: head 520→562, rows 61 */}
          <table className="mt-[11px] w-full bg-white table-fixed border-collapse">
            <colgroup>
              {WIDTHS.map((w, i) => (
                <col key={i} style={{ width: w }} />
              ))}
            </colgroup>
            <thead>
              <tr className="bg-fill h-[42px] text-[14px] text-muted">
                {COLS.map((h, i) => (
                  <th key={i} className={`font-medium ${i === 0 ? "pl-[10px] text-left" : "text-center"}`}>
                    {h === "상담일시" || h === "예약일시" ? (
                      <span className="inline-flex items-center gap-[10px]">
                        {h} <Sort className="text-faint" />
                      </span>
                    ) : (
                      h
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.rows.map((r, i) => (
                <tr key={i} className="h-[61px] border-b border-page text-[14px] text-body">
                  <td className="pl-[10px] text-left whitespace-nowrap">{r.kind}</td>
                  <td className="text-center">{r.status}</td>
                  <td className="text-center whitespace-nowrap">{r.at}</td>
                  <td className="text-center">{r.client}</td>
                  <td className="text-center">{r.field}</td>
                  <td className="text-center">{r.booked}</td>
                  <td className="text-center">{r.result}</td>
                  <td className="text-center">{r.review}</td>
                  <td className="text-right pr-[21px]">
                    <a href="#" className="inline-flex items-center text-[14px] text-light">
                      내용보기 <Chevron className="text-[13px] ml-[2px]" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* pagination 1177 → 1229 */}
          <div className="bg-white h-[60px] flex items-center relative">
            <ul className="mx-auto flex items-center gap-[18px] text-[14px] text-ink leading-none">
              {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                <li key={n}>
                  <a href="#" className={n === 1 ? "text-brand font-bold underline underline-offset-[3px]" : ""}>
                    {n}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#" className="absolute right-[24px] inline-flex items-center text-[14px] text-ink leading-none">
              다음 10페이지 <Chevron className="ml-[6px] text-[13px]" />
            </a>
          </div>
        </div>
        <Footer className="pt-[75px]" />
      </section>
    </>
  );
}
