/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"
import { FormFieldType } from "./forms/PatientForm";

interface CustomFormProps {
    control: Control<any>,
    fieldType: FormFieldType,
    name: string,
    label?: string,
    placeholder?: string,
    description?: string,
    iconSrc?: string,
    iconAlt?: string,
    options?: string[],
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode,
}

const RenderInput = ({ field, props }: { field: any; props: CustomFormProps }) => {
  return (
    <Input
      type="text"
      placeholder="John Doe"
      className="input"
    />
  )
}

const CustomFormField = (props: CustomFormProps) => {
  const { control, fieldType, name, label } = props;

  return (
    <div>
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
            <FormItem className="flex-1">
                {fieldType !== FormFieldType.CHECKBOX && label && (
                  <FormLabel htmlFor={name}>{label}</FormLabel>
                )}

                <RenderInput field={field} props={props} />

                <FormMessage className="shad-error" error={field.error} />
            </FormItem>
            )}
        />
    </div>
  )
}

export default CustomFormField;