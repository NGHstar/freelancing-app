import TextInput from "../../ui/form/TextInput";
import { useMutation } from "@tanstack/react-query";
import { profileComplete } from "../../services/authService";
import toast from "react-hot-toast";
import LoadingIndicator from "../../ui/LoadingIndicator";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../ui/form/RadioInputGroup";

function ProfileCompleteForm() {
  // ---
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: profileComplete,
  });

  const handleProfileComplete = async (data) => {
    // ---
    try {
      const { user, message } = await mutateAsync(data);
      toast.success(message);
      // check user status
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "ℹ️" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner-panel");
      if (user.role === "FREELANCER")
        return navigate("/freelancer-panel");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <form
        className="space-y-8"
        onSubmit={handleSubmit(handleProfileComplete)}
      >
        <TextInput
          label="نام و نام خانوادگی"
          name="name"
          register={register}
          validationSchema={{
            required: "این فیلد ضروری است",
            minLength: {
              value: 5,
              message: "حداقل ۵ کاراکتر باید وارد کنید",
            },
          }}
          errors={errors}
        />
        <TextInput
          label="ایمیل"
          name="email"
          register={register}
          validationSchema={{
            required: "ایمیل ضروری است",
            pattern: {
              value:
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "ایمیل نا معتبر است",
            },
          }}
          errors={errors}
        />
        <RadioInputGroup
          errors={errors}
          register={register}
          configs={{
            name: "role",
            validationSchema: {
              required: "انتخاب نقش ضروری است",
            },
            options: [
              {
                value: "OWNER",
                label: "کارفرما",
              },
              {
                value: "FREELANCER",
                label: "فریلنسر",
              },
            ],
          }}
          watch={watch}
        />
        {isPending ? (
          <LoadingIndicator />
        ) : (
          <button className="btn btn--primary w-full">تایید</button>
        )}
      </form>
    </div>
  );
}

export default ProfileCompleteForm;
