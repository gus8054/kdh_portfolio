import Title from "../../common/Title";
import styles from "./Career.module.css";
import bitsysPNG from "../../../assets/image/bitsys_logo.jpg";
import TimartSVG from "../../../assets/timart_logo.svg?react";

export default function Career() {
  return (
    <section className={styles.section}>
      <Title title="CAREER" />
      <article className={styles.career_item}>
        <div>
          <TimartSVG className={styles.timart} />
        </div>
        <h3>주식회사 티마트</h3>
        <p>2023.09 - 2024.10</p>
        <blockquote>
          모두의 시간을 가치있게, 세상에 없던 시간 거래 플랫폼
        </blockquote>
        <ul>
          <li>관리자페이지(Next.js)</li>
          <li>홈페이지(VanillaJS)</li>
          <li>AWS 환경 구축</li>
          <li>MySQL</li>
        </ul>
        <ul>
          <li>
            <h5>관리자 페이지 개발 (Next.js)</h5>
            <p>
              ADMIN 서버는 Scale Up이 필요가 없기 때문에 효율성 및 비용성을
              고려하여 하나의 서버로 배포하기 위해 Next.js로 개발 및 배포.
            </p>
          </li>
          <hr />
          <li>
            <h5>회사 홈페이지 개발 (VanillaJS)</h5>
            <p>회사 홈페이지를 바닐라 자바스크립트로 개발하여 AWS S3에 배포.</p>
          </li>
          <hr />
          <li>
            <h5>DB 정규화 및 마이그레이션</h5>
            <p>
              POC과정에서 설계된 데이터 테이블이 실제 서비스 중 매우
              비효율적으로 동작하는 것을 확인. 테이블을 정규화하여 마이그레이션.
            </p>
          </li>
          <hr />
          <li>
            <h5>AWS 배포 환경 변경</h5>
            <p>
              기존의 Route 53-S3, Route 53-EC2 로만 구축되어진 AWS 환경을 완전히
              새로 구축. Route 53, Cloud Front를 사용해 prod, dev, test VPC 망
              분리. prod 서버 가용영역 추가. 트래픽에 따른 로드벨런싱 및 API
              서버 Auto Scaling. 관리자 서버는 회사 IP로만 접근하도록 방화벽
              구성. 개발자 PC는 회사 밖에서도 접속가능하도록 OpenVPC 구성.
              비개발자 직원들도 회사밖에서 예외적으로 접속할 수 있도록 bastion
              host 운영.
            </p>
          </li>
          <hr />
          <li>
            <h5>상위기관 대응(개인 정보 데이터)</h5>
            <p>
              서비스 특성상 개인정보(민감정보 + 위치정보)를 수집하여야 하는데 이
              경우 상위기관에 정기보고를 해야함. 관리자 페이지 개발을
              담당하였기에 대응 또한 담당.
            </p>
          </li>
        </ul>
      </article>
      <article className={styles.career_item}>
        <div>
          {/* <TimartSVG className={styles.timart} /> */}
          <img src={bitsysPNG} alt="비트시스 로고" />
        </div>
        <h3>주식회사 비트시스</h3>
        <p>2020.12 - 2021.05</p>
        <blockquote>
          주식회사 비트시스는 4차산업혁명의 핵심 키워드인 클라우드, AI,
          빅데이터, IOT, 블록체인 분야의 소프트웨어 개발과 교육 & 컨퍼런스 전문
          기업입니다.
        </blockquote>
        <ul>
          <li>웹 크롤링</li>
          <li>강사(Python)</li>
        </ul>
        <ul>
          <li>
            <h5>일반인 및 학생들 대상으로 코딩 강사</h5>
            <p>회사가 속한 협회에서 주관하는 코딩 교육 강사.</p>
          </li>
          <hr />
          <li>
            <h5>정부 지원 사업 리스트 크롤링</h5>
            <p>
              회사가 해당되는 정부 지원 사업을 매일 아침 자동으로 크롤링하는
              프로그램 개발.
            </p>
          </li>
        </ul>
      </article>
    </section>
  );
}
