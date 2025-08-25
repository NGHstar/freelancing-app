import TextInput from "../../ui/TextInput";
import LoadingIndicator from "../../ui/LoadingIndicator";

function SendOTPForm({
  phoneNumber,
  onChange,
  onSubmit,
  isSendingOtp,
}) {
  return (
    <div>
      <form className="space-y-5" onSubmit={onSubmit}>
        <TextInput
          label="شماره موبایل"
          name="phoneNumber"
          placeHolder="09---------"
          value={phoneNumber}
          onChange={onChange}
          isNum={true}
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
