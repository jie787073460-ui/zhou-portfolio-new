import Link from "next/link";

const experience = [
  {
    time: "2024 — Now",
    title: "上海美高域集团｜产品设计总监",
    text: "统筹产品体验、设计系统、AI 能力应用与商业化落地，连接产品、设计、研发、销售与商务团队，推动产品从概念验证走向可交付、可展示、可转化的业务方案。"
  },
  {
    time: "2020 — 2024",
    title: "北京数智方科技有限公司｜设计总监",
    text: "负责 ToB 产品、AI 智能中台及复杂系统的体验设计与团队管理，主导从需求分析、信息架构、交互设计、视觉规范到产品落地的完整设计流程。"
  },
  {
    time: "2018 — 2019",
    title: "杭州阿里巴巴科技｜用户体验设计师",
    text: "参与天猫国际、天猫大促及阿里巴巴信息平台相关设计工作，覆盖电商首页、活动营销、平台规范、移动端体验与品牌视觉等方向。"
  }
];

const capabilities = [
  {
    title: "Product Strategy",
    text: "从业务目标、用户场景和产品路径出发，定义可落地的体验方案。"
  },
  {
    title: "Design System",
    text: "建立组件、规范、页面模式和协作流程，提升产品一致性和团队效率。"
  },
  {
    title: "AI Experience",
    text: "将复杂 AI 技术能力转化为用户可理解、可配置、可反馈的产品界面。"
  },
  {
    title: "Business Growth",
    text: "通过信息架构、转化路径和运营工具设计，连接体验与商业结果。"
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#07090F] px-6 py-24 text-white md:px-12">
      <div className="mx-auto max-w-[1100px]">
        <Link className="text-sm text-white/50 transition hover:text-white" href="/">
          Back home
        </Link>

        <section className="pt-16">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/[0.34]">
            About
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
            我关注设计如何真正进入业务
          </h1>
          <div className="mt-10 grid gap-6 text-[16px] leading-8 text-white/[0.62] lg:grid-cols-2">
            <p>
              过去 8 年，我从一线 UI/UX 设计逐步走向产品设计管理，经历过大型电商平台、AI 产品中台、东南亚出海产品、私域增长工具和品牌视觉系统等多类型项目。
            </p>
            <p>
              相比单纯完成界面设计，我更关注设计如何进入产品决策、组织协作和业务增长：从定义问题、搭建体验框架，到沉淀设计系统、推动跨团队落地，最终让复杂产品变得清晰、可用并具备商业价值。
            </p>
          </div>
        </section>

        <section className="mt-24">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/[0.34]">
            Experience
          </p>
          <div className="mt-8 divide-y divide-white/[0.10] border-y border-white/[0.10]">
            {experience.map((item) => (
              <article className="grid gap-5 py-8 md:grid-cols-[180px_1fr]" key={item.time}>
                <p className="text-sm font-medium text-white/[0.34]">{item.time}</p>
                <div>
                  <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                  <p className="mt-3 max-w-3xl text-[15px] leading-7 text-white/[0.56]">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-8 lg:grid-cols-[0.72fr_1fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/[0.34]">
              Education
            </p>
            <div className="mt-8 rounded-[28px] border border-white/[0.10] bg-white/[0.045] p-6">
              <p className="text-sm text-white/[0.34]">2015 — 2019</p>
              <h2 className="mt-3 text-xl font-semibold">鲁迅美术学院｜本科｜视觉传达</h2>
              <p className="mt-4 text-[15px] leading-7 text-white/[0.56]">
                系统学习视觉传达、品牌设计、信息编排与视觉系统构建，为后续产品体验、设计系统和商业视觉设计打下基础。
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/[0.34]">
              Capability
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {capabilities.map((item) => (
                <article className="rounded-[28px] border border-white/[0.10] bg-white/[0.045] p-6" key={item.title}>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="mt-4 text-[15px] leading-7 text-white/[0.56]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
