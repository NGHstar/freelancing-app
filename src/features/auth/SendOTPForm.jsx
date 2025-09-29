import TextInput from "../../ui/TextInput";
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

        {!isSendingOtp ? (
          <center>
            <button type="submit" className="btn btn--primary">
              ارسال کد تایید
            </button>
          </center>
        ) : (
          <LoadingIndicator />
        )}
      </form>
    </div>
  );
}

export default SendOTPForm;
