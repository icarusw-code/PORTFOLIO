import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const COPY = {
  en: {
    eyebrow: "INTERACTIVE DEMOS",
    title: "See the workflow, not the proprietary system.",
    intro: "Portfolio reconstructions using synthetic data. They demonstrate the problem-solving flow without exposing company source code, infrastructure, or production records.",
    synthetic: "SYNTHETIC DATA · PORTFOLIO DEMONSTRATION",
    diagnosticTab: "Deployment diagnostic",
    wipTab: "WIP reconciliation",
    diagnosticTitle: "Deployment Integrity Console",
    diagnosticIntro: "Compare a release definition, deployed configuration, and runtime registration in one diagnostic pass.",
    environment: "Environment",
    release: "Release",
    run: "Run diagnostic",
    running: "Inspecting services…",
    ready: "Ready for validation",
    complete: "Diagnostic complete",
    checks: "Validation checks",
    summary: "Analysis summary",
    summaryText: "One configuration drift and one missing runtime registration require review. The application package and API contract match the release definition.",
    passed: "passed",
    review: "review",
    failed: "failed",
    wipTitle: "CIM–MES Stocker WIP Diff Check",
    wipIntro: "Reconcile synthetic WIP records and classify each mismatch into an actionable reason.",
    all: "All records",
    missing: "Missing record",
    state: "State mismatch",
    lag: "Update lag",
    lot: "Material ID",
    cim: "CIM state",
    mes: "MES state",
    reason: "Reason",
    age: "Age",
    result: "records require review",
    noRows: "No discrepancies match this filter.",
  },
  ko: {
    eyebrow: "인터랙티브 데모",
    title: "기밀 시스템이 아닌 문제 해결 흐름을 보여줍니다.",
    intro: "합성 데이터로 새로 만든 포트폴리오용 재현입니다. 회사 소스 코드, 인프라, 생산 데이터를 노출하지 않고 실제 업무의 판단 흐름을 보여줍니다.",
    synthetic: "합성 데이터 · 포트폴리오 데모",
    diagnosticTab: "배포 진단",
    wipTab: "재공 대조",
    diagnosticTitle: "배포 무결성 진단 콘솔",
    diagnosticIntro: "릴리스 정의, 배포 설정, 런타임 등록 상태를 한 번에 비교합니다.",
    environment: "대상 환경",
    release: "릴리스",
    run: "진단 실행",
    running: "서비스 점검 중…",
    ready: "검증 준비 완료",
    complete: "진단 완료",
    checks: "검증 항목",
    summary: "분석 요약",
    summaryText: "설정 편차 1건과 런타임 미등록 1건을 검토해야 합니다. 애플리케이션 패키지와 API 계약은 릴리스 정의와 일치합니다.",
    passed: "정상",
    review: "검토",
    failed: "오류",
    wipTitle: "CIM–MES Stocker 재공 Diff Check",
    wipIntro: "합성 재공 데이터를 대조하고 불일치를 조치 가능한 사유로 분류합니다.",
    all: "전체",
    missing: "레코드 누락",
    state: "상태 불일치",
    lag: "갱신 지연",
    lot: "자재 ID",
    cim: "CIM 상태",
    mes: "MES 상태",
    reason: "판정 사유",
    age: "경과",
    result: "건의 검토 대상",
    noRows: "이 조건에 해당하는 불일치가 없습니다.",
  },
};

const CHECKS = [
  { name: "Application package", ko: "애플리케이션 패키지", detail: "release-2026.07.4", status: "pass" },
  { name: "Service configuration", ko: "서비스 설정", detail: "timeout: 30s → 45s", status: "review" },
  { name: "API contract", ko: "API 계약", detail: "schema v3.8", status: "pass" },
  { name: "Runtime registration", ko: "런타임 등록", detail: "worker-03 not found", status: "fail" },
  { name: "Dependency versions", ko: "의존성 버전", detail: "12 / 12 aligned", status: "pass" },
];

const WIP_ROWS = [
  { id: "MAT-24071", cim: "STORED", mes: "STORED", reason: "Update lag", reasonKo: "갱신 지연", type: "lag", age: "02m 14s" },
  { id: "MAT-24088", cim: "IN_TRANSIT", mes: "STORED", reason: "State mismatch", reasonKo: "상태 불일치", type: "state", age: "08m 42s" },
  { id: "MAT-24103", cim: "STORED", mes: "—", reason: "Missing in MES", reasonKo: "MES 레코드 누락", type: "missing", age: "14m 07s" },
  { id: "MAT-24119", cim: "—", mes: "RESERVED", reason: "Missing in CIM", reasonKo: "CIM 레코드 누락", type: "missing", age: "21m 31s" },
  { id: "MAT-24126", cim: "HOLD", mes: "STORED", reason: "State mismatch", reasonKo: "상태 불일치", type: "state", age: "31m 05s" },
];

const DemoLab = () => {
  const { language } = useLanguage();
  const copy = COPY[language];
  const [activeDemo, setActiveDemo] = useState("diagnostic");
  const [scanState, setScanState] = useState("ready");
  const [filter, setFilter] = useState("all");
  const scanTimer = useRef(null);

  useEffect(() => () => window.clearTimeout(scanTimer.current), []);

  const runDiagnostic = () => {
    window.clearTimeout(scanTimer.current);
    setScanState("running");
    scanTimer.current = window.setTimeout(() => setScanState("complete"), 1100);
  };

  const filteredRows = useMemo(
    () => filter === "all" ? WIP_ROWS : WIP_ROWS.filter((row) => row.type === filter),
    [filter]
  );

  const statusLabel = (status) => ({ pass: copy.passed, review: copy.review, fail: copy.failed }[status]);

  return (
    <section id="demos" className="section demo-section">
      <div className="page-shell">
        <div className="section-heading section-heading--split demo-heading">
          <div>
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2>{copy.title}</h2>
          </div>
          <div>
            <p>{copy.intro}</p>
            <span className="demo-safety">{copy.synthetic}</span>
          </div>
        </div>

        <div className="demo-shell">
          <div className="demo-tabs" role="tablist" aria-label={copy.eyebrow}>
            <button type="button" role="tab" aria-selected={activeDemo === "diagnostic"} className={activeDemo === "diagnostic" ? "is-active" : ""} onClick={() => setActiveDemo("diagnostic")}>{copy.diagnosticTab}</button>
            <button type="button" role="tab" aria-selected={activeDemo === "wip"} className={activeDemo === "wip" ? "is-active" : ""} onClick={() => setActiveDemo("wip")}>{copy.wipTab}</button>
          </div>

          {activeDemo === "diagnostic" ? (
            <div className="demo-console" role="tabpanel">
              <header className="demo-console__header">
                <div><span className="demo-kicker">MES DIAGNOSTIC / 01</span><h3>{copy.diagnosticTitle}</h3><p>{copy.diagnosticIntro}</p></div>
                <span className={`demo-state demo-state--${scanState}`}>{scanState === "ready" ? copy.ready : scanState === "running" ? copy.running : copy.complete}</span>
              </header>
              <div className="demo-controls">
                <label>{copy.environment}<select defaultValue="staging"><option value="staging">STAGING-02</option><option value="pilot">PILOT-01</option></select></label>
                <label>{copy.release}<select defaultValue="2026.07.4"><option>2026.07.4</option><option>2026.07.3</option></select></label>
                <button type="button" className="demo-run" disabled={scanState === "running"} onClick={runDiagnostic}>{scanState === "running" ? copy.running : copy.run}</button>
              </div>
              <div className={`diagnostic-grid ${scanState === "running" ? "is-scanning" : ""}`}>
                <div className="diagnostic-checks">
                  <p className="demo-panel-label">{copy.checks}</p>
                  {CHECKS.map((check) => <div className="diagnostic-row" key={check.name}><span className={`status-dot status-dot--${scanState === "complete" ? check.status : "idle"}`} /><div><strong>{language === "ko" ? check.ko : check.name}</strong><small>{check.detail}</small></div>{scanState === "complete" && <b className={`status-text status-text--${check.status}`}>{statusLabel(check.status)}</b>}</div>)}
                </div>
                <aside className="diagnostic-summary">
                  <p className="demo-panel-label">{copy.summary}</p>
                  <div className="summary-score"><strong>{scanState === "complete" ? "3/5" : "—"}</strong><span>{scanState === "complete" ? copy.passed : copy.ready}</span></div>
                  <p>{scanState === "complete" ? copy.summaryText : "// awaiting diagnostic run"}</p>
                </aside>
              </div>
            </div>
          ) : (
            <div className="demo-console" role="tabpanel">
              <header className="demo-console__header">
                <div><span className="demo-kicker">WIP RECONCILIATION / 02</span><h3>{copy.wipTitle}</h3><p>{copy.wipIntro}</p></div>
                <span className="demo-state demo-state--complete">5 {copy.result}</span>
              </header>
              <div className="wip-filters" aria-label={copy.reason}>
                {[{ key: "all", label: copy.all }, { key: "missing", label: copy.missing }, { key: "state", label: copy.state }, { key: "lag", label: copy.lag }].map((item) => <button type="button" className={filter === item.key ? "is-active" : ""} aria-pressed={filter === item.key} onClick={() => setFilter(item.key)} key={item.key}>{item.label}</button>)}
              </div>
              <div className="wip-table-wrap">
                <table className="wip-table"><thead><tr><th>{copy.lot}</th><th>{copy.cim}</th><th>{copy.mes}</th><th>{copy.reason}</th><th>{copy.age}</th></tr></thead><tbody>{filteredRows.map((row) => <tr key={row.id}><td><strong>{row.id}</strong></td><td>{row.cim}</td><td>{row.mes}</td><td><span className={`reason-pill reason-pill--${row.type}`}>{language === "ko" ? row.reasonKo : row.reason}</span></td><td>{row.age}</td></tr>)}</tbody></table>
                {!filteredRows.length && <p className="wip-empty">{copy.noRows}</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DemoLab;
