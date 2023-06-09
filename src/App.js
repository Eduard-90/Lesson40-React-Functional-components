import React, { useState } from "react";
import Article from "./components/Article";

function App() {
  const en = {
    firstTitle: "NVIDIA NEWS",
    secondTitle: "NVIDIA Accelerated AI on Azure",
    description: "Article description:",
    preview:
      "NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.",
    content:
      "Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.",
    author: "Author: Mike",
    published: "Published: 06.12.2022",
    theme: "Theme: Video cards",
    btnMarkAsRead: "Mark as read",
    btnRead: "Read",
    btnClose: "Close",
    btnMarkAsUnread: "Mark as unread",
  };

  const ua = {
    firstTitle: "НОВИНИ NVIDIA",
    secondTitle: "Прискорений штучний інтелект NVIDIA в Azure",
    description: "Опис статті:",
    preview:
      "NVIDIA на Azure надає підприємствам штучний інтелект, мережі та високопродуктивні обчислення.",
    content:
      "Microsoft Azure та NVIDIA дозволяють підприємствам у хмарі використовувати об'єднану міць прискорених обчислень NVIDIA та мереж NVIDIA на запит для задоволення різноманітних обчислювальних вимог ІІ, машинного навчання, аналізу даних, графіки, віртуальних робочих столів та високопродуктивних обчислень додатків HPC. Від дрібних графічних процесорів і одиночних графічних процесорів до кількох графічних процесорів на кількох вузлах для розподілених обчислень - отримайте доступ до прискорення графічного процесора потрібного розміру для робочих навантажень.",
    author: "Автор: Майк",
    published: "Опубліковано: 06.12.2022",
    theme: "Тема: відео карти",
    btnMarkAsRead: "Прочитано",
    btnRead: "Читати",
    btnClose: "Закрити",
    btnMarkAsUnread: "Не прочитано",
  };

  const article = {
    description: "Article description:",
    preview:
      "NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.",
    content:
      "Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.",
  };
  const [isShow, setIsShow] = useState(false);
  const [isRead, setIsRead] = useState(false);
  const [itWasRead, setItWasRead] = useState(false);
  const [lang, setLang] = useState(en);

  const toggleArticle = () => {
    setIsShow(!isShow);
    setIsRead(isShow && itWasRead);
  };

  const markAsRead = () => {
    if (!isRead && !isShow) {
      setIsRead(true);
      setItWasRead(true);
    }
  };

  const markAsUnread = () => {
    setIsRead(false);
    setItWasRead(false);
  };

  const langChange = (newLang) => {
    setLang(newLang);
    if (newLang === "en") {
      setLang(en);
    } else {
      setLang(ua);
    }
  };

  return (
    <div className="wrapper">
      <h1 className="title">{lang.firstTitle}</h1>
      <div className="article">
        <Article show={isShow} text={lang} isRead={isRead}>
          <div className="article__title">
            <h2>{lang.secondTitle}</h2>
          </div>
        </Article>
        <div className="article__actions">
          <button onClick={markAsRead} className="article__btn">
            {lang.btnMarkAsRead}
          </button>
          <button onClick={toggleArticle} className="article__btn">
            {isShow ? lang.btnClose : lang.btnRead}
          </button>
          <button onClick={markAsUnread} className="article__btn">
            {lang.btnMarkAsUnread}
          </button>
        </div>
      </div>
      <div className="lang">
        <button onClick={() => langChange("ua")} className="lang-btn">
          UA
        </button>
        <button onClick={() => langChange("en")} className="lang-btn">
          EN
        </button>
      </div>
    </div>
  );
}

export default App;
