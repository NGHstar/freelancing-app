import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import OTPInput from "react-otp-input";
import { checkOTP } from "../../services/authService";
import LoadingIndicator from "../../ui/LoadingIndicator";
import { useNavigate } from "react-router-dom";
import { HiArrowCircleRight, HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";

const RESEND_TIME = 5; // seconds

function CheckOTPForm({
  phoneNumber,
  setStep,
  onResendOtp,
  otpResponse,
}) {
  // ---
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOTP,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({
        phoneNumber,
        otp,
      });
      toast.success(message);

      if (!user.isActive) return navigate("/profile-complete");

      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "ℹ️" });
        return;
      }

      if (user.role === "OWNER") return navigate("/owner/dashboard");
      if (user.role === "FREELANCER")
        return navigate("/freelancer/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <form
        action=""
        className="flex flex-col justify-center items-start"
        onSubmit={handleSubmit}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            setStep(1);
          }}
          className="cursor-pointer "
        >
          <HiArrowRight className="w-6 h-6 text-blue hover:text-blue/80 translate-x-1 mb-4" />
        </button>
        {otpResponse && (
          <p className="text-secondary mb-12">
            {`کد تایید به شماره ${otpResponse.phoneNumber} ارسال شد`}

            <button onClick={() => setStep(1)}>
              <CiEdit className="text-blue w-6 h-6 translate-y-2 mr-1 cursor-pointer hover:text-blue/80" />
            </button>
          </p>
        )}
        <p className="font-bold text-secondary-400 text-center mb-4 ml-auto mr-auto">
          کد تایید را وارد کنید
        </p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderInput={(props) => <input {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center ml-auto mr-auto"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem 0.3rem 0.2rem",
            border: "1px solid var(--color-border)",
            backgroundColor: "var(--color-card)",
            borderRadius: "10px",
          }}
        />
        {isPending ? (
          <LoadingIndicator mt="mt-10" />
        ) : (
          <button
            className="btn btn--primary mt-8 mx-auto"
            type="submit"
          >
            تایید
          </button>
        )}
        <div className="mt-8 ml-auto mr-auto">
          {time > 0 ? (
            <p className="text-secondary-400">
              {time} ثانیه تا ارسال مجدد کد
            </p>
          ) : (
            <p
              onClick={onResendOtp}
              className="text-blue cursor-pointer hover:text-blue/80 transition duration-200"
            >
              ارسال مجدد کد تایید
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default CheckOTPForm;
