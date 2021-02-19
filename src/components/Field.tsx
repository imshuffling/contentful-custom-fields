// @ts-nocheck
import { React, useState, useEffect } from "react";
import {
  Textarea,
  TextField,
  Form,
} from "@contentful/forma-36-react-components";
import { FieldExtensionSDK } from "@contentful/app-sdk";
interface FieldProps {
  sdk: FieldExtensionSDK;
}
const Field = (props: FieldProps) => {
  const [field, setField] = useState(
    props.sdk.field.getValue() ?? { title: "", description: "" }
  );

  useEffect(() => {
    props.sdk.window.startAutoResizer();
  });

  const handleDescriptionChange = (e) => {
    const value = {
      ...field,
      description: e.target.value,
    };
    props.sdk.field.setValue(value);
    setField(value);
  };

  const handleTitleChange = (e) => {
    const value = {
      ...field,
      title: e.target.value,
    };
    props.sdk.field.setValue(value);
    setField(value);
  };

  return (
    <section>
      <Form>
        <TextField
          onChange={handleTitleChange}
          textInputProps={{ placeholder: "Title" }}
          value={field.title}
          id="title"
        />
        <Textarea
          placeholder="Description"
          onChange={handleDescriptionChange}
          value={field.description}
          id="description"
        />
      </Form>
    </section>
  );
};
export default Field;
