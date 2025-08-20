import programs93 from "../assets/images/programs93.png";
import diarGroup from "../assets/images/diar-group.png";
import softMediaHolding from "../assets/images/soft-media-holding.png";
import codeCompany from "../assets/images/code-company.png";
import stroyGarant from "../assets/images/stroy-garant.png";
import elitWeb from "../assets/images/elit-web.png";
import responsePRO from "../assets/images/response-PRO.png";
import responseDiarGroup from "../assets/images/response-diar-group.png";
import responseSoftMedia from "../assets/images/response-soft-media.png";
import responseCodeCompany from "../assets/images/response-code-company.png";
import responseStroyGarant from "../assets/images/response-stroy-garant.png";
import responseElitWeb from "../assets/images/response-elit-web.png";

export const BREAKPOINTS = {
  smallMobile: 0,
  mobile: 360,
  bigMobile: 640,
  tablet: 992,
  desktop: 1120,
};

export const reviewsData = [
  { title: "ООО “ПРОГРАММЫ 93”", img: programs93, response: responsePRO },
  { title: "ООО “ДИАР ГРУПП”", img: diarGroup, response: responseDiarGroup },

  {
    title: "ООО “СОФТМЕДИАХОЛДИНГ”",
    img: softMediaHolding,
    response: responseSoftMedia,
  },
  {
    title: "КОМПАНИЯ “КОД ПАРТНЕРА”",
    img: codeCompany,
    response: responseCodeCompany,
  },
  {
    title: "ООО “СТРОЙГАРАНТ”",
    img: stroyGarant,
    response: responseStroyGarant,
  },
  { title: "ООО “ЭЛИТ-ВЕБ”", img: elitWeb, response: responseElitWeb },
];
