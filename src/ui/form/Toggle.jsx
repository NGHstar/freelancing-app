import { Field, Label, Switch } from "@headlessui/react";

function Toggle({ label, enabled, toggleHandler }) {
  return (
    <Field>
      <Label>{label}</Label>
      <Switch
        checked={enabled}
        onChange={toggleHandler}
        className="group inline-flex h-6 w-11 mr-2 items-center rounded-full bg-chips-gray transition data-checked:bg-msg"
      >
        <span className="size-4 -translate-x-1 rounded-full bg-white transition group-data-checked:-translate-x-6" />
      </Switch>
    </Field>
  );
}

export default Toggle;
