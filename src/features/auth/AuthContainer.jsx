import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOTP } from "../../services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function AuthContainer() {
  // ---
  const [step, setStep] = useState(1);

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
    } catch (error) {
      toast.error(error.response.data.message);
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
            onResendOtp={sendOtpHandler}
            otpResponse={otpResponse}
          />
        );
      default:
        throw new Error("wrong step number");
    }
  };

  return (
    <div className="w-full sm:max-w-sm m-auto mt-16">
      {renderStep()}
    </div>
  );
}

export default AuthContainer;
