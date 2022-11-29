import { renderToString } from "react-dom/server";

export async function SendEmail() {
  const content = renderToString(
    <>
      <div>
        <p>This is some email content</p>
      </div>
      <div>
        <p>This is some more email content</p>
      </div>
    </>
  );
  await send(content);
}

async function send(content: string) {
  // We would use a service like sendGrid or mailChimp here
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(content);
}
