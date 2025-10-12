import { useForm } from "react-hook-form";
import TextInput from "../../ui/form/TextInput";
import RHFSelect from "../../ui/form/RHFSelect";
import { useState } from "react";
import TagsInput from "../../ui/form/TagsInput";
import DatePickerField from "../../ui/form/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import LoadingIndicator from "../../ui/LoadingIndicator";
import toast from "react-hot-toast";
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  // ---
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);

  const {
    title,
    description,
    budget,
    category,
    deadline: editDeadline,
    tags: editTags,
  } = projectToEdit;

  let editValues = {};

  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      category: category?._id,
      deadline: editDeadline ? new Date(editDeadline) : null,
      tags: editTags || [],
    };
  }

  const [tags, setTags] = useState(editTags || []);
  const [deadline, setDeadline] = useState(editDeadline || "");

  const { categories } = useCategories();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { ...editValues } });

  const { isCreating, createProject } = useCreateProject();
  const { isEditing, editProject } = useEditProject();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(deadline).toISOString(),
      tags,
    };

    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
        },
        onError: (err) => {
          toast.error(
            err.response?.data?.message || "خطایی رخ داده است"
          );
        },
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 grid grid-cols-2 gap-6 max-sm:grid-cols-1"
    >
      <TextInput
        name="title"
        label="عنوان پروژه"
        isNum={false}
        placeHolder={"مثال» طراحی سایت فروشگاهی"}
        register={register}
        validationSchema={{
          minLength: {
            value: 5,
            message: "عنوان پروژه باید حداقل 5 کاراکتر باشد",
          },
          required: "عنوان پروژه ضروری است",
        }}
        errors={errors}
      />
      <TextInput
        name="description"
        label="توضیحات"
        isNum={false}
        placeHolder=""
        register={register}
        validationSchema={{
          minLength: {
            value: 10,
            message: "توضیحات باید حداقل 10 کاراکتر باشد",
          },
          required: "توضیحات ضروری است",
        }}
        errors={errors}
      />

      <TextInput
        name="budget"
        label="بودجه"
        isNum={false}
        placeHolder=""
        register={register}
        validationSchema={{
          required: "بودجه ضروری است",
        }}
        errors={errors}
      />

      <RHFSelect
        register={register}
        label="دسته‌بندی"
        name="category"
        required
        options={categories}
      />

      <DatePickerField
        date={deadline}
        setDate={setDeadline}
        label="ددلاین"
      />

      <div className="sm:col-span-2">
        <label>برچسب‌ها</label>
        <TagsInput tags={tags} setTags={setTags} />
      </div>

      {isCreating || isEditing ? (
        <div className="w-full sm:col-span-2">
          <LoadingIndicator />
        </div>
      ) : (
        <button
          type="submit"
          className="btn btn--primary  w-full sm:col-span-2"
        >
          {isEditSession ? "ویرایش پروژه" : "ایجاد پروژه"}
        </button>
      )}
    </form>
  );
}

export default CreateProjectForm;
