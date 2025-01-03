import { useLanguage } from "@/app/context/LanguageContext";
import FormGenerator from "@/components/global/form-genarator";
import Loader from "@/components/global/loader";
import { Button } from "@/components/ui/button";
import { useCreateWorkspace } from "@/hooks/useCreateWorkspace";
import React from "react";

type Props = {};

const WorkspaceForm = (props: Props) => {
  const { errors, isPending, onFormSubmit, register } = useCreateWorkspace();
  const { language } = useLanguage();
  return (
    <form onSubmit={onFormSubmit} className="flex flex-col gap-y-3">
      <FormGenerator
        register={register}
        name="name"
        placeholder={
          language === "vi" ? "Tên không gian làm việc" : "Workspace Name"
        }
        label={language === "vi" ? "Tên" : "Name"}
        errors={errors}
        inputType="input"
        type="text"
      />
      <Button
        className="text-sm w-full mt-2"
        type="submit"
        disabled={isPending}
      >
        <Loader state={isPending}>
          {language === "vi" ? "Tạo mới" : "Create workspace"}
        </Loader>
      </Button>
    </form>
  );
};

export default WorkspaceForm;
