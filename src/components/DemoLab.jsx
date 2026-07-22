import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const COPY = {
  en: {
    eyebrow: "SOURCE-GROUNDED DEMOS",
    title: "Real workflows, reconstructed safely.",
    intro: "These demos follow the actual architecture of three private Python repositories. Every name, identifier, environment, and result shown below is synthetic.",
    synthetic: "SYNTHETIC DATA · INDEPENDENT REIMPLEMENTATION",
    auditTab: "7-step deploy audit",
    aiTab: "UI semantic search",
    consistencyTab: "MES–CIM consistency",
    auditTitle: "MES Deployment Audit Pipeline",
    auditIntro: "Trace changed UI source into required services, server registrations, and deployment requirements across seven dependent steps.",
    process: "Process",
    scope: "Validation scope",
    single: "Single site",
    allSites: "All sites",
    run: "Run 7-step audit",
    running: "Running pipeline…",
    ready: "Ready for audit",
    complete: "Audit complete",
    steps: "Pipeline execution",
    summary: "Final validation",
    summaryText: "Three services from the source and requirement lists are absent from the synthetic server inventory. A critical report would be generated for review before deployment.",
    critical: "critical gaps",
    passed: "done",
    failed: "critical",
    aiTitle: "MES UI Semantic Search",
    aiIntro: "Search an index built from C# WPF/XAML static analysis, embeddings, and service metadata, then summarize the strongest source-backed match.",
    query: "Natural-language query",
    search: "Search UI index",
    searchPlaceholder: "Where is pallet status changed?",
    indexed: "Indexed views",
    answer: "Grounded answer",
    answerText: "The strongest synthetic match is PalletStatusView. The status update is initiated by SaveCommand, then calls BR_PALLET_UPDATE through the view model handler.",
    candidates: "Ranked source candidates",
    consistencyTitle: "MES–CIM Pallet Consistency Check",
    consistencyIntro: "Bulk-fetch pallet state from both systems, compare physical presence and FULL/EMPTY status, map transaction history, and export dashboard and CSV results.",
    all: "All discrepancies",
    missing: "Missing in MES",
    state: "FULL/EMPTY mismatch",
    exception: "Operational exception",
    pallet: "Synthetic pallet",
    cim: "CIM",
    mes: "MES",
    reason: "Classification",
    history: "Last transaction",
    result: "review rows",
    noRows: "No discrepancies match this filter.",
  },
  ko: {
    eyebrow: "실제 소스 기반 데모",
    title: "실제 업무 흐름을 안전하게 재구성했습니다.",
    intro: "비공개 Python 저장소 3개의 실제 구조를 바탕으로 만든 독립적인 재현입니다. 화면의 이름, 식별자, 환경, 결과 데이터는 모두 합성 데이터입니다.",
    synthetic: "합성 데이터 · 독립 재구현",
    auditTab: "7단계 배포 감사",
    aiTab: "UI 시맨틱 검색",
    consistencyTab: "MES–CIM 정합성",
    auditTitle: "MES 배포 감사 파이프라인",
    auditIntro: "변경된 UI 소스에서 필수 서비스를 추출하고 서버 등록 목록과 배포요건까지 7단계로 교차검증합니다.",
    process: "공정",
    scope: "검증 범위",
    single: "단일 사이트",
    allSites: "전체 사이트",
    run: "7단계 감사 실행",
    running: "파이프라인 실행 중…",
    ready: "감사 준비 완료",
    complete: "감사 완료",
    steps: "파이프라인 실행 결과",
    summary: "최종 검증",
    summaryText: "소스와 배포요건에서 확인된 서비스 중 합성 서버 목록에 없는 항목 3건을 발견했습니다. 배포 전에 검토할 Critical 보고서를 생성합니다.",
    critical: "건 Critical",
    passed: "완료",
    failed: "Critical",
    aiTitle: "MES UI 시맨틱 검색",
    aiIntro: "C# WPF/XAML 정적 분석, 임베딩, 서비스 메타데이터로 만든 인덱스를 검색하고 근거가 가장 강한 화면을 요약합니다.",
    query: "자연어 질의",
    search: "UI 인덱스 검색",
    searchPlaceholder: "파렛트 상태를 변경하는 화면은 어디인가?",
    indexed: "인덱싱된 화면",
    answer: "근거 기반 답변",
    answerText: "가장 강한 합성 검색 결과는 PalletStatusView입니다. SaveCommand에서 상태 변경을 시작하고 ViewModel 핸들러를 통해 BR_PALLET_UPDATE 서비스를 호출합니다.",
    candidates: "소스 후보 순위",
    consistencyTitle: "MES–CIM 파렛트 정합성 Check",
    consistencyIntro: "두 시스템의 파렛트 상태를 Bulk Fetch하고 현물 존재 여부와 FULL/EMPTY 상태, 트랜잭션 이력을 비교해 Dashboard와 CSV로 출력합니다.",
    all: "전체 불일치",
    missing: "MES 누락",
    state: "FULL/EMPTY 불일치",
    exception: "운영 예외",
    pallet: "합성 파렛트",
    cim: "CIM",
    mes: "MES",
    reason: "판정 분류",
    history: "최근 트랜잭션",
    result: "건 검토 대상",
    noRows: "이 조건에 해당하는 불일치가 없습니다.",
  },
};

const PIPELINE = [
  { step: "01", name: "GitLab branch comparison", ko: "GitLab 변경분 감지", detail: "12 changed source files", detailKo: "변경 소스 12개", status: "pass" },
  { step: "02", name: "UI source analysis", ko: "UI 소스 정밀 분석", detail: "18 BR/DA service IDs", detailKo: "BR/DA 서비스 ID 18개", status: "pass" },
  { step: "03", name: "Server dependency trace", ko: "서버 종속성 분석", detail: "27 direct + indirect services", detailKo: "직접·간접 서비스 27개", status: "pass" },
  { step: "04", name: "Server inventory", ko: "서버 전체 서비스 조회", detail: "24 registered services", detailKo: "등록 서비스 24개", status: "pass" },
  { step: "05", name: "Source vs. server validation", ko: "소스–서버 1차 검증", detail: "3 missing registrations", detailKo: "미등록 서비스 3개", status: "fail" },
  { step: "06", name: "Requirement workbook extraction", ko: "배포요건 Excel 추출", detail: "31 planned services", detailKo: "배포 예정 서비스 31개", status: "pass" },
  { step: "07", name: "Final cross-validation", ko: "최종 누락 교차검증", detail: "3 critical gaps", detailKo: "Critical 누락 3건", status: "fail" },
];

const SEARCH_RESULTS = [
  { score: "0.94", view: "PalletStatusView", evidence: "SaveCommand · BR_PALLET_UPDATE", type: "WPF / XAML" },
  { score: "0.87", view: "PalletHistoryView", evidence: "SearchCommand · DA_PALLET_HISTORY", type: "WPF / C#" },
  { score: "0.76", view: "StockerMonitorView", evidence: "RefreshCommand · BR_STOCKER_QUERY", type: "WPF / XAML" },
];

const PALLET_ROWS = [
  { id: "PAL-SYN-0103", cim: "FULL", mes: "—", reason: "Missing in MES", reasonKo: "MES 현황 누락", type: "missing", history: "INV_STKIN" },
  { id: "PAL-SYN-0119", cim: "EMPTY", mes: "FULL", reason: "FULL/EMPTY mismatch", reasonKo: "공/실 상태 불일치", type: "state", history: "INV_STATE_CHG" },
  { id: "PAL-SYN-0126", cim: "FULL", mes: "EMPTY", reason: "FULL/EMPTY mismatch", reasonKo: "공/실 상태 불일치", type: "state", history: "INV_STKOUT" },
  { id: "PAL-SYN-0138", cim: "FULL", mes: "—", reason: "Operational exception", reasonKo: "운영 외 예외", type: "exception", history: "INV_HOLD" },
  { id: "PAL-SYN-0144", cim: "EMPTY", mes: "—", reason: "Missing in MES", reasonKo: "MES 현황 누락", type: "missing", history: "INV_STKIN" },
];

const DemoLab = () => {
  const { language } = useLanguage();
  const copy = COPY[language];
  const [activeDemo, setActiveDemo] = useState("audit");
  const [scanState, setScanState] = useState("ready");
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState(copy.searchPlaceholder);
  const [searched, setSearched] = useState(false);
  const scanTimer = useRef(null);

  useEffect(() => () => window.clearTimeout(scanTimer.current), []);
  useEffect(() => { setQuery(copy.searchPlaceholder); setSearched(false); }, [copy.searchPlaceholder]);

  const runAudit = () => {
    window.clearTimeout(scanTimer.current);
    setScanState("running");
    scanTimer.current = window.setTimeout(() => setScanState("complete"), 1400);
  };

  const filteredRows = useMemo(
    () => filter === "all" ? PALLET_ROWS : PALLET_ROWS.filter((row) => row.type === filter),
    [filter]
  );

  const auditPanel = (
    <div className="demo-console" role="tabpanel">
      <header className="demo-console__header">
        <div><span className="demo-kicker">MES SMART TOOL / DEPLOY AUDIT</span><h3>{copy.auditTitle}</h3><p>{copy.auditIntro}</p></div>
        <span className={`demo-state demo-state--${scanState}`}>{scanState === "ready" ? copy.ready : scanState === "running" ? copy.running : copy.complete}</span>
      </header>
      <div className="demo-controls">
        <label>{copy.process}<select defaultValue="process-a"><option value="process-a">PROCESS-A</option><option value="process-b">PROCESS-B</option></select></label>
        <label>{copy.scope}<select defaultValue="all"><option value="single">{copy.single}</option><option value="all">{copy.allSites}</option></select></label>
        <button type="button" className="demo-run" disabled={scanState === "running"} onClick={runAudit}>{scanState === "running" ? copy.running : copy.run}</button>
      </div>
      <div className={`diagnostic-grid ${scanState === "running" ? "is-scanning" : ""}`}>
        <div className="diagnostic-checks">
          <p className="demo-panel-label">{copy.steps}</p>
          {PIPELINE.map((item) => <div className="diagnostic-row" key={item.step}><span className={`pipeline-step status-dot--${scanState === "complete" ? item.status : "idle"}`}>{item.step}</span><div><strong>{language === "ko" ? item.ko : item.name}</strong><small>{language === "ko" ? item.detailKo : item.detail}</small></div>{scanState === "complete" && <b className={`status-text status-text--${item.status}`}>{item.status === "pass" ? copy.passed : copy.failed}</b>}</div>)}
        </div>
        <aside className="diagnostic-summary">
          <p className="demo-panel-label">{copy.summary}</p>
          <div className="summary-score"><strong>{scanState === "complete" ? "3" : "—"}</strong><span>{scanState === "complete" ? copy.critical : copy.ready}</span></div>
          <p>{scanState === "complete" ? copy.summaryText : "// awaiting 7-step audit"}</p>
        </aside>
      </div>
    </div>
  );

  const aiPanel = (
    <div className="demo-console" role="tabpanel">
      <header className="demo-console__header">
        <div><span className="demo-kicker">MES AI SERVER / SEMANTIC SEARCH</span><h3>{copy.aiTitle}</h3><p>{copy.aiIntro}</p></div>
        <span className="demo-state demo-state--complete">2,486 {copy.indexed}</span>
      </header>
      <form className="ai-search" onSubmit={(event) => { event.preventDefault(); setSearched(true); }}>
        <label>{copy.query}<input value={query} onChange={(event) => setQuery(event.target.value)} /></label>
        <button type="submit" className="demo-run">{copy.search}</button>
      </form>
      <div className="ai-results">
        <div className="ai-candidates"><p className="demo-panel-label">{copy.candidates}</p>{SEARCH_RESULTS.map((result, index) => <article className="ai-result" key={result.view}><span>{index + 1}</span><div><strong>{result.view}</strong><small>{result.evidence}</small></div><div><b>{result.score}</b><small>{result.type}</small></div></article>)}</div>
        <aside className="ai-answer"><p className="demo-panel-label">{copy.answer}</p><strong>{searched ? "PalletStatusView" : "—"}</strong><p>{searched ? copy.answerText : "// submit a natural-language query"}</p><div className="tag-list tag-list--dark"><span>Static Analysis</span><span>Embeddings</span><span>FastAPI</span><span>Internal LLM</span></div></aside>
      </div>
    </div>
  );

  const consistencyPanel = (
    <div className="demo-console" role="tabpanel">
      <header className="demo-console__header">
        <div><span className="demo-kicker">MIX / MES–CIM CONSISTENCY</span><h3>{copy.consistencyTitle}</h3><p>{copy.consistencyIntro}</p></div>
        <span className="demo-state demo-state--complete">5 {copy.result}</span>
      </header>
      <div className="consistency-metrics"><div><span>CIM TOTAL</span><strong>128,420</strong></div><div><span>MES TOTAL</span><strong>128,417</strong></div><div><span>MISSING</span><strong>3</strong></div><div><span>STATE DIFF</span><strong>2</strong></div></div>
      <div className="wip-filters" aria-label={copy.reason}>{[{ key: "all", label: copy.all }, { key: "missing", label: copy.missing }, { key: "state", label: copy.state }, { key: "exception", label: copy.exception }].map((item) => <button type="button" className={filter === item.key ? "is-active" : ""} aria-pressed={filter === item.key} onClick={() => setFilter(item.key)} key={item.key}>{item.label}</button>)}</div>
      <div className="wip-table-wrap"><table className="wip-table"><thead><tr><th>{copy.pallet}</th><th>{copy.cim}</th><th>{copy.mes}</th><th>{copy.reason}</th><th>{copy.history}</th></tr></thead><tbody>{filteredRows.map((row) => <tr key={row.id}><td><strong>{row.id}</strong></td><td>{row.cim}</td><td>{row.mes}</td><td><span className={`reason-pill reason-pill--${row.type}`}>{language === "ko" ? row.reasonKo : row.reason}</span></td><td>{row.history}</td></tr>)}</tbody></table>{!filteredRows.length && <p className="wip-empty">{copy.noRows}</p>}</div>
    </div>
  );

  return (
    <section id="demos" className="section demo-section">
      <div className="page-shell">
        <div className="section-heading section-heading--split demo-heading"><div><p className="eyebrow">{copy.eyebrow}</p><h2>{copy.title}</h2></div><div><p>{copy.intro}</p><span className="demo-safety">{copy.synthetic}</span></div></div>
        <div className="demo-shell">
          <div className="demo-tabs" role="tablist" aria-label={copy.eyebrow}>
            <button type="button" role="tab" aria-selected={activeDemo === "audit"} className={activeDemo === "audit" ? "is-active" : ""} onClick={() => setActiveDemo("audit")}>{copy.auditTab}</button>
            <button type="button" role="tab" aria-selected={activeDemo === "ai"} className={activeDemo === "ai" ? "is-active" : ""} onClick={() => setActiveDemo("ai")}>{copy.aiTab}</button>
            <button type="button" role="tab" aria-selected={activeDemo === "consistency"} className={activeDemo === "consistency" ? "is-active" : ""} onClick={() => setActiveDemo("consistency")}>{copy.consistencyTab}</button>
          </div>
          {activeDemo === "audit" ? auditPanel : activeDemo === "ai" ? aiPanel : consistencyPanel}
        </div>
      </div>
    </section>
  );
};

export default DemoLab;
