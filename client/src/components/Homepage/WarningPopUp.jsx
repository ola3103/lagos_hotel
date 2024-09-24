const WarningPopUp = ({ setPopUpState }) => {
  const handleCloseWarningPopUp = () => {
    setPopUpState(false)
  }
  return (
    <div className="warning_popup_box">
      <p className="warning_popup_box_text_1">Oops !</p>
      <p className="warning_popup_box_text_2">
        Check-out date must be later than check-in date
      </p>
      <button
        onClick={handleCloseWarningPopUp}
        className="close_warning_popup_box general_btn_style"
      >
        <p>GO BACK</p>
      </button>
    </div>
  )
}

export default WarningPopUp
