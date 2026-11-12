import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Toggle from "@/components/Toggle";
import Tag from "@/components/Tag";
import RepMark from "@/components/RepMark";
import { Plus, Question, ArrowRight } from "@/components/Icons";
import { posts as p } from "@/lib/mock";

function DateCell({ date }: { date: string }) {
  const [d, t] = date.split("\n");
  return (
    <span className="block text-[12px] leading-[16px] text-body">
      {d}
      <br />
      {t}
    </span>
  );
}

const SelectButtons = () => (
  <div className="flex justify-end gap-[7px]">
    <button className="h-[34px] w-[46px] rounded-[4px] bg-white border border-fill-btn text-[14px] text-ink">선택</button>
    <button className="h-[34px] w-[76px] rounded-[4px] bg-white border border-fill-btn text-[14px] text-ink">선택 삭제</button>
  </div>
);

export default function PostsPage() {
  return (
    <>
      <PageHeader
        title={<span className="text-[17px]">포스트</span>}
        right={
          <button className="h-8 w-[110px] rounded-[4px] bg-brand text-white text-[14px] font-medium inline-flex items-center justify-center leading-none">
            <Plus className="mr-[6px] text-[14px]" /> 포스트 작성
          </button>
        }
        tabs={
          <div className="w-[944px] mx-auto flex gap-[25px] -mb-px">
            <button className="h-12 text-[18px] font-medium text-ink border-b-2 border-ink leading-none">
              전체 <span className="text-brand">{p.total}</span>
            </button>
            <button className="h-12 text-[18px] text-faint leading-none">해결사례 {p.cases}</button>
            <button className="h-12 text-[18px] text-faint leading-none">법률가이드 / 에세이 {p.guides}</button>
          </div>
        }
      />

      <section className="bg-page flex-1 pt-[42px] pb-[20px]">
        <div className="w-[944px] mx-auto">
          <h2 className="inline-flex items-center text-[16px] font-bold text-ink leading-none">
            대표 포스트 <Question className="ml-[6px] text-[14px] text-faint" />
          </h2>

          {/* rep table: top 190 */}
          <table className="mt-[16px] w-full bg-white table-fixed border-collapse">
            <colgroup>
              <col style={{ width: 75 }} />
              <col style={{ width: 106 }} />
              <col />
              <col style={{ width: 85 }} />
              <col style={{ width: 308 }} />
            </colgroup>
            <tbody>
              {p.rep.map((r) => (
                <tr key={r.title} className="h-[69px] border-b border-line-soft last:border-b-0 align-middle">
                  <td className="pl-[17px] py-[18px] align-middle">
                    <RepMark on />
                  </td>
                  <td className="py-[18px] align-middle text-[14px] text-body">{r.category}</td>
                  <td className="py-[18px] pr-4 align-middle text-[14px] text-body leading-[17px]">{r.title}</td>
                  <td className="py-[18px] align-middle">
                    <DateCell date={r.date} />
                  </td>
                  <td className="py-[18px] pr-[23px] align-middle">
                    <div className="flex flex-wrap gap-x-[6px] gap-y-[10px]">
                      {r.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-[35px]">
            <SelectButtons />
          </div>

          {/* main table: top 582 */}
          <table className="mt-[11px] w-full bg-white table-fixed border-collapse">
            <colgroup>
              <col style={{ width: 64 }} />
              <col style={{ width: 96 }} />
              <col />
              <col style={{ width: 86 }} />
              <col style={{ width: 234 }} />
              <col style={{ width: 64 }} />
              <col style={{ width: 87 }} />
            </colgroup>
            <thead>
              <tr className="h-[49px] text-[14px] font-bold text-ink text-left">
                <th className="pl-[21px] font-bold">대표</th>
                <th className="pl-[21px] font-bold">분류</th>
                <th className="pl-[21px] font-bold">제목</th>
                <th className="pl-[21px] font-bold">작성일시</th>
                <th className="pl-[20px] font-bold">태그</th>
                <th className="pl-[21px] font-bold">발행</th>
                <th className="pl-[18px] font-bold">미리보기</th>
              </tr>
              <tr className="border-t border-line-soft">
                <th colSpan={7} className="h-[49px] text-center text-[14px] font-bold text-ink">
                  작성 방법이 궁금하신가요?{" "}
                  <a href="#" className="inline-flex items-center text-brand">
                    알아보러 가기 <ArrowRight className="ml-1" />
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              {p.rows.map((r) => (
                <tr key={r.title} className="h-[68px] border-t border-line-soft">
                  <td className="pl-[21px] py-[17px] align-middle">
                    <RepMark on={false} />
                  </td>
                  <td className="pl-[21px] py-[17px] align-middle text-[14px] text-body">{r.category}</td>
                  <td className="pl-[21px] pr-4 py-[17px] align-middle text-[14px] text-body leading-[17px]">{r.title}</td>
                  <td className="pl-[21px] py-[17px] align-middle">
                    <DateCell date={r.date} />
                  </td>
                  <td className="pl-[20px] pr-3 py-[17px] align-middle">
                    <div className="flex flex-wrap gap-x-[6px] gap-y-[12px]">
                      {r.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </td>
                  <td className="pl-[21px] py-[17px] align-middle">
                    <Toggle defaultOn={r.published} />
                  </td>
                  <td className="pl-[18px] py-[17px] align-middle">
                    <a href="#" className="text-[14px] text-link">미리보기</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="w-full h-[54px] bg-line-soft text-[14px] text-body">더 보기</button>
        </div>
        <Footer className="pt-[18px]" />
      </section>
    </>
  );
}
