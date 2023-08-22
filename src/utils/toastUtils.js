import { toast } from "react-toastify";

export const toastSuccess = (message) => {
    // Show a success toast when the form is submitted successfully
    toast.success(message, {
      position: "top-right", // Position of the toast on the screen
      autoClose: 3000, // Auto close the toast after 3 seconds (ms)
      hideProgressBar: false, // Show/hide the progress bar
      closeOnClick: true, // Close the toast when clicked
      pauseOnHover: true, // Pause the auto-close timer on hover
      draggable: true, // Allow the user to drag the toast
      progress: undefined, // Progress bar percentage (default: undefined)
    });
  };

export  const toastError = (message) => {
    // Show a success toast when the form is submitted successfully
    toast.error(message, {
      position: "top-right", // Position of the toast on the screen
      autoClose: 3000, // Auto close the toast after 3 seconds (ms)
      hideProgressBar: false, // Show/hide the progress bar
      closeOnClick: true, // Close the toast when clicked
      pauseOnHover: true, // Pause the auto-close timer on hover
      draggable: true, // Allow the user to drag the toast
      progress: undefined, // Progress bar percentage (default: undefined)
    });
  };
