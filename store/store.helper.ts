import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { FirebaseError } from "firebase/app";

export class StoreHelper {
  static isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
    return typeof error === "object" && error != null && "status" in error;
  }

  static isErrorWithMessage(error: unknown): error is { message: string } {
    return (
      typeof error === "object" &&
      error != null &&
      "message" in error &&
      typeof (error as any).message === "string"
    );
  }

  static transformResponse = (response: unknown, responseOK = false) => {
    return responseOK
      ? { data: response }
      : {
          error:
            response instanceof FirebaseError
              ? response.code
              : typeof response === "string"
              ? response
              : JSON.stringify(response),
        };
  };

  static fileUploadQuery(url: string, value: string, name = "image") {
    const body = new FormData();
    body.append(name, value);
    return {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      url,
      body,
    };
  }
}
