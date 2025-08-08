import styles from "./AboutMe.module.css";
import NameSVG from "../../../assets/user.svg?react";
import CalendarSVG from "../../../assets/calendar.svg?react";
import PhoneSVG from "../../../assets/phone.svg?react";
import EmailSVG from "../../../assets/email.svg?react";
import PencilSVG from "../../../assets/pencil.svg?react";
import PlacePointSVG from "../../../assets/place_point.svg?react";
import Title from "../../common/Title";

function DataListItem({ svg: SVGComponent, dt: title, dd: description }) {
  return (
    <div>
      <div>
        <SVGComponent />
      </div>
      <div>
        <dt>{title}</dt>
        <dd>{description}</dd>
      </div>
    </div>
  );
}
export default function AboutMe() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Title title="ABOUT ME" />
        <dl className={styles.datalist}>
          <DataListItem svg={NameSVG} dt={"이름"} dd={"김동현"} />
          <DataListItem svg={CalendarSVG} dt={"생년월일"} dd={"93.06.17"} />
          <DataListItem
            svg={PlacePointSVG}
            dt={"위치"}
            dd={"서울특별시 강남구"}
          />
          <DataListItem svg={PhoneSVG} dt={"연락처"} dd={"010-5431-8054"} />
          <DataListItem svg={EmailSVG} dt={"이메일"} dd={"gus8054@kakao.com"} />
          <DataListItem
            svg={PencilSVG}
            dt={"학력"}
            dd={
              <>
                동의대학교
                <br />
                (소프트웨어 공학부)
                <br />
                (수석 졸업)
              </>
            }
          />
        </dl>
      </div>
    </section>
  );
}
