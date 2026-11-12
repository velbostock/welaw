import Footer from "@/components/Footer";
import { Chevron, Bag, Info, ArrowUpRight } from "@/components/Icons";
import { FieldIllust, RegionIllust, ContentIllust } from "@/components/AdIllustrations";
import { dashboard } from "@/lib/mock";

const PRODUCTS = [
  {
    title: "분야 광고",
    sub: "+ 추가 광고(플러스/포커스 광고) 설정",
    illust: <FieldIllust />,
    desc: "분야에 관련된 모든 검색결과에 광범위하게 노출됩니다. 추가 광고 설정으로 효과를 극대화할 수 있습니다.",
    place: "통합 검색결과, 변호사 검색결과 화면",
    unit: "개당",
    price: "300,000",
  },
  {
    title: "지역 광고",
    sub: "",
    illust: <RegionIllust />,
    desc: "변호사님의 활동 지역을 기반으로 노출되는 광고로, 지역으로 찾기를 사용하는 의뢰인에게 효과적입니다.",
    place: "지역으로 찾기 화면",
    unit: "개당",
    price: "300,000",
  },
  {
    title: "콘텐츠 광고",
    sub: "",
    illust: <ContentIllust />,
    desc: "변호사님의 콘텐츠가 검색 결과 최상단에 노출되는 광고로, 각 사건 유형에 정확하게 매칭된 내용으로 어필할 수 있습니다.",
    place: "키워드 검색결과(변호사탭을 제외한 모든탭)",
    unit: "콘텐츠당",
    price: "120,000",
  },
];

export default function AdProductsPage() {
  return (
    <>
      {/* white header 0 → 195 */}
      <header className="bg-white sm:h-[195px] pb-6 sm:pb-0">
        <div className="wrap h-[60px] flex items-center justify-between">
          <h1 className="text-[20px] font-bold text-ink tracking-tight leading-none">
            로톡 AD<span className="text-brand">.</span>
          </h1>
          <nav className="flex items-center gap-4 sm:gap-[26px] text-[13px] sm:text-[14px] text-ink leading-none">
            <a href="#">광고문의</a>
            <a href="#">정기 결제</a>
            <a href="#" className="inline-flex items-center">
              장바구니 <Bag className="ml-[6px] text-[20px]" />
            </a>
          </nav>
        </div>
        <div className="wrap flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 pt-6 sm:pt-[47px]">
          <a href="#" className="inline-flex items-center text-[24px] font-bold text-ink tracking-tight leading-none mt-[10px]">
            나의 광고상태 <Chevron className="ml-[14px] text-[16px] text-body" />
          </a>
          <ul className="grid grid-cols-4 w-full sm:w-[400px] text-center">
            {dashboard.adStatus.map((a, i) => (
              <li key={a.label}>
                <p className={`text-[28px] font-bold leading-none ${i === 2 ? "text-brand" : i === 3 ? "text-faint" : "text-body"}`}>{a.value}</p>
                <p className="text-[14px] text-body leading-none mt-[17px]">{a.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <section className="bg-page-ad flex-1 pt-10 sm:pt-[81px]">
        <div className="wrap">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <h2 className="text-[24px] sm:text-[32px] font-bold text-ink tracking-tight leading-none">광고 유형을 선택하세요!</h2>
            <p className="inline-flex items-center text-[16px] text-ink leading-none mb-[2px]">
              지금 광고시 할인율 <b className="text-brand ml-1">10%</b>
              <Info className="ml-[6px] text-[17px] text-body" />
            </p>
          </div>

          {/* cards 351 → 880 */}
          <ul className="mt-8 sm:mt-[42px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <li key={p.title} className="bg-white rounded-[12px] border border-line-card px-[28px] pt-[24px] pb-[21px] flex flex-col">
                <h3 className="text-center text-[17px] font-bold text-ink leading-none">{p.title}</h3>
                <p className="text-center text-[13px] text-muted leading-none mt-[11px] h-[12px]">{p.sub}</p>
                <div className="flex justify-center mt-[11px] h-[108px] items-center">{p.illust}</div>
                <p className="mt-[26px] text-[14px] leading-[22px] text-muted break-keep">{p.desc}</p>
                <hr className="mt-[17px] border-line-soft" />
                <p className="mt-[28px] text-[15px] font-bold text-ink leading-none">노출 위치</p>
                <p className="mt-[11px] text-[14px] text-muted leading-none">{p.place}</p>
                <p className="mt-[18px] flex flex-wrap items-baseline leading-none">
                  <b className="text-[14px] font-bold text-ink">{p.unit}</b>
                  <b className="ml-[6px] text-[26px] font-bold text-brand tracking-tight">{p.price}원</b>
                  <span className="ml-[6px] text-[12px] text-muted">(VAT별도)</span>
                </p>
                <button className="mt-[22px] h-12 rounded-[4px] bg-side-btn text-white text-[16px] font-medium">광고 신청하기</button>
                <a href="#" className="mt-[19px] inline-flex items-center justify-center text-[14px] text-muted leading-none">
                  자세히 알아보기 <ArrowUpRight className="ml-1 text-[14px]" />
                </a>
              </li>
            ))}
          </ul>

          {/* wide cards 900 → 1053 */}
          <ul className="mt-5 grid grid-cols-1 xl:grid-cols-2 gap-6">
            {[
              { title: "배너 광고", isNew: false, desc: "많은 의뢰인이 방문하는 위치에 변호사님과 로펌을 홍보할 수 있습니다." },
              { title: "로펌 광고", isNew: true, desc: "실력있는 변호사들을 한번에 홍보할 수 있습니다." },
            ].map((b) => (
              <li key={b.title} className="xl:h-[153px] bg-white rounded-[12px] border border-line-card px-[25px] pt-[26px] pb-6 xl:pb-0 flex flex-col xl:flex-row xl:items-start">
                <div className="flex-1 pr-6">
                  <h3 className="text-[18px] font-bold text-ink inline-flex items-center leading-none">
                    {b.title}
                    {b.isNew && <span className="ml-[7px] text-[9px] font-bold text-white bg-brand rounded-full w-[28px] h-[15px] inline-flex items-center justify-center italic">new</span>}
                  </h3>
                  <p className="mt-[14px] text-[14px] leading-[21px] text-muted break-keep">{b.desc}</p>
                  <a href="#" className="mt-[20px] inline-flex items-center text-[14px] font-bold text-ink leading-none">
                    자세히 알아보기 <ArrowUpRight className="ml-1 text-[14px]" />
                  </a>
                </div>
                <button className="w-full xl:w-[130px] h-12 mt-5 xl:mt-[26px] rounded-[4px] bg-side-btn text-white text-[16px] font-medium shrink-0">광고 신청하기</button>
              </li>
            ))}
          </ul>

          <div className="mt-10 sm:mt-[57px] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-[16px] sm:text-[17px] font-semibold text-ink leading-6 sm:leading-none break-keep">어떤 광고를 해야할지 고민이신가요? 전담 매니저에게 상담 받아보세요.</p>
            <button className="w-full md:w-[254px] h-12 rounded-[6px] bg-inquiry-bg text-inquiry-fg text-[16px] font-medium">광고문의</button>
          </div>

          <div className="mt-12 sm:mt-[89px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[14px] sm:text-[16px] text-faint leading-none">
            <p>로앤컴퍼니 광고서비스 약관에 동의하였습니다.</p>
            <a href="#">약관보기</a>
          </div>
        </div>
        <Footer className="pt-16 sm:pt-[204px] pb-[20px]" />
      </section>
    </>
  );
}
