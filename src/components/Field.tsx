// @ts-nocheck
import { React, useState, useEffect } from "react";
import { TextField } from "@contentful/forma-36-react-components";
import { FieldExtensionSDK } from "@contentful/app-sdk";
interface FieldProps {
  sdk: FieldExtensionSDK;
}
const Field = (props: FieldProps) => {
  const [field, setField] = useState({ title: "", description: "" });

  useEffect(() => {
    props.sdk.window.startAutoResizer();
    props.sdk.field.onValueChanged((value) => setField(value));
  }, []);

  return (
    <section>
      <TextField
        labelText={"Title"}
        onChange={(e) =>
          props.sdk.field.setValue({
            ...props.sdk.field.getValue(),
            title: e.target.value,
          })
        }
        value={field.title}
        id="title"
      />
      <TextField
        labelText={"Description"}
        onChange={(e) =>
          props.sdk.field.setValue({
            ...props.sdk.field.getValue(),
            description: e.target.value,
          })
        }
        value={field.description}
        id="description"
      />
    </section>
  );
};
export default Field;
