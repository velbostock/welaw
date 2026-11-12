import PageHeader from "@/components/PageHeader";
import Toggle from "@/components/Toggle";
import { Lock, ArrowRight, QuestionOutline } from "@/components/Icons";

const STEPS = [
  { title: "의뢰인 신청·결제", desc: "프로필에서 의뢰인이 내용증명 작성을 신청합니다." },
  { title: "AI 초안 자동 생성", desc: "의뢰 내용을 바탕으로 AI 어시스턴트가 내용증명의 초안을 만들어줍니다." },
  { title: "변호사 검토·수정 후 전달", desc: "초안을 확인·수정해 의뢰인에게 전달합니다." },
  { title: "공인전자주소로 발송", desc: "내용이 확정되면 등록된 주소로 카카오톡 전자 발송 합니다." },
];

export default function LetterSettingsPage() {
  return (
    <>
      <PageHeader
        title="내용증명 설정"
        right={
          <a href="#" className="inline-flex items-center text-[14px] text-ink leading-none">
            <QuestionOutline className="mr-[6px] text-[15px]" /> 플랫폼 이용 수수료 안내
          </a>
        }
        tabs={
          <div className="px-4 sm:px-10 flex gap-[38px] -mb-px">
            <button className="h-12 text-[16px] font-medium text-brand border-b-2 border-brand leading-none">설정</button>
            <button className="h-12 text-[16px] text-body inline-flex items-center leading-none">
              공인전자주소
              <span className="ml-[10px] text-[9px] font-semibold text-brand bg-brand-soft border border-[#fde0d6] rounded-[2px] px-[4px] leading-[16px]">미등록</span>
            </button>
          </div>
        }
      />

      {/* grey 108 → 835 */}
      <section className="bg-page min-h-[727px] pt-6 sm:pt-[51px] px-4 sm:px-6 pb-6">
        <div className="w-full max-w-[700px] mx-auto bg-white border border-line rounded-[8px] px-6 pt-[22px] pb-[22px]">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-[16px] font-bold text-ink leading-none mt-[1px]">내용증명 의뢰받기</h2>
              <p className="text-[12px] text-muted leading-none mt-[14px]">프로필에서 의뢰인이 내용증명 작성을 신청할 수 있습니다.</p>
            </div>
            <Toggle size="sm" />
          </div>

          <div className="mt-[17px] min-h-[44px] rounded-[6px] bg-brand-soft flex flex-wrap items-center gap-y-2 py-2 sm:py-0 pl-[18px] pr-4">
            <Lock className="text-[16px] text-brand" />
            <p className="ml-[9px] text-[14px] text-ink leading-5 sm:leading-none break-keep">
              내용증명 작성 및 발송을 진행하려면 <b className="font-bold">공인전자주소 등록이 필요</b>합니다.
            </p>
            <a href="#" className="ml-auto inline-flex items-center text-[14px] font-bold text-brand leading-none">
              등록하기 <ArrowRight className="ml-1" />
            </a>
          </div>

          <div className="mt-[33px] border border-line rounded-[6px] overflow-hidden">
            <div className="h-[34px] bg-page px-[18px] text-[12px] text-muted leading-[34px]">내용증명 의뢰 진행 프로세스</div>
            <ol className="px-[17px] pt-[15px] pb-[21px]">
              {STEPS.map((s, i) => (
                <li key={s.title} className="relative flex min-h-[64px] last:min-h-0 pb-3 sm:pb-0">
                  {i < STEPS.length - 1 && <span className="absolute left-[13.5px] top-[32px] bottom-[4px] w-px bg-line" />}
                  <span className="w-7 h-7 rounded-full bg-brand-tint text-brand text-[13px] font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <div className="ml-[13px] pt-[6px]">
                    <p className="text-[14px] font-bold text-ink leading-none">{s.title}</p>
                    <p className="text-[12px] text-muted leading-4 sm:leading-none mt-[10px] break-keep">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* save bar 835 → 930 */}
      <div className="sticky bottom-0 bg-white border-t border-line pt-[22px] pb-[25px] px-4 sm:px-6">
        <button disabled className="block w-full max-w-[700px] h-[48px] mx-auto rounded-[6px] bg-line-soft text-[16px] text-faint cursor-default">
          저장하기
        </button>
      </div>
      <div className="h-[126px] bg-page" />
    </>
  );
}
