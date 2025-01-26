"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import NcNav from "../components/ncNav";
import NcFooter from "../components/NcFooter";
import Marquee from "../components/Marquee"


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

  const formsData: Record<string, FormConfig> = {
    alphakursNewCreation: {
      formName: "Alphakurs",
      googleFormUrl:
        "https://docs.google.com/forms/u/3/d/e/1FAIpQLScvAmJojBSMWv4z8lCZqs1CCdA0Wdi7ZlJNiqYKYWZoL9E1dg/formResponse",
      fields: [
        {
          id: "entry.1637903101",
          name: "ForOgEtternavn",
          placeholder: "For og Etternavn",
          type: "text",
          required: true,
        },
        {
          id: "entry.248232416_day",
          name: "AlderDag",
          placeholder: "dd",
          type: "number",
          required: true,
        },
        {
          id: "entry.248232416_month",
          name: "AlderMåned",
          placeholder: "mm",
          type: "number",
          required: true,
        },
        {
          id: "entry.248232416_year",
          name: "AlderÅr",
          placeholder: "yyyy",
          type: "number",
          required: true,
        },
        {
          id: "entry.1657247063",
          name: "Telefonnummer",
          placeholder: "Telefonnummer",
          type: "number",
          required: true,
        },
        {
          id: "entry.24995886",
          name: "FacebookNavn",
          placeholder: "Messenger navn (facebook)",
          type: "text",
          required: true,
        },
      ],
    },
    connectNewCreation: {
      formName: "Connect",
      googleFormUrl:
        "https://docs.google.com/forms/u/3/d/e/1FAIpQLSfZN8NrgmXcL07JAg_Ie5k-sWxVrJkmTRdep2ZVcDD3vf6TRQ/formResponse",
      fields: [
        {
          id: "entry.1120222945",
          name: "Navn",
          placeholder: "Navn",
          type: "text",
          required: true,
        },
        {
          id: "entry.1433477318_day",
          name: "AlderDag",
          placeholder: "dd",
          type: "number",
          required: true,
        },
        {
          id: "entry.1433477318_month",
          name: "AlderMåned",
          placeholder: "mm",
          type: "number",
          required: true,
        },
        {
          id: "entry.1433477318_year",
          name: "AlderÅr",
          placeholder: "yyyy",
          type: "number",
          required: true,
        },
        {
          id: "entry.979625905",
          name: "Telefonnummer",
          placeholder: "Telefonnummer",
          type: "number",
          required: true,
        },
        {
          id: "entry.988013385",
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
        "https://docs.google.com/forms/u/3/d/e/1FAIpQLSerL_wsSXphDQfwW-WZY9al7T8Ply6C9yRb-DSES4a2Ds0dfA/formResponse",
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
    daap: {
      formName: "Dåp",
      googleFormUrl:
        "https://docs.google.com/forms/u/3/d/e/1FAIpQLSdWBP7yJddqmqgW5XaienN-GCqKIykNCsh3NPig-9UnIFVbmw/formResponse",
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
    dyperekursNewCreation: {
      formName: "Dypere kurs",
      googleFormUrl:
        "https://docs.google.com/forms/u/3/d/e/1FAIpQLSdGOqk7phPIgYcBofhdMXsoWA_bJA0iqQNfGf2RnFUjBAXphw/formResponse",
      fields: [
        {
          id: "entry.2078734039",
          name: "ForOgEtternavn",
          placeholder: "For og Etternavn",
          type: "text",
          required: true,
        },
        {
          id: "entry.1416999356_day",
          name: "AlderDag",
          placeholder: "dd",
          type: "number",
          required: true,
        },
        {
          id: "entry.1416999356_month",
          name: "AlderMåned",
          placeholder: "mm",
          type: "number",
          required: true,
        },
        {
          id: "entry.1416999356_year",
          name: "AlderÅr",
          placeholder: "yyyy",
          type: "number",
          required: true,
        },
        {
          id: "entry.890976299",
          name: "Telefonnummer",
          placeholder: "Telefonnummer",
          type: "number",
          required: true,
        },
        {
          id: "entry.1514091616",
          name: "FacebookNavn",
          placeholder: "Messenger navn (facebook)",
          type: "text",
          required: true,
        },
      ],
    },
    bibelstudieNewCreation: {
      formName: "Bibelstudie",
      googleFormUrl:
        "https://docs.google.com/forms/u/3/d/e/1FAIpQLSeqfFJm6cBVCvVCQV8hIdk-gcRCsrmLJexgZJeiqZVg00mEqQ/formResponse",
      fields: [
        {
          id: "entry.2087534842",
          name: "ForOgEtternavn",
          placeholder: "For og Etternavn",
          type: "text",
          required: true,
        },
        {
          id: "entry.1267433252_day",
          name: "AlderDag",
          placeholder: "dd",
          type: "number",
          required: true,
        },
        {
          id: "entry.1267433252_month",
          name: "AlderMåned",
          placeholder: "mm",
          type: "number",
          required: true,
        },
        {
          id: "entry.1267433252_year",
          name: "AlderÅr",
          placeholder: "yyyy",
          type: "number",
          required: true,
        },
        {
          id: "entry.939039993",
          name: "Telefonnummer",
          placeholder: "Telefonnummer",
          type: "number",
          required: true,
        },
        {
          id: "entry.1835300609",
          name: "FacebookNavn",
          placeholder: "Messenger navn (facebook)",
          type: "text",
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
          alert("Form submitted successfully");
        })
        .catch((error) => {
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
      <Marquee />
      <NcNav   />
      <div className="px-[35px]">
        <a href="/NewCreationForms">
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
            {formConfig.formName ? formConfig.formName : "Fan ikke form"}
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
      <NcFooter />
    </main>
  );
}
