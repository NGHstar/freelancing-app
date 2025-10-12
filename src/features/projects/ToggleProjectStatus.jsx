import useToggleProjectStatus from "./useToggleProjectStatus";
import LoadingIndicator from "../../ui/LoadingIndicator";
import Toggle from "../../ui/form/Toggle";

function ToggleProjectStatus({ project }) {
  const { isToggling, toggleProjectStatus } =
    useToggleProjectStatus();

  const toggleHandler = () => {
    const status = project.status === "OPEN" ? "CLOSED" : "OPEN";
    toggleProjectStatus({ id: project._id, data: { status } });
  };

  return (
    <div className="w-[5rem]">
      {isToggling ? (
        <LoadingIndicator size="small" />
      ) : (
        <Toggle
          enabled={project.status === "OPEN" ? true : false}
          label={project.status === "OPEN" ? "باز" : "بسته"}
          toggleHandler={toggleHandler}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
