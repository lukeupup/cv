"use client";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import fullData from "@/data/full";
import React, { useState } from "react";
import {
  GeneralData,
  Locale,
  SimpleArticle,
  TimelineData,
} from "@/types/common";
import avatar from "@/data/avatar.jpg";
import * as svg from "@/img/svg";

const Markdown: React.FC<{ children: string }> = ({ children }) => {
  const classNames = [
    "prose",
    "prose-sm",
    "dark:prose-invert",
    "prose-p:my-4",
    "prose-ul:my-2",
    "prose-li:m-0",
    "prose-code:before:content-['']",
    "prose-code:after:content-['']",
  ];
  return (
    <ReactMarkdown className={classNames.join(" ")}>{children}</ReactMarkdown>
  );
};

const TimelineSection: React.FC<{ data: TimelineData }> = ({ data }) => {
  const { title, data: items } = data;
  return (
    <section className="my-14 text-sm">
      <h3 className="mb-6">{title}</h3>
      <div className="flex flex-col gap-6">
        {items.map((item) => {
          return (
            <div className="flex" key={item.date}>
              <div className="mr-8 max-w-[100px] w-full text-slate-400 dark:text-slate-400 hidden sm:block">
                {item.date}
              </div>
              <div className="flex flex-col flex-1">
                <h2>{item.title}</h2>
                <div className="text-slate-400 dark:text-slate-400 sm:hidden my-2">
                  {item.date}
                </div>
                <p className="text-slate-600 dark:text-gray-400 ">
                  {item.subTitle}
                </p>
                {item.description ? (
                  <div className="text-slate-600 dark:text-gray-400 mt-2">
                    <Markdown>{item.description}</Markdown>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const LocaleToggler: React.FC<{
  locale: Locale;
  onChange: (locale: Locale) => void;
}> = ({ locale, onChange }) => {
  return (
    <section className="text-center mb-8 print:hidden">
      <span className="text-sm">
        <button
          className={
            locale === "zh" ? "text-slate-50 bg-stone-800" : "text-stone-800"
          }
          onClick={() => onChange("zh")}
        >
          中文
        </button>
        <span className="px-2">|</span>
        <button
          className={
            locale === "en" ? "text-slate-50 bg-stone-800" : "text-stone-800"
          }
          onClick={() => onChange("en")}
        >
          English
        </button>
      </span>
    </section>
  );
};

const GeneralDataSection: React.FC<{ data: GeneralData }> = ({ data }) => {
  return (
    <section className="flex items-center">
      <Image
        alt="Author"
        src={avatar}
        width={160}
        height={160}
        className="rounded-full object-cover max-w-[96px] max-h-[96px] sm:max-w-none sm:max-h-none"
      />
      <div className="ml-8">
        <h1 className="mb-0.5 text-xl text-slate-900 dark:text-slate-100">
          {data.title}
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm">
          {data.subTitle}
        </p>
        <ul className="mt-4 text-sm">
          {data.generalDataItems?.map(({ icon, content }) => (
            <li key={content}>
              {icon && svg[icon as keyof typeof svg]
                ? svg[icon as keyof typeof svg]({
                    className: "inline-block mr-2",
                  })
                : null}
              {content}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const SimpleArticleSection: React.FC<{ data: SimpleArticle }> = ({ data }) => {
  return (
    <section className="my-9 text-sm">
      <h3 className="mb-1 text-slate-900 dark:text-slate-100">{data.title}</h3>
      <div className="text-slate-600 dark:text-slate-300">
        <Markdown>{data.description}</Markdown>
      </div>
    </section>
  );
};

export default function Home() {
  const [locale, setLocale] = useState<Locale>("zh");
  return (
    <>
      <main className="max-w-3xl mx-auto px-6 py-20 relative min-h-screen font-light print:max-w-none">
        <p className="text-sm text-slate-400 text-center mb-8 hidden print:block">
          {locale === "zh" ? "在线查看：" : "View online: "}
          <a href="https://about-luke-lu.vercel.app" className="underline" target="_blank">
            https://about-luke-lu.vercel.app
          </a>
        </p>
        <LocaleToggler
          locale={locale}
          onChange={(locale) => setLocale(locale)}
        />
        <GeneralDataSection data={fullData[locale].generalData} />
        <SimpleArticleSection data={fullData[locale].aboutMe} />
        <TimelineSection data={fullData[locale].workExperience} />
      </main>
    </>
  );
}
