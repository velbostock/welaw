import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Toggle from "@/components/Toggle";
import RepMark from "@/components/RepMark";
import { Plus, Question } from "@/components/Icons";
import { videos as v } from "@/lib/mock";

export default function VideosPage() {
  return (
    <>
      <PageHeader
        title="동영상"
        right={
          <button className="h-8 px-3 sm:px-0 sm:w-[110px] rounded-[4px] bg-brand text-white text-[14px] font-medium inline-flex items-center justify-center leading-none">
            <Plus className="mr-[6px] text-[14px]" /> 동영상 등록
          </button>
        }
      />

      <section className="bg-page flex-1 pt-[69px] pb-[20px]">
        <div className="wrap">
          <h2 className="inline-flex items-center text-[16px] font-bold text-ink leading-none">
            대표 동영상 <span className="ml-[5px] font-normal text-[14px] text-body">(최대 3개)</span>
            <Question className="ml-[6px] text-[14px] text-faint" />
          </h2>

          {/* rep table: top 157, rows 62 */}
          <div className="mt-[7px] tbl-scroll"><table className="w-full min-w-[760px] bg-white table-fixed border-collapse">
            <colgroup>
              <col style={{ width: 78 }} />
              <col style={{ width: 109 }} />
              <col />
              <col style={{ width: 180 }} />
            </colgroup>
            <tbody>
              {v.rep.map((r) => (
                <tr key={r.title} className="h-[62px] border-b border-line-soft last:border-b-0">
                  <td className="pl-[19px]">
                    <RepMark on />
                  </td>
                  <td className="text-[14px] text-body">{r.category}</td>
                  <td className="text-[14px] text-body pr-4">{r.title}</td>
                  <td className="text-[14px] text-body pr-[17px] text-right">{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table></div>

          <div className="mt-[37px] flex justify-end gap-[7px]">
            <button className="h-[34px] w-[46px] rounded-[4px] bg-white border border-fill-btn text-[14px] text-ink">선택</button>
            <button className="h-[34px] w-[76px] rounded-[4px] bg-white border border-fill-btn text-[14px] text-ink">선택 삭제</button>
          </div>

          {/* main table: top 427 */}
          <div className="mt-[9px] tbl-scroll"><table className="w-full min-w-[760px] bg-white table-fixed border-collapse">
            <colgroup>
              <col style={{ width: 63 }} />
              <col style={{ width: 75 }} />
              <col style={{ width: 115 }} />
              <col />
              <col style={{ width: 135 }} />
              <col style={{ width: 70 }} />
              <col style={{ width: 91 }} />
            </colgroup>
            <thead>
              <tr className="h-[47px] text-[14px] font-bold text-ink text-left">
                <th className="pl-[23px] font-bold">#</th>
                <th className="pl-[15px] font-bold">대표</th>
                <th className="pl-[23px] font-bold">분류</th>
                <th className="pl-[18px] font-bold">제목</th>
                <th className="pl-[13px] font-bold">등록일시</th>
                <th className="pl-[14px] font-bold">발행</th>
                <th className="pl-[12px] font-bold">미리보기</th>
              </tr>
              <tr className="border-t border-line-soft">
                <th colSpan={7} className="h-[47px] text-center text-[14px] font-bold text-ink">
                  등록 방법이 궁금하신가요?{" "}
                  <a href="#" className="text-brand">
                    [ 공지사항 보기 ]
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              {v.rows.map((r) => (
                <tr key={r.no} className="h-[62px] border-t border-line-soft text-[14px] text-body">
                  <td className="pl-[23px]">{r.no}</td>
                  <td className="pl-[15px]">
                    <RepMark on={false} />
                  </td>
                  <td className="pl-[23px]">{r.category}</td>
                  <td className="pl-[18px] pr-4">{r.title}</td>
                  <td className="pl-[13px]">{r.date}</td>
                  <td className="pl-[14px]">
                    <Toggle defaultOn={r.published} />
                  </td>
                  <td className="pl-[12px]">
                    <a href="#" className="text-link">미리보기</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table></div>
          <button className="w-full h-12 bg-line-soft text-[14px] text-body">더 보기</button>
        </div>
        <Footer className="pt-[35px]" />
      </section>
    </>
  );
}
