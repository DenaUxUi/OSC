/* eslint-disable no-bitwise */
import { useEffect } from "react";

const URL = "https://cdn-ru.bitrix24.ru/b16211386/crm/form/loader_44.js";

const FooterForm = () => {
  useEffect(() => {
    const scriptWrapper = document.createElement("script");
    scriptWrapper.setAttribute("data-b24-form", "inline/44/1ozu9i");
    scriptWrapper.setAttribute("data-skip-moving", "true");

    const html = `const s = document.createElement("script");
    s.async = true;
    s.src="${URL}?${(Date.now() / 180000) | 0}"

    const h = document.getElementsByTagName("script")[0];
    h.parentNode.insertBefore(s,h);`;

    scriptWrapper.innerHTML = html;

    document.body.appendChild(scriptWrapper);

    return () => {
      document.body.removeChild(scriptWrapper);
    };
  }, []);
  return null;
};

export default FooterForm;
