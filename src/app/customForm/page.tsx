"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import YouthNav from "../components/youthNav";
import YouthFooter from "../components/youthFooter";
import Marquee from "../components/Marquee";

interface FormField {
  id: string;
  name: string;
  placeholder?: string;
  type: string; // "text", "email", "number", "select", "radio", "checkbox"
  required: boolean;
  label?: string;
  choices?: string[]; // For checkbox, select, or radio
}

interface FormConfig {
  formName: string;
  googleFormUrl: string;
  fields: FormField[];
}

export default function CustomForm() {
  const searchParams = useSearchParams();
  const [formConfig, setFormConfig] = useState<FormConfig>({
    formName: "",
    googleFormUrl: "",
    fields: [],
  });
  const [showModal, setShowModal] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formsData: Record<string, FormConfig> = {
    alphakursYouth: {
      formName: "Alphakurs",
      googleFormUrl:
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdgkW_5l-fHV_GCFWP8vsqH4KOswwYM3TNyhaHPEz-H3SwVaQ/formResponse",
      fields: [
        {
          id: "entry.843655046",
          name: "ForOgEtternavn",
          placeholder: "For og Etternavn",
          type: "text",
          required: true,
        },
        {
          id: "entry.936861021_day",
          name: "AlderDag",
          placeholder: "dd",
          type: "number",
          required: true,
        },
        {
          id: "entry.936861021_month",
          name: "AlderMåned",
          placeholder: "mm",
          type: "number",
          required: true,
        },
        {
          id: "entry.936861021_year",
          name: "AlderÅr",
          placeholder: "yyyy",
          type: "number",
          required: true,
        },
        {
          id: "entry.1805418385",
          name: "Telefonnummer",
          placeholder: "Telefonnummer",
          type: "number",
          required: true,
        },
        {
          id: "entry.173827650",
          name: "FacebookNavn",
          placeholder: "Messenger navn (facebook)",
          type: "text",
          required: true,
        },
      ],
    },
    connectYouth: {
      formName: "Connect",
      googleFormUrl:
        "https://docs.google.com/forms/u/0/d/1ebx6zK0M6Y5UQUp8ohUSFCWm3q_1_vixJb-HV5sPoWw/previewResponse",
      fields: [
        {
          id: "entry.561468072",
          name: "Navn",
          placeholder: "Fornavn",
          type: "text",
          required: true,
        },
        {
          id: "entry.1897819939",
          name: "Etternavn",
          placeholder: "Etternavn",
          type: "text",
          required: true,
        },
        {
          id: "entry.1668122602",
          name: "Kjon",
          placeholder: "Kjønn",
          type: "radio",
          choices: ["Gutt", "Jente"],
          required: true,
        },
        {
          id: "entry.1853981766_day",
          name: "AlderDag",
          placeholder: "dd",
          type: "number",
          required: true,
        },
        {
          id: "entry.1853981766_month",
          name: "AlderMåned",
          placeholder: "mm",
          type: "number",
          required: true,
        },
        {
          id: "entry.1853981766_year",
          name: "AlderÅr",
          placeholder: "yyyy",
          type: "number",
          required: true,
        },
        {
          id: "entry.1905684964",
          name: "Telefonnummer",
          placeholder: "Telefonnummer",
          type: "number",
          required: true,
        },
        {
          id: "entry.1616801931",
          name: "FacebookNavn",
          placeholder: "Messenger navn (facebook)",
          type: "text",
          required: true,
        },
      ],
    },
    tjenestekurs: {
      formName: "Tjenestekurs",
      googleFormUrl:
        "https://docs.google.com/forms/u/4/d/e/1FAIpQLSerL_wsSXphDQfwW-WZY9al7T8Ply6C9yRb-DSES4a2Ds0dfA/formResponse",
      fields: [
        {
          id: "entry.125316426",
          name: "ForOgEtternavn",
          placeholder: "For og Etternavn",
          type: "text",
          required: true,
        },
        {
          id: "entry.1640140517",
          name: "tjenestekursFelleskap",
          placeholder: "Er du med i youth eller new creation?",
          type: "radio",
          required: true,
          choices: ["Shalom Youth", "Shalom New Creation"],
        },
        {
          id: "entry.1996450656_day",
          name: "AlderDag",
          placeholder: "dd",
          type: "number",
          required: true,
        },
        {
          id: "entry.1996450656_month",
          name: "AlderMåned",
          placeholder: "mm",
          type: "number",
          required: true,
        },
        {
          id: "entry.1996450656_year",
          name: "AlderÅr",
          placeholder: "yyyy",
          type: "number",
          required: true,
        },
        {
          id: "entry.1360016939",
          name: "Telefonnummer",
          placeholder: "Telefonnummer",
          type: "number",
          required: true,
        },
        {
          id: "entry.357967923",
          name: "tjenestekursKurs",
          placeholder: "Jeg tar eller har tatt dypere kurs",
          type: "checkbox",
          required: true,
          choices: ["Ja", "Nei"],
        },
      ],
    },
    daapYouth: {
      formName: "Dåp",
      googleFormUrl:
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdWBP7yJddqmqgW5XaienN-GCqKIykNCsh3NPig-9UnIFVbmw/formResponse",
      fields: [
        {
          id: "entry.511953395",
          name: "ForOgEtternavn",
          placeholder: "For og Etternavn",
          type: "text",
          required: true,
        },
        {
          id: "entry.1737548750",
          name: "tjenestekursFelleskap",
          placeholder: "Er du med i youth eller new creation?",
          type: "radio",
          required: true,
          choices: ["Shalom Youth", "Shalom New Creation"],
        },
        {
          id: "entry.2076577805_day",
          name: "AlderDag",
          placeholder: "dd",
          type: "number",
          required: true,
        },
        {
          id: "entry.2076577805_month",
          name: "AlderMåned",
          placeholder: "mm",
          type: "number",
          required: true,
        },
        {
          id: "entry.2076577805_year",
          name: "AlderÅr",
          placeholder: "yyyy",
          type: "number",
          required: true,
        },
        {
          id: "entry.1946407615",
          name: "Telefonnummer",
          placeholder: "Telefonnummer",
          type: "number",
          required: true,
        },
      ],
    },
    dyperekursYouth: {
      formName: "Dypere kurs",
      googleFormUrl:
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeF2yA2xP0Xib7wzFDvmZpgfE65vgy5k9QHff0xLTGgGhrmPw/formResponse",
      fields: [
        {
          id: "entry.1184988661",
          name: "ForOgEtternavn",
          placeholder: "For og Etternavn",
          type: "text",
          required: true,
        },
        {
          id: "entry.687725210_day",
          name: "AlderDag",
          placeholder: "dd",
          type: "number",
          required: true,
        },
        {
          id: "entry.687725210_month",
          name: "AlderMåned",
          placeholder: "mm",
          type: "number",
          required: true,
        },
        {
          id: "entry.687725210_year",
          name: "AlderÅr",
          placeholder: "yyyy",
          type: "number",
          required: true,
        },
        {
          id: "entry.1542697207",
          name: "Telefonnummer",
          placeholder: "Telefonnummer",
          type: "number",
          required: true,
        },
        {
          id: "entry.2107874668",
          name: "FacebookNavn",
          placeholder: "Messenger navn (facebook)",
          type: "text",
          required: true,
        },
      ],
    },
    bibelstudieYouth: {
      formName: "Bibelstudie",
      googleFormUrl:
        "https://docs.google.com/forms/u/3/d/e/1FAIpQLSdDbsu-p-7rR353roJfZuUF-l8oNqjkdHXiT8WY2y9E3kZ7Bw/formResponse",
      fields: [
        {
          id: "entry.1625600005",
          name: "ForOgEtternavn",
          placeholder: "For og Etternavn",
          type: "text",
          required: true,
        },
        {
          id: "entry.1437416307_day",
          name: "AlderDag",
          placeholder: "dd",
          type: "number",
          required: true,
        },
        {
          id: "entry.1437416307_month",
          name: "AlderMåned",
          placeholder: "mm",
          type: "number",
          required: true,
        },
        {
          id: "entry.1437416307_year",
          name: "AlderÅr",
          placeholder: "yyyy",
          type: "number",
          required: true,
        },
        {
          id: "entry.1428939695",
          name: "Telefonnummer",
          placeholder: "Telefonnummer",
          type: "number",
          required: true,
        },
      ],
    },
  };

  useEffect(() => {
    const formId = searchParams.get("formId");

    if (formId && formId in formsData) {
      setFormConfig(formsData[formId]);
    } else {
      console.error("Invalid formId or no formId provided");
    }
  }, [searchParams]);

  useEffect(() => {
    const form = document.querySelector("#customForm") as HTMLFormElement;

    const handleSubmit = (event: Event) => {
      event.preventDefault();

      const formData = new FormData();
      formConfig.fields.forEach((field) => {
        if (field.type === "checkbox") {
          const selectedCheckboxes = form.querySelectorAll(
            `input[name="${field.name}"]:checked`
          ) as NodeListOf<HTMLInputElement>;
          selectedCheckboxes.forEach((checkbox) => {
            formData.append(field.id, checkbox.value);
          });
        } else {
          const inputElement = form.elements.namedItem(
            field.name
          ) as HTMLInputElement;
          if (inputElement) {
            formData.append(field.id, inputElement.value);
          }
        }
      });

      fetch(formConfig.googleFormUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      })
        .then(() => {
          setIsSuccess(true);
          setShowModal(true);
        })
        .catch((error) => {
          setIsSuccess(false);
          setErrorMessage(error.message);
          setShowModal(true);
          console.error("Error submitting form:", error);
        });
    };

    if (form) {
      form.addEventListener("submit", handleSubmit);
    }

    // Cleanup function to remove the event listener
    return () => {
      if (form) {
        form.removeEventListener("submit", handleSubmit);
      }
    };
  }, [formConfig]); // Re-run only when formConfig changes

  return (
    <main className="w-full h-full">
      {showModal && (
        <div className="fixed right-5 bottom-5 bg-[#151515] w-full max-w-[500px] p-6 rounded-[8px] flex justify-between items-center z-50">
          <div>
            <h1
              className="primaryFontRegular text-slate-50"
              style={{ fontSize: "clamp(15px, 6.5vw, 25px)" }}
            >
              {isSuccess ? "Formen ble sendt" : "Formen ble ikke sendt"}
            </h1>
            <h3
              className="primaryFontRegular text-[#bcbbbb]"
              style={{ fontSize: "clamp(10px, 5vw, 15px)" }}
            >
              {isSuccess
                ? "Vi tar kontakt med deg fortløpende"
                : `Feilmelding: ${errorMessage}`}
            </h3>
          </div>
          <button
            onClick={() => setShowModal(false)}
            className="bg-[#ffffff] text-[#111111] px-3 py-2 rounded-full flex items-start gap-1 hover:-translate-y-1 duration-150 ease-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            lukk
          </button>
        </div>
      )}
      <Marquee />
      <YouthNav />
      <div className="px-[35px]">
        <a href="/youthForms">
          <button
            className="primaryFontHeadings flex items-center gap-2 text-slate-50  hover:bg-[#151515] p-3 rounded-[8px]"
            style={{ fontSize: "clamp(15px, 5vw, 25px)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            <p>Tilbake</p>
          </button>
        </a>
      </div>
      <nav className="p-[35px]">
        <div className="flex flex-col gap-5">
          <h1
            className="primaryFontBold text-slate-50 leading-none"
            style={{ fontSize: "clamp(50px, 6.5vw, 150px)" }}
          >
            {formConfig.formName ? formConfig.formName : "Velg en påmelding"}
          </h1>
        </div>
      </nav>
      <div className="p-[35px]">
        <form
          className="flex flex-col gap-5 w-full max-w-[500px]"
          id="customForm"
        >
          {formConfig.fields.map((field, index) => (
            <div key={index}>
              {field.type === "text" ||
              field.type === "email" ||
              field.type === "number" ? (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="p-2 rounded-[8px] border-[1px] bg-transparent text-slate-50 border-opacity-10 border-slate-50 w-full placeholder:text-slate-50 outline-[#000000]"
                  required={field.required}
                />
              ) : field.type === "select" ? (
                <div>
                  <label htmlFor={field.name} className="text-slate-50">
                    {field.label}
                  </label>
                  <select
                    id={field.name}
                    name={field.name}
                    className="p-2 rounded-[8px] border-[1px] bg-transparent text-slate-50 border-slate-50 w-full placeholder:text-slate-50 outline-[#ffffff]"
                    required={field.required}
                  >
                    {field.choices?.map((choice, i) => (
                      <option key={i} value={choice}>
                        {choice}
                      </option>
                    ))}
                  </select>
                </div>
              ) : field.type === "radio" ? (
                <div>
                  <p className="primaryFontBold text-[20px] text-slate-50 my-3">
                    {field.placeholder}
                  </p>
                  <label htmlFor={field.name} className="text-slate-50">
                    {field.label}
                  </label>
                  {field.choices?.map((choice, i) => (
                    <div className="flex items-center gap-3" key={i}>
                      <input
                        type="radio"
                        id={`${field.name}-${i}`}
                        name={field.name}
                        value={choice}
                        required={field.required}
                        className="radio radio-secondary my-2 text-center border-[1px] border-slate-50"
                      />
                      <label
                        htmlFor={`${field.name}-${i}`}
                        className="text-slate-50"
                      >
                        {choice}
                      </label>
                    </div>
                  ))}
                </div>
              ) : field.type === "checkbox" ? (
                <div>
                  <p className="primaryFontBold text-[20px] text-slate-50 my-3">
                    {field.placeholder}
                  </p>

                  <label htmlFor={field.name} className="text-slate-50">
                    {field.label}
                  </label>
                  {field.choices?.map((choice, i) => (
                    <div className="flex items-center gap-3" key={i}>
                      <input
                        type="checkbox"
                        id={`${field.name}-${i}`}
                        name={field.name}
                        value={choice}
                        className="checkbox checkbox-secondary my-2 border-[1px] border-slate-50 flex items-center justify-center"
                      />
                      <label
                        htmlFor={`${field.name}-${i}`}
                        className="primaryFontRegular text-slate-50"
                      >
                        {choice}
                      </label>
                    </div>
                  ))}
                </div>
              ) : null}
              <br />
            </div>
          ))}
          <div className="my-3">
            <button
              className="btn btn-md w-full max-w-[250px] bg-[#1b1b1b] text-slate-50 border-none hover:bg-[#252525] rounded-[8px]"
              type="submit"
            >
              Send inn
            </button>
          </div>
        </form>
      </div>
      <YouthFooter />
    </main>
  );
}
