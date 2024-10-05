import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import React, { useEffect, useRef } from "react";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};
type QualificationItem = {
  title: string;
  Image: string;
  description: JSX.Element;
};

// 所持資格リスト
const QualificationList: QualificationItem[] = [
  {
    title: "Associate Cloud Engineer",
    Image: require("@site/static/img/CloudAssociate.png").default,
    description: <>社会人になってから取得しました。</>,
  },
  {
    title: "AWS Certified Solutions Architect - Professional",
    Image: require("@site/static/img/SAP.png").default,
    description: <>社会人になってから取得しました。</>,
  },
  {
    title: "AWS Certified Solutions Architect - Associate",
    Image: require("@site/static/img/SAA.png").default,
    description: <>社会人になってから取得しました。</>,
  },
  {
    title: "統計検定2級",
    Image: require("@site/static/img/統計検定2.png").default,
    description: <>社会人になってから取得しました。</>,
  },
  {
    title: "応用情報技術者",
    Image: require("@site/static/img/IPA.png").default,
    description: <>学部生時代に取得しました。</>,
  },
  {
    title: "基本情報技術者",
    Image: require("@site/static/img/IPA.png").default,
    description: <>学部生時代に取得しました。</>,
  },
];

const FeatureList: FeatureItem[] = [
  {
    title: "フロントエンド",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        <li>React: 半年</li>
        <li>TypeScript: 半年</li>
        <li>Next.JS: 半年</li>
        <li>javascript: 半年</li>
      </>
    ),
  },
  {
    title: "バックエンド",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        <li>Python: 3年</li>
        <li>Java: 半年</li>
      </>
    ),
  },
  {
    title: "インフラ",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        <li>Google Cloud: 1年</li>
        <li>AWS: 1年</li>
      </>
    ),
  },
  {
    title: "その他",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        <li>Slack</li>
        <li>Github</li>
        <li>アジャイル開発経験</li>
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Qualification({ title, Image, description }: QualificationItem) {
  return (
    <div className={clsx("col col--12")}>
      <div className="row">
        <div className="text--center">
          <img
            src={Image}
            alt={title}
            role="img"
            className={styles.featureImage}
          />
        </div>
        <div className="inner">
          <b>{title}</b>:{description}
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  const animBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-animated");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (animBoxRef.current) {
      observer.observe(animBoxRef.current);
    }

    return () => {
      if (animBoxRef.current) {
        observer.unobserve(animBoxRef.current);
      }
    };
  }, []);
  return (
    <section className={styles.features}>
      <div className="container">
        <div>
          <br />
          <Heading as="h2">自己紹介</Heading>
        </div>
        <div className="col">
          <p>
            大学ではAIを用いた動画処理の研究を行っていました。現在は、グループ会社全体で使用されるデータ分析アプリのインフラチームで働いています。Google
            Cloudが好きです。趣味はプログラミング、読書、アニメです。プログラミングは主にPythonを使用します。読書はビジネス書や技術書、SFを読むことが多いです。今後は、AI技術を活用したWebアプリケーションの開発に取り組みたいと考えています。
          </p>
        </div>
        <br />
        <Heading as="h2">スキル</Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="col">
          <div>
            <br />
            <Heading as="h2">所持資格</Heading>
          </div>

          <div ref={animBoxRef} className="anim-box slidein">
            {QualificationList.map((props, idx) => (
              <Qualification key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
