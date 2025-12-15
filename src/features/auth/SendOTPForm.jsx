import SiteSimpleHeader from "../../pages/Public/SiteSimpleHeader";
import TextInput from "../../ui/form/TextInput";
import LoadingIndicator from "../../ui/LoadingIndicator";

function SendOTPForm({ register, onSubmit, isSendingOtp, errors }) {
  return (
    <div>
      <form className="space-y-5" onSubmit={onSubmit}>
        <TextInput
          label="شماره موبایل"
          name="phoneNumber"
          placeHolder="09---------"
          register={register}
          isNum={true}
          validationSchema={{
            required: "شماره موبایل ضروری است",
          }}
          errors={errors}
        />
        <span className="block mb-3 dark:text-white/50 text-black/50">
          حساب ادمین: 09381986445
        </span>
        {!isSendingOtp ? (
          <center>
            <button type="submit" className="btn btn--primary">
              ارسال کد تایید
            </button>
          </center>
        ) : (
          <LoadingIndicator size="small" mt="mt-8" />
        )}
      </form>
    </div>
  );
}

export default SendOTPForm;
