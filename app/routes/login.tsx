import type { ActionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { badRequest } from "~/data/request.server";
import {
  valiatePassword,
  valiatePhone,
  validateEmail,
} from "~/data/validation.server";

export default function LoginPage() {
  return (
    <>
      <h1>Login Page</h1>
      <Form method="post">
        <p>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue="aniket@example.com"
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            defaultValue="11111111"
          />
        </p>
        <p>
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            id="phone"
            name="phone"
            defaultValue="1234512345"
          />
        </p>
        <button type="submit">Add Member</button>
      </Form>
    </>
  );
}

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  const phone = form.get("phone");

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof phone !== "string"
  ) {
    badRequest({
      fieldErrors: null,
      fields: null,
      formError: "Form not submitted correctly.",
    });
  }

  const fields = { email, password, phone };
  const fieldErrors = {
    email: validateEmail(email),
    password: valiatePassword(password),
    phone: valiatePhone(phone),
  };
  console.log("form", fieldErrors);
  return null;
};
