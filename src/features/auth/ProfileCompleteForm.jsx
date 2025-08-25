import { useState } from "react";
import TextInput from "../../ui/TextInput";
import Radio from "../../ui/Radio";
import { useMutation } from "@tanstack/react-query";
import { profileComplete } from "../../services/authService";
import toast from "react-hot-toast";
import LoadingIndicator from "../../ui/LoadingIndicator";
import { useNavigate } from "react-router-dom";

function ProfileCompleteForm() {
  // ---
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState();

  const navigate = useNavigate();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: profileComplete,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({
        name,
        email,
        role,
      });

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
      <form className="space-y-8" onSubmit={handleSubmit}>
        <TextInput
          label="نام کامل"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <TextInput
          label="ایمیل"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div className="flex items-center justify-center gap-x-12">
          <Radio
            label="کارفرما"
            value="OWNER"
            onChange={(e) => {
              setRole(e.target.value);
            }}
            checked={role === "OWNER"}
            id="OWNER"
            name="role"
          />
          <Radio
            label="فریلنسر"
            value="FREELANCER"
            onChange={(e) => {
              setRole(e.target.value);
            }}
            checked={role === "FREELANCER"}
            id="FREELANCER"
            name="role"
          />
        </div>
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
