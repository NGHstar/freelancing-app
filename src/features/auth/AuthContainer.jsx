import { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOTP } from "../../services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useUser from "./useUser";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "../../ui/LoadingIndicator";
import SiteSimpleHeader from "../../pages/Public/SiteSimpleHeader";

function AuthContainer() {
  // ---
  const [otpHolder, setOtpHolder] = useState("");

  const [step, setStep] = useState(1);

  const { user, isLoading } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.role === "FREELANCER")
      navigate("/freelancer", { replace: true });
    if (user && user.role === "ADMIN")
      navigate("/admin", { replace: true });
    if (user && user.role === "OWNER")
      navigate("/owner", { replace: true });
  }, [navigate, user]);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOTP,
  });

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      toast.success("کد تایید با موفقیت ارسال شد.");
      console.log(message);
      setStep(2);
      setTimeout(() => {
        setOtpHolder(message.substr(message?.length - 6));
      }, 1200);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendingOtp={isSendingOtp}
            onSubmit={handleSubmit(sendOtpHandler)}
            setStep={setStep}
            register={register}
            errors={errors}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={getValues("phoneNumber")}
            setStep={setStep}
            onResendOtp={handleSubmit(sendOtpHandler)}
            otpResponse={otpResponse}
            otpInit={otpHolder}
          />
        );
      default:
        throw new Error("wrong step number");
    }
  };

  if (isLoading) return <LoadingIndicator mt="mt-32" />;

  return (
    <div className="w-[calc(100%-2rem)] sm:max-w-sm mx-auto mt-4 space-y-12">
      <SiteSimpleHeader />
      {renderStep()}
    </div>
  );
}

export default AuthContainer;
