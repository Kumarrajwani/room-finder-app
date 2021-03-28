import { User } from "../helpers/dbconnect.ts";

export const addUser = async (context: any) => {
  try {
    let body: any = await context.request.body();
    const { name, pno, email } = body.value;

    const id = await User.insertOne({
      name: name,
      pno: pno,
      email: email,
    });
    context.response.body = id;
    context.response.status = 201;
  } catch (e) {
    context.response.body = null;
    context.response.status = 500;
    console.log(e);
  }
};
