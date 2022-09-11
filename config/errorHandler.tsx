import { toast } from "react-toastify";

export default function errorHandler(error: any) {
  if (error) {
    let message;

    if (error.response) {
      message = error.response.data.msg;

      if (typeof message === "string") toast.error(message);

      return error;
    }
  }
}
